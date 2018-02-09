window.addEventListener('scroll', () => {
    oVal = ($(window).scrollTop() / 3);
    big_image.css({
        'transform':'translate3d(0,' + oVal +'px,0)',
        '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
        '-ms-transform':'translate3d(0,' + oVal +'px,0)',
        '-o-transform':'translate3d(0,' + oVal +'px,0)'
    });
})