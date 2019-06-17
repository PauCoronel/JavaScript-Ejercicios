let playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

let playlistCompleta = [].concat(playlistNirvana, playlistFoo);

console.log(playlistNirvana[0]);
console.log(playlistNirvana[1]);
console.log(playlistNirvana[2]);
console.log(playlistNirvana[3]);

let i = 0;
while (i < playlistFoo.length) {
    console.log(playlistFoo[i]);
    i++;
}

for (let j = 0; j < playlistCompleta.length; j++) {
    console.log(playlistCompleta[j]);
}