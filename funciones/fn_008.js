let obtenerNombre = function() {
    return "Paula";
}

let obtenerSaludo = function() {
    let nombre = obtenerNombre();
    return '¡Hola,' + ' ' + nombre + '!';
}

console.log(obtenerSaludo());