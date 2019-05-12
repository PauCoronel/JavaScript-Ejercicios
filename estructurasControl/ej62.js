let numeroDeMes = 13;
let nombreDelMes = null;
let cantidadDeDias = null;
        
if (numeroDeMes >= 1 && numeroDeMes <= 12) {
    if (numeroDeMes === 1) {
        nombreDelMes = "Enero";
        cantidadDeDias = "31";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 2) {
        nombreDelMes = "Febrero";
        cantidadDeDias ="28/29";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 3) {
        nombreDelMes = "Marzo";
        cantidadDeDias = "31";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 4) {
        nombreDelMes = "Abril";
        cantidadDeDias = "30";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 5) {
        nombreDelMes = "Mayo";
        cantidadDeDias = "31";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 6) {
        nombreDelMes = "Junio";
        cantidadDeDias = "30";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 7) {
        nombreDelMes = "Julio";
        cantidadDeDias = "31";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 8) {
        nombreDelMes = "Agosto";
        cantidadDeDias = "31";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 9) {
        nombreDelMes = "Septiembre";
        cantidadDeDias = "30";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 10) {
        nombreDelMes = "Octubre";
        cantidadDeDias = "31";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else if (numeroDeMes === 11) {
        nombreDelMes = "Noviembre";
        cantidadDeDias = "30";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    } else {
        nombreDelMes = "Diciembre";
        cantidadDeDias = "31";
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
    }
} else {
    console.log(nombreDelMes);
    console.log(cantidadDeDias);
    console.log("Error. Ingrese un número entre 1 y 12");
}