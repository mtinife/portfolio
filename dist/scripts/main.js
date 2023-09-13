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

 const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 200,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#D9843B', '#0D0D0D', '#FFFFFF'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

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

function init() {
  navMenu.addEventListener('click', showFloatNav);
  window.addEventListener('scroll', scrollFunc);
  footerElm();
}

init();
