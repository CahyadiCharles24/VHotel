let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


let currslide = 0;
let slideshowInterval;

startSlideshow(currslide);

function startSlideshow() {
  stopSlideshow();
  slideshowInterval = setInterval(() => {
    changeSlide(1);
  }, 3000);
}

function changeSlide(n) {
    currslide += n;
  
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;
  
    if (currslide >= totalSlides) {
      currslide = 0;
    } else if (currslide < 0) {
      currslide = totalSlides - 1;
    }
  
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";
    }
  
    slides[currslide].style.display = "block";
  }



function stopSlideshow() {
  clearInterval(slideshowInterval);
}

document.getElementById("nextbtn").addEventListener("click", function () {
  changeSlide(1);
  stopSlideshow();
  startSlideshow();
});

document.getElementById("prevbtn").addEventListener("click", function () {
  changeSlide(-1);
  stopSlideshow();
  startSlideshow();
});

startSlideshow();



