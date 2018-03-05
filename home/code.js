/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});
particlesJS();

$(function () {
    let tempBar = $('#temp-bar');
    let logo = $('#logo');
    let logoBackground = $('.hexagon');
    let logoAfter = $('#logo-after');
    let logoAfterBackground = $('.hexagon-after');

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let os = tempBar.offset().top;
        let ht = tempBar.height();
        if (scroll > os + ht) {
            logo.removeClass('d-md-block').addClass('d-md-none');
            logoBackground.removeClass('d-md-block').addClass('d-md-none');
            logoAfter.removeClass('d-md-none').addClass('d-md-block');
            logoAfterBackground.removeClass('d-md-none').addClass('d-md-block');
        }
    });
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll < 20) {
            logo.removeClass('d-md-none').addClass('d-md-block');
            logoBackground.removeClass('d-md-none').addClass('d-md-block');
            logoAfter.removeClass('d-md-block').addClass('d-md-none');
            logoAfterBackground.removeClass('d-md-block').addClass('d-md-none');
        }
    });
});

$('#carousel_wrapper').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: true,
    pauseOnHover: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});