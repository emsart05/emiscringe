
// Navbar growth animation
$("#webArtLink").on("mouseenter", function() {
    $("#webArtLink").animate({fontSize: 28}, "fast")
})
$("#webArtLink").on("mouseleave", function() {
    $("#webArtLink").animate({fontSize: 25}, "fast")
})

$("#projLink").on("mouseenter", function() {
    $("#projLink").animate({fontSize: 28}, "fast")
})
$("#projLink").on("mouseleave", function() {
    $("#projLink").animate({fontSize: 25}, "fast")
})


var socialLink = $(".socialLink")
var linkBox = $("#linkBox")
var socialIcon = $(".iconImg")
var navItem = $(".navLinks")
var linkCont = $("#linkCont")
var intro = $("#intro")
var para = $("#para")
var main = $("#main")
var grid = $("#grid")

// MOBILE VIEW


if($(window).width() < 1000) 
{
    // Phone
    if($(window).width() < 350) 
    {
        socialIcon.css("border-radius", "15px")

        socialIcon.css("width", "100%")
        linkCont.css("width", "60%")
        linkBox.css("width", "75%")

        socialIcon.css("margin", "0px")
        linkBox.css("margin", "0px")
        linkBox.css("padding", "0px")
        navItem.css("padding", "5px")
        linkCont.css("padding", "5px")
        grid.css("margin-top", "0px")

        para.css("font-size", "15px")
        intro.css("font-size", "35px")
    }

    else if($(window).width() < 500) 
    {
        socialIcon.css("border-radius", "12px")

        socialIcon.css("width", "100%")
        linkCont.css("width", "45%")
        linkBox.css("width", "25%")
        main.css("width", "50%")

        socialIcon.css("margin", "0px")
        linkBox.css("margin", "0px")
        linkBox.css("padding", "0px")
        navItem.css("padding", "5px")
        linkCont.css("padding", "5px")
        grid.css("margin-top", "0px")
        main.css("padding", "50px")

        para.css("font-size", "15px")
        intro.css("font-size", "35px")
    }

    // Tablet
    else 
    {
        main.css("width", "55%")
        para.css("font-size", "22px")
        intro.css("font-size", "50px")
        intro.css("padding", "0px")
        navItem.css("padding", "12px")
        navItem.css("font-size", "35px")
    }

    if($(window).width() == 320) {
        grid.css("margin-top", "150px")
    }
}
