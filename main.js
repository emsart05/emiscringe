document.cookie = "SameSite=Strict; Secure"

import projects from './nav.js'
let colCont = document.querySelector(".column-cont")

let contactImg = $(".contact-img")
let cAll = $(".c-all")
let contactInfo = $(".contact-info")

if($(window).width() < 1050) {
    $("#navBar").css("padding", "25px 15px 15px 15px")

    if($(window).width() < 1015) {
        $("#main").css("width", "55%")
    }

    if($(window).width() < 725) {
        cAll.css("flex-direction", `column`)
        cAll.css("align-items", "center")
        contactImg.css("width", "95%")
        contactInfo.css("width", "99%")
    }
}

// .contact-img configure
if($(window).width() < 1286) {
    cAll.css("width", `${cAll.width()+50}px`)
    contactImg.css("width", `${contactImg.width()+25}px`)
}
