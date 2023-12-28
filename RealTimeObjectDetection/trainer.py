import cv2
import os
import time
import uuid

IMAGES_PATH = "Tensorflow/workspace/images"

labels = []
for x in range(0,26):
    labels.append(chr(ord("a") + x))

cap = cv2.VideoCapture(0)
for label in labels:
    print("Images for " + label)
    count = 0
    while True:
        r, frame = cap.read()
        cv2.imshow("frame", frame)
        key = cv2.waitKey(1) & 0xFF
        if key == ord("q"):
            break
        elif key == ord("w"):
            imgname = os.path.join(IMAGES_PATH, label+"."+"{}.jpg".format(str(uuid.uuid1())))
            cv2.imwrite(imgname, frame)
            count+=1
            print(str(count))

cap.release()