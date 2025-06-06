function tagCloud() {
	var texts = [
		'JavaScript',
		'CSS',
		'HTML',
		'C',
		'C++',
		'VueJS',
		'React JS',
		'Python',
		'Java',
		'git',
		'Vim',
		'Django',
		'Node.js',
		'MySQL',
		'jQuery',
		'AWS',
		'PHP',
	];
	var tc = TagCloud('.content', texts);
	console.log(tc);
}

function copyrightElm() {
	let copyright = document.querySelector('.main__text__copyright');
	let paraElm = document.createElement('p');
	let date = new Date();
	let getCurrentYear = date.getFullYear();
	paraElm.innerHTML = `\u00A9 ${getCurrentYear} - All Rights Reserved.`;
	copyright.appendChild(paraElm);
}

function addExpYears() {
  const now = new Date();
  const firstJobYear = new Date('2019-10-28');

  const diffInMs = now.getTime() - firstJobYear.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  const expYear = Math.floor(diffInYears);
  return expYear;
}

function expYearsDisplay() {
  const expYearShowcase = document.querySelector('#expYearShowcase');
  expYearShowcase.innerHTML = `${addExpYears()}+`;
}

function typeWriter() {
  const roles = document.getElementById('typewriter__role');
  const exp = document.getElementById('typewriter__exp');
  const lang = document.getElementById('typewriter__lang');

  const typewriter1 = new Typewriter (roles, {
    loop: true,
    delay: 75,
  })
  typewriter1
    .pauseFor(2500)
    .typeString('software engineer')
    .pauseFor(300)
    .deleteChars(17)
    .typeString('designer')
    .pauseFor(300)
    .deleteChars(8)
    .typeString('front-end developer')
    .pauseFor(300)
    .deleteChars(19)
    .typeString('back-end developer')
    .pauseFor(300)
    .deleteChars(18)
    .typeString('web designer')
    .pauseFor(300)
    .deleteChars(12)
    .typeString('web developer')
    .pauseFor(300)
    .start()
}

function infinitScroll() {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}

function init() {
	tagCloud();
  typeWriter();
  infinitScroll();
  expYearsDisplay();
  copyrightElm();
}

init();
