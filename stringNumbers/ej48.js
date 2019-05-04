// Declarar la variable piString y guardar el valor 3.14 como String
let piString = "3.14";
let constanteString = "42";
let pi = parseFloat(piString);
let constante = parseInt(constanteString);
let resultado = constante + pi;

console.log(resultado);
console.log(`${resultado.toString()} es el resultado de sumar las variables ${pi.toString()} y ${constante.toString()}, donde ${pi.toString()} es el valor que tiene la variable pi y ${constante.toString()} es el valor de la variable constante.`);

