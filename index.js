import validator from './validator.js';

//console.log(validator);


// Tomo id y lo coloco en una constante
const form = document.getElementById('formCard');
const inputNumCard = document.getElementById('textValidation');
const inputNameCard = document.getElementById('mainNameValidation');
const numUserCard = document.getElementById('cardNum');
const nameUserCard = document.getElementById('cardName')
const button = document.getElementById('mainbuttonValidation');
const cardNumValid = document.getElementById('cardNumValid');
const cardNumInvalid = document.getElementById('cardNumInvalid');

button.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = inputNumCard.value;
    let inputCard = validator.isValid(inputValue);

    if (inputCard % 10 == true && inputValue.length >= 13 && inputValue.length <= 16) {
        cardNumValid.textContent = 'La tarjeta de crédito es valida. Se puede usar';
        cardNumInvalid.textContent = "";
        inputNumCard.classList.remove('main-textValidation-inValid');
        inputNumCard.classList.add('main-textValidation-valid');

    }
    else {
        cardNumInvalid.textContent = 'La tarjeta de crédito no es valida. No se puede usar.';
        cardNumValid.textContent = '';
        inputNumCard.classList.remove('main-textValidation-valid');
        inputNumCard.classList.add('main-textValidation-inValid');
    }
    if (inputValue.length == 0) {
        cardNumInvalid.textContent = 'El campo esta vacio. Ingrese el número de la tarjeta.';
    }
    form.reset();
    return inputCard;

});

// Muestra el texto de input en la tarjeta y reemplaza los espacios en blanco, string y caracteres.
inputNumCard.addEventListener('keyup', function (e) {
    let valueInputNumCard = e.target.value;
    numUserCard.textContent = valueInputNumCard;
    inputNumCard.value = valueInputNumCard.replace(/\s/g, '').replace(/\D/g, '');
});

inputNameCard.addEventListener('keyup', function (e) {
    let valueInputNameCard = e.target.value;
    // Muestra el texto en mayuscula
    nameUserCard.textContent = valueInputNameCard.toUpperCase();
    // Remplaza los numeros por espacio vacio
    inputNameCard.value = valueInputNameCard.replace(/([0-9])/g, '');
    //Si el texto se encuentra vacio muestra este texto
    if (valueInputNameCard == '') {
        nameUserCard.textContent = 'EJ: KAMILA VILLABLANCA';
    }
});

// Cambia los digítos por simbolos #..
inputNumCard.addEventListener('keyup', function (e) {
    let cardNum = e.target.value;
    let replacement = validator.maskify(cardNum);
    numUserCard.textContent = replacement;

})

// Remover y agregar clases por medio de click
inputNumCard.addEventListener('click', function (e) {
    let cardNum = e.target.value;
    if (cardNum == 0) {
        numUserCard.textContent = '#### #### #### ####';
        cardNumInvalid.textContent = '';
        inputNumCard.classList.remove('main-textValidation-inValid');
        cardNumValid.textContent = '';
        inputNumCard.classList.remove('main-textValidation-valid');
    }

})
