const images = document.getElementsByClassName("c-image")
let currentImage = 0;
const allImages = images.length
let nextButton = document.getElementById("btn-next")
let prevButton = document.getElementById("btn-prev")

let dots = document.getElementsByClassName("dot")

nextButton.addEventListener('click', nextImage)

prevButton.addEventListener('click', prevImage)

function clearAllImages(){
    for(const image of images){
        image.classList.add('non')
        image.classList.remove('show')
    }
}
function clearAllDots(){
    for(const dot of dots){
        dot.classList.remove('active')
    }
}
function prevImage(){
    clearAllDots()
    clearAllImages()

    if(currentImage === 0){
        currentImage = allImages - 1
    }else{
        currentImage --
    }
    images[currentImage].classList.add('show')
    dots[currentImage].classList.add('active')
}

function nextImage(){
    clearAllDots()
    clearAllImages()

    if(currentImage === allImages - 1){
        currentImage =  0
    }else{
        currentImage ++
    }
    images[currentImage].classList.add('show')
    dots[currentImage].classList.add('active')
}