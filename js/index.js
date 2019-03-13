// variable for nav code
let prevScrollpos = window.pageYOffset;

// // variables for the pricing charts
const closeIcon = document.querySelectorAll(".close");
const hidden_menu = document.getElementById("#hidden_menu");
const nav = document.querySelector('nav');




// This code is activated whenever there is a scroll event triggered in the window
window.onscroll = function() {
    // This code makes the nav appear and disappear on the screen
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    // nav animation ends here
}


const navclose = () => {
    hidden_menu.style.opacity = "0";
    

    setTimeout(function(){
        hidden_menu.style.display = "none";
    },1000);
}

// The hover and rmhover functions are used for the hidden navigation menu
// const hover = (x) => {
//     x.style.opacity = '1';
//     let siblings = getSiblings(x);
//     siblings.style.opacity = '.3';
// }

// const rmhover = (x) => {
//     x.style.opacity = '.5';
// }

const hiddennav = () => {
    const hidden_menu = document.getElementById("#hidden_menu");
    nav.style.display = "none";
    document.getElementById("#hidden_menu").style.display = 'block';
}

// All the eventListeners are addded here

