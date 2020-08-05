// Your code goes here

// mousover links changes color
const navLinks = document.querySelectorAll("a");
function turnBlue(event){
    if (event.target.style.color === "blue"){
        event.target.style.color = "black";
    }
    else{
        event.target.style.color = "blue";
    }
}

navLinks.forEach(link => {link.addEventListener('mouseover', turnBlue)});

// key down makes Fun Bus get bigger if + is pressed, smaller if -

const funBus = document.querySelector('h1');
let sizeCounter = 4;
function fontSizeHandler(){
    if (event.keyCode === 187){
        sizeCounter +=.1;
        funBus.style.fontSize = `${sizeCounter}rem`;
    }
    if (event.keyCode === 189){
        sizeCounter -=.1;
        funBus.style.fontSize = `${sizeCounter}rem`;
    }
    else{
        return;
    }
}

document.addEventListener('keydown', fontSizeHandler);

// add click to navbar

const allImages = document.querySelectorAll('nav');
allImages.forEach(image => image.addEventListener('click', switchColumn));

function switchColumn(event){
    event.target.style.display = "flex";
    event.target.style.flexdirection - "column";
}
