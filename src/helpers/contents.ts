export const contents: { title: string; type: 'article' | 'talk' | 'project'; content: string; url: string; }[] = [
	{ 
		type: 'talk', 
		title: 'Angular 9 e Ivy', 
		url: 'https://slides.com/pedrovitorino/angular-9-e-ivy', 
		content: 'Palestra sobre as novidades do Angular 9 e seu novo compilador, Ivy.' 
	},
	{ 
		type: 'talk', 
		title: 'Criando PWAs com Angular', 
		url: 'https://docs.google.com/presentation/d/1djBjl8KzQpSg90EYKNQrGmu96Lkr9UPPdYSwGamWfpM/edit?usp=sharing', 
		content: 'Palestra explicando PWAs e como transformar sua aplicação Angular em uma PWA.' 
	},
	{ 
		type: 'project', 
		title: 'LotR PWA', 
		url: 'https://github.com/pedrovsp/lotr-pwa', 
		content: 'Aplicação criada para aplicar conceitos de PWAs com Angular e Senhor dos Anéis 🤔' 
    }
];