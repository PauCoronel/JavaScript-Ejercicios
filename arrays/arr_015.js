let numeros = [6, 2, 3, 4, 5, 1];
let primerElemento = numeros.shift();
let ultimoElemento = numeros.pop();

numeros.push(primerElemento);
numeros.unshift(ultimoElemento);

console.log(numeros);
