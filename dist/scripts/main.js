

new Splide( '.splide', {
  type    : 'loop',
  autoplay: 'play',
  perPage : 1,
}).mount();

function showFloatNav() {
  const navMenu = document.getElementById('navMenu');
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

function submitForm(e) {
  e.preventDefault();
  const name = getInputValue('name');
  const email = getInputValue('email');
  const company = getInputValue('company');
  const phone = getInputValue('phone');
  const subject = getInputValue('subject');
  const message = getInputValue('message');

  saveMessage(name, email, company, phone, subject, message);
}

function saveMessage(name, email, company, phone, subject, message) {
  const newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    company: company,
    phone: phone,
    subject: subject,
    message: message
  })
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

const scrollFunc = function () {
  showNavbarOnScroll();
}

navMenu.addEventListener('click', showFloatNav);
document.getElementById('contactForm').addEventListener('submit', submitForm);
window.addEventListener('scroll', scrollFunc);
footerElm();
