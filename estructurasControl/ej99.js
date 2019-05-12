let suma = 0;
let par = 0;

for (i = 0; i <= 100; i += 2) {
    suma = suma + i;
    par++;
    if (par === 10) {
        console.log(suma);
        break;
    }
}