// function for loading different views of t-shirt and colours
$(function () {
    let tshirtBlock = $('#tshirt-block');
    let frontViewBtn = $('#frontViewBtn');
    let backViewBtn = $('#backViewBtn');

    let whiteBtn = $('#white-btn');
    let blueBtn = $('#blue-btn');
    let redBtn = $('#red-btn');
    let greenBtn = $('#green-btn');
    let blackBtn = $('#black-btn');
    let yellowBtn = $('#yellow-btn');
    let greyBtn = $('#grey-btn');


    frontViewBtn.click(function () {
        tshirtBlock.css('background-image', 'url(./img/tshirt_front.jpg)');
    });

    backViewBtn.click(function () {
        tshirtBlock.css('background-image', 'url(./img/png_back.png)');
    });

    whiteBtn.click(function () {
        console.log("whitebtn fired");
        tshirtBlock.css('background-color', 'white');
    });
    blueBtn.click(function () {
        console.log("bluebtn fired");
        tshirtBlock.css('background-color', '#007bff');
    });
    redBtn.click(function () {
        tshirtBlock.css('background-color', '#bf2525');
    });
    greenBtn.click(function () {
        tshirtBlock.css('background-color', '#37cb36');
    });
    blackBtn.click(function () {
        tshirtBlock.css('background-color', '#110e0e');
    });
    yellowBtn.click(function () {
        tshirtBlock.css('background-color', '#e1da1e');
    });
    greyBtn.click(function () {
        tshirtBlock.css('background-color', 'grey');
    });


});

