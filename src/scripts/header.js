import $ from 'jquery';

$(function () {
    $(".menu-icon").on("click", function () {
        $("tav ul").toggleClass("showing");
    });
});


// $(document).on("ready", function () {
//     $(".menu-icon").on("click", function () {
//         console.log("clicked");
//         $("tav ul").toggleClass("showing");
//     });
// });

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('tav').addClass('black');
    }

    else {
        $('tav').removeClass('black');
    }
})