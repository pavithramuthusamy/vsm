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
//         $('.cm__background').remove();
//         $('.main').addClass('cm__background');
//     }
//     console.log("sdfgd");
// });