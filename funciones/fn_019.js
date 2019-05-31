let compararNumeros = function(numero1, numero2) {
    if (numero1 < numero2) {
        return -1;
    } else if (numero1 > numero2) {
        return 1;
    } else {
        return 0;
    }
}
console.log( compararNumeros(1, 5) < 0 ); 
console.log( compararNumeros(5, 1) > 0 ); 
console.log( compararNumeros(1, 1) === 0 ); 
