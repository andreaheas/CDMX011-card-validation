const validator = {
    isValid: function(cardNumber) {
        /*Dividimos la variable, creamos un nuevo array, lo invertimos, si el residuo del index es 
        divisible entre 2 se empieza la multiplicación desde la segunda posición, si el digito es mayor
        a 9 se le resta 9*/
        let num = cardNumber.split('').map(Number).reverse().map((digit, i) => {
            if (i % 2 !== 0) {
                let mult = digit * 2;
                if (mult > 9) {
                    mult -= 9
                }
                return mult;
            }
            return digit;



        })

        console.log(num)

        /* con la constante reducer buscamos que se sumen todos los valores del array*/
        const reducer = (acumulator, currentValue) => acumulator + currentValue;
        let total = (num.reduce(reducer));
        console.log(total);

        /*         if (total % 2 == 0) {
                    return true
                } else {
                    return false
                } */
        /* Con la variable validateNumber que si el total termina en 0 es una tarjeta valida, y si no es invalida*/
        let validateNumber = total % 10 == 0 ? true : false;
        console.log(validateNumber);

        return validateNumber
    },


    /* con maskify logramos hacer que se oculten los numero de la tarjeta, excepto los últimos 4 dígitos*/
    "maskify": function(cardNumber) {
        return cardNumber.split('').map((letter, i) =>
            i < cardNumber.length - 4 ? '#' : letter).join('');



    }

}

export default validator