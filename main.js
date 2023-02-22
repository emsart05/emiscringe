document.cookie = "SameSite=Strict; Secure"

import projects from './nav.js'
let colCont = document.querySelector(".column-cont")

let contactImg = $(".contact-img")
let cAll = $(".c-all")
let contactInfo = $(".contact-info")

if($(window).width() >= 1050) {
    $("#youtube-video").css("width", "360px")
    $("#youtube-video").css("height", "220px")

}

if($(window).width() < 1050) {
    $("#navBar").css("padding", "25px 15px 15px 15px")

    if($(window).width() < 1015) {
        $("#main").css("width", "55%")
    }

    if($(window).width() < 850) {
        cAll.width("60%")
        cAll.css("flex-direction", `column`)
        cAll.css("align-items", "center")
        contactInfo.css("width", "90%")
        contactInfo.css("margin", "10px")
    }

    if($(window).width() < 725) {
        cAll.width("62%")
        contactImg.css("width", "95%")
    }
}

// .contact-img configure
if($(window).width() < 1286) {
    cAll.css("width", `${cAll.width()+50}px`)
    contactImg.css("width", `${contactImg.width()+25}px`)
}

contactImg.css("height", `${contactImg.width()}px`)
