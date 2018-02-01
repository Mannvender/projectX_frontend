let input_front = document.getElementById('img_input_front');
let designArea_front = $('#design_area_front');
let input_back = document.getElementById('img_input_back');
let designArea_back = $('#design_area_back');
let costDiv = document.getElementById('cost_div');

let cost = 299;

input_front.addEventListener('change', () => addImage(true));
input_back.addEventListener('change', () => addImage(false));

function addImage(front) {
    cost += 50;
    updateCost();
    let image = input_front.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
        let newImageDiv = $(`<div class="images_front" style="background-image: url(${reader.result})">
</div>`);
        setDragableAndResizable($(newImageDiv));
        if (front === true) {
            designArea_front.append(newImageDiv);
        } else {
            designArea_back.append(newImageDiv);
        }
    }
}

function setDragableAndResizable(jqueryElement) {
    jqueryElement.draggable().resizable();
}

function addCloseBtn(JQueryElement, FrontOrBack) {
    // append CloseButton to last element of JQueryElement it get
    let b = $('<button type="button" class="close" aria-label="Close">\n' +
        '  <span aria-hidden="true">&times;</span>\n' +
        '</button>');
    JQueryElement.last().append(b);
    b.click(() => {
        cost -= 50;
        updateCost();
        JQueryElement.last().remove();
        if (FrontOrBack === 'front') {
            input_front.value = '';
        } else {
            input_back.value = '';
        }
    })
}

function updateCost() {
    costDiv.innerHTML = 'Price : ' + cost;
}