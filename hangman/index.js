
var peopleCheck = document.getElementById("peopleCheck")
var placesCheck = document.getElementById("placesCheck")
var itemsCheck = document.getElementById("itemsCheck")
var catChoose = document.getElementById("catChoose")
var mainHead = document.getElementById("mainHead")
var guessBox = document.getElementById("guessBox")
var poleImg = document.getElementById("poleImg")
var charBox = document.getElementById("blanks")
var main = document.getElementById("main")
var hint = document.getElementById("hint")
var body = document.querySelector("body")
var numOfBlanks = $("#numOfBlanks")

var inputBox = document.createElement("input")
var subButton = document.createElement("button")

let blanksList = []
let strikes = 0


// Random selection from list
let selectedPhrase = null
function getRandom(list)
{
    let random = Math.floor(Math.random() * list.length)
    let selected = list[random]
    return selected
}

// Check strikes
function checkStrikes(fill)
{
    strikes++
    if(strikes == 1) // Head
    {
        poleImg.src = "./images/pole2.png"
    }
    else if(strikes == 2) // Torso
    {
        poleImg.src = "./images/pole3.png"
    }
    else if(strikes == 3) // Left arm
    {
        poleImg.src = "./images/pole4.png"
    }
    else if(strikes == 4) // Right arm
    {
        poleImg.src = "./images/pole5.png"
    }
    else if(strikes == 5) // Left leg
    {
        poleImg.src = "./images/pole6.png"
    }
    // Lose
    else if(strikes == 6) // Right leg
    {
        poleImg.src = "./images/pole7.png"
        while(guessBox.firstChild)
        {
            guessBox.removeChild(guessBox.firstChild)
        }
        fill = 0

        // Display lose message
        let tryBox = document.createElement("div")
        let tryAgain = document.createElement("h1")
        let tryBtn = document.createElement("input")

        tryAgain.innerHTML = "You lost. Try again?"
        tryAgain.style.fontSize = "18px"
        tryBtn.type = "button"
        tryBtn.value = "Try Again"
        tryBox.id = "tryBox"
        tryBtn.id = "tryBtn"

        tryBtn.onclick = function()
        {
            location.reload()
        }

        main.appendChild(tryBox)
        tryBox.appendChild(tryAgain)
        tryBox.appendChild(tryBtn)
    } 

    // Clear input box
    inputBox.value = ""
}

// Run win
function runWin()
{
    // Remove input modes
    while(guessBox.firstChild)
    {
        guessBox.removeChild(guessBox.firstChild)
    }

    // Display win message
    let winBox = document.createElement("div")
    let winText = document.createElement("h1")
    let playAgain = document.createElement("input")

    winBox.id = "winBox"
    winText.innerHTML = "You won! Play again?"
    winText.id = "winText"
    playAgain.type = "button"
    playAgain.value = "Play Again"
    playAgain.id = "playAgain"

    // Reload game
    playAgain.onclick = function()
    {
        location.reload()
    }

    main.appendChild(winBox)
    winBox.appendChild(winText)
    winBox.appendChild(playAgain)
}
// Check win
function checkWin(fill, list)
{
    if(fill >= list.length)
    {
        // Remove input modes
        while(guessBox.firstChild)
        {
            guessBox.removeChild(guessBox.firstChild)
        }
        fill = 0

        // Display win message
        let winBox = document.createElement("div")
        let winText = document.createElement("h1")
        let playAgain = document.createElement("input")

        winBox.id = "winBox"
        winText.innerHTML = "You won! Play again?"
        winText.id = "winText"
        playAgain.type = "button"
        playAgain.value = "Play Again"
        playAgain.id = "playAgain"

        // Reload game
        playAgain.onclick = function()
        {
            location.reload()
        }

        main.appendChild(winBox)
        winBox.appendChild(winText)
        winBox.appendChild(playAgain)
    }
    return fill
}

// Char config
function singleCharConfig(index, char, filledChars)
{
    blanksList[index].innerHTML = char
    inputBox.value = ""
    filledChars++
    return filledChars
}
function twoCharConfig(index, char, index2, char2, filledChars)
{
    blanksList[index].innerHTML = char
    blanksList[index2].innerHTML = char2
    inputBox.value = ""
    filledChars += 2
    return filledChars
}
function threeCharConfig(index, char, index2, char2, index3, char3, filledChars)
{
    blanksList[index].innerHTML = char
    blanksList[index2].innerHTML = char2
    blanksList[index3].innerHTML = char3
    inputBox.value = ""
    filledChars += 3
    return filledChars
}

// Display hint
function displayHint(phraseHint)
{
    hint.innerHTML = `Hint: ${phraseHint}`
}

// Phrase template
class phraseClass
{
    constructor(phrase, charNum, hint)
    {
        this.phrase = phrase
        this.blankList = []
        this.guessList = []
        this.charNum = charNum
        this.filled = 0
        this.hint = hint

        this.fillBlankList = () => {
            for(let i = 0; i < this.charNum; i++) {
                this.blankList.push("_")
            }
        }
    }
}
// People phrases
let taylorSwift = new phraseClass("Taylor Swift", 11, "Popular singer. Switched from country to pop.")
taylorSwift.fillBlankList()
let purpleGuy = new phraseClass("Purple Guy", 9, "The man behind the slaughter.")
purpleGuy.fillBlankList()
let miku = new phraseClass("Hatsune Miku", 11, "Vocaloid software voicebank with a blue-haired mascot.")
miku.fillBlankList()
let heather = new phraseClass("Heather", 7, "There are fields of me in Ireland. Also a popular girls' name.")
heather.fillBlankList()

// Places phrases
let ohio = new phraseClass("Ohio", 4, "Corn state.")
ohio.fillBlankList()
let grandCanyon = new phraseClass("Grand Canyon", 11, "Famous crater in the earth.")
grandCanyon.fillBlankList()

// Items phrases
let pencil = new phraseClass("Pencil", 6, "Used for writing.")
pencil.fillBlankList()
let mouse = new phraseClass("Mouse", 5, "A small rodent and a commonly used computer tool.")
mouse.fillBlankList()
let shoes = new phraseClass("Shoes", 5, "Worn to protect feet.")
shoes.fillBlankList()
let candyCane = new phraseClass("Candy Cane", 9, "A common treat during the winter holidays.")
candyCane.fillBlankList()


// Category template
class category
{
    constructor(catName, boxVar)
    {
        this.catName = catName
        this.boxVar = boxVar
        this.phrases = []
    }

    displayInput()
    {
        // Create input
        inputBox.placeholder = "Enter a guess"
        inputBox.id = "guess"
        subButton.innerHTML = "Enter"
        subButton.id = "enterButton"

        // Append to document
        guessBox.appendChild(inputBox)
        guessBox.appendChild(subButton)
    }

    run()
    {
        let i = 0
        blanksList = []

        // Get phrase
        selectedPhrase = getRandom(this.phrases)
        numOfBlanks.innerHTML = selectedPhrase.phrase.length

        // Check for spaces
        let test = selectedPhrase.phrase.search(" ")

        // Adjust char box width as needed
        if(selectedPhrase.blankList.length > 10)
        {
            if(body.style.width < 650)
            {
                charBox.style.width = "50%"
            }
            else
            {
                charBox.style.width = "30%"
            }
        }
        else if(selectedPhrase.blankList.length > 5)
        {
            if(body.style.width < 650)
            {
                charBox.style.width = "20%"
            }
            else
            {
                charBox.style.width = "25%"
            }
        }

        // Display all blanks
        selectedPhrase.blankList.forEach(function(blank)
        {
            if(i == test)
            {
                blanksList.push(document.createElement("p"))
                blanksList[test].innerHTML = ".."
                blanksList[test].className = "filler"
                blanksList[test].style.color = "rgb(171, 196, 211)"
                charBox.appendChild(blanksList[test])

                charBox.appendChild(blanksList[test])
                blanksList.push(document.createElement("p"))
                blanksList[i+1].innerHTML = blank
                charBox.appendChild(blanksList[i+1])
                i += 2

                numOfBlanks.innerHTML = selectedPhrase.phrase.length-1
            }
            else
            {
                blanksList.push(document.createElement("p"))
                blanksList[i].innerHTML = blank
                charBox.appendChild(blanksList[i])
                i++
            }
        })
    }
}
let peopleCat = new category("People", peopleCheck)
peopleCat.phrases = [taylorSwift, purpleGuy, miku, heather]

let placesCat = new category("Places", placesCheck)
placesCat.phrases = [ohio, grandCanyon]

let itemsCat = new category("Items", itemsCheck)
itemsCat.phrases = [pencil, mouse, shoes, candyCane]

// List of category objects
let allCats = [peopleCat, placesCat, itemsCat]

// Click for each category checkbox
allCats.forEach(function(cat) 
{
    // When checkbox is checked
    cat.boxVar.onclick = function() 
    {
        // If a category is not already chosen
        if(!cat.boxVar.disabled)
        {
            // If box has been selected
            if(cat.boxVar.checked)
            {
                // Disabling all checkboxes
                allCats.forEach(function(catt) 
                {
                    catt.boxVar.disabled = true
                })
                
                // Choose phrase from list for specific category
                cat.displayInput(inputBox, subButton, guessBox)
                cat.run(blanksList, selectedPhrase, numOfBlanks, body, charBox)
                displayHint(selectedPhrase.hint)

                // Change header
                mainHead.innerHTML = cat.catName
            }
        }
    }
})

// Check category and phrase to run appropriate blanks
function gameRun()
{
    if(inputBox.placeholder != "Enter a guess")
    {
        inputBox.placeholder = "Enter a guess"
    }  
    let inp = inputBox.value

    // PEOPLE
    if(peopleCheck.is(":checked"))
    {
        if(!selectedPhrase.guessList.includes(inp))
        {
            // If phrase is Taylor Swift
            if(selectedPhrase.phrase == "Taylor Swift")
            {
                // Correct guess
                if(inp.toLocaleLowerCase() == "t")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(0, "T", 11, "t", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "a")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(1, "a", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "y")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "y", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "l")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(3, "l", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "o")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(4, "o", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "r")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(5, "r", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "s")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(7, "S", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "w")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(8, "w", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "i")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(9, "i", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "f")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(10, "f", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "taylor swift")
                {
                    blanksList[0].innerHTML = "T"
                    blanksList[1].innerHTML = "a"
                    blanksList[2].innerHTML = "y"
                    blanksList[3].innerHTML = "l"
                    blanksList[4].innerHTML = "o"
                    blanksList[5].innerHTML = "r"
                    blanksList[7].innerHTML = "S"
                    blanksList[8].innerHTML = "w"
                    blanksList[9].innerHTML = "i"
                    blanksList[10].innerHTML = "f"
                    blanksList[11].innerHTML = "t"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
            // If phrase is Purple Guy
            else if(selectedPhrase.phrase == "Purple Guy")
            {
                // Correct guess
                if(inp.toLocaleLowerCase() == "p")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(0, "P", 3, "p", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "u")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(1, "u", 8, "u", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "r")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "r", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "l")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(4, "l", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "e")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(5, "e", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "g")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(7, "G", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "y")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(9, "y", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "purple guy")
                {
                    blanksList[0].innerHTML = "P"
                    blanksList[1].innerHTML = "u"
                    blanksList[2].innerHTML = "r"
                    blanksList[3].innerHTML = "p"
                    blanksList[4].innerHTML = "l"
                    blanksList[5].innerHTML = "e"
                    blanksList[7].innerHTML = "G"
                    blanksList[8].innerHTML = "u"
                    blanksList[9].innerHTML = "y"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
            // If phrase is Hatsune Miku
            else if(selectedPhrase.phrase == "Hatsune Miku") {
                if(inp.toLocaleLowerCase() == "h") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(0, "H", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "a") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(1, "a", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "t") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "t", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "s") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(3, "s", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "u") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(4, "u", 11, "u", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "n") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(5, "n", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "e") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(6, "e", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "m") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(8, "M", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "i") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(9, "i", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "k") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(10, "k", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "hatsune miku") {
                    blanksList[0].innerHTML = "H"
                    blanksList[1].innerHTML = "a"
                    blanksList[2].innerHTML = "t"
                    blanksList[3].innerHTML = "s"
                    blanksList[4].innerHTML = "u"
                    blanksList[5].innerHTML = "n"
                    blanksList[6].innerHTML = "e"
                    blanksList[8].innerHTML = "M"
                    blanksList[9].innerHTML = "i"
                    blanksList[10].innerHTML = "k"
                    blanksList[11].innerHTML = "u"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
            // If phrase is Heather
            else if(selectedPhrase.phrase == "Heather") {
                if(inp.toLocaleLowerCase() == "h") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(0, "H", 4, "h", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "e") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(1, "e", 5, "e", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "a") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "a", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "t") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(3, "t", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "r") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(6, "r", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "heather") {
                    blanksList[0].innerHTML = "H"
                    blanksList[1].innerHTML = "e"
                    blanksList[2].innerHTML = "a"
                    blanksList[3].innerHTML = "t"
                    blanksList[4].innerHTML = "h"
                    blanksList[5].innerHTML = "e"
                    blanksList[6].innerHTML = "r"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
        }
        else
        {
            inputBox.value = ""
            inputBox.placeholder = "Already guessed"
        }
    }

    // PLACES
    else if(placesCheck.checked)
    {
        if(!selectedPhrase.guessList.includes(inp))
        {
            // If phrase is Ohio
            if(selectedPhrase.phrase == "Ohio")
            {
                // Correct guess
                if(inp.toLocaleLowerCase() == "o")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(0, "O", 3, "o", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "h")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(1, "h", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "i")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "i", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "ohio")
                {
                    blanksList[0].innerHTML = "O"
                    blanksList[1].innerHTML = "h"
                    blanksList[2].innerHTML = "i"
                    blanksList[3].innerHTML = "o"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
            // If phrase is Grand Canyon
            else if(selectedPhrase.phrase == "Grand Canyon")
            {
                // Correct guess
                if(inp.toLocaleLowerCase() == "g")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(0, "G", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "r")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(1, "r", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "a")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(2, "a", 7, "a",  selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "n")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = threeCharConfig(3, "n", 8, "n", 11, "n", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "d")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(4, "d", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "c")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(6, "C", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "y")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(9, "y", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "o")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(10, "o", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "grand canyon")
                {
                    blanksList[0].innerHTML = "G"
                    blanksList[1].innerHTML = "r"
                    blanksList[2].innerHTML = "a"
                    blanksList[3].innerHTML = "n"
                    blanksList[4].innerHTML = "d"

                    blanksList[6].innerHTML = "C"
                    blanksList[7].innerHTML = "a"
                    blanksList[8].innerHTML = "n"
                    blanksList[9].innerHTML = "y"
                    blanksList[10].innerHTML = "o"
                    blanksList[11].innerHTML = "n"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
        }
        else
        {
            inputBox.value = ""
            inputBox.placeholder = "Already guessed"
        }
    }

    // ITEMS
    else if(itemsCheck.checked)
    {
        if(!selectedPhrase.guessList.includes(inp))
        {
            // If phrase is Pencil
            if(selectedPhrase.phrase == "Pencil")
            {
                // Correct guess
                if(inp.toLocaleLowerCase() == "p")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(0, "P", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "e")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(1, "e", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "n")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "n", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "c")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(3, "c", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "i")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(4, "i", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "l")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(5, "l", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "pencil")
                {
                    blanksList[0].innerHTML = "P"
                    blanksList[1].innerHTML = "e"
                    blanksList[2].innerHTML = "n"
                    blanksList[3].innerHTML = "c"
                    blanksList[4].innerHTML = "i"
                    blanksList[5].innerHTML = "l"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
            // If phrase is mouse
            else if(selectedPhrase.phrase == "Mouse")
            {
                // Correct guess
                if(inp.toLocaleLowerCase() == "m")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(0, "M", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "o")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(1, "o", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "u")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "u", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "s")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(3, "s", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "e")
                {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(4, "e", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "mouse")
                {
                    blanksList[0].innerHTML = "M"
                    blanksList[1].innerHTML = "o"
                    blanksList[2].innerHTML = "u"
                    blanksList[3].innerHTML = "s"
                    blanksList[4].innerHTML = "e"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }

            // If phrase is Shoes
            else if(selectedPhrase.phrase == "Shoes") {
                // Correct Guess
                if(inp.toLocaleLowerCase() == "s") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(0, "S", 4, "s", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "h") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(1, "h", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "o") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(2, "o", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "e") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(3, "e", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "shoes")
                {
                    blanksList[0].innerHTML = "S"
                    blanksList[1].innerHTML = "h"
                    blanksList[2].innerHTML = "o"
                    blanksList[3].innerHTML = "e"
                    blanksList[4].innerHTML = "s"

                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }

            // If phrase is Candy Cane
            if(selectedPhrase.phrase == "Candy Cane") {
                // Correct Guess
                if(inp.toLocaleLowerCase() == "c") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(0, "C", 6, "c", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "a") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(1, "a", 7, "a", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "n") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = twoCharConfig(2, "n", 8, "n", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "d") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(3, "d", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "y") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(4, "y", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }
                else if(inp.toLocaleLowerCase() == "e") {
                    selectedPhrase.guessList.push(inp)
                    selectedPhrase.filled = singleCharConfig(9, "e", selectedPhrase.filled)
                    selectedPhrase.filled = checkWin(selectedPhrase.filled, selectedPhrase.blankList)
                }

                // Guess whole phrase
                else if(inp.toLocaleLowerCase() == "candy cane")
                {
                    blanksList[0].innerHTML = "C"
                    blanksList[1].innerHTML = "a"
                    blanksList[2].innerHTML = "n"
                    blanksList[3].innerHTML = "d"
                    blanksList[4].innerHTML = "y"

                    blanksList[6].innerHTML = "C"
                    blanksList[7].innerHTML = "a"
                    blanksList[8].innerHTML = "n"
                    blanksList[9].innerHTML = "e"


                    runWin()
                }

                // Left blank
                else if(inp == "")
                {
                    inputBox.placeholder = "Do not leave blank"
                }

                // Incorrect guess
                else
                {
                    checkStrikes(selectedPhrase.filled)
                }
            }
        }
        else
        {
            inputBox.value = ""
            inputBox.placeholder = "Already guessed"
        }
    }
}

// Guess box
subButton.onclick = function()
{
    gameRun()
}

// Use Enter key to submit
body.addEventListener("keypress", (KeyboardEvent) => {
    var keyName = KeyboardEvent.key
    if (keyName == "Enter") // Check that key is Enter
    {
        if(selectedPhrase != "" || selectedPhrase != null) {
            gameRun()
        }
    }
})

// Submit button on click
let enter = $(subButton)
let enterWidth = subButton.style.width-1

enter.on("click", function()
{
    enter.animate({width: 65, fontSize: 13.3333}, "fast")

    enter.animate({width: 55, fontSize: 10}, "fast")

    enter.animate({width: 65, fontSize: 13.3333}, "fast")
})
