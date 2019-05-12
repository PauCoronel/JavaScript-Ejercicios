suma = 0;

for (i = 0; i <= 1000; i++) {
    suma = suma + i;
    console.log(suma);
    if (suma > 100) {
        break;
    }
}