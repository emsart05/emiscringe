const container = document.getElementById("grid")

function blackImageConfig(black) {
    black.src = "./images/black.png"
    black.style.width = "75px"; black.style.height = "75px"; 
}

function redImageConfig(red) {
    red.src = "./images/red.png"
    red.style.width = "75px"; red.style.height = "75px"; 
}

function positionSet(array, row, column) {
    array.style.gridRowStart = row
    array.style.gridRowEnd = row + 1

    array.style.gridColumnStart = column
    array.style.gridColumnEnd = column + 1
}

class Piece {
    constructor(box, self, row, column, color) {
        this.box = box,
        this.self = self,
        this.row = row,
        this.column = column
        this.color = color
    }
}

class Box {
    constructor(row, column, color) {
        this.row = row,
        this.column = column
        this.color = color
    }
}

let boxAr = [] // List of boxes
let boxObjs = []
var row = 1; var col = 1;

for(var i = 0; i < 64; i++) {
    boxAr.push(document.createElement("h1"))
    var boxStyle = boxAr[i].style

    // Column reset if needed
    if(col > 8) {
        col = 1
        row++
    }

    // Alternating box colors
    if(row == 0 || row % 2 == 0) {
        // If i = 0 or is even
        if(i == 0 || i % 2 == 0) {
            boxStyle.backgroundColor = "black"
        }
        // If i = 1 or is odd
        else if(i == 1 || i % 2 == 1) {
            boxStyle.backgroundColor = "red"
        }
    }
    else if(row == 1 || row % 2 == 1) {
        // If i = 0 or is even
        if(i == 0 || i % 2 == 0) {
            boxStyle.backgroundColor = "red"
        }
        // If i = 1 or is odd
        else if(i == 1 || i % 2 == 1) {
            boxStyle.backgroundColor = "black"
        }
    }

    // Box style
    boxStyle.gridRowStart = row
    boxStyle.gridRowEnd = row + 1
    boxStyle.gridColumnStart = col
    boxStyle.gridColumnEnd = col + 1

    boxStyle.border = "0px solid black"
    boxStyle.color = "red"
    boxStyle.margin = "0px"
    boxStyle.textAlign = "center"

    // Appending to container
    container.appendChild(boxAr[i])

    // New box object
    boxObjs.push(new Box(row, col, boxAr[i].style.backgroundColor))

    // Adding to row
    col++
}

// Arrays for pieces
let pieceObjs = []; let redPieces = []; let blackPieces = []

const black1 = document.createElement("img")
blackImageConfig(black1)
blackPieces.push(black1)
boxAr[1].appendChild(blackPieces[0])

// Piece creation
for(var i = 0; i < 12; i++) {
    //Adding to array
    blackPieces.push(document.createElement("img"))
    redPieces.push(document.createElement("img"))

    // Configuring image
    blackImageConfig(blackPieces[i])
    redImageConfig(redPieces[i])

    // New piece object
    pieceObjs.push(new Piece(i, null, boxObjs[i].row, boxObjs[i].column, "black"))
}

// Black piece placement
var pieceCounter = 0
for(var box = 0; box < boxObjs.length; box++) {
    if(boxObjs[box].color == "black") {
        if(box < 24) {
            positionSet(blackPieces[pieceCounter], boxObjs[box].row, boxObjs[box].column)
            boxAr[box].appendChild(blackPieces[pieceCounter])
            pieceCounter++
        }
    }
}

// Red piece placement
pieceCounter = 0
for(var box = 40; box < boxObjs.length; box++) {
    if(boxObjs[box].color == "black") {
        if(box < 64) {
            positionSet(redPieces[pieceCounter], boxObjs[box].row, boxObjs[box].column)
            boxAr[box].appendChild(redPieces[pieceCounter])
            pieceCounter++
        }
    }
}

// Score table elements
let blackLeft = document.getElementById("black-left")
let redLeft = document.getElementById("red-left")
let blackTaken = document.getElementById("black-taken")
let redTaken = document.getElementById("red-taken")

blackLeft.innerHTML = 12; redLeft.innerHTML = 12
blackTaken.innerHTML = 0; redTaken.innerHTML = 0

// Mechanics
let gameInit = false

let clicked = []
let pieceClicked = false
let blackClick = false; let redClick = false

blackPieces.forEach(piece => {
    piece.onclick = function() {
        //Check if game has started
        if(!gameInit) {
            gameInit = true
        }

        // If no piece is selected
        if(!blackClick && !pieceClicked) {
            piece.style.border = "3px solid blue"
            blackClick = true
            pieceClicked = true
            clicked.push(piece)
            console.log(clicked[0])
        }

        // If the piece clicked has been selected
        else if(blackClick && clicked[0] == piece) {
            piece.style.border = "0px solid blue"
            blackClick = false
            pieceClicked = false
            clicked.pop()
        }
    }
});

redPieces.forEach(piece => {
    piece.onclick = function() {
        //Check if game has started
        if(gameInit) {

            // If no piece is selected
            if(!redClick && !pieceClicked) {
                piece.style.border = "3px solid blue"
                redClick = true
                pieceClicked = true
                clicked.push(piece)
            }

            // If the piece clicked has been selected
            else if(redClick && clicked[0] == piece) {
                piece.style.border = "0px solid blue"
                redClick = false
                pieceClicked = false
                clicked.pop()
            }
        }

        // If red tried to make the first move
        else {
            console.log("Black goes first.")
        }
    }
});

boxAr.forEach(box => {
    // Box grid position
    const rowStart = box.style.gridRowStart // Top
    const rowEnd = box.style.gridRowEnd // Bottom
    const colStart = box.style.gridColumnStart // Left
    const colEnd = box.style.gridColumnEnd // Right

    box.onclick = function() {
        if(!box.hasChildNodes()) {
            if(clicked.length > 0) {
                // Clicked piece grid position
                let pieceRowStart = clicked[0].style.gridRowStart
                let pieceRowEnd = clicked[0].style.gridRowEnd
                let pieceColStart = clicked[0].style.gridColumnStart
                let pieceColEnd = clicked[0].style.gridColumnEnd
    
                if(Number(rowStart) == Number(pieceRowStart) + 1) {
                    if(Number(colStart) == Number(pieceColStart) + 1 || Number(colStart) == Number(pieceColStart) - 1) {
                        pieceColStart = colStart
                        pieceColEnd = colEnd
                        pieceRowEnd = rowEnd
                        pieceRowStart = rowStart

                        console.log("Piece moved")
                    }
    
                    // Tried to move piece to an ivnalid spot
                    else {
                        console.log("Failed to move this piece.")
                    }
                }
    
                // Tried to move piece to an ivnalid spot
                else {
                    console.log(Number(rowStart) + 1)
                    console.log(Number(pieceRowStart) + 1)
                    console.log("Failed to move this piece.")
                }
            }
        }
    }
});


