// settimeout

console.log("Hello World");

const id = setTimeout(() => {

    console.log("inside timeout")
}, 2000);

for (let i=1; i < 100; i++)
{
    console.log("enter in loop");
}

console.log("Set Timeout id ", id);
console.log("Clear Time out");
clearTimeout(id);
console.log("script End");

// setInterval print rendom number

console.log("Script Start");

setInterval(() =>{

    console.log(Math.random());
},10000);

console.log("Scrip End");

// other exmple using loop

setInterval (() => {

    for(let i=0; i<10; i++)
    {
        console.log(Math.random())
    
    }
},1000);

console.log("End");