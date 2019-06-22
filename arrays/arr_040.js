let costos = [ 12.5, 56, 98, 45.75 ];

let sumarGanancia = function (costo) {
  return costo * 1.5;
}
let agregarIVA = function (costo) {
  return costo * 1.21;
}


let preciosFinales = costos.map(function(costo){
    let resultGanancia = sumarGanancia(costo);
    resultGanancia = agregarIVA(resultGanancia);
    return resultGanancia;
})

console.log(preciosFinales);


