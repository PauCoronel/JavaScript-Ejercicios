let usuarioYPassword = "ada2019,12345";
let nombreDeUsuario = usuarioYPassword.substr(0,7);
let password = usuarioYPassword.substr(8,12);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);
