let returnString = function(str) {
    return str;
}
console.log( returnString('Ada') === 'Ada' );


let sum = function(a, b) {
    return a + b;
}
console.log( sum(2, 2) === 4 );
console.log( sum(5, -9) === -4 );


let res = function(a, b) {
    return a - b;
}
console.log( res(4, 3) === 1 );
console.log( res(2, 9) === -7 );


let mul = function(a, b) {
    return a * b;
}
console.log( mul(3, 4) === 12 );
console.log( mul(-2, -5) === 10 );


let div = function(a, b) {
    return a / b;
}
console.log( div(6, 3) === 2 );
console.log( div(15, 3) === 5 );
  