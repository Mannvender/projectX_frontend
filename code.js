let input_front = document.getElementById('img_input_front');
let designArea_front = document.getElementById('design_area_front');
let input_back = document.getElementById('img_input_back');
let designArea_back = document.getElementById('design_area_back');

let initialX;
let initialY;
let imageToBeMoved;

let images_front;
let images_back;

input_front.addEventListener('change', addImageFront);
input_back.addEventListener('change', addImageBack);

function addImageFront() {
    let image = input_front.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        let newImageDiv = document.createElement('div');
        newImageDiv.className = 'images_front';
        newImageDiv.onmousedown = prepareToMoveImage;
        newImageDiv.onmouseup = stopMovingImage;
        newImageDiv.style.backgroundImage = 'url(' + reader.result + ')';
        designArea_front.appendChild(newImageDiv);
        images_front = $(".images_front");
        setResizable(images_front);
        addCloseBtn(images_front, 'front');
    }
}

function addImageBack() {
    let image = input_back.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        let newImageDiv = document.createElement('div');
        newImageDiv.className = 'images_back';
        newImageDiv.onmousedown = prepareToMoveImage;
        newImageDiv.onmouseup = stopMovingImage;
        newImageDiv.style.backgroundImage = 'url(' + reader.result + ')';
        designArea_back.appendChild(newImageDiv);
        images_back = $(".images_back");
        setResizable(images_back);
        addCloseBtn(images_back, 'back');
    }
}

function setResizable(jqueryElement) {
    jqueryElement.resizable();
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
    // alignImageInsideDesignArea();
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

function addCloseBtn(JQueryElement, FrontOrBack) {
    // append CloseButton to last element of JQueryElement it get
    var b = $('<button type="button" class="close" aria-label="Close">\n' +
        '  <span aria-hidden="true">&times;</span>\n' +
        '</button>');
    JQueryElement.last().append(b);
    b.click(() => {
        JQueryElement.last().remove();
        if (FrontOrBack === 'front') {
            input_front.value = '';
        } else {
            input_back.value = '';
        }
    })
}