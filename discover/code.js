function addToCart(designId) {
    let itemsInCart = localStorage.getItem('cart');
    itemsInCart = JSON.parse(itemsInCart);
    if (!itemsInCart) {
        itemsInCart = []
    }

    let isDuplicate = false;
    itemsInCart.forEach(item => {
        if (item === designId) {
            isDuplicate = true;
        }
    });
    if (!isDuplicate) {
        itemsInCart.push(designId);
        localStorage.setItem('cart', JSON.stringify(itemsInCart));
        shakeThatCart();
    }
}

// ==== showing size options on clicking add-TO-cart button ====
function showSizeOptions(button) {
    let img = button.parent().parent().siblings().first();
    let sizeOptions = img.nextAll().eq(0);
    sizeOptions.removeClass("d-none").addClass("d-inline");
}

// ==== AJAX calls =====

let designHolder = $('#designHolder');
let searchTitle = $('#searchTitle');
let topWear = 0;
let sex = 'male';
let designCatagory = 0;
getDesigns(topWear, sex, designCatagory);

$('#catagoryRadio input').on('change', function () {
    topWear = $('input[name=categories]:checked', '#catagoryRadio').val();
    designHolder.empty();
    getDesigns(topWear, sex, designCatagory);
});

$('#genderRadio input').on('change', function () {
    sex = $('input[name=gender]:checked', '#genderRadio').val();
    designHolder.empty();
    getDesigns(topWear, sex, designCatagory);
});

$('#themeRadio input').on('change', function () {
    designCatagory = $('input[name=themes]:checked', '#themeRadio').val();
    designHolder.empty();
    getDesigns(topWear, sex, designCatagory);
});


function getDesigns(topWear, sex, designCatagory) {
    searchTitleUpdate(topWear, sex, designCatagory);
    $.ajax({
        url: 'http://localhost:5252/designs/search',
        method: 'GET',
        data: {
            topWear,
            sex,
            designCatagory
        },
        success: renderShirts
    });
}

function searchTitleUpdate(topWear, sex, designCatagory) {
    let newTitle = '';
    if (topWear == 0) {
        newTitle += 'Tshirts'
    } else if (topWear == 1) {
        newTitle += 'Vnecks'
    } else if (topWear == 2) {
        newTitle += 'Hoodies'
    } else {
        newTitle += 'Everything'
    }

    newTitle += ' For ';

    if (sex === 'male') {
        newTitle += 'Men'
    } else if (sex === 'female') {
        newTitle += 'Women'
    } else {
        newTitle += 'Both'
    }

    searchTitle.empty();
    searchTitle.append(newTitle);
}

function renderShirts(data) {
    updateSearchResultCounter(data.count);
    data.rows.forEach(design => {

        let designArea = $('<div class="design-area away"></div>');
        let designAreaBack = $('<div class="design-area-back over"></div>');
        let card = $(`<div class="teaser-block card col-12 col-sm-6 col-md-3 mb-5 products mx-auto"></div>`);
        let link = $(`<a href="." class="productImages"></a>`);
        let cardImg = $(`<img class="card-img m-0 p-0 teaser-img away" src="../img/tshirt_front.png" style="background-color: ${design.color}">`);
        let cardImgBack = $(`<img class="card-img m-0 p-0 teaser-img over" src="../img/tshirt_back.png" style="background-color: ${design.color}">`);
        let cardBody = $(`<div class="card-body text-center text-secondary m-1 p-0">
                        
                    </div>`);
        let NameNPriceHolder = $(`<div class="text-center row-50px away"></div>`);
        let Name = $(`<h5 class="">${design.designName}</h5>`);
        let Price = $(`<p class="">Rs. ${design.designPrice}</p>`);

        let AddToBagBtn = $(`<div class="text-center row-50px over">
                            <div class="btn btn-dark" onclick="addToCart(${design.designId})">Add to Bag</div>
                            <p class="">Sizes: S, M, L, XL</p>
                        </div>`);

        link.append(cardImg);
        link.append(cardImgBack);
        let designAttributes = JSON.parse(design.designAttributes);

        designAttributes.images.forEach(element => {
            if (element.isFront) {
                let image = $(`<img src="http://localhost:5252/images/${element.name}">`);
                image.css({
                    'height': element.height + '%',
                    'width': element.width + '%',
                    'position': 'absolute',
                    'top': element.top + '%',
                    'left': element.left + '%'
                });

                designArea.append(image);
            } else {
                let image = $(`<img src="http://localhost:5252/images/${element.name}">`);
                console.log(element.height);
                image.css({
                    'height': element.height + '%',
                    'width': element.width + '%',
                    'position': 'absolute',
                    'top': element.top + '%',
                    'left': element.left + '%'
                });

                designAreaBack.append(image);
            }
        });
        designAttributes.texts.forEach(element => {
            // temp solution
            let fontSize = element.fontSize / 2;
            if (element.isFront) {
                let text = $(`<p style="font-size: ${fontSize}px; color: ${element.color}">${element.content}</p>`);
                text.css({
                    'position': 'absolute',
                    'top': element.top + '%',
                    'left': element.left + '%'
                });

                designArea.append(text);
            } else {
                let text = $(`<p style="font-size: ${fontSize}px; color: ${element.color}">${element.content}</p>`);
                text.css({
                    'position': 'absolute',
                    'top': element.top + '%',
                    'left': element.left + '%'
                });

                designAreaBack.append(text);
            }
        });
        link.append(designArea);
        link.append(designAreaBack);
        card.append(link);
        NameNPriceHolder.append(Name);
        NameNPriceHolder.append(Price);
        cardBody.append(NameNPriceHolder);
        cardBody.append(AddToBagBtn);
        card.append(cardBody);
        designHolder.append(card);
    });
}

function updateSearchResultCounter(newCount) {
    let Holder = $('#numItems');
    Holder.empty();
    Holder.append(newCount + ' Items')
}