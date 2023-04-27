const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");

setTimeout(() => {

    heading1.textContent = "One";
    heading1.style.color = "voilet";
}, 1000);

setTimeout(() => {

    heading2.textContent = "Two";
    heading2.style.color = "red";
}, 2000);

setTimeout(() => {

    heading3.textContent = "three";
    heading3.style.color = "green";
}, 1000);


setTimeout(() => {

    heading4.textContent = "four";
    heading4.style.color = "pink";
}, 1000);


setTimeout(() => {

    heading5.textContent = "five";
    heading5.style.color = "yellow";
}, 1000);

