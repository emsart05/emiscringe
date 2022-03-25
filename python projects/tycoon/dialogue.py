from classes import *
from obj import *
from functions import *
import time


# Game Start
def jobChoice():
    global playerJob, thiefLevel, playerName, playerThey
    # Job Choice
    print(colored('Which job would you like? (it can be changed later): ', 'yellow'))
    print(colored('A. Grocery Store \nB. Fast Food \nC. Thrift Store \nD. Waiter \nE. Thief', 'cyan'))
    while True:
        playerJob = input('Type here: ')
        if 'a' in playerJob.lower():
            playerJob = 'Kroger'
            break
        elif 'b' in playerJob.lower():
            playerJob = 'Wendys'
            break
        elif 'c' in playerJob.lower():
            playerJob = 'Goodwill'
            break
        elif 'd' in playerJob.lower():
            playerJob = 'Tumbleweed'
            break
        elif 'e' in playerJob.lower():
            print('\n' + playerName + ' chose to not get a job and steal everything ' + playerThey + ' needs.')
            playerJob = 'Thief'
            thiefLevel = 1
            thread8.start()
            input()
            print('You will start out just shoplifting essensial items, such as food and water.')
            input()
            print('This means you wont gain any coins yet.')
            input()
            print('As you keep stealing, you will start stealing more and more advanced items.')
            input()
            print('Once you become a level 3 theif, you will gain the ability to pick-pocket.')
            input()
            print('This means you will be able to steal money and gain coins.')
            input()
            break
        else:
            print(colored('Please enter a valid response.', 'red'))

    if playerJob != 'Thief':
        thread9.start()
        print(playerName + ' chose to work at ' + playerJob + '.')
        input()
        print('You start out making 5 coins on the hour, 8 hours 5 days a week.')
        input()
        print('This makes 200 coins per week.')
        input()
        print('As you keep working at ' + playerJob + ', you will periodically recieve a raise in hourly pay.')
        input()


def commandTeach():
    global command, thread5, thread6, thread7
    print("To get a list of commands, type 'help'.")
    while True:
        command = input('Command: ')
        if 'help' in command.lower():
            help()
            break
        else:
            print(colored('Please enter "help".', 'red'))
    thread5.start()
    thread6.start()
    thread7.start()



