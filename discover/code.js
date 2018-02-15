// ===== Hiding and Showing Navbar ======
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

// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});


// ===== hiding logo-after when navbar toggler is pressed ======
$(function () {
    let logoAfter = $('#logo-after');
    let logoAfterBackground = $('.hexagon-after');
    let clicked = false;
    $('.navbar-toggler').on('click', () => {
        if (!clicked) {
            clicked = true;
            logoAfter.removeClass('d-block').addClass('d-none');
            logoAfterBackground.removeClass('d-block').addClass('d-none');
        } else {
            setTimeout(function () {
                clicked = false;
                logoAfter.removeClass('d-none').addClass('d-block');
                logoAfterBackground.removeClass('d-none').addClass('d-block');
            }, 500);

        }
    })
});

// ==== removing blur and hiding size options =====
function setBackground(circle) {
    let sizeOptions = circle.closest('.sizeOptions');
    sizeOptions.siblings().css({'-webkit-filter-': 'blur(0px)', 'filter': 'blur(0px)'});
    sizeOptions.removeClass("d-inline").addClass("d-none");
}

// ==== showing size options on clicking add-TO-cart button ====
function showSizeOptions(button) {
    let img = button.parent().parent().siblings().first();
    let sizeOptions = img.nextAll().eq(0);
    img.css({'-webkit-filter-': 'blur(5px)', 'filter': 'blur(5px)'});
    sizeOptions.removeClass("d-none").addClass("d-inline");
}