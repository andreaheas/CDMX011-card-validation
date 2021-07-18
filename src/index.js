import validator from './validator.js';
// manda llamar la validación desde el archivo validator.js

console.log(validator);

let resultCard2 = document.getElementById("resultCard");
resultCard2.style.display = "none";

let resultNum2 = document.getElementById("resultNum");
resultNum2.style.display = "none;"



let hidePartValidation = document.getElementById("parteValidacion1");
let hideIncorrect = document.getElementById("hideIncorrect");
let hideCorrect = document.getElementById("correct2");
let brandNumH = document.getElementById("brandNum");


/*recuperamos el botón como objeto*/
document.getElementById('btnValidar').addEventListener("click", (event) => {
    event.preventDefault();


    let cardNumber = document.getElementById('cardNumber').value;
    let validateNumber = validator.isValid(cardNumber);




    //Cambiando el texto de h1 por mi numero con ##
    //innerHTML me ayuda a cambiar 

    resultNum2.innerHTML = validator.maskify(cardNumber);


    if (validateNumber == true) {
        hidePartValidation.style.display = "none";
        hideIncorrect.style.display = "none";
        resultCard2.style.display = "block";
        brandNumH.style.display = "block";



    } else {
        hidePartValidation.style.display = "none";
        hideIncorrect.style.display = "block";
        resultCard2.style.display = "block";
        hideCorrect.style.display = "none";
        brandNumH.style.display = "none";


    }

    let cardFirstNum = cardNumber.slice(0, 1);
    let cardSecondNum = cardNumber.slice(0, 2);

    console.log(cardFirstNum);
    console.log(cardSecondNum);

    if (cardSecondNum == 34 || cardSecondNum == 37) {
        brandNumH.innerHTML = "American Express"
    } else if (cardFirstNum == 4) {
        brandNumH.innerHTML = "VISA"
    } else if (cardSecondNum == 51 || cardSecondNum == 52 || cardSecondNum == 53 || cardSecondNum == 54 || cardSecondNum == 55) {
        brandNumH.innerHTML = "Master Card"
    }



    let cat = validator.maskify(cardNumber)
    console.log(cat)

});

//Agregando evento a mi boton de "Validar otra Tarjeta"

document.getElementById("returnValidate").addEventListener("click", (event) => {
    event.preventDefault();

    //Borrando el input al retornar al div de validación
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");

    hidePartValidation.style.display = "block";
    hideIncorrect.style.display = "none";
    resultCard2.style.display = "none";
    hideCorrect.style.display = "block";

})