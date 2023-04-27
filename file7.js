//Synchronous programming vs asynchronous programming
//Synchronous programming javascript single threaded

console.log("Start");               // first line execute

for(let i=0; i<1000; i++)
{
    console.log("Inside Loop");     // second line execute
}

console.log("End");      // last line execute

//......

console.log("Hello World");

setTimeout(() => {

    console.log("inside timeout")
}, 2000);

for (let i=1; i < 100; i++)
{
    console.log("enter in loop");
}

console.log("script End");