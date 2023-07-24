new Splide( '.splide', {
  type    : 'loop',
  autoplay: 'play',
  perPage : 1,
}).mount();

function showFloatNav() {
  let navMenu = document.getElementById('navMenu');
  let navLinks = document.getElementById('navLinks');
  let menuIcon = document.getElementById('menuIcon');
  navLinks.classList.toggle('hide');
  if (menuIcon.classList.contains('ri-menu-line')) {
    menuIcon.classList.remove('ri-menu-line');
    menuIcon.classList.add('ri-close-line');
  } else {
    menuIcon.classList.add('ri-menu-line');
  }
}

function showNavbarOnScroll() {
  let navFloat = document.getElementById('navFloat');
  let yAxis = window.scrollY;
  setTimeout(() => {
    if (yAxis >= 400) {
      navFloat.classList.remove('hide'); 
    } else {
      navFloat.classList.add('hide')
    }
  }, 200);
}

function footerElm() {
  let footer = document.querySelector('footer');
  let paraElm = document.createElement('p');
  let date = new Date();
  let getCurrentYear = date.getFullYear();
  paraElm.innerHTML = `\u00A9 ${getCurrentYear} - Micah M Tinife`; 
  paraElm.classList = 'container';
  footer.appendChild(paraElm);
}

const scrollFunc = function () {
  showNavbarOnScroll();
}

navMenu.addEventListener('click', showFloatNav);
window.addEventListener('scroll', scrollFunc);
footerElm();
