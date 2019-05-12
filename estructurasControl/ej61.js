let number = prompt("Ingrese un número del 1 al 7");

if (number < 1 || number > 7) {
    console.log("Error");
} else {
    console.log("Usted seleccionó el número " + number);
}

// =========================  VERSIÓN SWITCH ========================= //

let dia = 5;
let nombreDelDia = null;

switch (dia) {
    case 1:
        nombreDelDia = 'Domingo';
        break;
    case 2:
        nombreDelDia = 'Lunes';
        break;
    case 3:
        nombreDelDia = 'Martes';
        break;
    case 4:
        nombreDelDia = 'Miércoles';
        break;
    case 5:
        nombreDelDia = "Jueves";
        break;
    case 6:
        nombreDelDia = "Viernes";
        break;
    case 7:
        nombreDelDia = "Sábado";
        break;
    default:
       nombreDelDia;
  }
  
console.log(nombreDelDia); 


// =========================  VERSIÓN IF / ELSE ===================== //


    dia = 7;

if (dia === 1) {
    console.log("Domingo");
} else if (dia === 2) {
    console.log("Lunes");
} else if (dia === 3) {
    console.log("Martes");
} else if (dia === 4) {
    console.log("Miércoles");
} else if (dia === 5) {
    console.log("Jueves");
} else if (dia === 6) {
    console.log("Viernes");
} else if (dia === 7) {
    console.log("Sábado");
} else {
    console.log("Error");
}
