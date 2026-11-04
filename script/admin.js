const prodNameInput = document.getElementById('productName');
const prodPriceInput = document.getElementById('productPrice');
const prodDescriptionInput = document.getElementById('productDescription');
const prodImageInput = document.getElementById('productImage');
const promoToggleInput = document.getElementById('promoToggle');
const promoFields = document.getElementById('promoFields');
const promoPercent = document.getElementById('promoPercent');
const promoEnd = document.getElementById('promoEnd');
// const wizardForm = document.getElementById('wizardForm');



function validation() {

    let virifi = true;

    document.getElementById('productNameError').textContent = "";
    document.getElementById('productPriceError').textContent = "";
    document.getElementById('productDescriptionError').textContent = "";
    document.getElementById('productImageError').textContent = "";
    document.getElementById('promoPercentError').textContent = "";
    document.getElementById('promoEndError').textContent = "";

    let ProdNameRegex = /^[a-zA-ZÀ-ÿ]+(?:[ '-][a-zA-ZÀ-ÿ]+)*$/;
    if (!ProdNameRegex.test(prodNameInput.value)) {
        document.getElementById('productNameError').textContent = "Nom invalide";
        virifi = false;

    }

    let priceRegex = /^(?!0+(?:\.0{1,2})?$)\d+(?:\.\d{1,2})?$/;
    if (!priceRegex.test(prodPriceInput.value)) {
        document.getElementById('productPriceError').textContent = "Price invalide";
        virifi = false;
    }

    let descriptionRegex = /^(?=.*[a-zA-ZÀ-ÿ])[a-zA-ZÀ-ÿ0-9\s.,!?'"()\-]{10,500}$/;
    if (!descriptionRegex.test(prodDescriptionInput.value)) {
        document.getElementById('productDescriptionError').textContent = "Description invalide";
        virifi = false;
    }

    let imageRegex = /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s?#]*)?\.(jpg|jpeg|png|webp|gif)(?:\?[^\s#]*)?$/i;
    if (!imageRegex.test(prodImageInput.value)) {
        document.getElementById('productImageError').textContent = "URL invalide";
        virifi = false;
    }

    if (promoToggleInput.checked) {
        let promoRegex = /^(100|[1-9][0-9]?)$/;
        if (!promoRegex.test(promoPercent.value)) {
            document.getElementById('promoPercentError').textContent = "Pourcentage invalide";
            virifi = false;

        }

        let today = new Date();

        let slectDate = new Date(promoEnd.value);

        console.log(slectDate.getFullYear());
        console.log(slectDate.getMonth());

        console.log(slectDate.getDate());


        if (!(today.getFullYear() < slectDate.getFullYear() ||
            (today.getFullYear() === slectDate.getFullYear() && today.getMonth() < slectDate.getMonth()) ||
            (today.getFullYear() === slectDate.getFullYear() && today.getMonth() === slectDate.getMonth() && today.getDate() < slectDate.getDate()))) {

            document.getElementById('promoEndError').textContent =
                "La date doit être superieure a aujourd'hui";

            virifi = false;
        }




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
    if (validation()) {
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






