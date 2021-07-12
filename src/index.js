import validator from './validator.js';
// manda llamar la validación desde el archivo validator.js

console.log(validator);

let resultCard2 = document.getElementById("resultCard");
resultCard2.style.display = "none";

let resultNum2 = document.getElementById("resultNum");
resultNum2.style.display = "none;"

let esconderParteValidacion = document.getElementById("parteValidacion1")
let esconderIncorrect = document.getElementById("hideIncorrect")
let esconderCorrect = document.getElementById("correct2")








/*recuperamos el botón como objeto*/
document.getElementById('btnValidar').addEventListener("click", (event) => {
    event.preventDefault();


    let cardNumber = document.getElementById('cardNumber').value;

    let validateNumber = validator.isValid(cardNumber);


    //let esconderCorrect = document.getElementById("correct2")


    // let showResult = document.getElementById("correct2");

    resultNum2.innerHTML = validator.maskify(cardNumber);






    if (validateNumber == true) {
        esconderParteValidacion.style.display = "none";
        esconderIncorrect.style.display = "none";
        resultCard2.style.display = "block";



        /*let h1 = document.createElement("h1");
        let t = document.createTextNode(validator.maskify(cardNumber));

        h1.appendChild(t);
        document.body.appendChild(h1);*/

        //document.getElementById("resultNum").innerHTML = cat


    } else {
        esconderParteValidacion.style.display = "none";
        esconderIncorrect.style.display = "block";
        resultCard2.style.display = "block";
        esconderCorrect.style.display = "none";

    }


    let cat = validator.maskify(cardNumber)
    console.log(cat)




});

//const btnReturn = document.querySelector(".btnOther");

document.getElementById("returnValidate").addEventListener("click", (event) => {
    event.preventDefault();

    //Borrando el input al retornar al div de validación
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");

    esconderParteValidacion.style.display = "block";
    esconderIncorrect.style.display = "none";
    resultCard2.style.display = "none";



})