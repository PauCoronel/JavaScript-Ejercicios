let womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

womenInTech.pop();
womenInTech.push('Parisa Tabriz');

let longitud = womenInTech.length;
let enLaPosicion3 = womenInTech[2];
console.log('La longitud del array es: ' + longitud);
console.log('En la posición 3 está: ' + enLaPosicion3);

for (let i = 0; i < womenInTech.length; i++) {
    console.log(womenInTech[i]);
}
