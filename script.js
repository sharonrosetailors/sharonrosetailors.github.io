
console.log("hi there")




  $(document).ready(function(){
   $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav: false,
      dots: false,     
      autoplay:true, // enable autoplay
      autoplayTimeout:3000, // set autoplay interval to 3 seconds
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })
  });// Owl Carousel initialization code here
});
