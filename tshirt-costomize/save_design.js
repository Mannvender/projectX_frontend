// TODO: Send userID
let designAttributes = {};
let images = [];
let texts = [];

function saveDesign() {
    designAttributes.tshirtColor = $('#tshirt_block').css('background-color');

    $('.image').each((index, element) => {
        let jqElement = $(element);
        let imageDetails = {};

        imageDetails.height = jqElement.css('height');
        imageDetails.width = jqElement.css('width');
        imageDetails.top = jqElement.css('top');
        imageDetails.left = jqElement.css('left');
        imageDetails.isFront = jqElement.parent().attr('id') === 'design_area_front';

        images.push(imageDetails);
    });

    $('.text').each((index, element) => {
        let jqElement = $(element);
        let textDetails = {};

        textDetails.content = jqElement.text().replace(/\W/g, '');
        textDetails.fontSize = jqElement.css('font-size');
        // textDetails.fontFamily = jqElement.css('font-family');
        textDetails.color = jqElement.css('color');
        textDetails.top = jqElement.css('top');
        textDetails.left = jqElement.css('left');
        textDetails.isFront = jqElement.parent().attr('id') === 'design_area_front';

        texts.push(textDetails);
    });

    designAttributes.images = images;
    designAttributes.texts = texts;

    let designAttributesInJson = JSON.stringify(designAttributes);
    $('#json_inp').val(designAttributesInJson);

    document.getElementById('design_form').submit();
}



