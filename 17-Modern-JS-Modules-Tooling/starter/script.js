console.log('import');

// import {
//     addToCart,
//     totalPrice as price,
//     tq
// } from "./shoppingCart.js";

// addToCart('bread', 5)
// console.log(price, tq);



// import * as ShoppingCart from './shoppingCart.js'

import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('pasta', 10);
add('juice', 7)
console.log(cart);
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);


// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//     const data = await res.json();
//     return {title: data.at(-1).title, text: data.at(-1).body}
// };

// const lastPost = getLastPost();
// console.log(lastPost);
// // not clean
// // lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} was added to cart`);
//     };

//     const orderStock = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     }
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);

// console.log(ShoppingCart2);

// console.log(ShoppingCart2.shippingCost);

import cloneDeep from "lodash-es";
//import { add } from 'lodash';

const state = {
    cart: [
        { product: 'bread', quanity: 5 },
        { product: 'pizza', quanity: 3 },
    ],
    user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept()
};

