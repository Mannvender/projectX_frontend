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

// ==== showing images on hover =====
$(function () {
    let mainImageContainer = $('#mainImgContainer');
    let rightView = $('#rightView');
    let leftView = $('#leftView');
    let frontView = $('#frontView');
    let backView = $('#backView');
    frontView.mouseover(() => {
        let img = frontView.clone();
        mainImageContainer.empty();
        mainImageContainer.append(img);
        frontView.removeClass('border-transparent').addClass('border-solid');
    }).mouseout(() => {
        frontView.removeClass('border-solid').addClass('border-transparent');
    });
    rightView.mouseover(() => {
        let img = rightView.clone();
        mainImageContainer.empty();
        mainImageContainer.append(img);
        rightView.removeClass('border-transparent').addClass('border-solid');
    }).mouseout(() => {
        rightView.removeClass('border-solid').addClass('border-transparent');
    });
    leftView.mouseover(() => {
        let img = leftView.clone();
        mainImageContainer.empty();
        mainImageContainer.append(img);

        leftView.removeClass('border-transparent').addClass('border-solid');
    }).mouseout(() => {
        leftView.removeClass('border-solid').addClass('border-transparent');
    });
    backView.mouseover(() => {
        let img = backView.clone();
        mainImageContainer.empty();
        mainImageContainer.append(img);

        backView.removeClass('border-transparent').addClass('border-solid');
    }).mouseout(() => {
        backView.removeClass('border-solid').addClass('border-transparent');
    });
});


// ==== size selector =====
function setBackground(circle) {
    circle.siblings().css({'background': 'white', 'color': 'black'});
    circle.css({'background': 'black', 'color': 'white'})
}
