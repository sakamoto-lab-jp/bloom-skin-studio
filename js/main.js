// ----------- ハンバーガーメニュー ----------- //
var hamburger = $('.hamburger-nav');

$('.hamburger-button').on('click', function () {
    $(this).toggleClass('active');
    $('.hamburger-nav').toggleClass('hamburger-nav-active');
});

$('.hamburger-nav a[href]').on('click', function(event) {
    $('.hamburger-button').trigger('click');
});

$(window).on('resize', function () {
    hamburger.removeClass('hamburger-nav-active');
});

// ----------- アコーディオンメニュー ----------- //
$(".faq-question-title").on("click", function (e) {
    $(this).toggleClass("open");
    var content = $(this).next();
    content.slideToggle();
});