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
			cta: 'View Projects',
			servicesBelow: 'See my services below'
		},
		about: {
			sectionTitle: 'About Me',
			bio: '[To be filled in — introduce yourself, your background, and what you bring to the table.]',
			location: 'Norway',
			org: 'Haglund Software ENK'
		},
		services: {
			sectionTitle: 'Services',
			sectionIntro:
				'Examples of how I can help as a backend and full-stack developer. These are not fixed packages — I scope the right mix of API, database, frontend, hosting, and delivery process around your project.',
			disclaimer:
				'These examples are starting points for scoping, not fixed packages or guarantees. The final approach, price, and timeline depend on the product, integrations, existing codebase, and delivery expectations.',
			contactHook: 'Want to talk through scope, timeline, or stack for your project?',
			contactCta: 'Get in Touch',
			deliveryLabels: {
				fast: 'Smaller scope',
				medium: 'Product build',
				extended: 'Larger system'
			},
			items: [
				{
					icon: 'layout',
					title: 'SvelteKit sites and lightweight apps',
					summary:
						'Polished frontends for marketing sites, landing pages, dashboards, and lightweight apps where a heavy backend is not needed.',
					stack: ['SvelteKit', 'TypeScript', 'shadcn-svelte', 'Tailwind CSS', 'Static hosting'],
					delivery: 'fast',
					highlights: [
						'Responsive pages and app shells with a clear visual system',
						'Accessible UI built with SvelteKit, Tailwind, and shadcn-style components',
						'Static or low-maintenance deployment when server complexity is not required'
					],
					notFit: 'Best when the main value is presentation, usability, and speed. If the product needs complex data flows, auth, or integrations, I can scope a fuller app instead.',
					body: 'This can be a good fit for a first public site, a focused product surface, or an internal tool that benefits from strong frontend execution without extra backend overhead.'
				},
				{
					icon: 'layers',
					title: 'Frontend apps with React, Next.js, TanStack, or SvelteKit',
					summary:
						'Application frontends for products, dashboards, and internal tools that need forms, data loading, auth-friendly flows, and API integration.',
					stack: ['TanStack Start or Next.js', 'TypeScript', 'React', 'Server components / loaders', 'Your host of choice'],
					delivery: 'medium',
					highlights: [
						'React, Next.js, TanStack Start, or SvelteKit depending on project needs',
						'Forms, tables, dashboards, and user flows connected to real APIs',
						'Data-loading and routing patterns chosen for maintainability and hosting fit'
					],
					notFit: 'Best when the frontend is the product surface and the backend already exists, is simple, or can be scoped separately. If the API and database are the core work, I can lead that too.',
					body: 'I can help turn product requirements into usable frontend flows, integrate backend services, and set up the build and deployment path so the app is ready to evolve.'
				},
				{
					icon: 'server',
					title: 'ASP.NET Core APIs with SQL integration',
					summary:
						'Backend APIs with database design, persistence, migrations, validation, and OpenAPI documentation for products that need a reliable server-side foundation.',
					stack: ['ASP.NET Core', 'C#', 'EF Core or Dapper', 'PostgreSQL / SQL Server', 'OpenAPI'],
					delivery: 'medium',
					highlights: [
						'REST or minimal APIs with clear endpoint and validation boundaries',
						'SQL integration using PostgreSQL or SQL Server with EF Core or Dapper',
						'Migrations, OpenAPI docs, and environment-aware configuration'
					],
					notFit: 'Best when backend correctness, data modeling, and integration reliability matter. For a simple brochure site, a lighter frontend-only scope is usually enough.',
					body: 'This is often the right shape when you need a clean API for a frontend, mobile app, admin tool, or integration point and want the backend to be understandable after handover.'
				},
				{
					icon: 'container',
					title: 'Full-stack product build with API, frontend, and infrastructure',
					summary:
						'An example shape for projects where the API, database, frontend, cache, local environment, and deployment process need to work together from the start.',
					stack: [
						'ASP.NET Core',
						'TanStack Start / Next.js / SvelteKit',
						'Redis (optional)',
						'Docker Compose',
						'PostgreSQL or SQL Server'
					],
					delivery: 'extended',
					highlights: [
						'ASP.NET Core API paired with a React, Next.js, TanStack, or SvelteKit frontend',
						'Docker Compose setup for API, web, database, and optional Redis',
						'Clear environment handling and a build path that can move toward CI/CD'
					],
					notFit: 'Best when multiple moving parts need to be designed together. If the first step is just a landing page or a small API, I can keep the scope smaller.',
					body: 'This kind of engagement is useful for early products and internal systems that need both product-facing UI and backend structure, with enough operational setup to keep development predictable.'
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
		org: 'Vegard Haglund',
		rights: 'Independent software development from Norway.'
	}
};


