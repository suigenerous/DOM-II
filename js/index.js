// Your code goes here

// mousover links changes color
const navLinks = document.querySelectorAll("a");
console.log(navLinks);
function turnBlue(event){
    if (event.target.style.color === "blue"){
        event.target.style.color = "black";
    }
    else{
        event.target.style.color = "blue";
    }
}

navLinks.forEach(link => {link.addEventListener('mouseover', turnBlue)});

// key down makes Fun Bus get big

