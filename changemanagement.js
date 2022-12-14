function headerClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

$(document).on('resize, ready', function() {
  console.log('show');
    if($(window).width() < 500) {
        // $('.cm__background').remove();
        const element = document.createElement("div");
        element.className = "cm__background";
        $('.main').prepend(element);
    }
});