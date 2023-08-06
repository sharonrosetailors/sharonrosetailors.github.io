
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
          items:3
        },
        1000:{
          items:4
        }
      }
    })
  });// Owl Carousel initialization code here
});


document.querySelector("#product_link").addEventListener('click',  async () => {
  
  document.querySelector('#toggle_products').click()
  
  // Wait for a certain time (e.g., x milliseconds) before scrolling
  await new Promise(resolve => setTimeout(resolve, 500));

  const productSection = document.querySelector("#product_section");

  if (productSection) {
    productSection.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }


})



