from termcolor import *
from colorama import *
from func import *

init()

intro()

# Gameplay loop
while True:
    command = input('Command: ')
    if 'help' in command.lower():
        helpp()
    elif 'chat' in command.lower():
        chat()
    else:
        print(colored('Please enter a valid command.', 'red'))
