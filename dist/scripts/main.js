function tagCloud() {
	var texts = [
		'JavaScript',
		'CSS',
		'HTML',
		'C',
		'C++',
		'React',
		'Python',
		'Java',
		'git',
		'django',
		'Node.js',
		'OpenCV',
		'GCP',
		'MySQL',
		'jQuery',
	];
	var tc = TagCloud('.content', texts);
	console.log(tc);
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

function init() {
	tagCloud();
	footerElm();
}

init();
