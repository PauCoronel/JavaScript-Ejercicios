let n = 10;
let m = 26;
let resultado = 0;

for (i = n; i <= m; i++) {
    while (n <= m) {
        if (n % 2 === 0) {
            resultado = resultado + n;
        }
        n++;
    }
}
console.log(resultado);
