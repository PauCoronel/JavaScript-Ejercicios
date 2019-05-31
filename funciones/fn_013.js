let exclamar = function(str) {
    return "¡" + str + "!";
}
console.log( exclamar('hola') === '¡hola!' );
console.log( exclamar('hola, mundo') === '¡hola, mundo!' );
  
let unirNombre = function(nombre, apellido) {
    return nombre + " " + apellido;
}
console.log( unirNombre('Ada', 'Lovelace') === 'Ada Lovelace' );
console.log( unirNombre('Grace', 'Hopper') === 'Grace Hopper' );
  
let saludar = function(nombre) {
    return "¡Hola " + nombre + "!";
}
console.log( saludar('Ada') === '¡Hola Ada!' );
console.log( saludar('Grace') === '¡Hola Grace!' );

  