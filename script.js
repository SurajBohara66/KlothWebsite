let slides = document.querySelector('.newArrivals-images');
let nextBtn = document.querySelector(".nextSlide");
let prevBtn = document.querySelector(".prevSlide");
let images = document.querySelectorAll(".slide")
let counter = 1;
const length = images.length;
let nextSlide = () =>{
    slides.style.transform = `translateX(-${counter * 500}px)`;
    counter++;
}
let getfirstSlide = () =>{
    slides.style.transform = `translateX(0px)`;
    counter = 1;
}
nextBtn.addEventListener("click" , () =>{
    if (counter < length) {
        nextSlide()
    }
    else{
        getfirstSlide()
    }
 
})
let prevSlide = () =>{
    slides.style.transform = `translateX(-${(counter-2) * 500}px)`;
    counter--;
}
let getlastSlide = () =>{
    slides.style.transform = `translateX(-${(length-1) * 500}px)`;
    counter = length;
}
prevBtn.addEventListener("click" , () =>{
    if (counter > 1) {
        prevSlide()
    }
    else{
        getlastSlide()
    }
 
})