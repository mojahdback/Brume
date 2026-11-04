const prodNameInput = document.getElementById('productName');
const prodPriceInput = document.getElementById('productPrice');
const prodDescriptionInput = document.getElementById('productDescription');
const prodImageInput = document.getElementById('productImage');
const promoToggleInput = document.getElementById('promoToggle');
const promoFields = document.getElementById('promoFields');
const promoPercent = document.getElementById('promoPercent');
const promoEnd = document.getElementById('promoEnd');



function validStep1() {

    let virifi = true;

    // validation etap 1 

    let productNameError = document.getElementById('productNameError');
    productNameError.textContent = "";
    let productPriceError = document.getElementById('productPriceError');
    productPriceError.textContent = "";
    let productDescriptionError = document.getElementById('productDescriptionError');
    productDescriptionError.textContent = "";
    let productImageError = document.getElementById('productImageError');
    productImageError.textContent = "";
    let promoPercentError = document.getElementById('promoPercentError');
    promoPercentError.textContent = "";
    let promoEndError = document.getElementById('promoEndError');
    promoEndError.textContent = "";

    let ProdNameRegex = /^[a-zA-ZÀ-ÿ]+(?:[ '-][a-zA-ZÀ-ÿ]+)*$/;
    if (!ProdNameRegex.test(prodNameInput.value)) {
        productNameError.textContent = "Nom invalide";
        virifi = false;

    }

    let priceRegex = /^(?!0+(?:\.0{1,2})?$)\d+(?:\.\d{1,2})?$/;
    if (!priceRegex.test(prodPriceInput.value)) {
        productPriceError.textContent = "Price invalide";
        virifi = false;
    }

    let descriptionRegex = /^(?=.*[a-zA-ZÀ-ÿ])[a-zA-ZÀ-ÿ0-9\s.,!?'"()\-]{10,500}$/;
    if (!descriptionRegex.test(prodDescriptionInput.value)) {
        productDescriptionError.textContent = "Description invalide";
        virifi = false;
    }

    let imageRegex = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s?#]*)?\.(jpg|jpeg|png|webp|gif)(?:\?[^\s#]*)?$/i;
    if (!imageRegex.test(prodImageInput.value)) {
        productImageError.textContent = "URL invalide";
        virifi = false;
    }

    if (promoToggleInput.checked) {
        let promoRegex = /^(100|[1-9][0-9]?)$/;
        if (!promoRegex.test(promoPercent.value)) {
            promoPercentError.textContent = "Pourcentage invalide";
            virifi = false;

        }

        let today = new Date();

        let slectDate = new Date(promoEnd.value);

        if (!(today.getFullYear() < slectDate.getFullYear() ||
            (today.getFullYear() === slectDate.getFullYear() && today.getMonth() < slectDate.getMonth()) ||
            (today.getFullYear() === slectDate.getFullYear() && today.getMonth() === slectDate.getMonth() && today.getDate() < slectDate.getDate()))) {

            promoEndError.textContent = "La date doit être superieure a aujourd'hui";
            virifi = false;
        }


    }

    return virifi;



}

function validStep2() {

    // input etap 2
    const origin = document.getElementById('origin');
    const intensityValue = document.getElementById('intensityValue');
    const temperature = document.querySelector('input[name="temperature"]:checked')?.value;
    const sizesValue = document.querySelectorAll('input[name="sizes"]:checked');
    const milksValue = document.querySelectorAll('input[name="milks"]:checked');
    const extrasValue = document.querySelectorAll('input[name="extras"]:checked');


    let virifi = true;

    // validation etap 2 
    let originError = document.getElementById('originError');
    originError.textContent = "";
    let intensityError = document.getElementById('intensityError');
    intensityError.textContent = "";
    let temperatureError = document.getElementById('temperatureError');
    temperatureError.textContent = "";
    let sizesError = document.getElementById('sizesError');
    sizesError.textContent = "";
    let milksError = document.getElementById('milksError')
    milksError.textContent = "";
    let extrasError = document.getElementById('extrasError');
    extrasError.textContent = "";

    let originRegex = /^(Colombie|Éthiopie|Brésil|Mélange Maison)$/;
    if (!originRegex.test(origin.value)) {
        originError.textContent = "Origine invalide";
        virifi = false;

    }

    let intensiteRegex = /^(10|[1-9])$/;
    if (!intensiteRegex.test(intensityValue.value)) {
        intensityError.textContent = "Intensite invalide";
        virifi = false;

    }

    let temperatureRegex = /^(Chaud|Glacé)$/;
    if (!temperatureRegex.test(temperature || "")) {
        temperatureError.textContent = "Temperature invalide";
        virifi = false;

    }

    if (sizesValue.length === 0) {
        sizesError.textContent = "Invalide size";
        virifi = false;

    }

    if (milksValue.length === 0) {
        milksError.textContent = "Invalide milks";
        virifi = false;

    }


    if (extrasValue.length === 0) {
        extrasError.textContent = "Invalid extras";
        virifi = false;
    }

    return virifi;


}

const suivantBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const sections = document.querySelectorAll('.section');
const steps = document.querySelectorAll('[data-step]')
const confirmBtn = document.getElementById('submitBtn');

let index = 0;

suivantBtn.addEventListener('click', () => {

    if ((validStep1() && index <= 0) || (validStep2() && index === 1)) {
        sections[index].classList.add('hidden');
        index++;

        if (index >= steps.length) {
            index = steps.length - 1;
        }
        sections[index].classList.remove('hidden');
    }

    if (index > 0) {
        prevBtn.classList.remove('invisible');

    }

    if (index >= 2) {
        suivantBtn.classList.add('invisible');

    }

    if (index == 2) {
        confirmBtn.classList.remove('hidden');
    }


})

prevBtn.addEventListener('click', () => {
    sections[index].classList.add('hidden');
    index--;

    if (index < 0) {
        index = 0;
    }

    sections[index].classList.remove('hidden');

    if (index >= 2) {
        suivantBtn.classList.add('invisible');
    }
    else if (index == 0) {
        prevBtn.classList.add('invisible');

    }
    else {
        suivantBtn.classList.remove('invisible');

    }

    if (index !== 2) {
        confirmBtn.classList.add('hidden');
    }

})

promoToggleInput.addEventListener('change', () => {
    if (promoToggleInput.checked) {
        promoFields.classList.remove('hidden');
    }
    else {
        promoFields.classList.add('hidden');
    }

})








