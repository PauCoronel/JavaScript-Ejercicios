let mostrarElNumeroMasGrande = function(numero1, numero2) {
    if (numero1 > numero2) {
        return `El número ${numero1} es más grande que ${numero2}`;
    } else if (numero1 < numero2) {
        return `El número ${numero2} es más grande que ${numero1}`;
    } else {
        return `Los dos números son iguales`;
    }
}
console.log( mostrarElNumeroMasGrande(1, 5) );
console.log( mostrarElNumeroMasGrande(63, 27) );
console.log( mostrarElNumeroMasGrande(1, 1) );
