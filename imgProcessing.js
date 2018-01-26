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

            if (-1 * parentWidth > newLeft || -1 * parentHeight > newTop) {
                // handling left and top limits
                if (-1 * parentWidth > newLeft && -1 * parentHeight > newTop) {
                    document.getElementById('dragBox').style.left = -1 * parentWidth + "px";
                    document.getElementById('dragBox').style.top = -1 * parentHeight + "px";

                } else if (parentWidth < newLeft) {
                    document.getElementById('dragBox').style.left = -1 * parentWidth + "px";
                    document.getElementById('dragBox').style.top = newTop + "px";
                } else if (parentHeight < newTop) {
                    document.getElementById('dragBox').style.top = -1 * parentHeight + "px";
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
})

