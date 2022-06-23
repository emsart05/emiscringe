const container = document.querySelector("div")

function blackImageConfig(black) {
    black.src = "./images/black.png"
    black.style.width = "75px"; black.style.height = "75px"; 
}

function redImageConfig(red) {
    red.src = "./images/red.png"
    red.style.width = "75px"; red.style.height = "75px"; 
}

function positionSet(array, row, column) {
    console.log(array)
    console.log(row)
    console.log(column)

    array.style.gridRowStart = row
    array.style.gridRowEnd = row + 1

    array.style.gridColumnStart = column
    array.style.gridColumnStart = column
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

for(var box = 0; box < boxObjs.length; box++) {
    if(boxObjs[box].color == "black") {
        // console.log(blackPieces[box])
        // console.log(boxObjs[box].row)
        // console.log(boxObjs[box].column)
        positionSet(blackPieces[box], boxObjs[box].row, boxObjs[box].column)
    }
}
