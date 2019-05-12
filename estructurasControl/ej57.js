let user = "ada2019";
let password = "12345";

let autenticacion = (user === "ada2019" && password === "12345") ? "El usuario está autenticado y puede ver el contenido del sitio" : "Error, no se pudo autenticar al usuario, puede intentarlo más tarde";

console.log(autenticacion);