// JavaScript Array Array.from() method => all array elements and add each of them to an intermediate array.

//Example 01.

function fruit ()
{
    var result = [];

    for( let i=0; i<= arguments.length; i++)
    {
       result.push(arguments[i]);
       
    }
    return result;

}
var frt = fruit('Apple', 'Banana', 'orang', 'Mango');
console.log(frt);

//Example 02.

function Args()
 {
    return Array.prototype.slice.call(arguments);
}
var fruits = Args('Apple', 'Orange', 'Banana');
console.log(fruits);

//Array.from => Array.from() method that creates a new instance of the Array from an array-like or iterable object

function app() 
{
    return Array.from(arguments);
}

console.log(app(1, 'A'));

// Array.from() with a mapping function

function addOne()
 {
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));

//Create an array from an iterable object

let even = {
    *[Symbol.iterator]()
     {
        for (let i = 0; i < 10; i += 2)
         {
            yield i;
        }
    }
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);