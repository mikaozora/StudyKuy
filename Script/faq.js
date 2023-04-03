let data = [
    {
        question: "Can beginners join in learning?",
        explain: "Our mentors have provided free classes that beginners can learn to understand the basic knowledge of the career they are interested in, after completing the Starter class (free) we recommend that you continue to one of the Premium classes to build real-world projects and portfolios according to your needs. working standards."
    },
    {
        question: "Can I use multiple discount codes?",
        explain: "No, you can only use one discount codes."
    },
    {
        question: "what benefits do i get?",
        explain: "Courses on websites are designed to provide you with comprehensive and up-to-date information about a specific topic. By taking a course, you can expand your knowledge and improve your skills in that area."
    },
    {
        question: "How do I enroll in a course?",
        explain: "o enroll in a course, simply visit the course page and click on the \"Enroll\" button. Follow the prompts to create an account or log in to your existing account, and complete the payment process."
    },
    {
        question: "What happens if I have technical difficulties while taking a course?",
        explain: "Our support team is always available to help you with any technical difficulties you may encounter while taking a course. You can contact us through our support page, and we will respond as quickly as possible to help you resolve the issue."
    },
    {
        question: "Can I get a refund if I'm not satisfied with a course?",
        explain: "Yes, we offer a satisfaction guarantee for all of our courses. If you are not satisfied with a course, you can request a refund within a certain time frame (usually 30 days). Please see our refund policy for more details."
    },
]

let faqs = document.getElementsByClassName("faq-container")
let faq = document.getElementById("faq-content")

data.forEach(el => {
    let container = document.createElement("div")
    container.classList.add("faq-container")

    let question = document.createElement("div")
    question.classList.add("faq-question")
    let main = document.createElement("h2")
    main.innerHTML = el.question
    let arrow = document.createElement("i")
    arrow.classList.add("fa-solid")
    arrow.classList.add("fa-chevron-right")
    arrow.classList.add("faq-arrow")
    question.appendChild(main)
    question.appendChild(arrow)

    let explain = document.createElement("div")
    explain.classList.add("faq-explain")
    explain.classList.add("faq-hidden")
    let p = document.createElement("p")
    p.innerHTML = el.explain
    explain.appendChild(p)

    container.appendChild(question)
    container.appendChild(explain)

    container.addEventListener("click", (e)=>{
        if (arrow.classList.contains("faq-arrow-focused")) {
            arrow.classList.remove("faq-arrow-focused")
            explain.classList.add("faq-hidden")
        } else {
            arrow.classList.add("faq-arrow-focused")
            explain.classList.remove("faq-hidden")
        }
    })

    faq.appendChild(container)
});

// for (let i = 0; i < faqs.length; i++) {
//     faqs[i].addEventListener("click", (e)=>{
//         let arrow = faqs[i].firstElementChild.lastElementChild
//         if (arrow.classList.contains("faq-arrow-focused")) {
//             arrow.classList.remove("faq-arrow-focused")
//             faqs[i].lastElementChild.classList.add("faq-hidden")
//         } else {
//             arrow.classList.add("faq-arrow-focused")
//             faqs[i].lastElementChild.classList.remove("faq-hidden")
//         }
//     })
// }