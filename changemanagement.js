$(document).on('resize, ready', function() {
    if($(window).width() > 1300) {
        $('.cm__background').remove();
        $('.main').addClass('cm__background');
    }
    console.log("sdfgd");
});