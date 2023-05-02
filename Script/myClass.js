let faqData = [
    {
        title: "Chapter 1: Introduction",
        subTitle: "6 Episodes"
    },
    {
        title: "Chapter 2: Basic",
        subTitle: "3 Episodes"
    },
    {
        title: "Chapter 3: Repeat",
        subTitle: "3 Episodes"
    },
    {
        title: "Chapter 4: Application",
        subTitle: "3 Episodes"
    },
    {
        title: "Chapter 5: Advanced",
        subTitle: "3 Episodes"
    }
]

let faqs = document.getElementsByClassName("faq-container")
let faq = document.getElementById("faq-content")

faqData.forEach(el => {
    let container = document.createElement("div")
    container.classList.add("faq-container")

    let title = document.createElement("div")
    title.classList.add("faq-title")
    let main = document.createElement("h2")
    main.innerHTML = el.title
    let arrow = document.createElement("i")
    arrow.classList.add("fa-solid")
    arrow.classList.add("fa-chevron-right")
    arrow.classList.add("faq-arrow")
    title.appendChild(main)
    title.appendChild(arrow)

    let subTitle = document.createElement("div")
    subTitle.classList.add("faq-subTitle")
    let main1 = document.createElement("h2")
    main1.innerHTML = el.subTitle
    let arrow1 = document.createElement("i")
    arrow.classList.add("fa-solid")
    arrow.classList.add("fa-chevron-right")
    arrow.classList.add("faq-arrow")
    subTitle.appendChild(main1)
    subTitle.appendChild(arrow1)

    container.appendChild(title)
    container.appendChild(subTitle)

    faq.appendChild(container)
});