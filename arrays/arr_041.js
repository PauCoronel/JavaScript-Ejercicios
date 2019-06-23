let productos = [ 'celular', 'notebook', 'monitor' ];
let costos = [ 12.5, 56, 98 ];

let sumarGanancia = function (costo) {
    return costo * 1.5;
}
let agregarIVA = function (costo) {
  return costo * 1.21;
}


let preciosFinales = [];

let preciosActualizados = costos.map(function(costo){
    let resultGanancia = sumarGanancia(costo);
    resultGanancia = agregarIVA(resultGanancia);
    return resultGanancia;
});

for (let i = 0; i < preciosActualizados.length; i++){
    preciosFinales.push(productos[i] + ' ' + preciosActualizados[i]);
};

console.log(preciosFinales);
