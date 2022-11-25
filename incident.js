function headerClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// $(document).on('resize, ready', function() {
//     if($(window).width() > 1300) {
//         $('.incident__background').remove();
//         $('.main').addClass('incident__background');
//     }
//     console.log("sdfgd");
// });