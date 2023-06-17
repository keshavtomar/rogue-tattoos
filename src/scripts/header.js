import $ from 'jquery';

$(".menu-icon").on("click", function () {
    console.log("clicked");
    $("tav ul").toggleClass("showing");
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('tav').addClass('black');
    }

    else {
        $('tav').removeClass('black');
    }
})