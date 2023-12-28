import cv2
import os
import time
import uuid

IMAGES_PATH = "Tensorflow/workspace/images"

labels = ["hello", "thanks", "yes", "no", "book"]
number_of_images = 15

for label in labels:
    cap = cv2.VideoCapture(0)
    print("Images for " + label)
    time.sleep(5)
    for n in range(number_of_images):
        r, frame = cap.read()
        imgname = os.path.join(IMAGES_PATH, label+"."+"{}.jpg".format(str(uuid.uuid1())))
       # cv2.imwrite(imgname, frame)
        cv2.imshow("frame", frame)
        time.sleep(2)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    cap.release()