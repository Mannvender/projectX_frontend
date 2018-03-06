// TODO: Send userID
let designAttributes = {};
let sex = 'male';
let topWear = 0;
let images = [];
let texts = [];


function sendDesign() {
    // designAttributes.tshirtColor = $('#tshirt_block').css('background-color');

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

    let color = $('#tshirt_block').css('background-color');
    designAttributes.images = images;
    designAttributes.texts = texts;
    let designAttributesInJson = JSON.stringify(designAttributes);
    $('#price_inp').val(cost);
    $('#sex_inp').val(sex);
    $('#topWear_inp').val(topWear);
    $('#name_inp').val($('#designName').val());
    $('#owner_inp').val($('#designOwner').val());
    $('#catagory_inp').val($('#designType').val());
    $('#color_inp').val(color);

    document.getElementById('design_form').submit();
}



