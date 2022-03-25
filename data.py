from termcolor import *
from colorama import *

init()
# User Data Practice

class Users:
    def __init__(self, firstName, lastName, age, email, password, username):
        self.firstName = firstName
        self.lastName = lastName
        self.age = age
        self.email = email
        self.password = password
        self.username = username 


user1 = Users('Jane', 'Doe', '18', 'janedoe123@yahoo.com', '5190pZ!st0', 'jane.doe')
user2 = Users('John', 'Smith', '20', 'johnsmith321.yahoo.com', 'fhw3AL73,*', 'john.smith')
user3 = Users('Abby', 'Woods', '17', 'abigailwoods05@millerstudent.com', 'miller2023', 'abby.woods')

userData = [
    ['Jane', 'Doe', 18, 'janedoe123@yahoo.com', '5190pZ!st0', 'jane.doe']
    ['John', 'Smith', 20, 'johnsmith321.yahoo.com', 'fhw3AL73,*', 'john.smith']
]

print(userData[1])


def displayPassword(user):
    print('Password: ' + user)


def displayUsername(user):
    print('Username: ' + user)


def displayEmail(user):
    print('Email: ' + user)


def displayAge(user):
    print('Age: ' + user)


def displayFirstName(user):
    print('First name: ' + user)


def displayLastName(user):
    print('Last name: ' + user)


def displayFullName(userFirst, userLast):
    print('Full name: ' + userFirst + ' ' + userLast)


def displayAllData(userFirst, userLast, userAge, userEmail, userPass, UserUsername):
    print('All user data: ' + userFirst, userLast + ', ' + userAge + ', ' + userEmail + ', ' + userPass + ', ' + UserUsername)

