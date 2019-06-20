let notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;
let suma = 0;

for (let nota of notasDeTPs) {
    suma += nota;
    notaFinal = suma / notasDeTPs.length;
}
console.log(notaFinal);