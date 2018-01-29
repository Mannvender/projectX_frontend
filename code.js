let input = document.getElementById('img_input');
let designArea = document.getElementById('design_area');

let initialX;
let initialY;
let imageToBeMoved;

let images;

input.addEventListener('change', addImage);

function addImage() {
    let image = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        let newImage = document.createElement('div');
        newImage.className = 'images';
        newImage.onmousedown = prepareToMoveImage;
        newImage.onmouseup = stopMovingImage;
        newImage.style.backgroundImage = 'url(' + reader.result + ')';
        designArea.appendChild(newImage);
        images = $(".images");
        images.resizable();
    }
}

function prepareToMoveImage(event) {
    initialX = event.pageX - event.target.offsetLeft;
    initialY = event.pageY - event.target.offsetTop;
    imageToBeMoved = event.target;
    event.target.style.cursor = 'move';
    window.addEventListener('mousemove', moveImage);
}

function moveImage(event) {
    let posX = event.pageX - initialX;
    let posY = event.pageY - initialY;
    imageToBeMoved.style.left = posX + 'px';
    imageToBeMoved.style.top = posY + 'px';
}

function stopMovingImage() {
    window.removeEventListener('mousemove', moveImage);
    event.target.style.cursor = 'default';
    alignImageInsideDesignArea();
}

function alignImageInsideDesignArea() {
    let widthOfDesignArea = parseInt(window.getComputedStyle(designArea).width);
    let widthOfImage = parseInt(window.getComputedStyle(imageToBeMoved).width);
    let heightOfDesignArea = parseInt(window.getComputedStyle(designArea).height);
    let heightOfImage = parseInt(window.getComputedStyle(imageToBeMoved).height);

    let minimumLeft = 0;
    let minimumTop = 0;
    let maximumLeft = widthOfDesignArea - widthOfImage;
    let maximumTop = heightOfDesignArea - heightOfImage;

    let currentLeft = parseInt(window.getComputedStyle(imageToBeMoved).left);
    let currentTop = parseInt(window.getComputedStyle(imageToBeMoved).top);

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