let disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
};


let nombreDisco = disco.nombre;
let anioDisco = disco.anioLanzamiento;
let nombreBanda = disco.banda.nombre;
  
console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
