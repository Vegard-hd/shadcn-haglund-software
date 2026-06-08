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
			sectionTitle: 'Tjenester',
			sectionIntro:
				'Fra statiske markedsføringssider til fullstack-produkter og .NET-API-er — velg nivå som passer tidslinje og teknologi. Basert i Norge; remote er greit.',
			disclaimer:
				'Oppsettene over er eksempler til illustrasjon og markedsføring — ikke faste pakker eller forpliktelser. Ta kontakt for riktig omfang, pris og leveransetid tilpasset prosjektet ditt.',
			deliveryLabels: {
				fast: 'Rask leveranse',
				medium: 'Middels leveranse',
				extended: 'Utvidet leveranse'
			},
			items: [
				{
					icon: 'layout',
					title: 'Statiske SvelteKit-sider med skreddersydd UI',
					summary:
						'Raskt og polert grensesnitt med designsystem — når du trenger nettside eller lett app uten tung backend.',
					stack: ['SvelteKit', 'TypeScript', 'shadcn-svelte', 'Tailwind CSS', 'Statisk hosting'],
					delivery: 'fast',
					highlights: [
						'Markedsføringssider, landingssider og innholdsledede opplevelser',
						'Tilgjengelige, responsive layouter med konsistent komponentbibliotek',
						'Ytelsesoptimaliserte statiske bygg du kan hoste nesten hvor som helst'
					],
					notFit: 'Mindre egnet ved tung autentisering, sanntidssamarbeid eller komplekse serverflyter — da løfter vi ofte til neste nivå.',
					body: 'Du får skreddersydd UI (inkl. shadcn-lignende mønstre der det passer), fornuftig ruting og et deploy-oppsett som holder drift enkel.'
				},
				{
					icon: 'layers',
					title: 'Fullstack TanStack Start eller Next.js',
					summary:
						'CRUD-tunge apper, dashbord og SEO-vennlige produkter med serverdata, API-er og moderne React-økosystem.',
					stack: ['TanStack Start eller Next.js', 'TypeScript', 'React', 'Server components / loaders', 'Ønsket vert'],
					delivery: 'medium',
					highlights: [
						'Bruker- og internverktøy med skjemaer, tabeller og auth-vennlige mønstre',
						'Tyddige data- og ruter-modeller (App Router eller TanStack-konvensjoner)',
						'Kan deployes til Node, serverless eller hybrid — avklares tidlig'
					],
					notFit: 'Trenger du langvarig .NET-landskap eller integrasjonsførst API-er, se ASP.NET Core-alternativene under.',
					body: 'Leveransen inkluderer API-integrasjon, fornuftig tilstandshåndtering og produksjonsbygg. Vertsmodell avklares tidlig slik at estimater holder.'
				},
				{
					icon: 'server',
					title: 'ASP.NET Core API med databaseintegrasjon',
					summary:
						'Robuste REST- (eller minimal-) API-er med persistens, migrasjoner og dokumentasjon — når .NET allerede er del av stacken.',
					stack: ['ASP.NET Core', 'C#', 'EF Core eller Dapper', 'PostgreSQL / SQL Server', 'OpenAPI'],
					delivery: 'medium',
					highlights: [
						'Domenedrevne endepunkter, validering og versjonering ved behov',
						'Migrasjoner, seeding og miljøbevisst konfigurasjon',
						'Valgfri kobling mot SvelteKit- eller React-frontend over'
					],
					notFit: 'Ikke førstevalg for ren brosjyre-side uten backend — da holder ofte statisk SvelteKit-nivå.',
					body: 'Fokus på vedlikeholdbare API-er: tydelige grenser, tester der de gir verdi, og overleveringsdokumentasjon for teamet ditt.'
				},
				{
					icon: 'container',
					title: 'Full stack: ASP.NET Core API + moderne frontend + Docker Compose',
					summary:
						'Helhetlige systemer med .NET-API, TanStack Start / Next.js / SvelteKit-klient, valgfri Redis-cache og reproduserbare miljøer lokalt og i CI.',
					stack: [
						'ASP.NET Core',
						'TanStack Start / Next.js / SvelteKit',
						'Redis (valgfritt)',
						'Docker Compose',
						'PostgreSQL eller SQL Server'
					],
					delivery: 'extended',
					highlights: [
						'Compose-topologi for API, web, database og cache med fornuftige standarder',
						'Oppsplitting av miljøvariabler og hemmeligheter for dev/stage/prod',
						'CI-vennlige bygg og vei videre til valgt plattform'
					],
					notFit: 'Kun statisk side eller minimal API uten containere? Et lavere nivå gir lavere kost og kompleksitet.',
					body: 'Her passer det for produkter med flere deler som må spille sammen: kontrakt mellom frontend og API, cache-strategi med Redis, og operasjonell tydelighet fra start.'
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


