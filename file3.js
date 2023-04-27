//Array extensions =>Array.of() – improve array creation.

let number = new Array(2);
let string = new Array("2");

console.log(number.length);  // Output => 2  ----creates an array whose length equals the number.
console.log(number[0]);     // Output => undefined 
console.log(string);         // Output => ['2']   ----the Array constructor a value that is not a number, 
console.log(string.length);  // Output => 1
console.log(string[2]);      //  Output => undefined

//sometimes confusing and error-prone (compiler) because you may not know the type of data that you pass to the Array constructor.

let numbers = Array.of(3);         // The Array.of() method creates an array of one number
console.log(numbers.length);     // Output => 1
console.log(numbers[0]);         // Output => 3

let chars = Array.of('A', 'B', 'C'); //we created an array of three strings by passing 'A', 'B', and 'C' to the Array.of() method. The size of the array is 3.
console.log(chars.length);              //Output =>  3
console.log(chars);                    //Output => ['A','B','C']

