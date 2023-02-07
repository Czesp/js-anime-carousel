 const slides = document.querySelectorAll('.slide');
 const nextButton = document.querySelector('.btn-right');
 const prevButton = document.querySelector('.btn-left');

let currentSlide = 0;

 slides.forEach(function(slide,index){
  slide.style.transform = `translateX(${index * 100}%)`
 });
 nextButton.addEventListener('click', function() {
   currentSlide = currentSlide + 1;
   if(currentSlide==slides.length){
    currentSlide = currentSlide-4;
   }
     slides.forEach(function(slide, index) {
      slide.style.transform = `translateX(${(index - currentSlide)*100}%)`
    });
 });
 
 prevButton.addEventListener('click', function() {
   currentSlide = currentSlide - 1;
   if(currentSlide==slides.length-5){
    currentSlide = currentSlide + 4;
   }

    slides.forEach(function(slide, index) {
      slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`
    });
 });

