import type { Itranslations } from './Itranslations';

export const norwegianTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software',
		description: 'Programvareutvikling og rådgivning fra Vegard Haglund'
	},
	nav: {
		brand: 'Haglund Software',
		home: 'Hjem',
		projects: 'Prosjekter',
		contact: 'Kontakt'
	},
	home: {
		hero: {
			headline: '[Ditt navn eller slagord her]',
			tagline:
				'[En kort beskrivelse av hva du gjør — for eksempel "Uavhengig programvareutvikler basert i Norge"]',
			cta: 'Se prosjekter'
		},
		about: {
			sectionTitle: 'Om meg',
			bio: '[Fylles inn — presenter deg selv, bakgrunnen din og hva du bidrar med.]',
			location: 'Norge',
			org: 'Haglund Software ENK'
		},
		services: {
			sectionTitle: 'Dette gjør jeg',
			items: [
				{
					title: '[Tjeneste 1]',
					body: '[Beskrivelse av din første tjeneste eller kompetanseområde.]'
				},
				{
					title: '[Tjeneste 2]',
					body: '[Beskrivelse av din andre tjeneste eller kompetanseområde.]'
				},
				{
					title: '[Tjeneste 3]',
					body: '[Beskrivelse av din tredje tjeneste eller kompetanseområde.]'
				}
			]
		}
	},
	projects: {
		sectionTitle: 'Prosjekter',
		subtitle: '[En kort linje om typen arbeid du tar på deg eller har levert.]',
		items: [
			{
				title: '[Prosjektnavn]',
				description: '[Kort beskrivelse av prosjektet — hva det gjør og hvilken effekt det hadde.]',
				tags: ['SvelteKit', 'TypeScript'],
				url: undefined
			},
			{
				title: '[Prosjektnavn]',
				description: '[Kort beskrivelse av prosjektet — hva det gjør og hvilken effekt det hadde.]',
				tags: ['Node.js', 'PostgreSQL'],
				url: undefined
			}
		]
	},
	contact: {
		sectionTitle: 'Ta kontakt',
		subtitle: 'Har du et prosjekt i tankene? Jeg hører gjerne fra deg.',
		emailLabel: 'E-post',
		email: 'vegardhaglund@proton.me',
		locationLabel: 'Sted',
		location: 'Norge',
		ctaEmail: 'Send e-post',
		ctaLinkedIn: 'LinkedIn',
		linkedInUrl: 'https://linkedin.com/in/[your-handle]'
	},
	footer: {
		tagline: 'Bygger gjennomtenkt programvare.',
		org: 'Haglund Software ENK',
		rights: `© ${new Date().getFullYear()} Haglund Software ENK. Alle rettigheter forbeholdt.`
	}
};


