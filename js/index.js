// variable for nav code
let prevScrollpos = window.pageYOffset;

// variables for the pricing charts
const click_link = document.getElementsByClassName("click-link");
const booking_info = document.getElementById('booking-info');
const booking_form = document.getElementById('booking-form');





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

// This code makes the click-link button functional for showing the pricing charts
const pricing = () => {
    // click_link.classList.add('pricing_animation');
    // booking_info.style.background = '#27233a';
    // booking_info.classList.add('price-animation');
    // booking_form.style.left = '40%';
}



// All the eventListeners are addded here
// click_link.addEventListener("click", pricing, false);
