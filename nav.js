const bar = document.getElementById("navBar")
const webArtLink = document.createElement("a")
const projects = document.createElement("a")

// WEB ART
webArtLink.className = "navLinks"
webArtLink.innerHTML = "Web 'Art'"
webArtLink.href = "https://www.emiscringe.ml/webArt"

// PROJECTS
projects.className = "navLinks"
projects.innerHTML = "Projects"
projects.href = "https://www.emiscringe.ml/projects"

bar.appendChild(webArtLink)
bar.appendChild(projects)
