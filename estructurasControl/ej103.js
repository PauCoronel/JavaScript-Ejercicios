let dibujo = "*";
console.log(dibujo);

for (i = 0; i < 8; i++) {
    if (i < 4) {
        dibujo = dibujo + "**";
        console.log(dibujo);
    } else {
        dibujo = dibujo.slice(0, -2);
        console.log(dibujo);
    }
}
