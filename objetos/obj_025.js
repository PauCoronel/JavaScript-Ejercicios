let pelicula = {
    titulo: 'The Dark Knight',
    anio: 2008,
    director: 'Christopher Nolan',
    mostrarInfo: () => {
        console.log(`Película: ${pelicula.titulo} - Año: ${pelicula.anio}`);
    }
}

pelicula.mostrarInfo();