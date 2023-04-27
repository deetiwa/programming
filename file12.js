const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");

const heading7 = document.querySelector(".heading7");


function changeText (element, text, color, time, onSuccessCallback)
{

setTimeout(() =>
{

    if(element)
    {
        element.textContent = text;
        element.style.color = color;

        if(onSuccessCallback)
        {
            onSuccessCallback();
        }
        else{
            console.log("Wrong Element");
        }
    }
},time)}

changeText(heading1,"one","voilet", 2000, () => {}, ()=>{console.log("Heading does not Exist")})
  changeText(heading2, "two", "green",1000,() => {}, ()=>{console.log("Heading does not Exist")})
     changeText(heading3,"Three","red", 2000, () => {}, ()=>{console.log("Heading does not Exist")})

       changeText(heading4, "four", "pink",1000,() => {}, ()=>{console.log("Heading does not Exist")})
           changeText(heading5,"five","purpel", 2000, () => {}, ()=>{console.log("Heading does not Exist")})
                 changeText(heading6, "six", "yellow",1000,() => {}, ()=>{console.log("Heading does not Exist")})
                    changeText(heading7, "seven", "orange",1000,() => {}, ()=>{console.log("Heading does not Exist")})
        
    

                
            
           

 