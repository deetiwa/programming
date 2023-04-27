//Set – use the Set type that holds a collection of unique values.stores a collection of unique values of any type.
//Create a new Set from an Array

let chars = new Set(['a', 'a', 'b', 'c', 'c']); // here a and c only one time print

console.log(chars); //  Output => Set(3) {'a', 'b', 'c'} --- All elements in the set must be unique

console.log(typeof(chars));   //When you use the  typeof operator to the chars, it returns object.

let result = chars instanceof Set; // he chars set is an instance of the Set type so the following statement returns true.
console.log(result);

let size = chars.size;  //To get the number of elements that the set holds, use the size property of the Set object:
console.log(size);

chars.add('d');
chars.add('e')
     .add('f');  // Output => Set(6) {'a', 'b', 'c', 'd', 'e', …}
console.log(chars); // To add an element to the set, use the add() method:

let exist = chars.has('a'); //The has() method returns true if the set contains the element, otherwise, it returns false.
console.log(exist);

chars.delete('f');
console.log(chars); //output =>  Set {"a", "b", "c", "d", "e"}

let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');

    for (let role of roles)
     {
        console.log(role);
    }

    for (let [key, value] of roles.entries())  //The Set also provides the keys(), values(), and entries() methods. 
    {
        console.log(key === value);
    }

    roles.forEach(roles => console.log (roles.toUpperCase())); //Invoke a callback function on each element of a set

    // A WeakSet is a collection of garbage-collectable values, including objects and non-registered symbols.

    let computer = {type: 'laptop'};
    let server = {type: 'server'};
    let equipment = new WeakSet([computer, server]);

    console.log(equipment);

if (equipment.has(server)) 
{
    console.log('We have a server');
}
