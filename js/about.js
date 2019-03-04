
const hero = document.getElementById('hero');
const readButton = document.getElementById('heroButton');
const heroDescription = document.getElementById('heroDescription');
const heroDescriptionh1 = document.getElementById('heroDescriptionh1');
const heroDescriptionp = document.getElementById('heroDescriptionp');
const main = document.getElementById('main');
const heroImage = document.getElementById('heroImage');


// console.log('hey am working!!');


const readmore = () => {
    heroDescription.style.width = '100%';
    // heroDescription.style.direction = 'rtl';
    heroDescriptionh1.classList.remove('medHead');
    heroDescriptionh1.classList.add('bigHead');
    heroDescriptionh1.style.borderLeft = '5px solid var(--skyblue)';
    heroDescriptionh1.style.paddingLeft = '20px';
    heroDescription.style.height = 'auto';
    heroDescriptionp.style.opacity = '0';
    readButton.style.opacity = '0';
    hero.style.height = 'auto';
    main.style.display = 'block';
    heroImage.style.width = '0%';
    heroImage.style.display = 'none';


    setTimeout(function(){
        heroDescriptionp.style.display = 'none';
        readButton.style.display = 'none';
    },500);
}



const heroDescription_reset = () => {
    heroDescription.style.width = '100%';
    // heroDescription.style.direction = 'rtl';
    heroDescriptionh1.classList.remove('medHead');
    heroDescriptionh1.classList.add('bigHead');
    heroDescriptionh1.style.borderLeft = '5px solid var(--skyblue)';
    heroDescriptionh1.style.paddingLeft = '20px';
    heroDescription.style.height = 'auto';
    heroDescriptionp.style.opacity = '0';
    readButton.style.opacity = '0';
    hero.style.height = 'auto';
    main.style.display = 'block';
    heroImage.style.width = '0%';
    heroImage.style.display = 'none';


    setTimeout(function(){
        heroDescriptionp.style.display = 'none';
        readButton.style.display = 'none';
    },500);
}











