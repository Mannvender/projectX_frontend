// TODO: Send userID
let designArea = $('#design_area_front');
let designAreaWidth = parseInt(designArea.css('width'));
let designAreaHeight = parseInt(designArea.css('height'));
let designAttributes = {};
let topWear = 0;
let images = [];
let texts = [];


function sendDesign() {
    // designAttributes.tshirtColor = $('#tshirt_block').css('background-color');

    $('.image').each((index, element) => {
        let jqElement = $(element);
        let imageDetails = {};
        // lets send height, width, top, left in %
        let heightInPx = parseInt(jqElement.css('height'));
        let widthInPx = parseInt(jqElement.css('width'));
        let topInPx = parseInt(jqElement.css('top'));
        let leftInPx = parseInt(jqElement.css('left'));

        imageDetails.height = (heightInPx / designAreaHeight) * 100;
        imageDetails.width = (widthInPx / designAreaWidth) * 100;
        imageDetails.top = (topInPx / designAreaHeight) * 100;
        imageDetails.left = (leftInPx / designAreaWidth) * 100;
        imageDetails.isFront = jqElement.parent().attr('id') === 'design_area_front';
console.log(imageDetails);
        images.push(imageDetails);
    });

    $('.text').each((index, element) => {
        let jqElement = $(element);
        let textDetails = {};
        let topInPx = parseInt(jqElement.css('top'));
        let leftInPx = parseInt(jqElement.css('left'));

        textDetails.content = jqElement.text().replace(/\W/g, '');
        textDetails.fontSize = jqElement.css('font-size');
        // textDetails.fontFamily = jqElement.css('font-family');
        textDetails.color = jqElement.css('color');
        textDetails.top = (topInPx / designAreaHeight) * 100;
        textDetails.left = (leftInPx / designAreaWidth) * 100;
        textDetails.isFront = jqElement.parent().attr('id') === 'design_area_front';

        console.log(textDetails);
        texts.push(textDetails);
    });

    let color = $('#tshirt_block').css('background-color');
    designAttributes.images = images;
    designAttributes.texts = texts;
    let designAttributesInJson = JSON.stringify(designAttributes);
    $('#price_inp').val(cost);
    $('#catagory_inp').val($('#designType').val());
    $('#color_inp').val(color);
    $('#json_inp').val(designAttributesInJson);

    document.getElementById('design_form').submit();
}



