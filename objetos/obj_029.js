let productOne = {
    id: 1,
    title: "At vero elitr",
    price: 320,
    freeShipping: true
}

let productTwo = {
    id: 2,
    title: "Dolore ipsum est eos",
    price: 230,
    freeShipping: false
}

let productThree = {
    id: 3,
    title: "Lorem sadipscing tempor",
    price: 120.50,
    freeShipping: true
}

let productFour = {
    id: 4,
    title: "Duo invidunt accusam",
    price: 510,
    freeShipping: false
}

let productFive = {
    id: 5,
    title: "Labore accusam eirmod.",
    price: 125.99,
    freeShipping: true
}




let shoppingCart = {
    owner: {
        id: 123,
        name: 'Ada Lovelace'
    },
    products: [],
    addProduct: (product) => {shoppingCart.products.push(product) },
    getTotal: () => {
        let totalPrice = 0;
        for(product of shoppingCart.products) {
            totalPrice += product.price;
        }
        return totalPrice;
    }
};

shoppingCart.addProduct(productOne);
shoppingCart.addProduct(productTwo);
shoppingCart.addProduct(productThree);
shoppingCart.addProduct(productFour);
shoppingCart.addProduct(productFive);

console.log( shoppingCart.getTotal() );