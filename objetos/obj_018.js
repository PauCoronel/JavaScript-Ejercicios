let banda = {
    name: 'Led Zeppelin',
    year: 1968,
    active: false,
    thumbnail: 'http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75',
    members: [ 'Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham' ],
    albums: [
      { name: 'Led Zeppelin', year: 1969, songs: ['Good Times, Bad Times', "Communication Breakdown" ], duration: 2691 },
      { name: 'Led Zeppelin II', year: 1969, songs: [ "Whole Lotta Love", "Moby Dick", "Ramble On" ], duration: 2502 },
      { name: 'Led Zeppelin III', year: 1970, songs: [ "Immigrant Song" ], duration: 2489 },
      { name: 'Led Zeppelin IV', year: 1971, songs: [ "Rock and Roll", "Stairway to Heaven", "Four Sticks" ], duration: 2559 },
    ]
};

let anioLanzamiento = banda.year;
let cantidadMiembros = banda.members.length;
let miembros = banda.members.join(', ');
let cantidadDiscos = banda.albums.length;
let cantidadTotalCanciones = 0;
let promedioDuracion = 0;

for (let album of banda.albums) {
  cantidadTotalCanciones += album.songs.length;
};

for (let duracion of banda.albums) {
  promedioDuracion += duracion.duration;
};
promedioDuracion = promedioDuracion / cantidadTotalCanciones;



console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
console.log("Tiene en total " + cantidadDiscos + " discos");
console.log("Tiene en total " + cantidadTotalCanciones + " canciones entre todos los discos.");
console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");