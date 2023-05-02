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
        id: "392854",
        lastUpdate: "22 November 2022",
        status: ["mobile-dev"],
        rating: 4,
        discount: "70%"
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
        id: "469246",
        lastUpdate: "22 November 2022",
        status: ["web-dev"],
        rating: 4,
        discount: "70%"
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
        id: "805313",
        lastUpdate: "22 November 2022",
        status: ["analyst", "promo"],
        rating: 4,
        discount: "70%"
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
        id: "945565",
        lastUpdate: "22 November 2022",
        status: ["design"],
        rating: 4,
        discount: "70%"
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
        id: "124807",
        lastUpdate: "22 November 2022",
        status: ["web-dev","webDev"],
        rating: 4,
        discount: "70%"
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
        id: "158348",
        lastUpdate: "22 November 2022",
        status: ["web-dev","webDev"],
        rating: 4,
        discount: "70%"
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
        id: "905461",
        lastUpdate: "22 November 2022",
        status: ["web-dev","webDev"],
        rating: 4,
        discount: "70%"
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
        id: "537724",
        lastUpdate: "22 November 2022",
        status: ["programming", "ai", "popular","mob-dev"],
        rating: 4,
        discount: "70%"
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
        id: "368035",
        lastUpdate: "22 November 2022",
        status: ["web-dev", "popular"],
        rating: 4,
        discount: "70%"
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
        id: "135832",
        lastUpdate: "22 November 2022",
        status: ["security", "popular", "promo"],
        rating: 4,
        discount: "70%"
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
        id: "895160",
        lastUpdate: "22 November 2022",
        status: ["programming", "popular"],
        rating: 4,
        discount: "70%"
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
        id: "149638",
        lastUpdate: "22 November 2022",
        status: ["programming", "promo"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Android Development",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/android.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "1343123",
        lastUpdate: "22 November 2022",
        status: ["mob-dev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Kotlin",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/kotlin.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "677637",
        lastUpdate: "22 November 2022",
        status: ["mob-dev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "C++ Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/c++.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "987678",
        lastUpdate: "22 November 2022",
        status: ["mob-dev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Ruby Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/ruby.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "45678987",
        lastUpdate: "22 November 2022",
        status: ["mob-dev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "C# Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/c-sharp.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "9098789",
        lastUpdate: "22 November 2022",
        status: ["mob-dev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "PHP Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/php-course.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "56789098",
        lastUpdate: "22 November 2022",
        status: ["webDev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Wordpress Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/wordpress.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "3456789    ",
        lastUpdate: "22 November 2022",
        status: ["webDev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "XML Course",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/xml.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "456789    ",
        lastUpdate: "22 November 2022",
        status: ["webDev"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Insight For Business...",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/insight.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "567890    ",
        lastUpdate: "22 November 2022",
        status: ["dataAnalyst"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Maximizing Data for...",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/maximazing-data.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "5678098",
        lastUpdate: "22 November 2022",
        status: ["dataAnalyst"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Tools for Data Analysts",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/tools-data.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "67876",
        lastUpdate: "22 November 2022",
        status: ["dataAnalyst"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "From Data to Action",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/from-data.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "56787",
        lastUpdate: "22 November 2022",
        status: ["dataAnalyst"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Advanced Analyst",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/advanced-analytics.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "567898",
        lastUpdate: "22 November 2022",
        status: ["dataAnalyst"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Techniques Predictive...",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/techniques.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "567898",
        lastUpdate: "22 November 2022",
        status: ["dataAnalyst"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Programming Language",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/programming.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "4567898",
        lastUpdate: "22 November 2022",
        status: ["software"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Computer Security",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/computer-security.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "67898",
        lastUpdate: "22 November 2022",
        status: ["software"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Software Maintenance",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/software-engineer.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "67567898898",
        lastUpdate: "22 November 2022",
        status: ["software"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Software Debugging",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/software-debugging.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "567898",
        lastUpdate: "22 November 2022",
        status: ["software"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Develop Program",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/develop-program.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "67898",
        lastUpdate: "22 November 2022",
        status: ["software"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Database",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/database.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "678987",
        lastUpdate: "22 November 2022",
        status: ["software"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Usability Testing",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/usability.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "567809",
        lastUpdate: "22 November 2022",
        status: ["UI"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Interactive Design",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/interactive.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "678987",
        lastUpdate: "22 November 2022",
        status: ["UI"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Website First Design",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/website.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "67898762",
        lastUpdate: "22 November 2022",
        status: ["UI"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Mobile First Design",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/mobile-first.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "1234567890",
        lastUpdate: "22 November 2022",
        status: ["UI"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "Sketches to Prototypes",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/sketches.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "0987678",
        lastUpdate: "22 November 2022",
        status: ["UI"],
        rating: 4,
        discount: "70%"
    },
    {
        name: "User Experiences",
        link: "",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        image: "../assets/images/class/user-experiences.png",
        teacher: "John Doe",
        class: 10,
        hours: 55,
        price: "100.000",
        id: "9879098",
        lastUpdate: "22 November 2022",
        status: ["UI"],
        rating: 4,
        discount: "70%"
    },
]

export let searchData = courses

let slider1 = document.getElementById("slider1")
let slider2 = document.getElementById("slider2")
let slider3 = document.getElementById("slider3")
let mobDev = document.getElementById("mobDev")
let webDev = document.getElementById("webDev")
let dataAnalyst = document.getElementById("dataAnalyst")
let software = document.getElementById("software")
let UI = document.getElementById("UI")
let promo = document.getElementById("promo")

function changeBtn(btn) {
    if (btn.classList.contains("added")) {
        btn.classList.remove("added")
        btn.classList.add("standby")
        btn.innerHTML = "Add to cart"
    } else {
        btn.classList.add("added")
        btn.classList.remove("standby")
        btn.innerHTML = "Remove this item"
    }
}

function cardBuilder(course) {
    let card = document.createElement("div")
    card.classList.add("card")
    card.id = course.id

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
    addCart.classList.add("standby")
    addCart.addEventListener("click", (e)=>changeBtn(addCart))

    let save = document.createElement("img")
    save.src = "Assets/icons/bookmark.svg"
    save.addEventListener("click", (e)=>{
        if (save.src.includes("Assets/icons/bookmark.svg")) {
            save.src ="Assets/icons/bookmark-fill.svg"
        } else {
            save.src = "Assets/icons/bookmark.svg"
        }
    })

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

function promoBuilder(course) {
    let promotion = document.createElement("div")
    promotion.classList.add("promo")

    let image = document.createElement("img")
    image.src = course.image

    let banner = document.createElement("div")
    banner.classList.add("promo-banner")

    let discount = document.createElement("h3")
    discount.innerHTML = course.discount + " discount"

    banner.appendChild(discount)

    let details = document.createElement("div")
    details.classList.add("promo-details")

    let courseName = document.createElement("h2")
    courseName.innerHTML = course.name

    let rating = document.createElement("div")
    rating.classList.add("promo-rating")

    for (let i = 0; i < course.rating; i++) {
        let star = document.createElement("img")
        star.src = "Assets/icons/star.svg"

        rating.appendChild(star)
    }

    let price = document.createElement("h3")
    price.innerHTML = "Rp. " + course.price

    let promoPrice = document.createElement("div")
    promoPrice.classList.add("promo-price")

    let disc = document.createElement("h4")
    disc.innerHTML = course.discount

    let finalPrice = document.createElement("h3")
    finalPrice.innerHTML = "Rp. " + "299.000"

    promoPrice.appendChild(disc)
    promoPrice.appendChild(finalPrice)

    let desc = document.createElement("h5")
    desc.innerHTML = "Description:"

    let explain = document.createElement("p")
    explain.innerHTML = course.detail

    let btn = document.createElement("div")
    btn.classList.add("promo-btn")

    let addCart = document.createElement("h2")
    addCart.innerHTML = "Add to cart"
    addCart.classList.add("standby")
    addCart.addEventListener("click", (e)=>changeBtn(addCart))

    let save = document.createElement("img")
    save.src = "Assets/icons/bookmark.svg"
    save.addEventListener("click", (e)=>{
        if (save.src.includes("Assets/icons/bookmark.svg")) {
            save.src ="Assets/icons/bookmark-fill.svg"
        } else {
            save.src = "Assets/icons/bookmark.svg"
        }
    })

    btn.appendChild(addCart)
    btn.appendChild(save)

    details.appendChild(courseName)
    details.appendChild(rating)
    details.appendChild(price)
    details.appendChild(promoPrice)
    details.appendChild(desc)
    details.appendChild(explain)
    details.appendChild(btn)

    promotion.appendChild(image)
    promotion.appendChild(banner)
    promotion.appendChild(details)

    return promotion
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

function loadMobDev() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        if (course.status.includes("mob-dev")) {
            let card = cardBuilder(course)
            carousel.appendChild(card)
        }
    });

    mobDev.appendChild(carousel)
}

function loadWebDev() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        if (course.status.includes("webDev")) {
            let card = cardBuilder(course)
            carousel.appendChild(card)
        }
    });

    webDev.appendChild(carousel)
}

function loadDataAnalyst() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        if (course.status.includes("dataAnalyst")) {
            let card = cardBuilder(course)
            carousel.appendChild(card)
        }
    });

    dataAnalyst.appendChild(carousel)
}

function loadSoftware() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        if (course.status.includes("software")) {
            let card = cardBuilder(course)
            carousel.appendChild(card)
        }
    });

    software.appendChild(carousel)
}

function loadUI() {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel")

    courses.forEach(course => {
        if (course.status.includes("UI")) {
            let card = cardBuilder(course)
            carousel.appendChild(card)
        }
    });

    UI.appendChild(carousel)
}



function loadPromo() {
    let promos = document.createElement("div")
    promos.classList.add("promos")

    courses.forEach(course => {
        if (course.status.includes("promo")) {
            let promotion = promoBuilder(course)
            promos.appendChild(promotion)
        }
    });
    
    promo.appendChild(promos)
}

if (slider1 != null) {
    loadSlider1()
    loadSlider2()
    loadSlider3()
    loadPromo()
}

if (mobDev != null) {
    loadMobDev()
}

if (webDev != null) {
    loadWebDev()
}

if (dataAnalyst != null) {
    loadDataAnalyst()
}

if (software != null) {
    loadSoftware()
}

if (UI != null) {
    loadUI()
}