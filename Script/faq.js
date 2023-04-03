let faqs = document.getElementsByClassName("faq-container")

for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", (e)=>{
        let arrow = faqs[i].firstElementChild.lastElementChild
        if (arrow.classList.contains("faq-arrow-focused")) {
            arrow.classList.remove("faq-arrow-focused")
            faqs[i].lastElementChild.classList.add("faq-hidden")
        } else {
            arrow.classList.add("faq-arrow-focused")
            faqs[i].lastElementChild.classList.remove("faq-hidden")
        }
    })
}