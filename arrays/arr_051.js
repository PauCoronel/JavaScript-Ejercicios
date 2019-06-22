let numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

let noRepetir = numeros.reduce((acc, unidad) => {
    if (acc.indexOf(unidad) < 0 ) {
      acc.push(unidad);
    }
    return acc;
  },[]);

let sinRepetidos = noRepetir;

console.log(sinRepetidos);