function backgroundContainer() {
	const backgroundGroup = document.querySelector(
		'.background-group'
	);
	for (let i = 1; i < 20; i++) {
		const containerId = `iconContainer${i}`;
		const container = document.createElement('div');
		container.className = 'iconContainer';
		container.id = containerId;
		backgroundGroup.appendChild(container);
		addIcons(containerId);
	}

	function addIcons(containerId) {
		const iconContainer =
			document.getElementById(containerId);
		const iconClass = [
			'devicon-amazonwebservices-plain-wordmark',
			'devicon-angular-plain',
			'devicon-archlinux-plain',
			'devicon-bamboo-original',
			'devicon-c-plain',
			'devicon-cplusplus-plain',
			'devicon-css3-plain',
			'devicon-docker-plain',
			'devicon-django-plain',
			'devicon-firebase-plain',
			'devicon-git-plain',
			'devicon-html5-plain',
			'devicon-javascript-plain',
			'devicon-jest-plain',
			'devicon-jquery-plain',
			'devicon-kotlin-plain',
			'devicon-linux-plain',
			'devicon-nodejs-plain',
			'devicon-php-plain',
			'devicon-postgresql-plain',
			'devicon-python-plain',
			'devicon-react-original',
			'devicon-tailwindcss-original',
			'devicon-typescript-plain',
			'devicon-vim-plain',
			'devicon-vuejs-plain',
		];

		for (let i = 0; i < 50; i++) {
			const icon = document.createElement('i');
			icon.className = `${randomIcon(iconClass)}`;
			iconContainer.appendChild(icon);
		}
	}

	function randomIcon(values) {
		const randomIndex = Math.floor(
			Math.random() * values.length
		);
		return values[randomIndex];
	}
}

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
	backgroundContainer();
}

init();
