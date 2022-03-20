from colorama import init
from termcolor import colored
from obj import thiefLevel, runLoop, thiefXP, thiefItems1, thiefItems2, ramen, chips, chocoBar, iceCream, waterBottle, playerHunger, playerXP, playerWorkLevel, playerWorkXP, playerSalary, playerSavings, playerCareer, playerHours, playerCPH, playerDegree, playerEd, playerFood, playerGrade, playerLevel, wallet, walletArray, stolenWallet, canWork
from classes import *
import random
import winsound
import threading
import time

init()


# Player Name & Age
def intro():
    global player1, playerName, playerAge, gender, playerThey, playerTheir, playerTheirs, playerThem
    # First player input
    playerName = input('Enter your first name: ')
    time.sleep(0.5)
    playerAge = input('Enter your age: ')
    time.sleep(0.5)

    # Pronouns
    print(colored('Enter your gender: ', 'green'))

    while True:
        gender = input('Options: `Male`, `Female`, `Other`: ')
        if 'other' in gender.lower():
            print(colored('Enter your pronoun equivalent to They', 'green'))
            playerThey = input(colored('i.e. he, she, they: ', 'green'))
            time.sleep(1)
            print(colored('\nEnter your pronoun equivalent to Their', 'green'))
            playerTheir = input(colored('i.e. his, her, their: ', 'green'))
            time.sleep(1)
            print(colored('\nEnter your pronoun equivalent to Theirs', 'green'))
            playerTheirs = input(colored('i.e. his, hers, theirs: ', 'green'))
            time.sleep(1)
            print(colored('\nEnter your pronoun equivalent to Them', 'green'))
            playerThem = input(colored('i.e. him, her, them: ', 'green'))
            time.sleep(1)
            break
        elif 'female' in gender.lower():
            playerThey = 'she'
            playerTheir = 'her'
            playerTheirs = 'hers'
            playerThem = 'her'
            break
        elif 'male' in gender.lower():
            playerThey = 'he'
            playerTheir = 'his'
            playerTheirs = 'his'
            playerThem = 'him'
            break
        else:
            print(colored('Please enter a valid response.', 'red'))
    time.sleep(0.5)

# Game Start
def jobChoice():
    global playerJob, thiefLevel, playerName, playerThey, player1
    # Job Choice
    print(colored('Which job would you like? (it can be changed later): ', 'yellow'))
    print(colored('A. Grocery Store \nB. Fast Food \nC. Thrift Store \nD. Waiter \nE. Thief', 'cyan'))
    while True:
        playerJob = input('Type here: ')
        if 'a' in playerJob.lower():
            playerJob = 'Kroger'
            thread10.start()
            break
        elif 'b' in playerJob.lower():
            playerJob = 'Wendys'
            thread10.start()
            break
        elif 'c' in playerJob.lower():
            playerJob = 'Goodwill'
            thread10.start()
            break
        elif 'd' in playerJob.lower():
            playerJob = 'Tumbleweed'
            thread10.start()
            break
        elif 'e' in playerJob.lower():
            print('\n' + playerName + ' chose to not get a job and steal everything ' + playerThey + ' needs.')
            playerJob = 'Thief'
            thiefLevel = 1
            thread8.start()
            thread10.start()
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
    print("To get a list of commands, type 'assist'.")
    while True:
        command = input('Command: ')
        if 'assist' in command.lower():
            help()
            break
        else:
            print(colored('Please enter "help".', 'red'))
    thread5.start()
    thread6.start()
    thread7.start()



# Commands
def help():
    print(colored('Here is the complete list of commands for this game:\n', 'green'))
    print(colored("'assist': Shows a complete list of commands.\n", 'cyan'))
    print(colored(
        "'work': Lets you complete a shift at work. You will recieve your weekly pay every 5 times you use this command.\n",
        'cyan'))
    print(colored("'shop': Lets you buy food.\n", 'cyan'))
    print(colored(
        "'eat': Lets you eat some food. Raises your hunger points by 10. 100 hunger points means you are full. \n0 means you are starving.\n",
        'cyan'))
    print(colored(
        "'study': Lets you study for the college course you are taking. If you are not taking any college courses, you will \nbe asked if you want to enroll.\n",
        'cyan'))
    print(colored("'stats': Shows your current stats such as your coins, grade, job, etc.\n", 'cyan'))
    print(colored("'thief': Shows your thief stats if you are a thief.", 'cyan'))


def work():
    global playerSavings
    global playerHours
    global player1
    global playerJob
    global playerXP
    global thiefXP
    global playerFood
    global stolenItem
    global stolenWallet
    global walletArray
    global wallet
    global playerSalary
    global playerWorkXP
    global canWork
    playerSavings = playerSavings + playerSalary
    while True:
        if canWork == False:
            print(colored('You cannot work yet. Wait a little bit.', 'red'))
            break
        elif playerJob != 'Thief':
            print(colored('You worked one ' + str(playerHours) + ' hour shift at ' + playerJob + '.', 'green'))
            playerXP = playerXP + 1
            print(colored('This adds ' + str(
                playerHours * 5) + ' coins to your paycheck that you will recieve at the end of the week.', 'green'))
            playerSavings = playerSavings + (str(playerHours) * 5)
            canWork = False
            if playerSavings == 200:
                player1.coins = player1.coins + 200
                playerXP = playerXP + 10
                playerWorkXP = playerWorkXP + 10
            break
        elif playerJob == 'Thief':
            if thiefLevel >= 5:
                stolenWallet = random.choice(walletArray)
                print('You have stolen ' + str(stolenWallet) + ' coins.')
                player1.coins = player1.coins + stolenWallet
                playerXP = playerXP + 10
                thiefXP = thiefXP + 10
            elif thiefLevel >= 3:
                stolenWallet = random.choice(walletArray)
                print('You have stolen ' + str(stolenWallet) + ' coins.')
                player1.coins = player1.coins + stolenWallet
                playerXP = playerXP + 5
                thiefXP = thiefXP + 5
            elif thiefLevel == 2:
                stolenItem = random.choice(thiefItems2)
                print('You have stolen ' + stolenItem + '.')
                if stolenItem == ramen or chips or chocoBar or iceCream or waterBottle:
                    playerFood = playerFood + 1
                playerXP = playerXP + 5
                thiefXP = thiefXP + 5
            elif thiefLevel >= 1:
                stolenItem = random.choice(thiefItems1)
                print('You have stolen ' + stolenItem + '.')
                if stolenItem == ramen or chips or waterBottle:
                    playerFood = playerFood + 1
                playerXP = playerXP + 5
                thiefXP = thiefXP + 5
            canWork = False
            break
        else:
            print(colored('You do not currently have a job.', 'yellow'))
            break


def eat():
    global playerHunger
    global playerFood
    if playerFood >= 1 and playerHunger < 100:
        playerFood = playerFood - 1
        playerHunger = playerHunger + 10
        print(colored('You ate some food.', 'green'))
    elif playerHunger >= 100:
        print(colored('Your stomach is full.', 'yellow'))
    else:
        print(colored('You do not have any food.', 'red'))


def shop():
    global playerFood
    global buyFood
    global player1
    while True:
        print(colored('What would you like to buy?', 'green'))
        print(colored('A. Pack of ramen \nB. Canned corn \nC. Mac and cheese \nD. Hamburger Helper \nE. Salad', 'cyan'))
        print(colored("Type 'leave' to leave the shop.", 'magenta'))
        buyFood = input()
        if 'leave' in buyFood.lower():
            break
        elif 'a' in buyFood.lower():
            print(colored('You bought a pack of ramen for 10 coins.', 'green'))
            player1.coins = player1.coins - 10
            playerFood = playerFood + 1
        elif 'b' in buyFood.lower():
            print(colored('You bought canned corn for 10 coins.', 'green'))
            player1.coins = player1.coins - 10
            playerFood = playerFood + 1
        elif 'c' in buyFood.lower():
            print(colored('You bought mac and cheese for 10 coins.', 'green'))
            player1.coins = player1.coins - 10
            playerFood = playerFood + 1
        elif 'd' in buyFood.lower():
            print(colored('You bought hamburger helper for 10 coins.', 'green'))
            player1.coins = player1.coins - 10
            playerFood = playerFood + 1
        elif 'e' in buyFood.lower():
            print(colored('You bought a salad for 10 coins.', 'green'))
            player1.coins = player1.coins - 10
            playerFood = playerFood + 1
        else:
            print(colored('Please enter a valid response.', 'red'))


def study():
    while True:
        global playerEd
        global playerCareer
        global playerGrade
        global playerXP
        if playerEd == 'college':
            if playerGrade >= 100:
                print(colored('You have reached the max grade.', 'yellow'))
            elif playerGrade < 100:
                print(colored('You have just studied for your ' + playerCareer + ' course.', 'green'))
                print(colored('Your grade has risen by 5%.', 'green'))
                playerGrade = playerGrade + 5
                playerXP = playerXP + 5
            break
        else:
            print(colored('You are not enrolled in any schools, meaning you cannot use this function.', 'yellow'))
            input()
            print(colored('Would you like to enroll?', 'green'))
            time.sleep(0.5)

            while True:
                enroll = input('Yes or no: ')
                if 'yes' in enroll:
                    print(colored('What career path are you interested in?', 'green'))
                    time.sleep(0.5)
                    print(colored(
                        'A. Computer Science \nB. Cullinary Arts \nC. Medical School \nD. Mortuary Science \nE. Early Childhood Development \nF. Criminal Justice \nG. Visual Arts \nH. Law School \nI. Business and Finance \nJ. Agriculture',
                        'cyan'))

                    while True:
                        career = input()
                        if 'a' in career:  # Computer Science
                            playerCareer = 'Computer Science'
                            break
                        elif 'b' in career:  # Cullinary Arts
                            playerCareer = 'Cullinary Arts'
                            break
                        elif 'c' in career:  # Medical School
                            playerCareer = 'Medical School'
                            break
                        elif 'd' in career:  # Mortuary Science
                            playerCareer = 'Mortuary Science'
                            break
                        elif 'e' in career:  # Early Childhood Development
                            playerCareer = 'Early Childhood Development'
                            break
                        elif 'f' in career:  # Criminal Justice
                            playerCareer = 'Criminal Justice'
                            break
                        elif 'g' in career:  # Visual Arts
                            playerCareer = 'Visual Arts'
                            break
                        elif 'h' in career:  # Law
                            playerCareer = 'Law'
                            break
                        elif 'i' in career:  # Business and Finance
                            playerCareer = 'Business'
                            break
                        elif 'j' in career:  # Agriculture
                            playerCareer = 'Agriculture'
                            break
                        else:
                            print('Please enter a valid response.')
                    thread2.start()
                    thread3.start()
                    thread4.start()
                    playerGrade = 80
                    playerEd = 'college'
                    playerXP = playerXP + 20
                    print(
                        colored('You chose to enroll in the local community college and major in ' + playerCareer + '.',
                                'cyan'))
                    input()
                    print('Periodically use the `study` command to better your grades.')
                    input()
                    print('If you let your grades slip, your chances of graduating will drop.')
                    input()
                    print(colored('You need a grade of at least 60 percent by the end of the year to graduate.',
                                  'yellow'))
                    break
                elif 'no' in enroll:
                    print('Okay, you can enroll anytime.')
                    break
                else:
                    print(colored('Please enter a valid response.', 'red'))
            break


def playerStats():
    if playerEd == 'college':
        print(colored('Name: ' + playerName, 'cyan'))
        print(colored('Age: ' + str(playerAge), 'cyan'))
        print(colored('Level: ' + str(playerLevel), 'cyan'))
        print(colored('XP: ' + str(playerXP), 'cyan'))
        print(colored('Hunger: ' + str(playerHunger), 'cyan'))
        print(colored('Coins: ' + str(player1.coins), 'cyan'))
        print(colored('Education: ' + playerEd, 'cyan'))
        print(colored('Grade: ' + str(playerGrade) + ' in ' + playerCareer, 'cyan'))
        print(colored('Job: ' + playerJob, 'cyan'))
    elif playerEd == 'graduated':
        print(colored('Name: ' + playerName, 'cyan'))
        print(colored('Age: ' + str(playerAge), 'cyan'))
        print(colored('Level: ' + str(playerLevel), 'cyan'))
        print(colored('XP: ' + str(playerXP), 'cyan'))
        print(colored('Hunger: ' + str(playerHunger), 'cyan'))
        print(colored('Coins: ' + str(player1.coins), 'cyan'))
        print(colored('Education: ' + playerEd, 'cyan'))
        print(colored('Job: ' + playerJob, 'cyan'))
    else: 
        print(colored('Name: ' + playerName, 'cyan'))
        print(colored('Age: ' + str(playerAge), 'cyan'))
        print(colored('Level: ' + str(playerLevel), 'cyan'))
        print(colored('XP: ' + str(playerXP), 'cyan'))
        print(colored('Hunger: ' + str(playerHunger), 'cyan'))
        print(colored('Coins: ' + str(player1.coins), 'cyan'))
        print(colored('Education: ' + playerEd, 'cyan'))
        print(colored('Grade: ' + str(playerGrade) + ' in ' + playerCareer, 'cyan'))
        print(colored('Job: ' + playerJob, 'cyan'))



def thiefStats():
    if playerJob == 'Thief':
        print(colored('Thief XP: ' + str(thiefXP), 'cyan'))
        print(colored('Thief Level: ' + str(thiefLevel), 'cyan'))
    else:
        print('You cannot use this command because you are not a thief.')



# Threads
def musicLoop():
    while True:
        winsound.PlaySound('music/song1.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song2.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song3.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song4.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song5.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song6.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song7.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song8.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song9.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song10.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song11.wav', winsound.SND_FILENAME)
        winsound.PlaySound('music/song12.wav', winsound.SND_FILENAME)


thread1 = threading.Thread(target=musicLoop)
# thread1.start()

def playerGradeLoop():
    global playerGrade
    while True:
        if runLoop == True:
            playerGrade = playerGrade - 5
            time.sleep(180)
        elif runLoop == False:
            break


thread2 = threading.Thread(target=playerGradeLoop)


def schoolLoop():
    time.sleep(20)
    global playerDegree
    global playerCareer
    global playerGrade
    global playerEd
    global runLoop
    if playerGrade >= 60:
        print(colored('Congradulations!', 'magenta'))
        print(colored('\nYou have graduated with a degree in ' + playerCareer + '!', 'magenta'))
        input()
        playerDegree = playerCareer  # Player is given the degree for their college course
        runLoop = False # Grade Loop stops

        # Jobs availible for each degree
        print('You will now be able to apply for the following jobs:')

        if playerDegree == computerS:
            print(colored(
                'A. Tech Engineer\n B. Software Developer \nC. Computer Programmer \nD. Web Developer', 'cyan'))
            print(colored('E. Data Scientist \nF. Computer Support Specialist', 'cyan'))
            computer()
        elif playerDegree == cullinaryA:
            print(colored('A. Chain Resturaunt Chef \n B. Private Chef', 'cyan'))
            cullinary()
        elif playerDegree == medicalS:
            print(colored('A. Nurse Practitioner \nB. Nurse Widwife \nC. Rheumatologist \nD. Radiologist \nE. Pediatritian','cyan'))
            medical()
        elif playerDegree == mortuaryS:
            print(colored('A. Funeral Director \nB. Pathologist \nC. Enbalmer', 'cyan'))
            mortuary()
        elif playerDegree == childhoodD:
            print(colored('A. Teachers Assisstant \nB. Preschool Teacher \nC. Kindergarten Teacher', 'cyan'))
            print(colored('D. Babysitter', 'cyan'))
            childhood()
        elif playerDegree == justiceC:
            print(colored('A. Public Safety Officer \nB. Police Officer \nC. Forensic Science Technician', 'cyan'))
            print(colored('D. Criminal Investigator \nE. Correctional Officer \nF. Bailiff', 'cyan'))
            criminal()
        elif playerDegree == visualA:
            print(colored('A. Graphic Designer \nB. Dancer \nC. Art Director \nD. Interior Designer \nE. Product Designer \nF. Photographer','cyan'))
        elif playerDegree == lawS:
            print(colored('A. Lawyer \nB. Tax Attorney \nC. Politician \nD. Arbitrator', 'cyan'))
        elif playerDegree == businessA:
            print(colored(
                'A. Business Analysis \nB. Marketing Management \nC. Accountant \nD. Management Consultant \nE. Regulatory Affairs Assistant','cyan'))
        elif playerDegree == agricultureS:
            print(colored('A. Agricultral Manager \nB. Agricultural Worker \nC. Farmer \nD. Retail Supervisor \nE. Agricultural Equipment Operator','cyan'))
        playerEd = 'Graduated'
    else:
        # Giving the player the option to retake their college course if they fail. -
        print('You failed your course in ' + playerCareer + '.')
        input()
        print('Would you like to try again?')
        yesOrNo = input('Yes or no: ')
        if 'yes' in yesOrNo.lower():
            print('You have restarted your college course. All of your data has been reset.')
            input()
            playerGrade = 80
            thread2.start()
            thread3.start()
        elif 'no' in yesOrNo.lower():
            print('You have decided to drop out of school. You can always re-enroll.')
            input()
            playerGrade = 'N/A'
            playerCareer = 'N/A'
            playerEd = 'N/A'
        else:
            print(colored('Please enter a valid response.', 'red'))


thread3 = threading.Thread(target=schoolLoop)


def playerGradeCap():
    global playerGrade
    while True:
        if playerGrade > 100:
            playerGrade = 100
        elif playerGrade < 0:
            playerGrade = 0


thread4 = threading.Thread(target=playerGradeCap)


def playerHungerCap():
    global playerHunger
    while True:
        if playerHunger > 100:
            playerHunger = 100
        elif playerHunger < 0:
            playerHunger = 0
            print(colored('Your hunger is very low.', 'red'))


thread5 = threading.Thread(target=playerHungerCap)


def playerHungerLoop():
    global playerHunger
    while True:
        time.sleep(120)
        playerHunger = playerHunger - 5


thread6 = threading.Thread(target=playerHungerLoop)


def playerXPLoop():
    global playerXP
    global playerLevel
    while True:
        if playerXP == 100:
            playerXP = 0
            playerLevel = playerLevel + 1


thread7 = threading.Thread(target=playerXPLoop)


def thiefXPLoop():
    global thiefXP
    global thiefLevel
    while True:
        if thiefXP == 50:
            thiefXP = 0
            thiefLevel = thiefLevel + 1


thread8 = threading.Thread(target=thiefXPLoop)


def workLoop():
    global playerWorkXP
    global playerCPH
    global playerSalary
    global playerWorkLevel
    while True:
        if playerWorkXP >= 50:
            playerWorkXP = 0
            playerWorkLevel = playerWorkLevel + 1

        if playerWorkLevel >= 1:
            playerSalary = 8
        elif playerWorkLevel >= 3:
            playerSalary = 10
        elif playerWorkLevel >= 5:
            playerSalary = 12
        elif playerWorkLevel >= 8:
            playerSalary = 15
        elif playerWorkLevel >= 12:
            playerSalary = 20
        elif playerWorkLevel >= 15:
            playerSalary = 25


thread9 = threading.Thread(target=workLoop)


def canWorkLoop():
    global canWork
    while True:
        if canWork == False:
            time.sleep(30)
            canWork = True


thread10 = threading.Thread(target=canWorkLoop)



# Career Jobs
def computer():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a'in job.lower():
            playerJob = techEngineer.jobname
            playerHours = techEngineer.hours
            playerCPH = techEngineer.salary
            break
        elif 'b' in job.lower():
            playerJob = softwareDev.jobname
            playerHours = softwareDev.hours
            playerCPH = softwareDev.salary
            break
        elif 'c' in job.lower():
            playerJob = computerProgrammer.jobname
            playerHours = computerProgrammer.hours
            playerCPH = computerProgrammer.salary
            break
        elif 'd' in job.lower():
            playerJob = webDev.jobname
            playerHours = webDev.hours
            playerCPH = webDev.salary
            break
        elif 'e' in job.lower():
            playerJob = DataScientist.jobname
            playerHours = DataScientist.hours
            playerCPH = DataScientist.salary
            break
        elif 'f' in job.lower():
            playerJob = compSupportSpecialist.jobname
            playerHours = compSupportSpecialist.hours
            playerCPH = compSupportSpecialist.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))


def cullinary():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = chainChef.jobname
            playerHours = chainChef.hours
            playerCPH = chainChef.salary
            break
        if 'b' in job.lower():
            playerJob = privChef.jobname
            playerHours = privChef.hours
            playerCPH = privChef.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))


def medical():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = nursePrac.jobname
            playerHours = nursePrac.hours
            playerCPH = nursePrac.salary
            break
        elif 'b' in job.lower():
            playerJob = nurseMidwife.jobname
            playerHours = nurseMidwife.hours
            playerCPH = nurseMidwife.salary
            break
        elif 'c' in job.lower():
            playerJob = rheumatologist.jobname
            playerHours = rheumatologist.hours
            playerCPH = rheumatologist.salary
            break
        elif 'd' in job.lower():
            playerJob = radiologist.jobname
            playerHours = radiologist.hours
            playerCPH = radiologist.salary
            break
        elif 'e' in job.lower():
            playerJob = pediatritian.jobname
            playerHours = pediatritian.hours
            playerCPH = pediatritian.salary
            break
        else: 
            print(colored('Please enter a valid letter.', 'red'))


def mortuary():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = funeralDirector.jobname
            playerHours = funeralDirector.hours
            playerCPH = funeralDirector.salary
            break
        elif 'b' in job.lower():
            playerJob = pathologist.jobname
            playerHours = pathologist.hours
            playerCPH = pathologist.salary
            break
        elif 'c' in job.lower():
            playerJob = enbalmer.jobname
            playerHours = enbalmer.hours
            playerCPH = enbalmer.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))


def childhood():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = teachAssist.jobname
            playerHours = teachAssist.hours
            playerCPH = teachAssist.salary
            break
        elif 'b' in job.lower():
            playerJob = preschoolteach.jobname
            playerHours = preschoolteach.hours
            playerCPH = preschoolteach.salary
            break
        elif 'c' in job.lower():
            playerJob = kinderTeach.jobname
            playerHours = kinderTeach.hours
            playerCPH = kinderTeach.salary
            break
        elif 'd' in job.lower():
            playerJob = babysitter.jobname
            playerHours = babysitter.hours
            playerCPH = babysitter.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))


def criminal():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = pubSafety.jobname
            playerHours = pubSafety.hours
            playerCPH = pubSafety.salary
            break
        elif 'b' in job.lower():
            playerJob = policeOfficer.jobname
            playerHours = policeOfficer.hours
            playerCPH = policeOfficer.salary
            break
        elif 'c' in job.lower():
            playerJob = forensicScience.jobname
            playerHours = forensicScience.hours
            playerCPH = forensicScience.salary
            break
        elif 'd' in job.lower():
            playerJob = criminalInvestigator.jobname
            playerHours = criminalInvestigator.hours
            playerCPH = criminalInvestigator.salary
            break
        elif 'e' in job.lower():
            playerJob = correctionOfficer.jobname
            playerHours = correctionOfficer.hours
            playerCPH = correctionOfficer.salary
            break
        elif 'f' in job.lower():
            playerJob = bailiff.jobname
            playerHours = bailiff.hours
            playerCPH = bailiff.salary
            break
        elif 'g' in job.lower():
            playerJob = medExaminer.jobname
            playerHours = medExaminer.hours
            playerCPH = medExaminer.salary
            break
        elif 'h' in job.lower():
            playerJob = distAttorney.jobname
            playerHours = distAttorney.hours
            playerCPH = distAttorney.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))


def visual():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = graphicDesign.jobname
            playerHours = graphicDesign.hours
            playerCPH = graphicDesign.salary
            break
        elif 'b' in job.lower():
            playerJob = dancer.jobname
            playerHours = dancer.hours
            playerCPH = dancer.salary
            break
        elif 'c' in job.lower():
            playerJob = artDirector.jobname
            playerHours = artDirector.hours
            playerCPH = artDirector.salary
            break
        elif 'd' in job.lower():
            playerJob = interiorDesign.jobname
            playerHours = interiorDesign.hours
            playerCPH = interiorDesign.salary
            break
        elif 'e' in job.lower():
            playerJob = productDesign.jobname
            playerHours = productDesign.hours
            playerCPH = productDesign.salary
            break
        elif 'f' in job.lower():
            playerJob = photographer.jobname
            playerHours = photographer.hours
            playerCPH = photographer.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))


def law():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = lawyer.jobname
            playerHours = lawyer.hours
            playerCPH = lawyer.salary
            break
        elif 'b' in job.lower():
            playerJob = lawyer.jobname
            playerHours = lawyer.hours
            playerCPH = lawyer.salary
            break
        elif 'c' in job.lower():
            playerJob = taxAttorney.jobname
            playerHours = taxAttorney.hours
            playerCPH = taxAttorney.salary
            break
        elif 'd' in job.lower():
            playerJob = politician.jobname
            playerHours = politician.hours
            playerCPH = politician.salary
            break
        elif 'e' in job.lower():
            playerJob = arbitrator.jobname
            playerHours = arbitrator.hours
            playerHours = arbitrator.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))


def business():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = businessAnalysis.jobname
            playerHours = businessAnalysis.hours
            playerCPH = businessAnalysis.salary
            break
        elif 'b' in job.lower():
            playerJob = marketingManagement.jobname
            playerHours = marketingManagement.hours
            playerCPH = marketingManagement.salary
            break
        elif 'c' in job.lower():
            playerJob = accountant.jobname
            playerHours = accountant.hours
            playerCPH = accountant.salary
            break
        elif 'd' in job.lower():
            playerJob = managementConsultant.jobname
            playerHours = managementConsultant.hours
            playerCPH = managementConsultant.salary
            break
        elif 'e' in job.lower():
            playerJob = regularAffairs.jobname
            playerHours = regularAffairs.hours
            playerCPH = regularAffairs.salary
            break
        else:
            print(colored('Please select a valid letter.', 'red'))


def agriculture():
    global playerJob, playerHours, job, playerSalary, playerCPH
    global techEngineer, softwareDev, webDev, computerProgrammer, DataScientist, compSupportSpecialist, chainChef, privChef, nurseMidwife, nursePrac, rheumatologist, radiologist, pediatritian, funeralDirector, pathologist, enbalmer, teachAssist, kinderTeach, preschoolteach, babysitter, pubSafety, policeOfficer, forensicScience, criminalInvestigator, correctionOfficer, bailiff, graphicDesign, dancer, artDirector, interiorDesign, productDesign, photographer, lawyer, taxAttorney, politician, arbitrator, businessAnalysis, marketingManagement, accountant, managementConsultant, regularAffairs, agManager, agEquipmentOp, agWorker, farmer, retailSupervisor
    input()
    print(colored('Which job would you like to apply for?', 'blue'))
    while True:
        job = input('>>> ')
        if 'a' in job.lower():
            playerJob = agManager.jobname
            playerHours = agManager.hours
            playerCPH = agManager.salary
            break
        elif 'b' in job.lower():
            playerJob = agWorker.jobname
            playerHours = agWorker.hours
            playerCPH = agWorker.salary
            break
        elif 'c' in job.lower():
            playerJob = farmer.jobname
            playerHours = farmer.hours
            playerCPH = farmer.salary
            break
        elif 'd' in job.lower():
            playerJob = retailSupervisor.jobname
            playerHours = retailSupervisor.hours
            playerCPH = retailSupervisor.salary
            break
        elif 'e' in job.lower():
            playerJob = agEquipmentOp.jobname
            playerHours = agEquipmentOp.hours
            playerCPH = agEquipmentOp.salary
            break
        else:
            print(colored('Please enter a valid letter.', 'red'))
