// variable for nav code
let prevScrollpos = window.pageYOffset;

// variables for the pricing charts
const circle_link_id = document.getElementById("circle-link");
const booking_info = document.getElementById('booking-info');
const booking_form = document.getElementById('booking-form');
const booking_info_h1 = document.querySelector('#booking-info-h1');
const price_tables = document.getElementById('price_tables');
const booking = document.getElementById('booking');




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
// This entire code is for desktop version
const pricing = () => {
    // click_link.classList.add('pricing_animation');
    booking_info.style.background = '#27233a';
    booking_info.style.width = '100%';
    booking_info.style.transition = '.7s';
    document.getElementById('booking-info').firstElementChild.style.opacity = '1';
    booking_info_h1.textContent = "Pricing";
    booking_info_h1.style.color = "#eee";
    booking_form.style.width = '0%';
    booking_form.style.display = 'none';
    circle_link_id.style.opacity = '0';
    price_tables.style.display = 'grid';
    booking.style.background = 'var(--dblue)';

    setTimeout(function(){
        circle_link_id.style.display = 'none';      
    },1000);
}

const booking_close = () => {
    booking_info.style.background = '#fff';
    booking_info.style.width = '60%';
    booking_info.style.transition = '.7s';
    document.getElementById('booking-info').firstElementChild.style.opacity = '0';
    booking_info_h1.textContent = "Select a slot for your car";
    booking_info_h1.style.color = "#222";
    booking_form.style.width = '40%';
    booking_form.style.display = 'flex';
    circle_link_id.style.display = 'block';
    circle_link_id.style.opacity = '1';
    price_tables.style.display = 'none';
    booking.style.background = '#fff';
}



// All the eventListeners are addded here
// click_link.addEventListener("click", pricing, false);
document.getElementById('booking-info').firstElementChild.addEventListener("click", booking_close, false);