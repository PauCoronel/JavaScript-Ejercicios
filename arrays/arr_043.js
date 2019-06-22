let frases = ['Ut vero.', 'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Est diam justo gubergren dolores et vero.', 'Et sanctus sanctus et dolor clita.',
'Dolores.', 'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'];

let masCortas = frases.filter(function(menosDeVeinte){
    return menosDeVeinte.length < 20;
});

let frasesCortas = masCortas ;
console.log(frasesCortas);