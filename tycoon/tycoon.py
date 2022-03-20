import time
import random
from termcolor import colored
from colorama import init
from obj import *
from classes import *
from functions import *
import threading
import winsound

# Trying to make a console-based tycoon game with python.

init()

# Game explanation

print('\nThis is a tycoon-like game where you will start out in a small apartment with a low-income job.\n')
print('You can make decisions and earn different items, achievements, opportunities, and lots of other stuff.\n')
print(colored('Press enter to read the next text (throughout the entire game)\n', 'yellow'))
input()

# Dialogue Start
print('\n' * 75)
time.sleep(2)
print('Hello, ' + playerName + ". In this game, you're starting out your life in a new town.\n")
input()
print("You will start out with " + str(player1.coins) + " coins.\n")
input()
print('What would you like your starting job to be? \n(Type the letter that corresponds with your answer)\n')
print(colored('KEEP IN MIND THAT THIS CAN BE CHANGED LATER ON', 'green'))
time.sleep(0.5)
print(colored('A. Grocery Store \nB. Fast Food Resturaunt \nC. Thrift Store \nD. Waiter/Waitress \nE. Thief', 'cyan'))
time.sleep(0.5)

# Gameplay loop
while True:
    command = input('Command: ')
    if 'help' in command.lower():
        help()
    elif 'work' in command.lower():
        work()
    elif 'shop' in command.lower():
        shop()
    elif 'eat' in command.lower():
        eat()
    elif 'study' in command.lower():
        study()
    elif 'stats' in command.lower():
        playerStats()
    elif 'thief' in command.lower():
        thiefStats()
