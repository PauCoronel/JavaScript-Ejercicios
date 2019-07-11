let user = {
    username: 'ada_lovelace',
    password: '1234567890!'
};


const obtenerPropiedades = Object.keys(user);
if (obtenerPropiedades.includes('email')) {
    console.log('El usuario tiene la propiedad email');
} else {
    console.log('El usuario no tiene la propiedad email');
}
