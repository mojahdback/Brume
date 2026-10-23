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

    priceExtra =0 ;
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
    totalPrice.textContent = `${total} DH`;

    return `${total},00 DH`;
}



BtnSand.addEventListener('click', () => {
    container1.classList.add('hidden');
    lastContainer.classList.add('hidden');
    factoria.classList.remove('hidden');

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
    container1.classList.remove('hidden');
    lastContainer.classList.remove('hidden');
    factoria.classList.add('hidden');

})


















