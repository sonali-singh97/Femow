'''
Python script to change the original image data from .pgm to .jpg.

'''


from PIL import Image
import PIL
import os
for filename in os.listdir("all-mias"):
    if filename.endswith(".pgm"):
        im = Image.open("all-mias\\" + filename)
        im.save("converted\\"+ filename[:6]+".jpg")