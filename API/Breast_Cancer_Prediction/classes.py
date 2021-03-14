'''
python script to separate the images belonging to different classes by reading from a text file 
provided in the data origin

'''

from shutil import copyfile
text = open("Info.txt").read()
lines = text.split("\n")
for i in lines:
    words = i.split(" ")
    if len(words)>3:
        if words[3]=="B":
            copyfile("converted\\"+ words[0]+".jpg" , "Benign\\"+words[0]+".jpg")
        elif words[3]=="M":
            copyfile("converted\\"+ words[0]+".jpg" , "Maligant\\"+words[0]+".jpg")