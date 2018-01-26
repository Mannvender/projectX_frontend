let input = document.getElementById("img_input");
let image = document.getElementById("image");

input.addEventListener('change', changeImage);

function changeImage() {
    let image = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        document.getElementById("image").style.backgroundImage = 'url(' + reader.result + ')';
    }
}

image.addEventListener('mousedown', prepareToMoveImage);
image.addEventListener('mouseup', () => window.removeEventListener('mousemove', moveImage));

let initialX;
let initialY;

function prepareToMoveImage(event) {
    initialX = event.pageX - event.target.offsetLeft;
    initialY = event.pageY - event.target.offsetTop;
    window.addEventListener('mousemove', moveImage);
}

function moveImage(e) {
    let posX = e.pageX - initialX;
    let posY = e.pageY - initialY;
    image.style.left = posX + 'px';
    image.style.top = posY + 'px';
}