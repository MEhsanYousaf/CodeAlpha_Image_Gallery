const nexBtn = document.getElementById('nexBtn')
const preBtn = document.getElementById('preBtn')
const slides = document.querySelector('.slides')
const slide = document.querySelector('.slide')
const allSlides = document.querySelectorAll('.slide')
const width = allSlides[0].offsetWidth
const gap = 10

let index = 0
const totalSlides = allSlides.length
function moveNext() {
    if (index < totalSlides - 1) {
        index++;
    }
    else {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * (width + gap)}px)`;
}

function movePre() {
    if (index > 0) {
        index--;

    }
    else {
        index = totalSlides - 1
    }
    slides.style.transform = `translateX(-${index * (width + gap)}px)`
}
let reset = setInterval(moveNext, 3000)

function resetTimer() {
    clearInterval(reset);

    reset = setInterval(moveNext, 3000)
}

nexBtn.addEventListener('click', () => {
    moveNext();
    resetTimer();
})
preBtn.addEventListener('click', () => {
    movePre();
    resetTimer();
})


const popup = document.querySelector('.popup')
const images= document.querySelectorAll('img')
const popupImg= document.getElementById('popup-image')
const close = document.getElementById("close")
const content= document.querySelector(".content")

images.forEach(image => {
    image.addEventListener('click', ()=>{
        popupImg.src = image.src
        popup.classList.add('clicked')
        content.classList.add('bodyblur')
    })
    
});
close.addEventListener("click", ()=>{
    popup.classList.remove('clicked')
        content.classList.remove('bodyblur')

})

