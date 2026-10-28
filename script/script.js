const bases = document.querySelectorAll('input[name="base"]');

const sizes = document.querySelectorAll('input[name="size"]');

const milks = document.querySelectorAll('input[name="milk"]');

const extras = document.querySelectorAll('input[name="extra"]');

const allInputs = document.querySelectorAll('.option input');

const totalPrice = document.querySelector(".price_total .price");

const container1 = document.querySelector('.container');

const factoria = document.querySelector('.factoria');

const lastContainer = document.querySelector('.container_fin')

const BtnSand = document.querySelector('.btnSend');

const BackBtn = document.querySelector('.backbtn');

const totalFin = document.querySelector('.total .item2');
const details = document.querySelectorAll('.detail');

const modifier = document.getElementById('modifier');

const counter = document.querySelector('.header .item3 .count');

const checkoutBtn = document.getElementById('CheckoutBtn');

const checkoutSection = document.getElementById('checkoutSection');


// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
    { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
    { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
    { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
    { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
    { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
    { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
    { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
    { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
    { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
    { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
    { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "cappuccino.jpg" },
    { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "latte.jpg" },
    { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "mug.jpg" }
];


let priceBase = 0;
let priceSize = 0;
let priceMilk = 0;
let priceExtra = 0;

let valueBase = ' ';
let valueSize = ' ';
let valueMilk = ' ';
let valueExtra = [];

// Base 

function choixBase(element) {

    bases.forEach(base => {
        base.parentElement.style.backgroundColor = "";

    });
    element.parentElement.style.backgroundColor = "#3c5d2f";
    element.parentElement.style.color = "white";

    valueBase = element.getAttribute('value');


    return Number(element.getAttribute('data-price'));


}


bases.forEach(base => {
    base.addEventListener('click', () => {
        priceBase = choixBase(base);
        calculTotal();

    });
});



// Size

function choixSize(element) {

    sizes.forEach(size => {
        size.parentElement.style.backgroundColor = "";
    });
    element.parentElement.style.backgroundColor = "#3c5d2f";
    element.parentElement.style.color = "white";

    valueSize = element.getAttribute('value');

    return Number(element.getAttribute('data-price'));


}

sizes.forEach(size => {
    size.addEventListener('click', () => {
        priceSize = choixSize(size);
        calculTotal();

    });
});

// Milk

function choixMilk(element) {

    milks.forEach(milk => {
        milk.parentElement.style.backgroundColor = "";
    });
    element.parentElement.style.backgroundColor = "#3c5d2f";
    element.parentElement.style.color = "white";

    valueMilk = element.getAttribute('value');


    return Number(element.getAttribute('data-price'));


}

milks.forEach(milk => {
    milk.addEventListener('click', () => {
        priceMilk = choixMilk(milk);
        calculTotal();

    });
});


// extras

function choixExtra(element) {

    priceExtra = 0;
    valueExtra = [];

    extras.forEach(extra => {

        if (extra.checked) {
            extra.parentElement.style.backgroundColor = "#3c5d2f";
            extra.parentElement.style.color = "white";

            priceExtra += Number(extra.getAttribute('data-price'));
            valueExtra.push(extra.getAttribute('value'));
        } else {
            extra.parentElement.style.backgroundColor = "";
            extra.parentElement.style.color = "";
        }

    });


}

extras.forEach(extra => {
    extra.addEventListener('change', () => {
        choixExtra();
        calculTotal();

    });


});



function calculTotal() {
  
    const total = priceBase + priceSize + priceMilk + priceExtra;
    totalPrice.textContent = `${total}`;

    return formatPrice(total);
}



BtnSand.addEventListener('click', () => {
    container1.classList.add('hidden');
    lastContainer.classList.add('hidden');
    factoria.classList.remove('hidden');
    counter.textContent++;

    details.forEach(detail => {
        const nameElement = detail.querySelector('.detail-name');
        const priceElement = detail.querySelector('.detail-price');
        const type = detail.dataset.type;

        if (type === 'base') {
            nameElement.textContent = `${type} · ${valueBase} `;
            priceElement.textContent = `${priceBase} DH`;
        }

        if (type === 'size') {
            nameElement.textContent = `${type} · ${valueSize} `;
            priceElement.textContent = `${priceSize} DH`;
        }

        if (type === 'milk') {
            nameElement.textContent = `${type} · ${valueMilk} `;
            priceElement.textContent = `${priceMilk} DH`;
        }

        if (type === 'extra') {
            nameElement.textContent = `${type} · ${valueExtra} `;
            priceElement.textContent = `${priceExtra} DH`;
        }
    });

    totalFin.textContent = `${calculTotal()}`;
});

BackBtn.addEventListener('click', () => {

    container1.classList.remove('hidden');
    lastContainer.classList.remove('hidden');
    factoria.classList.add('hidden');

    allInputs.forEach(input => {
        input.checked = false;
        input.parentElement.style.backgroundColor = "";
        input.parentElement.style.color = "";
    });

    priceBase = 0;
    priceSize = 0;
    priceMilk = 0;
    priceExtra = 0;
    valueBase = '';
    valueSize = '';
    valueMilk = '';
    valueExtra = [];

    totalPrice.textContent = '00 DH'

});

modifier.addEventListener('click', (e) => {
    e.preventDefault();
    counter.textContent--;
    container1.classList.remove('hidden');
    lastContainer.classList.remove('hidden');
    factoria.classList.add('hidden');

})


checkoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container1.classList.add('hidden');
    lastContainer.classList.add('hidden');
    factoria.classList.add('hidden');
    checkoutSection.classList.remove('hidden');

})



// ============= Checkout ==============
// cartList, cartCount, cartTotal, cartEmpty, payTotal

const cartCount = document.getElementById('cartCount');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const cartEmpty = document.getElementById('cartEmpty');
const payTotal = document.getElementById('payTotal');



function formatPrice(price) {
    return price.toFixed(2) + " DH";
}


function totalPayer() {
  
    let total = 0 ;
        coffeeCart.forEach(item =>{
        total += item.price * item.quantity 

    });
    
    return formatPrice(total);
}

function createEl(tag, className, text) {
    const el = document.createElement(tag);
    if(className){
         el.className = className;
    }
    if(text !== undefined && text !== null){
         el.textContent = text;
    }
    return el;

}

function createCartItem(item) {
    const il = createEl('li' , 'cart-item');
    const photo = createEl('img' , 'cart-item-img');
    photo.src = 'assetes/images/' + item.image ; 
    photo.alt = item.name; 
    const info  = createEl('div' ,'cart-item-info')
    const name = createEl('h3' , 'cart-item-name' , item.name);
    const unitPrice = createEl('p' , 'cart-item-unit' ,formatPrice(item.price));
    const qty  = createEl('div' ,'cart-item-qty')
    const btnNeg = createEl('button' , 'qty-btn' , '-');
    btnNeg.type = "button";
    const quantity  = createEl('span','qty-value', item.quantity);
    const btnPos = createEl('button' , 'qty-btn' , '+');
    btnNeg.type = "button";
    const subtotal  = createEl('p' ,'item-subtotal' , formatPrice(item.price * item.quantity));
    info.appendChild(name);
    info.appendChild(unitPrice);
    qty.appendChild(btnNeg);
    qty.appendChild(quantity );
    qty.appendChild(btnPos);
    il.appendChild(photo);
    il.appendChild(info);
    il.appendChild(qty);
    il.appendChild(subtotal);

    return il;
}


console.log(totalPayer())










