let nevermind = [
    { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
    { id: 2, nombre: "In Bloom", duracion: 255 },
    { id: 3, nombre: "Come As You Are", duracion: 219 },
    { id: 4, nombre: "Breed", duracion: 184 },
    { id: 5, nombre: "Lithium", duracion: 257 }
];



let duracionTotal = 0;
let duracionPromedioPorCancion = 0;

nevermind.forEach(function(objeto) {
    duracionTotal += objeto.duracion;
    duracionPromedioPorCancion = duracionTotal / nevermind.length;
});

console.log(duracionTotal);
console.log(duracionPromedioPorCancion);