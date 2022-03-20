import random

playerEd = 'N/A'
playerCareer = 'N/A'
playerGrade = 0
playerSavings = 0
playerHours = 8
playerCPH = 5
playerSalary = 8 * playerCPH
playerWorkLevel = 1
playerDegree = 'N/A'
playerXP = 0
playerWorkXP = 0
playerHunger = 100
playerFood = 0
playerLevel = 1

canWork = True
runLoop = True

# For thief
thiefLevel = 1
thiefXP = 0

# Level 1 thief
waterBottle = 'a water bottle'
ramen = 'a ramen pack'
chips = 'a chip bag'

thiefItems1 = [waterBottle, ramen, chips]

# Level 2 thief
chocoBar = 'a chocolate bar'
iceCream = 'a small tub of ice cream'
gum = 'a pack of gum'

thiefItems2 = [waterBottle, ramen, chips, chocoBar, iceCream, gum]

# Level 3 thief
wallet = 'someones wallet'

walletArray = [5, 10, 15, 20, 50]

stolenWallet = random.choice(walletArray)
stolenItem = random.choice(thiefItems1)
