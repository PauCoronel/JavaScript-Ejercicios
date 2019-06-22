let numbers = [6, 1, 34, 94, 3, 17];
let mul = 0;

mul = numbers.reduce(function(resultado, unidad){
    return resultado * unidad;
});

console.log(mul);