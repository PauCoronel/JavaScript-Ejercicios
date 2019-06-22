let datos = {
    id: 1,
    nombre: 'Ada',
    apellido: 'Lovelace',
    email: 'ada.lovelace@gmail.com',
    telefono: '1234567890',
    edad: 29,
    programa: true
};
  

if (datos.programa === true) {
    datos.lenguajesFavoritos = ['Javascript', 'C++'];
}
  
console.log(`Hola, mi nombre es ${datos.nombre} y programo en ${datos.lenguajesFavoritos}`); 