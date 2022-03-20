from functions import *
from termcolor import *
from colorama import *

init()

intro()

jobChoice()

commandTeach()

# Gameplay loop
while True:
    command = input('Command: ')
    if 'assist' in command.lower():
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
    else:
        print(colored('Please enter a valid command.', 'red'))
