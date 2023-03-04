import random

winners_list = []

x=0
while x < 5:
    name = input("Enter your name: ")
    winners_list.append(name)
    x+=1

print(random.sample(winners_list,1))