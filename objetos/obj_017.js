let bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];


bandas.forEach(function(objeto) {
    if (objeto.activa === true){
        console.log(`${objeto.nombre} está activa desde el año ${objeto.fundacion}`);
    } else {
        console.log(`${objeto.nombre} no está activa`);
    }
});