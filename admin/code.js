let designsWrapper = $('#designs_wrapper');

$.ajax({
    url: 'http://localhost:5252/designs/all',
    method: 'GET',
    success: renderShirts
});

function renderShirts(data) {
    console.log(data);

    data.forEach(design => {
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
        designsWrapper.append(teaserBlock);
    });
}