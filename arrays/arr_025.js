let notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;

for (let i = 0; i < notasDeTPs.length; i++){
    notaFinal += notasDeTPs[i];
}
notaFinal = notaFinal / notasDeTPs.length;
console.log(notaFinal);