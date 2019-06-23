let playlist = {
    nombre: 'Nirvana',
    privada: true,
    canciones: ['Smells Like Teen Spirit', 'In Bloom', 'Come As You Are']
}

let siNo = '';
if (playlist.privada === true) {
    siNo = 'Si';
} else {
    siNo = 'No';
}

console.log(`Lista de ${playlist.nombre}`);
console.log(`Privada: ${siNo}`);
console.log(`Canciones:
${playlist.canciones[0]}
${playlist.canciones[1]}
${playlist.canciones[2]}`);