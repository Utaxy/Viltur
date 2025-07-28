const slides=document.querySelectorAll('.slides img');
const quotes=document.querySelectorAll('.quote')
let slideIndex=0;
let intervalId=null;
let quoteIndex=0;
let quoteIntervalId=null;

document.addEventListener('DOMContentLoaded',initializeSlider);

function initializeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000)
    }
}

function showSlide(index){
    if(index>=slides.length){
        slideIndex=0
    }else if(index <0){
        slideIndex=slides.length-1;
    }

    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', initializeQuotes);
function initializeQuotes(){
    if(quotes.length>0){
        quotes[quoteIndex].classList.add("displayQuote");
        quoteIntervalId = setInterval(nextQuote, 7000)
    }
}

function showQuote(index){
    if(index>=quotes.length){
        quoteIndex=0
    }else if(index <0){
        quoteIndex=quotes.length-1;
    }

    quotes.forEach(quote=>{
        quote.classList.remove("displayQuote");
    });
    quotes[quoteIndex].classList.add("displayQuote")
}
function nextQuote(){
    quoteIndex++;
    showQuote(quoteIndex);
}

