//Array find() – find an element in an array
// The find() accepts two arguments: a callback function and an optional value to use for the this inside the callback function.

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.find(e => e % 2 == 0));

// we have a list of customer objects with name and credit properties 

let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];

console.log(customers.find(c => c.credit > 100));


// Array findIndex() – find the index of an element in an array.

let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);
console.log(index);

const products = [
    { name: 'Phone', price: 999 },
    { name: 'Computer', price: 1999 },
    { name: 'Tablet', price: 995 },
  ];
  
  const indexs = products.findIndex(product => product.price > 1000);
  
  console.log(indexs); // 1