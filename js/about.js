const aboutButton = document.getElementById('heroButton');
const heroDescription = document.getElementById('heroDescription');
const heroImage = document.getElementById('heroImage');


// console.log('hey am working!!');


const readmore = () => {
    heroDescription.style.width = '100%';   
    // heroDescription.style.direction = 'rtl';   
    heroImage.style.width = '0%';
    heroImage.style.display = 'none';
}