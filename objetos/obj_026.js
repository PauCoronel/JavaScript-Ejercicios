let playlist = {
    name: 'Rupaul Lipsyncs',
    owner: 'Ada',
    followers: 8743,
    songs: [],
    addSong: (cancion) => playlist.songs.push(cancion)
}

playlist.addSong('Geronimo');
playlist.addSong('Sissy that walk');
playlist.addSong('Cover girl');

console.log(playlist.songs);