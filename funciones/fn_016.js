let numeros = [7, 4, 1, 8, 9, 4, 9];

let calcularSumatoria = function(suma){
    suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
console.log( calcularSumatoria(numeros) );