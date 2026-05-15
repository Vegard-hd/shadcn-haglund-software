export type ServiceDelivery = 'fast' | 'medium' | 'extended';

export interface Itranslations {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		brand: string;
		home: string;
		projects: string;
		contact: string;
	};
	home: {
		hero: {
			headline: string;
			tagline: string;
			cta: string;
		};
		about: {
			sectionTitle: string;
			bio: string;
			location: string;
			org: string;
		};
		services: {
			sectionTitle: string;
			sectionIntro: string;
			/** Shown after service cards: examples are illustrative, not fixed quotes. */
			disclaimer: string;
			deliveryLabels: Record<ServiceDelivery, string>;
			items: {
				title: string;
				summary: string;
				stack: string[];
				delivery: ServiceDelivery;
				highlights: string[];
				notFit: string;
				body: string;
			}[];
		};
	};
	projects: {
		sectionTitle: string;
		subtitle: string;
		items: {
			title: string;
			description: string;
			tags: string[];
			url?: string;
		}[];
	};
	contact: {
		sectionTitle: string;
		subtitle: string;
		emailLabel: string;
		email: string;
		locationLabel: string;
		location: string;
		ctaEmail: string;
		ctaLinkedIn: string;
		linkedInUrl: string;
	};
	footer: {
		tagline: string;
		org: string;
		rights: string;
	};
}


