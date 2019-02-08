const contactOpen = document.querySelector('.contact-open'),
    contactClose = document.querySelector('.contact-close'),
    overlayContact = document.querySelector('.overlay-contact'),
    projectOutline = document.querySelector('.project-outline'),
    exitOne = document.querySelector('.exitOne'),
    exitTwo = document.querySelector('.exitTwo'),
    exitThree = document.querySelector('.exitThree'),
    menuOne = document.querySelector('.menuOne'),
    mobileDrop = document.querySelector('.mobile-navbar-container'),
    navMenu = document.querySelector('#navMenu'),
    projUop = document.querySelector('#projUop'),
    projWlc = document.querySelector('#projWlc'),
    projBrain = document.querySelector('#projBrain'),
    overlayUop = document.querySelector('#overlayUop'),
    overlayWlc = document.querySelector('#overlayWlc'),
    overlayBrain = document.querySelector('#overlayBrain');

function addClassFunOne() {
    this.classList.toggle('clickMenuOne');
}

menuOne.addEventListener('click', addClassFunOne);

navMenu.addEventListener('click', () => {
    mobileDrop.classList.toggle('mobileToggle');
});

contactClose.classList.toggle('hide');
overlayContact.style.left = '100%';
contactOpen.addEventListener('click', () => {
    overlayContact.style.left = '50%';
    contactOpen.classList.toggle('hide');
    contactClose.classList.toggle('hide');
});

contactClose.addEventListener('click', () => {
    overlayContact.style.left = '100%';
    contactClose.classList.toggle('hide');
    contactOpen.classList.toggle('hide');
});

projUop.addEventListener('click', () => {
    overlayUop.classList.toggle('hide-overlay');
});

exitOne.addEventListener('click', () => {
    overlayUop.classList.toggle('hide-overlay');
});

projWlc.addEventListener('click', () => {
    overlayWlc.classList.toggle('hide-overlay');
});

exitTwo.addEventListener('click', () => {
    overlayWlc.classList.toggle('hide-overlay');
});

projBrain.addEventListener('click', () => {
    overlayBrain.classList.toggle('hide-overlay');
});

exitThree.addEventListener('click', () => {
    overlayBrain.classList.toggle('hide-overlay');
});