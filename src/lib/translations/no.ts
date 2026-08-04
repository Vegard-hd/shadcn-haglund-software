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
			cta: 'Se prosjekter',
			servicesBelow: 'Se tjenestene mine nedenfor'
		},
		about: {
			sectionTitle: 'Om meg',
			bio: '[Fylles inn — presenter deg selv, bakgrunnen din og hva du bidrar med.]',
			location: 'Norge',
			org: 'Haglund Software ENK'
		},
		services: {
			sectionTitle: 'Tjenester',
			sectionIntro:
				'Eksempler på hvordan jeg kan bidra som backend- og fullstackutvikler. Dette er ikke faste pakker — jeg finner riktig kombinasjon av API, database, frontend, hosting og leveranse rundt prosjektet ditt.',
			disclaimer:
				'Disse eksemplene er startpunkter for å finne riktig omfang, ikke faste pakker eller garantier. Endelig løsning, pris og tidslinje avhenger av produktet, integrasjoner, eksisterende kodebase og leveranseforventninger.',
			contactHook: 'Vil du snakke om omfang, tidslinje eller teknologi for prosjektet ditt?',
			contactCta: 'Ta kontakt',
			deliveryLabels: {
				fast: 'Mindre omfang',
				medium: 'Produktbygg',
				extended: 'Større system'
			},
			items: [
				{
					icon: 'layout',
					title: 'SvelteKit-sider og lette apper',
					summary:
						'Polerte frontender for markedsføringssider, landingssider, dashbord og lette apper der tung backend ikke er nødvendig.',
					stack: ['SvelteKit', 'TypeScript', 'shadcn-svelte', 'Tailwind CSS', 'Statisk hosting'],
					delivery: 'fast',
					highlights: [
						'Responsive sider og app-skall med tydelig visuelt system',
						'Tilgjengelig UI bygget med SvelteKit, Tailwind og shadcn-lignende komponenter',
						'Statisk eller enkel deploy når serverkompleksitet ikke trengs'
					],
					notFit: 'Passer best når hovedverdien ligger i presentasjon, brukervennlighet og fart. Hvis produktet trenger komplekse dataflyter, autentisering eller integrasjoner, kan jeg scope en mer komplett app.',
					body: 'Dette kan passe godt for en første offentlig nettside, en tydelig produktflate eller et internt verktøy som trenger god frontend uten unødvendig backend.'
				},
				{
					icon: 'layers',
					title: 'Frontend-apper med React, Next.js, TanStack eller SvelteKit',
					summary:
						'Applikasjonsfrontender for produkter, dashbord og internverktøy som trenger skjemaer, datalasting, auth-vennlige flyter og API-integrasjon.',
					stack: ['TanStack Start eller Next.js', 'TypeScript', 'React', 'Server components / loaders', 'Ønsket vert'],
					delivery: 'medium',
					highlights: [
						'React, Next.js, TanStack Start eller SvelteKit ut fra prosjektets behov',
						'Skjemaer, tabeller, dashbord og brukerflyter koblet mot ekte API-er',
						'Data- og rutemønstre valgt for vedlikeholdbarhet og hostingmodell'
					],
					notFit: 'Passer best når frontenden er produktflaten og backend allerede finnes, er enkel, eller kan scopes separat. Hvis API og database er kjernen, kan jeg ta ansvar for det også.',
					body: 'Jeg kan hjelpe med å gjøre produktkrav om til brukbare frontend-flyter, integrere backend-tjenester og sette opp bygg og deploy slik at appen kan videreutvikles.'
				},
				{
					icon: 'server',
					title: 'ASP.NET Core-API-er med SQL-integrasjon',
					summary:
						'Backend-API-er med databasedesign, persistens, migrasjoner, validering og OpenAPI-dokumentasjon for produkter som trenger et solid servergrunnlag.',
					stack: ['ASP.NET Core', 'C#', 'EF Core eller Dapper', 'PostgreSQL / SQL Server', 'OpenAPI'],
					delivery: 'medium',
					highlights: [
						'REST- eller minimal API-er med tydelige grenser for endepunkter og validering',
						'SQL-integrasjon med PostgreSQL eller SQL Server via EF Core eller Dapper',
						'Migrasjoner, OpenAPI-dokumentasjon og miljøbevisst konfigurasjon'
					],
					notFit: 'Passer best når backend-kvalitet, datamodellering og integrasjonssikkerhet er viktig. For en enkel brosjyreside er en lettere frontend-scope ofte nok.',
					body: 'Dette er ofte riktig form når du trenger et ryddig API for frontend, mobilapp, adminverktøy eller integrasjonspunkt, og vil at backenden skal være forståelig etter overlevering.'
				},
				{
					icon: 'container',
					title: 'Fullstack produktbygg med API, frontend og infrastruktur',
					summary:
						'Et eksempel for prosjekter der API, database, frontend, cache, lokalmiljø og deploy-prosess bør fungere sammen fra start.',
					stack: [
						'ASP.NET Core',
						'TanStack Start / Next.js / SvelteKit',
						'Redis (valgfritt)',
						'Docker Compose',
						'PostgreSQL eller SQL Server'
					],
					delivery: 'extended',
					highlights: [
						'ASP.NET Core-API koblet med React-, Next.js-, TanStack- eller SvelteKit-frontend',
						'Docker Compose-oppsett for API, web, database og valgfri Redis',
						'Tydelig miljøhåndtering og byggeløp som kan tas videre mot CI/CD'
					],
					notFit: 'Passer best når flere bevegelige deler må designes sammen. Hvis første steg bare er en landingsside eller et lite API, kan jeg holde omfanget mindre.',
					body: 'Denne typen arbeid passer for tidlige produkter og interne systemer som trenger både brukerflate og backend-struktur, med nok operasjonelt oppsett til at utviklingen holder seg forutsigbar.'
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
		org: 'Vegard Haglund',
		rights: 'Uavhengig programvareutvikling fra Norge.'
	}
};


