const body = document.body;
const button = document.querySelector("button");

const id = setInterval(() => {

    const red = Math.floor(Math.random() * 120);
    const green = Math.floor(Math.random() * 120);
    const blue = Math.floor(Math.random() * 120);
    const rgb = `rgb(${red}, ${green}, ${blue})`;

    console.log(rgb);

    document.body.style.background = rgb; },2000)

    button.addEventListener("click",() => {

        clearInterval(id);
        button.textContent = document.body.style.background;
    })

    console.log(id);




