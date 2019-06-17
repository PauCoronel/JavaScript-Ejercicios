let ganadorasRupaul = ["Tyra Sanchez", "Chad Michaels", "Raja", "Trixie Mattel", "Aquaria", "Bebe Zahara Benet", "Sharon Needles", "Jinkx Monsoon", "Alaska Thunderfuck 5000", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Sasha Velour"];

let posicionSharonNeedles = ganadorasRupaul.indexOf('Sharon Needles')-1;
console.log('Sharon Needles es la ganadora número: ' + posicionSharonNeedles);

let latriceRoyaleGano = ganadorasRupaul.includes('Latrice Royale');
if (latriceRoyaleGano === true) {
    console.log("Latrice Royale fue ganadora de RuPaul's Drag Race");
} else {
    console.log("Latrice Royale NO fue ganadora de RuPaul's Drag Race");
}