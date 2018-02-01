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
    let image = input_front.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        let newImageId = numberOfImagesAdded + 1;
        let newImageDiv = $(`<div class="images" data-id="${newImageId}" style="background-image: url(${reader.result})">
                <span onclick="deleteImage(${newImageId})" class="floating-icon-container shadow delete-icon-container">
                <i class="fa fa-trash floating-icon"></i>
                </span>
            </div>`);
        if (front === true) {
            designArea_front.append(newImageDiv);
        } else {
            designArea_back.append(newImageDiv);
        }
        numberOfImagesAdded++;
        setDragableAndResizable($(newImageDiv));
    };
}

function deleteImage(imageId) {
    $(`[data-id='${imageId}']`).remove();
}

function setDragableAndResizable(jqueryElement) {
    jqueryElement.draggable().resizable();
}

function updateCost() {
    costDiv.innerHTML = 'Price : ' + cost;
}