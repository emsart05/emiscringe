
// Practie with data handling

class Users {
    constructor(first, last, age, email, pass, username, id) {
        this.first = first
        this.last = last
        this.age = age
        this.email = email
        this.pass = pass
        this.username = username
        this.id = id
    }
}

document.getElementById("hello").innerHTML = "Hello World"

var first = window.prompt('Enter your first name')
var last = window.prompt('Enter your last name')
var age = window.prompt('Enter your age')
var email = window.prompt('Enter your email')
var username = window.prompt('Create a username')
var pass = window.prompt('Create a password')

let user1 = new Users('Jane', 'Doe', 18, 'janedoe123@yahoo.com', '5190pZ!st0', 'jane.doe', 'user1')
let user2 = new Users('John', 'Smith', 20, 'johnsmith321.yahoo.com', 'fhw3AL73,*', 'john.smith', 'user2')
let user3 = new Users('Abby', 'Woods', 17, 'abigailwoods05@millerstudent.com', 'miller2023', 'abby.woods', 'user3')
let user4 = new Users('Brenda', 'Cook', 45, 'brendacook98@hotmail.com', 'brendacats876!', 'brenda.cook', 'user4')
let user5 = new Users('Heather', 'Wells', 38, 'h_wells@hotmail.com', '874ef497', 'heather.wells', 'user5')
let user6 = new Users('Sianna', 'Knox', 17, 'siannaslay33@gmail.com', 'oreoreoreore', 'sianna.knox', 'user6')
let user7 = new Users('Blake', 'Griffith', 19, 'blakeiscool04@gmail.com', 'minecraftboobs', 'blake.griffith', 'user7')
let user8 = new Users('Benson', 'Thomas', 20, 'bensgaming2004@gmail.com', 'baseballman', 'benson.thomas', 'user8')
let user9 = new Users('Emily', 'Fout', 14, 'emmaloveskpop@gmail.com', 'jimin4lyfe', 'emily.fout', 'user9')
let user10 = new Users('Emma', 'Miller', 22, 'emmy.85843@gmail.com', 'oWo1209B', 'emma.miller', 'user10')
let user11 = new Users('Elijah', 'Fout', 17, 'pocket.Watcher@gmail.com', 'PenisLover', 'PocketWatcher', 'user11')
let user12 = new Users(first, last, age, email, pass, username, 'user12')