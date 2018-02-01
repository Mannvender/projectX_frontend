let input_front = document.getElementById('img_input_front');
let designArea_front = $('#design_area_front');
let input_back = document.getElementById('img_input_back');
let designArea_back = $('#design_area_back');
let costDiv = document.getElementById('cost_div');

let cost = 299;
let numberOfImagesAdded = 0;

input_front.addEventListener('change', () => addImage(true));
input_back.addEventListener('change', () => addImage(false));

function addImage(front) {
    cost += 50;
    updateCost();
    let image;
    front ? image = input_front.files[0] : image = input_back.files[0] ;
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        let newImageId = numberOfImagesAdded + 1;
        let newImageDiv = $(`<div class="images" data-id="${newImageId}" style="background-image: url(${reader.result})">
                <span onclick="deleteImage(${newImageId})" class="floating-icon-container shadow delete-icon-container">
                <i class="fa fa-trash floating-icon"></i>
                </span>
            </div>`);
        front ? designArea_front.append(newImageDiv) : designArea_back.append(newImageDiv);
        numberOfImagesAdded++;
        setDragableAndResizable($(newImageDiv));
    };
}

function deleteImage(imageId) {
    $(`[data-id='${imageId}']`).remove();
}

function setDragableAndResizable(jqueryElement) {
    jqueryElement.draggable({
        snap: true,
        cursor: 'move',
        stop: alignImageInsideDesignArea
    }).resizable({
        // animate: true,
        // animateEasing: "easeOutBounce",
        // ghost: true,
        containment: 'parent'
    });
}

function alignImageInsideDesignArea(event) {
    let imageToBeMoved = $(event.target);
    let designArea = imageToBeMoved.parent();

    let borderWidthOfDesignArea = parseInt(designArea.css('border-width'));
    let widthOfDesignArea = parseInt(designArea.css('width')) - (2 * borderWidthOfDesignArea);
    let heightOfDesignArea = parseInt(designArea.css('height')) - (2 * borderWidthOfDesignArea);
    let widthOfImage = parseInt(imageToBeMoved.css('width'));
    let heightOfImage = parseInt(imageToBeMoved.css('height'));

    let minimumLeft = 0;
    let minimumTop = 0;
    let maximumLeft = widthOfDesignArea - widthOfImage;
    let maximumTop = heightOfDesignArea - heightOfImage;

    let currentLeft = parseInt(imageToBeMoved.css('left'));
    let currentTop = parseInt(imageToBeMoved.css('top'));

    let reAdjustedLeft;
    let reAdjustedTop;

    if (currentLeft < minimumLeft) {
        reAdjustedLeft = minimumLeft;
    } else if (currentLeft > maximumLeft) {
        reAdjustedLeft = maximumLeft;
    } else {
        reAdjustedLeft = currentLeft;
    }

    if (currentTop < minimumTop) {
        reAdjustedTop = minimumTop;
    } else if (currentTop > maximumTop) {
        reAdjustedTop = maximumTop;
    } else {
        reAdjustedTop = currentTop;
    }

    $(imageToBeMoved).animate({left: reAdjustedLeft, top: reAdjustedTop});
}

function updateCost() {
    costDiv.innerHTML = 'Price : ' + cost;
}