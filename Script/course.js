let courses = [
    {
        name: "Mobile Development",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/mobile-dev.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["mobile-dev"],
        rating: 4
    },
    {
        name: "Web Development",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/web-dev.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["web-dev"],
        rating: 4
    },
    {
        name: "Data Analyst",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/data-analyst.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["analyst", "promo"],
        rating: 4
    },
    {
        name: "UI/UX Design",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/ui-ux-design.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["design"],
        rating: 4
    },
    {
        name: "Javascript Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/javascript-course.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["web-dev"],
        rating: 4
    },
    {
        name: "HTML & CSS Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/html-css.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["web-dev"],
        rating: 4
    },
    {
        name: "MySQL Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/mysql-course.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["web-dev"],
        rating: 4
    },
    {
        name: "AI With Python",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/ai-with-python.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["programming", "ai", "popular"],
        rating: 4
    },
    {
        name: "React JS",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/react-js.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["web-dev", "popular"],
        rating: 4
    },
    {
        name: "Cyber Security",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/cyber-security.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["security", "popular"],
        rating: 4
    },
    {
        name: "Basic OOP in Java",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/basic-oop-java.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["programming", "popular"],
        rating: 4
    },
    {
        name: "30 Days Package",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/30-days.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "",
        lastUpdate: "22 November 2022",
        status: ["programming", "promo"],
        rating: 4
    },
]

export let searchData = courses

let slider1 = document.getElementById("slider1")
let slider2 = document.getElementById("slider2")
let slider3 = document.getElementById("slider3")
let promo = document.getElementById("promo")

function cardBuilder(course) {
    let card = document.createElement("div")
    card.classList.add("card")

    let image = document.createElement("img")
    image.src = course.image

    let details = document.createElement("div")
    details.classList.add("card-details")

    let courseName = document.createElement("h2")
    courseName.innerHTML = course.name

    let teacher = document.createElement("p")
    teacher.innerHTML = course.teacher

    let price = document.createElement("h3")
    price.innerHTML = "Rp." + course.price

    let hours = document.createElement("p")
    hours.innerHTML = course.class + " courses . " + course.hours + " hours"

    details.appendChild(courseName.cloneNode(true))
    details.appendChild(teacher.cloneNode(true))
    details.appendChild(price)
    details.appendChild(hours.cloneNode(true))

    let back = document.createElement("div")
    back.classList.add("card-back")

    let updated = document.createElement("h4")
    updated.innerHTML = "Renewed " + course.lastUpdate

    let explain = document.createElement("p")
    explain.innerHTML = course.detail

    let btn = document.createElement("div")
    btn.classList.add("card-btn")

    let addCart = document.createElement("h2")
    addCart.innerHTML = "Add to cart"

    let save = document.createElement("img")
    save.src = "Assets/icons/bookmark.svg"

    btn.appendChild(addCart)
    btn.appendChild(save)

    back.appendChild(courseName)
    back.appendChild(hours)
    back.appendChild(updated)
    back.appendChild(explain)
    back.appendChild(btn)

    card.appendChild(image)
    card.appendChild(details)
    card.appendChild(back)

    return card
}

function loadSlider1() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        let card = cardBuilder(course)
        carousel.appendChild(card)
    });

    slider1.appendChild(carousel)
}

function loadSlider2() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        if (course.status.includes("web-dev")) {
            let card = cardBuilder(course)
            carousel.appendChild(card)
        }
    });

    slider2.appendChild(carousel)
}

function loadSlider3() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        if (course.status.includes("popular")) {
            let card = cardBuilder(course)
            carousel.appendChild(card)
        }
    });

    slider3.appendChild(carousel)
}

loadSlider1()
loadSlider2()
loadSlider3()