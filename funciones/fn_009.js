let obtenerIdUsuario = function() {
    return 50;
}

let usuarioValido = function() {
    if (obtenerIdUsuario > 30){
        return false;
    } else {
        return true;
    }
}

usuarioValido();

let elUsuarioEsValido = usuarioValido();

if (elUsuarioEsValido) {
    console.log("El usuario es válido");
} else {
    console.log("El usuario no es válido");
}