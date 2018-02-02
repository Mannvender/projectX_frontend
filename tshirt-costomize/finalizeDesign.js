let hideOverflowBorders = $('#hide-overflow-borders');
let continueEditing = $('#continue_editing');

hideOverflowBorders.click(function () {
    $('div[id^="design_area_"], div[id*=" design_area_"]').css({'overflow': 'hidden'});
    // JQuery prefix selector visit - https://stackoverflow.com/questions/3204632/jquery-get-a-element-class-based-on-a-prefix
    $('div[class^="images_"], div[class*=" images_"]').css('border', '0px')
});

continueEditing.click(function () {
    $('div[id^="design_area_"], div[id*=" design_area_"]').css({'overflow': 'visible'});
});
