let masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
let numerosPares = [];
let numerosImpares = [];

for (let i= 0; i < masNumeros.length; i++){
    if (masNumeros[i] % 2 === 0){
        numerosPares.push(masNumeros[i]);
    } else {
        numerosImpares.push(masNumeros[i]);
    }
}
console.log('pares: ' + numerosPares);
console.log('impares: ' + numerosImpares);