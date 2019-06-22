let playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

let info = playlist.map(function(cancion, index){
    return `${index} - ${cancion}`;
})
console.log(info);