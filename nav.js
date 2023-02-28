const bar = document.getElementById("navBar")
const pbar = $("#pnavBar")
const webArtLink = document.createElement("a")
const projects = document.createElement("a")
const blog = document.createElement("a")
const home = document.createElement("a")

// WEB ART
webArtLink.id = "webArtLink"
webArtLink.className = "navLinks"
webArtLink.innerHTML = "Web 'Art'"
webArtLink.href = "https://www.emiscringe.dev/webArt"

// PROJECTS
projects.id = "projLink"
projects.className = "navLinks"
projects.innerHTML = "Projects"
projects.href = "https://www.emiscringe.dev/projects"

// BLOG
blog.id = "blogLink"
blog.className = "navLinks"
blog.innerHTML = "Blog"
blog.href = "https://www.emiscringe.dev/blog"

// HOME
home.id = "homeLink"
home.className = "navLinks"
home.innerHTML = "Home"
home.href = "https://www.emiscringe.dev"

console.log(document.querySelector("body").getAttribute("name"))

if(document.querySelector("body").getAttribute("name") == "projects") {
    pbar.append(home)
    pbar.append(webArtLink)
    pbar.append(projects)
    pbar.append(blog)
} else {
    bar.appendChild(home)
    bar.appendChild(webArtLink)
    bar.appendChild(projects)
    bar.appendChild(blog)
}

export default projects
