// Grabbing elements
const body = document.querySelector("body")
const centerContainer = document.getElementById("main")
const introText = document.getElementById("intro")
const para = document.getElementById("para")
const row = document.getElementById("row")
const row1 = document.getElementById("row1")
const iconRow = document.getElementById("icons")
const lblRow = document.getElementById("lbls")

// Creating elements
let links = []

// GITHUB
const git = document.createElement("a")
git.href = "https://github.com/emsart05"
git.className = "linkClass"

const gitIcon = document.createElement("img")
gitIcon.src = "./images/icons/github.jpg"
gitIcon.style.width = "100%"
git.appendChild(gitIcon)

links.push(git)

// PINTEREST
const pinterest = document.createElement("a")
pinterest.href = "https://www.pinterest.com/dirtytoeuwu/"
pinterest.className = "linkClass"

const pinterestIcon = document.createElement("img")
pinterestIcon.src = "./images/icons/pinterest.jpg"
pinterestIcon.style.width = "100%"
pinterest.appendChild(pinterestIcon)
links.push(pinterest)

// SPOTIFY
const spotify = document.createElement("a")
spotify.href = "https://open.spotify.com/user/tp00mgzlevmy23ly9d2gefdyb?si=e48a5cbf4e68486b"
spotify.className = "linkClass"

const spotifyIcon = document.createElement("img")
spotifyIcon.src = "./images/icons/spotify.jpg"
spotifyIcon.style.width = "100%"
spotify.appendChild(spotifyIcon)

links.push(spotify)

// INSTAGRAM
const instagram = document.createElement("a"); const instaIcon = document.createElement("img")
instagram.href = "https://www.instagram.com/em.is.cringe/"
instagram.className = "linkClass"

instagram.appendChild(instaIcon)
instaIcon.src = "./images/icons/instagram.jpg"
instaIcon.style.width = "100%"

links.push(instagram)


for(let i = 0; i < links.length; i++) {
    links[i].target = "_blank"
    row1.appendChild(links[i])

    links[i].onmouseover = function() {
        let cwidth = 4
        this.style.width = `${cwidth}%`
        cwidth += 0.5
        this.style.width = `${cwidth}%`
    }
    links[i].onmouseout = function() {
        let cwidth = 4
        this.style.width = `${cwidth}%`
    }
}

introText.innerHTML = "emiscringe"
para.innerHTML = "Just sharing my interests :)"