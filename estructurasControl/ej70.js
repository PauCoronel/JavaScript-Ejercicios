let number = 0;
let suma = 0;

while (number <= 1000) {
    if (number % 2 != 0) {
        suma = suma + number;
        console.log(suma);
        number++;
    } else {
        number++;
    }
}