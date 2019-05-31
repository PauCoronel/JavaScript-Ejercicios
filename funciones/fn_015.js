let peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];
let numerosPares = [0, 2, 4, 6, 8, 10, 12];

let obtenerPrimerElemento = function(listas) {
    return listas[listas.length - 1];
}

console.log( obtenerPrimerElemento(peliculasBatman) );
console.log( obtenerPrimerElemento(numerosPares) );