let masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

let filtrarPares = masNumeros.filter(function(pares){
    return pares % 2 === 0;
});
let filtrarImpares = masNumeros.filter(function(impares){
    return impares % 2 !== 0;
})
let numerosPares = filtrarPares;
let numerosImpares = filtrarImpares;

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);