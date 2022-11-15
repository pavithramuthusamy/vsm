
$(document).on('resize, ready', function() {
  if($(window).width() > 1300) {
      $('.itsm__background').remove();
      $('.main').addClass('itsm__background');
  }
  console.log("sdfgd");
});