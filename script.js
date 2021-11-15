function openModal(){
    document.getElementById("myModal").style.display = "block";
}

function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plus_slides(n){
    showSlides(slideIndex += n);
}

function current_slide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captiontext = document.getElementById("caption");

    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slides[i].style.display = "none"
    }

    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captiontext.innerHTML = dots[slideIndex - 1].alt;
}