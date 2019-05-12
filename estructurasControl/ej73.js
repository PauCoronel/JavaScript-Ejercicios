let asterisco = 0;
let dibujo = "**************";

while (asterisco <= 12) {
    dibujo = dibujo.slice(0, -1);
    console.log(dibujo);
    asterisco++;
}
