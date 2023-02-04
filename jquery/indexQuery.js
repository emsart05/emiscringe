
var socialLink = $(".socialLink")
var linkBox = $("#linkBox")
var socialIcon = $(".iconImg")
var navItem = $(".navLinks")
var linkCont = $("#linkCont")
var intro = $("#intro")
var para = $("#para")
var main = $("#main")
var grid = $("#grid")

var body = $("body")
var ytContainer = $("yt-container")
var ytVideo = $("youtube-video")
var mainAndLinks = $(".main-and-links")

var platform = ""

// MOBILE VIEW
if($(window).width() < 1000) 
{
    // Phone
    if($(window).width() < 400) 
    {
        platform = "phone"
        console.log(platform)
        socialIcon.css("border-radius", "15px")

        socialIcon.css("width", "80%")
        linkCont.css("width", "60%")
        linkBox.css("width", "25%")
        linkBox.css("height", "100%")

        socialIcon.css("margin", "0px")
        linkBox.css("margin", "0px")
        linkBox.css("padding", "0px")
        navItem.css("padding", "5px")
        linkCont.css("padding", "5px")

        para.css("font-size", "15px")
        intro.css("font-size", "35px")
        navItem.css("font-size", "18px")

        grid.css("flex-direction", "column")
        grid.css("align-items", "center")
        grid.css("margin-top", "0px")
        grid.css("gap", "75px")

        main.css("width", "75%")
        main.css("padding", "25px")
        mainAndLinks.css("width", "90%")
        mainAndLinks.css("height", "50%")
        mainAndLinks.css("border", "0px solid black")

        if($(window).width() <= 376) {
            navItem.css("margin", "5px")
            navItem.css("padding", "0px")

            ytVideo.css("width", "200px")
            ytVideo.css("height", "300px")
        }
    }

    else if($(window).width() < 500) 
    {
        platform = "phone"
        console.log(platform)
        socialIcon.css("border-radius", "12px")

        socialIcon.css("width", "60%")
        linkBox.css("width", "25%")
        linkBox.css("height", "100%")

        socialIcon.css("margin", "0px")
        linkBox.css("margin", "0px")
        linkBox.css("padding", "0px")
        navItem.css("padding", "5px")
        linkCont.css("padding", "0px")
        grid.css("margin-top", "0px")
        main.css("padding", "50px")
        linkCont.css("padding-top", "5px")
        linkCont.css("padding-bottom", "5px")

        para.css("font-size", "15px")
        intro.css("font-size", "35px")
        navItem.css("font-size", "25px")

        main.css("height", "70%")
        main.css("width", "40%")
        main.css("padding", "25px")
        mainAndLinks.css("width", "90%")
        mainAndLinks.css("height", "100%")
        mainAndLinks.css("border", "0px solid black")

        grid.css("flex-direction", "column")
        grid.css("align-items", "center")
        grid.css("gap", "75px")
    }

    // Tablet
    else 
    {
        platform = "tablet"
        console.log(platform)
        grid.css("align-items", "center")
        main.css("width", "75%")
        para.css("font-size", "20px")
        intro.css("font-size", "50px")
        intro.css("padding", "0px")
        navItem.css("padding", "12px")
        navItem.css("font-size", "30px")
        mainAndLinks.css("margin-top", "100px")
        
        if($(window).width() < 600) {
            grid.css("gap", "50px")
            mainAndLinks.css("width", "75%")
            mainAndLinks.css("margin-top", "100px")
            navItem.css("padding", "0px")
            grid.css("flex-direction", "column")

            if($(window).width() < 550) {
                intro.css("font-size", "35px")
                para.css("font-size", "15px")
            }
        }
    }
}
else {
    platform = "desktop"
    console.log(platform)
}

let links = ["#webArtLink", "#projLink", "#blogLink"]
links.forEach((link) => {
    if(platform == "phone") {
        $(`${link}`).on("mouseenter", function() {
            $(`${link}`).animate({fontSize: 28}, "fast")
        })
        $(`${link}`).on("mouseleave", function() {
            $(`${link}`).animate({fontSize: 25}, "fast")
        })
    }
    else if(platform == "tablet") {
        $(`${link}`).on("mouseenter", function() {
            $(`${link}`).animate({fontSize: 33}, "fast")
        })
        $(`${link}`).on("mouseleave", function() {
            $(`${link}`).animate({fontSize: 30}, "fast")
        })
    }
    else if(platform == "desktop") {
        $(`${link}`).on("mouseenter", function() {
            $(`${link}`).animate({fontSize: 28}, "fast")
        })
        $(`${link}`).on("mouseleave", function() {
            $(`${link}`).animate({fontSize: 25}, "fast")
        })
    }
})
