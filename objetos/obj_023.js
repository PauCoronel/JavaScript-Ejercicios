const hasProperty = (object, property) => {
    let properties = Object.keys(object);
    if(properties.includes(property)) {
        return true;
    } else {
        return false;
    }
}


let user = {
    username: 'ada_lovelace',
    password: '1234567890!'
};

let user2 = {
    username: 'grace_hopper',
    password: '1234567890!',
    email: 'grace@hopper.com'
};

console.log(hasProperty(user, 'email')); 
console.log(hasProperty(user, 'password')); 
console.log(hasProperty(user, 'id')); 
console.log(hasProperty(user2, 'email')); 
console.log(hasProperty(user2, 'password')); 
console.log(hasProperty(user2, 'id')); 