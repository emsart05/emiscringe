from obj import *


# Jobs
class Jobs:
    def __init__(self, jobname, hours, salary):
        self.jobname = jobname
        self.hours = hours
        self.salary = salary


# Computer Science Degree
techEngineer = Jobs('Tech Engineer', 10, 30)
softwareDev = Jobs('Software Dev', 12, 30)
computerProgrammer = Jobs('Computer Programmer', 10, 30)
webDev = Jobs('Web Dev', 10, 30)
DataScientist = Jobs('Data Scientist', 12, 30)
compSupportSpecialist = Jobs('Computer Support Specialist', 12, 30)

# Cullinary Arts Degree
chainChef = Jobs('Chain Resturaunt Chef', 10, 25)
privChef = Jobs('Private Chef', 12, 30)

# Medical Degree
nursePrac = Jobs('Nurse Practitioner', 12, 35)
nurseMidwife = Jobs('Nurse Midwife', 12, 35)
rheumatologist = Jobs('Rheumatologist', 10, 35)
radiologist = Jobs('Radiologist', 10, 35)
pediatritian = Jobs('Pediatritian', 12, 40)

# Mortuary Degree
funeralDirector = Jobs('Funeral Director', 10, 30)
pathologist = Jobs('Pathologist', 12, 30)
enbalmer = Jobs('Enbalmer', 12, 35)

# Early Childhood Dev Degree
teachAssist = Jobs('Teachers Assistant', 10, 25)
preschoolteach = Jobs('Preschool Teacher', 10, 30)
kinderTeach = Jobs('Kindergarten Teacher', 10, 30)
babysitter = Jobs('Babysitter', 10, 25)

# Criminal Justice Degree
pubSafety = Jobs('Public Safety Officer', 12, 35)
policeOfficer = Jobs('Police Officer', 12, 40)
forensicScience = Jobs('Forensic Science Technician', 12, 35)
criminalInvestigator = Jobs('Criminal Investigator', 12, 40)
correctionOfficer = Jobs('Correctional Officer', 12, 35)
bailiff = Jobs('Bailiff', 12, 35)
medExaminer = Jobs('Medical Examiner', 12, 35)
distAttorney = Jobs('District Attorney', 12, 40)

# Visual Arts Degree
graphicDesign = Jobs('Graphic Designer', 10, 30)
dancer = Jobs('Dancer', 12, 30)
artDirector = Jobs('Art Director', 12, 35)
interiorDesign = Jobs('Interior Designer', 10, 30)
productDesign = Jobs('Product Designer', 10, 30)
photographer = Jobs('Photographer', 12, 30)

# Law Degree
lawyer = Jobs('Lawyer', 12, 40)
taxAttorney = Jobs('tax Attorney', 12, 40)
politician = Jobs('Politician', 12, 40)
arbitrator = Jobs('Arbitrator', 12, 40)

# Business Degree
businessAnalysis = Jobs('Business Analysis', 10, 30)
marketingManagement = Jobs('Marketing Management', 12, 35)
accountant = Jobs('Accountant', 12, 35)
managementConsultant = Jobs('Management Consultant', 12, 35)
regularAffairs = Jobs('Regulatory Affairs Assistant', 12, 30)

# Agriculture Degree
agManager = Jobs('Agricultural Manager', 12, 35)
agWorker = Jobs('Agricultural Worker', 12, 30)
farmer = Jobs('Farmer', 12, 35)
retailSupervisor = Jobs('Retail Supervisor', 10, 30)
agEquipmentOp = Jobs('Agricultural Equipment Operator', 12, 35)


# Careers
class Careers:
    def __init__(self, career):
        self.career = career


computerS = Careers('Computer Science')
cullinaryA = Careers('Cullinary Arts')
medicalS = Careers('Medical Science')
mortuaryS = Careers('Mortuary Science')
childhoodD = Careers('Early Childhood Development')
justiceC = Careers('Criminal Justice')
visualA = Careers('Visual Arts')
lawS = Careers('Law')
businessA = Careers('Business and Finance')
agricultureS = Careers('Agriculture')


# Player info
class Players:
    def __init__(self, name, age, coins, ed, career, grade):
        self.name = name
        self.age = age
        self.coins = coins
        self.ed = ed
        self.career = career
        self.grade = grade


playerName = ''
playerAge = ''

player1 = Players(playerName, playerAge, 200, playerEd, playerCareer, playerGrade)
