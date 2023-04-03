let banners = [
    {
        image: "assets/images/banner/banner-1.png",
        caption: "Be a professional programmer with us"
    },
    {
        image: "assets/images/banner/banner-2.png",
        caption: "Only in 30 days you can built your own app"
    },
    {
        image: "assets/images/banner/banner-3.png",
        caption: "Learn to secure your data from hacker"
    }
]

let banner = document.getElementById("banner")
let next = document.getElementById("next-btn")
let prev = document.getElementById("prev-btn")
let idx = 0
let auto

function clearBanner() {
    banner.lastElementChild.remove()
    banner.lastElementChild.remove()
}

function setBanner() {
    let img = document.createElement("img")
    img.src = banners[idx].image
    let caption = document.createElement("h3")
    caption.innerHTML = banners[idx].caption

    banner.appendChild(img)
    banner.appendChild(caption)
}

next.addEventListener("click", (e)=>{
    idx++;
    if (idx >= banners.length) {
        idx = 0
    }
    clearBanner()
    setBanner()
    window.clearInterval(auto)
    autoSlider()
})

prev.addEventListener("click", (e)=>{
    idx--;
    if (idx < 0) {
        idx = banners.length-1
    }
    clearBanner()
    setBanner()
    window.clearInterval(auto)
    autoSlider()
})

function autoSlider() {
    auto = setInterval(()=>{
        idx++;
        if (idx >= banners.length) {
            idx = 0
        }
        clearBanner()
        setBanner()
    }, 5000)
}

setBanner()
autoSlider()