function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#upload-design").change(function () {
    readURL(this);
});


$(function () {
    dragElement(document.getElementById("dragBox"));

    function dragElement(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.onmousedown = dragMouseDown;
        /*if (document.getElementById(element.id)) {

        } else {
            //    nothing to do
        }*/
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

        //set element's new position
        document.getElementById('dragBox').style.left = (document.getElementById('dragBox').offsetLeft - pos1) + "px";
        document.getElementById('dragBox').style.top = (document.getElementById('dragBox').offsetTop - pos2) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
})

