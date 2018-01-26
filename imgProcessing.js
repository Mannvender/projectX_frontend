// reads image from input box and puts it in #preview div
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// above function is called when there is a change in input box
$("#upload-design").change(function () {
    readURL(this);
});


$(function () {
    // makes dragBox div - draggable
    //source - w3school
    dragElement(document.getElementById("dragBox"));

    function dragElement(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {

        e = e || window.event;
        // get mouse cursor at beginning
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDragged;
    }

    function elementDragged(e) {
        e = e || window.event;

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        // position of div
        let offsetLeft = document.getElementById('dragBox').offsetLeft;
        let offsetTop = document.getElementById('dragBox').offsetTop;

        // position of parent div
        let parentWidth = document.getElementById('edit-box').offsetWidth;
        let parentHeight = document.getElementById('edit-box').offsetHeight;

        let newLeft = (offsetLeft - pos1);
        let newTop = (offsetTop - pos2);

        //set element's new position
        if (parentWidth < newLeft || parentHeight < newTop) {
            // for handling right and lower limits
            if (parentWidth < newLeft && parentHeight < newTop) {
                document.getElementById('dragBox').style.left = parentWidth + "px";
                document.getElementById('dragBox').style.top = parentHeight + "px";

            } else if (parentWidth < newLeft) {
                document.getElementById('dragBox').style.left = parentWidth + "px";
                document.getElementById('dragBox').style.top = newTop + "px";
            } else if (parentHeight < newTop) {
                document.getElementById('dragBox').style.top = parentHeight + "px";
                document.getElementById('dragBox').style.left = newLeft + "px";
            }

        } else {
            //getting image width
            let imgWidth = document.getElementById('preview').offsetWidth;
            let imgHeight = document.getElementById('preview').offsetHeight;


            if (-1 * imgWidth > newLeft || -1 * imgHeight > newTop) {
                // handling left and top limits
                if (-1 * imgWidth > newLeft && -1 * imgHeight > newTop) {
                    document.getElementById('dragBox').style.left = -1 * imgWidth + "px";
                    document.getElementById('dragBox').style.top = -1 * imgHeight + "px";

                } else if (parentWidth < newLeft) {
                    document.getElementById('dragBox').style.left = -1 * imgWidth + "px";
                    document.getElementById('dragBox').style.top = newTop + "px";
                } else if (parentHeight < newTop) {
                    document.getElementById('dragBox').style.top = -1 * imgHeight + "px";
                    document.getElementById('dragBox').style.left = newLeft + "px";
                }
            } else {
                // in case image is in limits
                document.getElementById('dragBox').style.left = newLeft + "px";
                document.getElementById('dragBox').style.top = newTop + "px";
            }

        }


    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
});

// function for loading different views of t-shirt and colours
$(function () {
    let tshirtBlock = $('#tshirt-block');
    let frontViewBtn = $('#frontViewBtn');
    let backViewBtn = $('#backViewBtn');

    let whiteBtn = $('#white-btn');
    let blueBtn = $('#blue-btn');
    let redBtn = $('#red-btn');
    let greenBtn = $('#green-btn');
    let blackBtn = $('#black-btn');
    let yellowBtn = $('#yellow-btn');
    let greyBtn = $('#grey-btn');


    frontViewBtn.click(function () {
        tshirtBlock.css('background-image', 'url(./img/tshirt_front.jpg)');
    });

    backViewBtn.click(function () {
        tshirtBlock.css('background-image', 'url(./img/png_back.png)');
    });

    whiteBtn.click(function () {
        console.log("whitebtn fired");
        tshirtBlock.css('background-color', 'white');
    });
    blueBtn.click(function () {
        console.log("bluebtn fired");
        tshirtBlock.css('background-color', '#007bff');
    });
    redBtn.click(function () {
        tshirtBlock.css('background-color', '#bf2525');
    });
    greenBtn.click(function () {
        tshirtBlock.css('background-color', '#37cb36');
    });
    blackBtn.click(function () {
        tshirtBlock.css('background-color', '#110e0e');
    });
    yellowBtn.click(function () {
        tshirtBlock.css('background-color', '#e1da1e');
    });
    greyBtn.click(function () {
        tshirtBlock.css('background-color', 'grey');
    });


});

