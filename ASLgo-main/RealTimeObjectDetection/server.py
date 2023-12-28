WORKSPACE_PATH = 'Tensorflow/workspace'
SCRIPTS_PATH = 'Tensorflow/scripts'
APIMODEL_PATH = 'Tensorflow/models'
ANNOTATION_PATH = WORKSPACE_PATH+'/annotations'
IMAGE_PATH = WORKSPACE_PATH+'/images'
MODEL_PATH = WORKSPACE_PATH+'/models'
PRETRAINED_MODEL_PATH = WORKSPACE_PATH+'/pre-trained-models'
CONFIG_PATH = MODEL_PATH+'/my_ssd_mobnet/pipeline.config'
CHECKPOINT_PATH = MODEL_PATH+'/my_ssd_mobnet/'

import tensorflow as tf
from object_detection.utils import config_util
from object_detection.protos import pipeline_pb2
from google.protobuf import text_format

import os
from object_detection.utils import label_map_util
from object_detection.utils import visualization_utils as viz_utils
from object_detection.builders import model_builder

# Load pipeline config and build a detection model
configs = config_util.get_configs_from_pipeline_file(CONFIG_PATH)
detection_model = model_builder.build(model_config=configs['model'], is_training=False)

# Restore checkpoint
ckpt = tf.compat.v2.train.Checkpoint(model=detection_model)
ckpt.restore(os.path.join(CHECKPOINT_PATH, 'ckpt-6')).expect_partial()

@tf.function
def detect_fn(image):
    image, shapes = detection_model.preprocess(image)
    prediction_dict = detection_model.predict(image, shapes)
    detections = detection_model.postprocess(prediction_dict, shapes)
    return detections
    
import cv2 
import numpy as np
import base64
from socket import *

category_index = label_map_util.create_category_index_from_labelmap(ANNOTATION_PATH+'/label_map.pbtxt')

server = socket()
server.bind(('', 10000))
server.listen(50)

def readbytes(c, a):
    out = bytearray(a)
    pos = 0
    while pos < a:
        read = c.recv_into(memoryview(out)[pos:])
        if read == 0:
            raise EOFError
        pos += read
    return out

def uritoimage(uri):
    print(uri)
    decoded = base64.b64decode(uri.split(",")[1])
    arr = np.fromstring(decoded, np.uint8)
    return cv2.imdecode(arr, cv2.IMREAD_COLOR)

while True: 
    client, addr = server.accept()
    lamount = int(bytes(readbytes(client, 1)).decode())
    amount = int(bytes(readbytes(client, lamount)).decode())
    frame = uritoimage(bytes(readbytes(client, amount)).decode())
    
    #ret, frame = cap.read()
    image_np = np.array(frame)
    
    input_tensor = tf.convert_to_tensor(np.expand_dims(image_np, 0), dtype=tf.float32)
    detections = detect_fn(input_tensor)
    
    num_detections = int(detections.pop('num_detections'))
    detections = {key: value[0, :num_detections].numpy()
                  for key, value in detections.items()}
    detections['num_detections'] = num_detections

    # detection_classes should be ints.
    detections['detection_classes'] = detections['detection_classes'].astype(np.int64)

    label_id_offset = 1
    image_np_with_detections = image_np.copy()

    """
    viz_utils.visualize_boxes_and_labels_on_image_array(
                image_np_with_detections,
                detections['detection_boxes'],
                detections['detection_classes']+label_id_offset,
                detections['detection_scores'],
                category_index,
                use_normalized_coordinates=True,
                max_boxes_to_draw=5,
                min_score_thresh=.5,
                agnostic_mode=False)
    """
    
    print(detections['detection_classes'])
    print(detections['detection_scores'])
   # cv2.imshow('object detection',  cv2.resize(image_np_with_detections, (800, 600)))
    client.send(str(detections['detection_classes'][0:3]).encode())
    client.send(str(detections['detection_scores'][0:3]).encode())
    client.send(str(detections['detection_boxes'][0:3]).encode())
    client.close()