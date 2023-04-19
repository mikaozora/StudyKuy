const body = document.querySelector("body")
const overlay = document.querySelector(".overlay")
const checkoutBtn = document.querySelector(".btn-checkout")
const btnModal = document.querySelector(".btn-modal")

checkoutBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.add('active')
    console.log("test");
})

btnModal.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.remove('active')
    window.location.href = "#"
})
overlay.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.remove('active')
})