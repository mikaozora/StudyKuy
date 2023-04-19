let categories = [
    {
        name: "Web Development",
        link: ""
    },
    {
        name: "Mobile Development",
        link: ""
    },
    {
        name: "Data Analyst",
        link: ""
    },
    {
        name: "Software Engineering",
        link: ""
    },
    {
        name: "Software Testing",
        link: ""
    },
    {
        name: "UI/UX Designer",
        link: ""
    },
]

let profileLink = [
    {
        name: "Edit Profile",
        link: ""
    },
    {
        name: "Setting",
        link: ""
    },
    {
        name: "Purchase History",
        link: ""
    },
    {
        name: "Help",
        link: ""
    },
    {
        name: "Log out",
        link: "login.html"
    },
]

import { searchData } from "./course.js"

let category = document.getElementById("nav-categories")
let categoryBtn = document.getElementById("categories") 
let profile = document.getElementById("nav-logged")
let profileBtn = document.getElementById("profile")
let search = document.getElementById("search")
let searchBar = document.getElementById("nav-search")
let closeBtn = document.getElementById("close")
let lastDrop = []

categoryBtn.addEventListener("click", (e)=>{
    if (lastDrop.length == 0) {
        let drop = document.createElement("div")
        drop.classList.add("drop-categories")
        categories.forEach(el => {
            let link = document.createElement("a")
            link.href = el.link
            link.innerHTML = el.name

            drop.appendChild(link)
        });
        lastDrop.push(drop)
        category.appendChild(drop)
    } else {
        lastDrop[lastDrop.length - 1].remove()
        lastDrop.pop()
    }
})

profileBtn.addEventListener("click", (e)=>{
    if (lastDrop.length == 0) {
        let drop = document.createElement("div")
        drop.classList.add("drop-profile")

        let identity = document.createElement("div")
        identity.classList.add("identity")

        let image = document.createElement("img")
        image.src="Assets/images/john.png"

        let wrapper = document.createElement("div")
        wrapper.classList.add("profile-wrapper")

        let name = document.createElement("h3")
        name.innerHTML = "John Doe"

        let email = document.createElement("h4")
        email.innerHTML = "johndoe@gmail.com"

        wrapper.appendChild(name)
        wrapper.appendChild(email)

        identity.appendChild(image)
        identity.appendChild(wrapper)

        drop.appendChild(identity)
        let i = 0
        profileLink.forEach(el => {
            let link = document.createElement("a")
            link.href = el.link
            link.innerHTML = el.name

            if (i == 0 || i == 3) {
                let line = document.createElement("hr")
                drop.appendChild(line)
            }
            drop.appendChild(link)
            i++
        });

        profile.appendChild(drop)
        lastDrop.push(drop)
    } else {
        lastDrop[lastDrop.length - 1].remove()
        lastDrop.pop()
    }
})

function closeSearch() {
    closeBtn.classList.add("hidden")
    searchBar.value = ""
    while (lastDrop.length != 0) {
        lastDrop[lastDrop.length - 1].remove()
        lastDrop.pop()
    }
}

closeBtn.addEventListener("click", closeSearch)

searchBar.addEventListener("input", (e)=> {
    let searchVal = searchBar.value
    if (closeBtn.classList.contains("hidden")) {
        closeBtn.classList.remove("hidden")
    }

    if (searchVal == "" || searchVal.length == 0) {
        closeSearch()
        return
    }

    while (lastDrop.length != 0) {
        lastDrop[lastDrop.length - 1].remove()
        lastDrop.pop()
    }

    let drop = document.createElement("div")
    drop.classList.add("search-result")
    searchData.forEach(el => {
        let temp = el.name
        if (temp.toLowerCase().includes(searchVal.toLowerCase())) {
            let link = document.createElement("a")
            link.href = "#" + el.link
            link.innerHTML = el.name
            link.addEventListener("click", closeSearch)

            drop.appendChild(link)
        }
    });

    if (drop.children.length == 0) {
        let noFound = document.createElement("p")
        noFound.innerHTML = "No result..."
        drop.appendChild(noFound)

        search.appendChild(drop)
        lastDrop.push(drop)
    } else {
        search.appendChild(drop)
        lastDrop.push(drop)
    }
})