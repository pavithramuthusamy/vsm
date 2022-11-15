

$(document).on('resize, ready', function() {
    if($(window).width() > 1300) {
        $('.knowledge__background').remove();
        $('.main').addClass('knowledge__background');
    }
    console.log("sdfgd");
});