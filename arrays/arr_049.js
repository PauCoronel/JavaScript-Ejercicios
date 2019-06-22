let notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;

notaFinal = notasDeTPs.reduce(function(acc, unidad){
    return acc + unidad;
});
notaFinal = notaFinal / notasDeTPs.length;

console.log(notaFinal);