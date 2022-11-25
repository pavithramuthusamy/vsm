const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  
   navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  
})

function headerClick() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
