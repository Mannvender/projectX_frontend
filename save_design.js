let DesignAttributes = {
    colour: "",
    price: "",
    // images object will contain each image as a object with - original image, size, top, left
    images: {},
};

function GetDataForModal() {
    DesignAttributes.colour = $("#tshirt_block").css("background-color");
    DesignAttributes.price = cost;

    $(".images").each((index, obj) => {
        let imageObject = {};
        imageObject.url = obj.style.backgroundImage;
        if (!isNaN(obj.style.top)) {
            imageObject.top = '0px';
        } else {
            imageObject.top = obj.style.top;
        }
        if (!isNaN(obj.style.left)) {
            imageObject.left = '0px';
        } else {
            imageObject.left = obj.style.left;
        }
        if (!isNaN(obj.style.height)) {
            imageObject.height = '117px';
        } else {
            imageObject.height = obj.style.height;
        }
        if (!isNaN(obj.style.width)) {
            imageObject.width = '208px';
        } else {
            imageObject.width = obj.style.width;
        }
        DesignAttributes.images["image_" + index] = imageObject;
    });
    console.log(DesignAttributes);
}
