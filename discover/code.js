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

// ==== AJAX calls =====
let designHolder = $('#designHolder');
let searchTitle = $('#searchTitle');
designHolder.empty();
let topWear = 0;
let sex = 'male';
let designCatagory = 1;
getDesigns(topWear, sex, designCatagory);

function objCountUpdate(newCount) {
    let Holder = $('#numItems');
    Holder.empty();
    Holder.append(newCount + ' Items')
}

function searchTitleUpdate(topWear, sex, designCatagory) {
    let newTitle = '';
    if (topWear == 0) {
        newTitle += 'Tshirts'
    } else if (topWear == 1) {
        newTitle += 'Vnecks'
    } else if (topWear == 2) {
        newTitle += 'Hoodies'
    } else {
        newTitle += 'Everything'
    }

    newTitle += ' For ';

    if (sex == 'male') {
        newTitle += 'Men'
    } else if (sex == 'female') {
        newTitle += 'Women'
    } else {
        newTitle += 'Both'
    }

    searchTitle.empty();
    searchTitle.append(newTitle);
}

$('#catagoryRadio input').on('change', function () {
    topWear = $('input[name=categories]:checked', '#catagoryRadio').val();
    designHolder.empty();
    getDesigns(topWear, sex, designCatagory);
});

$('#genderRadio input').on('change', function () {
    sex = $('input[name=gender]:checked', '#genderRadio').val();
    designHolder.empty();
    getDesigns(topWear, sex, designCatagory);
});

$('#themeRadio input').on('change', function () {
    designCatagory = $('input[name=themes]:checked', '#themeRadio').val();
    designHolder.empty();
    getDesigns(topWear, sex, designCatagory);
});


function getDesigns(topWear, sex, designCatagory) {
    searchTitleUpdate(topWear, sex, designCatagory);
    $.ajax({
        url: 'http://localhost:5252/designs/custom?topWear=' + topWear + '&sex=' + sex + '&designCatagory=' + designCatagory,
        method: 'GET',
        success: renderShirts
    });
}


function renderShirts(data) {
    objCountUpdate(data.count);
    data.rows.forEach(design => {
        let teaserBlock = $(`<div class="teaser-block">
        <img class="teaser-img" src="../img/tshirt_front.png" alt="">
    </div>`);


        let designArea = $('<div class="design-area"></div>');

        let designAttributes = JSON.parse(design.designAttributes);

        console.log(designAttributes.images);

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
        designHolder.append(teaserBlock);
    });
}