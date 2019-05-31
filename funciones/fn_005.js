let fibonacci = function() {
    let numeroAnt = 0;
    let numeroActual = 1;
    let i = 1;
    let mensaje = "";

    while (i <= 10) {
        suma = numeroAnt + numeroActual;
        numeroAnt = numeroActual;
        numeroActual = suma;
        mensaje += (`${suma}, `);
        i++;
        console.log(mensaje);
    }
}
fibonacci();