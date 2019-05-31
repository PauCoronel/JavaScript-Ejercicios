let sonIguales = function(a, b) {
    return a === b;
}
console.log( sonIguales('Ada', 'ada') === false );
console.log( sonIguales('Ada', 'Ada') === true );


let tienenLaMismaLongitud = function(str1, str2) {
    return (str1.length) === (str2.length);
}
console.log( tienenLaMismaLongitud('ada', 'Ada') === true );
console.log( tienenLaMismaLongitud('ada', 'Grace') === false );


let esMenorQueNoventa = function(num) {
    return num < 90;
}
console.log( esMenorQueNoventa(45) === true );
console.log( esMenorQueNoventa(115) === false );
console.log( esMenorQueNoventa(90) === false );

  
let esMayorQueCincuenta = function(num) {
    return num > 50;
}
console.log( esMayorQueCincuenta(90) === true );
console.log( esMayorQueCincuenta(45) === false );
console.log( esMayorQueCincuenta(50) === false );


let obtenerResto = function(a, b) {
    return a % b;
}
console.log( obtenerResto(5, 2) );
console.log( obtenerResto(100, 50) );
console.log( obtenerResto(68, 4) );
console.log( obtenerResto(50, 14) );


let esPar = function(num) {
    return num % 2 === 0;
}
console.log( esPar(5) === false );
console.log( esPar(116) === true );
console.log( esPar(0) === true );
console.log( esPar(-4) === true );
  
let esImpar = function(num) {
    return num % 2 !== 0;
}
console.log( esImpar(50) === false );
console.log( esImpar(3) === true );
console.log( esImpar(-5) === true );
console.log( esImpar(4) === false );