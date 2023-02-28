var invis = $("#invis")
var cat = $("#category")
var blanks = $("#blanks")
var numOfBlanks = $("#numOfBlanks")
var peopleCheck = $("#peopleCheck")

if($("#sections").css("flex-direction") == "column") {
    $("#mainHead").text("Choose a category at the top")
}
else {
    $("#mainHead").text("Choose a category on the left")
}

numOfBlanks.css("z-index", "-2")
numOfBlanks.css("font-size", "1px")

// When category is clicked
cat.on("click", function() 
{
    // Screen width <= 750px
    if($(window).width() <= 750)
    {
        if(peopleCheck.is(':disabled'))
        {
            // Phrase is 10 or more characters
            if(numOfBlanks.innerHTML >= 8)
            {
                blanks.css("width", "50%")
            }
            // Phrase is 5 or more characters
            else if(numOfBlanks.innerHTML >= 5)
            {
                blanks.css("width", "30%")
            }
            // Phrase is less than 5 characters
            else if(numOfBlanks.innerHTML < 5)
            {
                blanks.css("width", "25%")
            }
        }
    }
    // Screen width > 800px
    else if($(window).width() > 800)
    {
        if(peopleCheck.is(':disabled'))
        {
            // Phrase is 10 or more characters
            if(numOfBlanks.innerHTML >= 8)
            {
                blanks.css("width", "35%")
            }
            // Phrase is 5 or more characters
            else if(numOfBlanks.innerHTML >= 5)
            {
                blanks.css("width", "20%")
            }
            // Phrase is less than 5 characters
            else if(numOfBlanks.innerHTML < 5)
            {
                blanks.css("width", "10%")
            }
        }
    }
})

// When page loads
$(document).ready(function() 
{
    // Change invis text
    if($(window).width() < 750)
    {
        invis.html("mmmmmmmmmmmm")
    }
})

