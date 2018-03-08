let popularDesignWrapper = $('#popular_designs_wrapper');
let newArrivalsWrapper = $('#new_design_wrapper');

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

$.ajax({
    url: 'http://localhost:5252/designs/all',
    method: 'GET',
    success: renderShirtsPopular
});

function renderShirtsPopular(data) {
    data.forEach(design => {
        let teaserBlock = $(`<div class="teaser-block">
        <img class="teaser-img" src="../img/tshirt_front.png" alt="">
    </div>`);


        let designArea = $('<div class="design-area"></div>');

        let designAttributes = JSON.parse(design.designAttributes);

        designAttributes.images.forEach(element => {
            let image = $(`<img src="http://localhost:5252/images/${element.name}">`);
            image.css({
                'height': (parseInt(element.height) / 2) + 'px',
                'width': (parseInt(element.width) / 2) + 'px',
                'position': 'absolute',
                'top': (parseInt(element.top) / 2) + 'px',
                'left': (parseInt(element.left) / 2) + 'px'
            });

            designArea.append(image);
        });
        teaserBlock.append(designArea);
        popularDesignWrapper.append(teaserBlock);
    });
    initialiseCarousel(popularDesignWrapper);
}

$.ajax({
    url: 'http://localhost:5252/designs/all',
    method: 'GET',
    success: renderShirtsNew
});

function renderShirtsNew(data) {
    data.forEach(design => {
        let teaserBlock = $(`<div class="teaser-block">
        <img class="teaser-img" src="../img/tshirt_front.png" alt="">
    </div>`);


        let designArea = $('<div class="design-area"></div>');

        let designAttributes = JSON.parse(design.designAttributes);

        designAttributes.images.forEach(element => {
            let image = $(`<img src="http://localhost:5252/images/${element.name}">`);
            image.css({
                'height': (parseInt(element.height) / 2) + 'px',
                'width': (parseInt(element.width) / 2) + 'px',
                'position': 'absolute',
                'top': (parseInt(element.top) / 2) + 'px',
                'left': (parseInt(element.left) / 2) + 'px'
            });

            designArea.append(image);
        });
        teaserBlock.append(designArea);
        newArrivalsWrapper.append(teaserBlock);
    });
    initialiseCarousel(newArrivalsWrapper);
}

function initialiseCarousel(parent) {
    parent.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
}
