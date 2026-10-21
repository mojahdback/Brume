const bases = document.querySelectorAll('input[name="base"]');

const sizes = document.querySelectorAll('input[name="size"]');

const milks = document.querySelectorAll('input[name="milk"]');

const extras = document.querySelectorAll('input[name="extra"]');

const totalPrice = document.querySelector(".price_total .price");


let priceBase = 0;
let priceSize = 0;
let priceMilk = 0 ;
let priceExtra = 0 ;




// Base 

 function choixBase(element) {

    bases.forEach(base => {
        base.parentElement.style.backgroundColor = "";
    });
    element.parentElement.style.backgroundColor = "#3c5d2f";
    element.parentElement.style.color = "white";

    return Number(element.getAttribute('data-price'));


}


bases.forEach(base => {
    base.addEventListener('click', () => {
       priceBase = choixBase(base);
       
    });
});


// Size

function choixSize(element) {

    sizes.forEach(size => {
        size.parentElement.style.backgroundColor = "";
    });
    element.parentElement.style.backgroundColor = "#3c5d2f";
    element.parentElement.style.color = "white";

    return Number(element.getAttribute('data-price'));


}

sizes.forEach(size => {
    size.addEventListener('click', () => {
       priceSize = choixSize(size);
       
    });
});

// Milk

function choixMilk(element) {

    milks.forEach(milk => {
        milk.parentElement.style.backgroundColor = "";
    });
    element.parentElement.style.backgroundColor = "#3c5d2f";
    element.parentElement.style.color = "white";

    return Number(element.getAttribute('data-price'));


}

milks.forEach(milk => {
    milk.addEventListener('click', () => {
       priceMilk = choixMilk(milk);
       
    });
});


// extras


function choixExtra(element) {

    element.parentElement.style.backgroundColor = "#3c5d2f";
    element.parentElement.style.color = "white";

    return Number(element.getAttribute('data-price'));


}

extras.forEach(extra => {
    extra.addEventListener('click', () => {
       priceExtra += choixExtra(extra);
       
    });
});

















