let producto = {
    id: 'ADA-020',
    title: 'Gubergren sed est amet voluptua',
    price: 123.75,
    picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
    condition: 'nuevo',
    free_shipping: true,
    location: 'Capital Federal'
};

let resultados = Object.keys(producto);

for(let i = 0; i< resultados.length; i++) {
    console.log(`producto['${resultados[i]}'] -> ${producto[resultados[i]]}`);
}
