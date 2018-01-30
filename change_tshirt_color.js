// function for loading different views of t-shirt and colours
let tshirtBlock = $('#tshirt_block');
let transparentImage = $('#transparent_image');
let frontViewBtn = $('#frontViewBtn');
let backViewBtn = $('#backViewBtn');

let whiteBtn = $('#white-btn');
let blueBtn = $('#blue-btn');
let redBtn = $('#red-btn');
let greenBtn = $('#green-btn');
let blackBtn = $('#black-btn');
let yellowBtn = $('#yellow-btn');
let greyBtn = $('#grey-btn');

$('#img_input_back').hide();
$('#design_area_back').hide();

frontViewBtn.click(() => {
    transparentImage.attr('src', './img/tshirt_front.png');
    $('#img_input_back').hide();
    $('#design_area_back').hide();
    $('#img_input_front').show();
    $('#design_area_front').show();

});

backViewBtn.click(() => {
    transparentImage.attr('src', './img/tshirt_back.png');
    $('#img_input_front').hide();
    $('#design_area_front').hide();
    $('#img_input_back').show();
    $('#design_area_back').show();
});

whiteBtn.click(() => {
    tshirtBlock.css('background-color', 'white');
});
blueBtn.click(() => {
    tshirtBlock.css('background-color', '#007bff');
});
redBtn.click(() => {
    tshirtBlock.css('background-color', '#bf2525');
});
greenBtn.click(() => {
    tshirtBlock.css('background-color', '#37cb36');
});
blackBtn.click(() => {
    tshirtBlock.css('background-color', '#110e0e');
});
yellowBtn.click(() => {
    tshirtBlock.css('background-color', '#e1da1e');
});
greyBtn.click(() => {
    tshirtBlock.css('background-color', 'grey');
});
