let numeros = [7, 4, 1, 8, 9, 4, 9];

let calcularPromedio = function() {
    suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    return promedio;
}

console.log( calcularPromedio(numeros) );