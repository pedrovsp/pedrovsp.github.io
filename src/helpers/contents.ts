export const contents: { title: string; type: 'article' | 'talk' | 'project'; content: string; url: string; }[] = [
	{ 
		type: 'talk', 
		title: 'ivy.title', 
		url: 'https://slides.com/pedrovitorino/angular-9-e-ivy', 
		content: 'ivy.desc' 
	},
	{ 
		type: 'talk', 
		title: 'pwa.title', 
		url: 'https://docs.google.com/presentation/d/1djBjl8KzQpSg90EYKNQrGmu96Lkr9UPPdYSwGamWfpM/edit?usp=sharing', 
		content: 'pwa.desc' 
	},
	{ 
		type: 'project', 
		title: 'lotr.title', 
		url: 'https://github.com/pedrovsp/lotr-pwa', 
		content: 'lotr.desc' 
    },
    { 
		type: 'article', 
		title: 'git.title', 
		url: 'https://dev.to/pedrovsp/git-o-minimo-que-voce-precisa-saber-para-trabalhar-em-equipe-parte-1-2mnd', 
		content: 'git.desc' 
	},
];