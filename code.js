let input = document.getElementById("img_input");

input.addEventListener('change', changeImage);

function changeImage() {
    let image = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        document.getElementById("design_area").style.backgroundImage = 'url(' + reader.result + ')';
    }

}