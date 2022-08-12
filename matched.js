const numbers = [45, 65, 23, 98, 19]

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: 'Xiaomi phone', price: 19000},
    {id: 2, name: 'iPhone', price: 19000},
    {id: 3, name: 'Mac Book Air', price: 119000},
    {id: 4, name: 'Lenevo Yoga Laptop 2025', price: 19000},
    {id: 5, name: 'Dell Inspiron Laptop', price: 19000},
    {id: 6, name: 'Samsung phone note 7', price: 19000},
    {id: 7, name: 'Nokia old age phone gone', price: 19000},
    {id: 8, name: 'Walton phone', price: 19000},
];

// for(const product of products);{
//     console.log(products);
// }

function matchedProducts (products, search){
    for(const product of products);
    console.log(product);
}