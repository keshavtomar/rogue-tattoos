import $ from 'jquery';


$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('tav').addClass('black');
    }

    else {
        $('tav').removeClass('black');
    }
})