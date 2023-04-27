// understand callback

function abc()
{
    console.log("function is going task 1")
}

function xyz()
{
    console.log("function is going task 2")
}

abc();
xyz();

// how to use callback

function func1(callback)
{
    console.log("Hello");
    callback();
}
function func2()
{
    console.log("Indore");
}
func1(func2);

// add two number

function getTwoNumber(number1 ,number2, callback)
{
    console.log(number1, number2);
    callback(number1, number2);
}
function addTwoNumber (num1, num2)
{
    console.log(num1+num2);
}
getTwoNumber(4,5,addTwoNumber);