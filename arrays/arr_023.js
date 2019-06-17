let womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];
let nombresSeparadosPorGuion = '';

nombresSeparadosPorGuion = womenInTech.toString();
nombresSeparadosPorGuion =  nombresSeparadosPorGuion.replace(/,/g, ' - ');
console.log(nombresSeparadosPorGuion);