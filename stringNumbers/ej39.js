let nombre = "Paula";
let apellido = "Coronel";
let oracion1 = "Mi nombre es ";
let oracion2 = " y tiene ";
let oracion3 = " letras";
let nombreLength = nombre.length;
let apellidoLength = apellido.length;

console.log(oracion1.concat(nombre,oracion2,nombreLength,oracion3));
console.log(oracion1.concat(apellido, oracion2, apellidoLength,oracion3));