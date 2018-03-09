// TODO: Send userID
let designArea = $('#design_area_front');
let dAreaWidth = designArea.css('width');
dAreaWidth = parseInt(dAreaWidth);
let dAreaHt = designArea.css('height');
dAreaHt = parseInt(dAreaHt);
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
        let height = jqElement.css('height');
        let width = jqElement.css('width');
        let top = jqElement.css('top');
        let left = jqElement.css('left');
        imageDetails.height = (parseInt(height) / dAreaHt) * 100;
        imageDetails.width = (parseInt(width) / dAreaWidth) * 100;
        imageDetails.top = (parseInt(top) / dAreaHt) * 100;
        imageDetails.left = (parseInt(left) / dAreaWidth) * 100;
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
    $('#catagory_inp').val($('#designType').val());
    $('#color_inp').val(color);
    $('#json_inp').val(designAttributesInJson);

    document.getElementById('design_form').submit();
}



