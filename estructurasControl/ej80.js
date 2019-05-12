let number = 0;
let suma = 0;

do {
    if (number % 2 != 0) {
        suma = suma + number;
        console.log(suma);
        number++;
    } else {
        number++;
    }
} while (number <= 1000) {
    
}
