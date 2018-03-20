let bigImage = $('#big_image');
let name = $('#name');
let aboutMe = $('#aboutMe');

let userDetails;
let designHolder = $('#designHolder');
// vars will pick up userId from query
let vars = {};
let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
});

getUserDetails();

function getUserDetails() {
    getDesigns();
    $.ajax({
        url: 'http://localhost:5252/users',
        data: {
            userId: vars.userId
        },
        method: 'GET',
        success: updateUserDetails
    });
}

function updateUserDetails(userData) {
    name.html(userData.userName)
}

function getDesigns() {
    $.ajax({
        url: 'http://localhost:5252/designs/search',
        data: {
            designOwner: vars.userId
        },
        method: 'GET',
        success: renderDesigns,
    });
}

function renderDesigns(designs) {
    console.log(designs);
}

window.addEventListener('scroll', () => {
    scrolledDistance = $(window).scrollTop() / 3;
    bigImage.css({
        'transform': 'translate3d(0,' + scrolledDistance + 'px,0)',
        '-webkit-transform': 'translate3d(0,' + scrolledDistance + 'px,0)',
        '-ms-transform': 'translate3d(0,' + scrolledDistance + 'px,0)',
        '-o-transform': 'translate3d(0,' + scrolledDistance + 'px,0)'
    });
});