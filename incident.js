$(document).on('resize, ready', function() {
    if($(window).width() > 1300) {
        $('.incident__background').remove();
        $('.main').addClass('incident__background');
    }
    console.log("sdfgd");
});