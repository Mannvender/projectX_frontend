let bigImage = $('#big_image');

window.addEventListener('scroll', () => {
    scrolledDistance = $(window).scrollTop() / 3;
    bigImage.css({
        'transform':'translate3d(0,' + scrolledDistance +'px,0)',
        '-webkit-transform':'translate3d(0,' + scrolledDistance +'px,0)',
        '-ms-transform':'translate3d(0,' + scrolledDistance +'px,0)',
        '-o-transform':'translate3d(0,' + scrolledDistance +'px,0)'
    });
})