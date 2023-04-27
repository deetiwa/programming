// Object.assign() – copy an object or merge objects.

// Object.assign() to clone an object

let widget = {
    color : 'Red'
}

let clone = Object.assign({} , widget);

console.log(clone);

//Object.assign() to merge objects

let box = {
    width : 10,
    height : 20
};

let style = {
    color  : 'green',
    border : 'solid'

};

let boxstyle = Object.assign( {}, box, style );

console.log(boxstyle)

//Object.is() – check if two values are the same value.

let amount = +0,
    volume = -0;
console.log(volume === amount); //Output => true

console.log(Object.is(amount, volume));    //Output => false

//

let quantity = NaN;
console.log(quantity === quantity);       //Output => false

console.log(Object.is(quantity,quantity));    //Output => true