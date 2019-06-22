let numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

sum = numbers.reduce(function(suma, unidad){
    return suma + unidad;
})

console.log(sum);