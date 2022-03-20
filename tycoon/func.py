from termcolor import *
from colorama import *
from things import *
import threading
import time

init()

# Game start
def intro():
    global playerName, playerAge, gender, help

    # Basic info
    playerName = input('Input your first name: ')
    playerAge = input('Input your age: ')
    time.sleep(0.5)
    print(colored('What is your gender?', 'green'))
    time.sleep(0.5)
    print(colored('Please input M (male), F (female), O (other)', 'green'))
    
    # Gender
    while True:
        gender = input('>>> ')
        if 'm' in gender.lower():
            gender = 'Male'
            break
        elif 'f' in gender.lower():
            gender = 'Female'
            break
        elif 'o' in gender.lower():
            break
        else: 
            print(colored('Please enter a valid letter.', 'red'))
        time.sleep(0.5)
    
    print(colored('Quick Tutorial:', 'green'))
    input()
    print(colored("Type 'help' to get a list of commands.", 'yellow'))
    
    # Learn commands
    while True:
        help = input('>>> ')
        if 'help' in help.lower():
            helpp()
            break
        else:
            print(colored("Please enter 'help'.", 'red'))

    print(colored("Type 'chat' to talk to the in-game AI.", 'yellow'))

    while True:
        help = input('>>> ')
        if 'chat' in help.lower():
            chat1()
            break
        else:
            print(colored("Please enter 'chat'.", 'red'))

    print(colored("That's it, you can find your way through the commands.", 'green'))


# Main Commands
def helpp():
    print(colored("'help': Shows a full list of commands.", 'cyan'))
    print(colored("'chat': Lets you talk to the in-game AI.", 'cyan'))


def chat1():
    global playerName, botName, chatLog, playerChatName
    print(colored('BOT: Hello, ' + playerName + '!', 'magenta'))
    input()
    print(colored('BOT: I am your in-game AI friend!', 'magenta'))
    input()
    print(colored('What would you like my name to be?', 'magenta'))
    botName = input('>>> ')
    print(colored(botName + ': Cool, I really like that name.', 'magenta'))
    input()
    print(colored(botName + ': What would you like me to call you?', 'magenta'))
    playerChatName = input('>>> ')
    print(colored(botName + ': I will try to remember that.', 'magenta'))
    input()
    print(colored(botName + ': Now that you have ran the chat command for the first time,', 'magenta'))
    print(colored('you can run it again to have a conversation with me!', 'magenta'))
    input()
    print(colored(botName + ": Type 'leave' to exit the chat.", 'magenta'))


def chat():
    global playerName, botName, chatLog, playerChatName
    print(colored(botName + ': Hello, ' + playerChatName + '.', 'magenta'))

    # Chat
    while True:
        chatLog = input('>>> ')
        if 'hello' in chatLog.lower():
            hello()
        elif 'do you know my real name' in chatLog.lower():
            doYouKnowMyName()
        elif 'leave' in chatLog.lower():
            break
        else:
            print(colored(botName + ': Sorry, I do not understand.', 'magenta'))



# Bot Commands
def hello():
    global botName, playerChatName
    print(colored(botName + ': How are you doing, ' + playerChatName + '?', 'magenta'))


def doYouKnowMyName():
    global botName, playerChatName, playerName
    print(colored(botName + ': Yes, I do. Your real name is ' + playerName + '.', 'magenta'))


