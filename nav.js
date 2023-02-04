const bar = document.getElementById("navBar")
const webArtLink = document.createElement("a")
const projects = document.createElement("a")
const blog = document.createElement("a")

// WEB ART
webArtLink.id = "webArtLink"
webArtLink.className = "navLinks"
webArtLink.innerHTML = "Web 'Art'"
webArtLink.href = "https://www.emiscringe.ml/webArt"

// PROJECTS
projects.id = "projLink"
projects.className = "navLinks"
projects.innerHTML = "Projects"
projects.href = "https://www.emiscringe.ml/projects"

// BLOG
blog.id = "blogLink"
blog.className = "navLinks"
blog.innerHTML= "Blog"
blog.href = "https://www.emiscringe.ml/blog"

bar.appendChild(webArtLink)
bar.appendChild(projects)
bar.appendChild(blog)