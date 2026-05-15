import type { Itranslations } from './Itranslations';

export const englishTranslations: Itranslations = {
	meta: {
		title: 'Haglund Software',
		description: 'Software development and consulting by Vegard Haglund'
	},
	nav: {
		brand: 'Haglund Software',
		home: 'Home',
		projects: 'Projects',
		contact: 'Contact'
	},
	home: {
		hero: {
			headline: '[Your name or tagline here]',
			tagline:
				'[A short description of what you do — e.g. "Independent software developer based in Norway"]',
			cta: 'View Projects'
		},
		about: {
			sectionTitle: 'About Me',
			bio: '[To be filled in — introduce yourself, your background, and what you bring to the table.]',
			location: 'Norway',
			org: 'Haglund Software ENK'
		},
		services: {
			sectionTitle: 'What I Do',
			items: [
				{
					title: '[Service 1]',
					body: '[Description of your first service or area of expertise.]'
				},
				{
					title: '[Service 2]',
					body: '[Description of your second service or area of expertise.]'
				},
				{
					title: '[Service 3]',
					body: '[Description of your third service or area of expertise.]'
				}
			]
		}
	},
	projects: {
		sectionTitle: 'Projects',
		subtitle: '[A brief line about the kind of work you take on or have shipped.]',
		items: [
			{
				title: '[Project name]',
				description: '[Short description of the project — what it does and the impact it had.]',
				tags: ['SvelteKit', 'TypeScript'],
				url: undefined
			},
			{
				title: '[Project name]',
				description: '[Short description of the project — what it does and the impact it had.]',
				tags: ['Node.js', 'PostgreSQL'],
				url: undefined
			}
		]
	},
	contact: {
		sectionTitle: 'Get in Touch',
		subtitle: "Have a project in mind? I'd love to hear about it.",
		emailLabel: 'Email',
		email: 'vegardhaglund@proton.me',
		locationLabel: 'Location',
		location: 'Norway',
		ctaEmail: 'Send Email',
		ctaLinkedIn: 'LinkedIn',
		linkedInUrl: 'https://linkedin.com/in/[your-handle]'
	},
	footer: {
		tagline: 'Building thoughtful software.',
		org: 'Haglund Software ENK',
		rights: `© ${new Date().getFullYear()} Haglund Software ENK. All rights reserved.`
	}
};


