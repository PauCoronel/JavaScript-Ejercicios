let user = {
    name: {
        first: 'Hedy',
        last: 'Lamarr'
    },
    age: 30,
    getFullname: () => `${user.name.first} ${user.name.last}`
};

console.log(user.getFullname());