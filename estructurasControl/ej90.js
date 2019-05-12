let number = 0;
let suma = 0;

for (i = 0; i <= 1000; i++) {
    if (number % 2 != 0) {
        suma = suma + number;
        console.log(suma);
        number++;
    } else {
        number++;
    }    
}