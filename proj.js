// Elements
let projBlock = $(".proj-block")
let projImg = $(".proj-ss")
let navBar = $("#projects-nav")
let navItem = $(".proj-nav-item")
let body = $("#projects-body")
let projTitle = $(".proj-title")
let navBg = $("#navBackground")
let cap = $(".cap")

// When page loads
$(document).ready(function(){
    // Window width less than 500 pixels
    if($(window).width() < 500) {
        // Project blocks
        projBlock.css("grid-template-rows", "repeat(3 33%)")
        projBlock.css("left", "8px")

        // Screenshots
        projImg.css("width", "250px")
        projImg.css("margin-top", "5px")

        // Nav bar
        navBar.css("flex-wrap", "wrap")

        // Nav items
        navItem.css("font-size", "14px")
        navItem.css("padding", "8px")

        // Body
        body.css("top", "45px")

        // Title
        projTitle.css("font-size", "20px")

        // Caption
        cap.css("font-size", "14px")
        cap.css("padding-top", "15px")
        cap.css("padding-bottom", "15px")
    }

    // Window width between 500 and 700
    else if($(window).width() <= 750 && $(window).width() > 500) {
        // Nav items
        navItem.css("font-size", "16px")
        navItem.css("padding", "10px")

        // Project blocks
        projBlock.css("top", "15px")

        // Screenshots
        projImg.css("margin-top", "10px")

        // Title
        projTitle.css("font-size", "14px")

        // Caption
        cap.css("font-size", "13px")
    }

    // Window width between 700 and 1050
    else if($(window).width() < 1075 && $(window).width() > 750) {
        // Project blocks
        projBlock.css("grid-template-columns", "repeat(3 33%)")
        projTitle.css("font-size", "16px")
        projTitle.css("margin-top", "10px")

        navItem.css("padding", "20px")
        navItem.css("font-size", "18px")
    }

    navBg.css("height", navBar.css("height"))
});