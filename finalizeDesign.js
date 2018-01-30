let hideOverflowBorders = $('#hide-overflow-borders');

hideOverflowBorders.click(function () {
    console.log('finalLook');
    designArea.style.cssText = 'border: 0px; overflow : hidden';
    $('.images').css('border', '0px');
});
