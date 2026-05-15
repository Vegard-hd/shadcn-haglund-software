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
			sectionTitle: 'Services',
			sectionIntro:
				'From static marketing sites to full-stack products and .NET APIs — pick the shape that matches your timeline and stack. Based in Norway; remote-friendly.',
			disclaimer:
				'The example setups above are for illustration and marketing only — not fixed offerings or commitments. Get in touch for accurate scope, pricing, and delivery timelines tailored to your project.',
			deliveryLabels: {
				fast: 'Fast delivery',
				medium: 'Medium delivery',
				extended: 'Extended delivery'
			},
			items: [
				{
					title: 'Static SvelteKit sites with custom UI',
					summary:
						'Fast, polished frontends with a design system — ideal when you need a site or lightweight app without a heavy backend.',
					stack: ['SvelteKit', 'TypeScript', 'shadcn-svelte', 'Tailwind CSS', 'Static hosting'],
					delivery: 'fast',
					highlights: [
						'Marketing sites, landing pages, and content-led experiences',
						'Accessible, responsive layouts with a cohesive component library',
						'Performance-focused static builds you can host almost anywhere'
					],
					notFit: 'Not the first choice for heavy auth, real-time collaboration, or complex server-side workflows — those usually move up a tier.',
					body: 'You get a tailored UI (including shadcn-style patterns where it fits), sensible routing, and a deployment story that keeps operations simple.'
				},
				{
					title: 'Full-stack TanStack Start or Next.js',
					summary:
						'CRUD-heavy apps, dashboards, and SEO-friendly products with server data, APIs, and a modern React ecosystem.',
					stack: ['TanStack Start or Next.js', 'TypeScript', 'React', 'Server components / loaders', 'Your host of choice'],
					delivery: 'medium',
					highlights: [
						'End-user and internal tools with forms, tables, and auth-friendly patterns',
						'Clear data-loading and routing models (App Router or TanStack conventions)',
						'Deployable to Node, serverless, or hybrid targets — agreed up front'
					],
					notFit: 'If you need a long-lived .NET estate or enterprise integration-first APIs, consider the ASP.NET Core options below.',
					body: 'Engagements include API integration, sensible state management, and production build pipelines. Hosting model (Node vs serverless) is scoped early so estimates stay honest.'
				},
				{
					title: 'ASP.NET Core API with database integration',
					summary:
						'Robust REST (or minimal) APIs with persistence, migrations, and documentation — great when .NET is already part of your stack.',
					stack: ['ASP.NET Core', 'C#', 'EF Core or Dapper', 'PostgreSQL / SQL Server', 'OpenAPI'],
					delivery: 'medium',
					highlights: [
						'Domain-driven endpoints, validation, and versioning where needed',
						'Migrations, seeding strategies, and environment-aware configuration',
						'Optional pairing with the SvelteKit or React frontends above'
					],
					notFit: 'Not a fit if you only need a brochure site with no backend — the static SvelteKit tier is usually enough.',
					body: 'Delivery focuses on maintainable APIs you can extend: clear boundaries, tests where they add value, and handover docs for your team.'
				},
				{
					title: 'Full stack: ASP.NET Core API + modern frontend + Docker Compose',
					summary:
						'End-to-end systems with a .NET API, a TanStack Start / Next.js / SvelteKit client, optional Redis caching, and reproducible local and CI environments.',
					stack: [
						'ASP.NET Core',
						'TanStack Start / Next.js / SvelteKit',
						'Redis (optional)',
						'Docker Compose',
						'PostgreSQL or SQL Server'
					],
					delivery: 'extended',
					highlights: [
						'Compose topology for API, web, database, and cache with sensible defaults',
						'Environment and secrets split for dev/stage/prod',
						'CI-friendly builds and a path to your hosting platform'
					],
					notFit: 'If you only need a single static site or a tiny API without containers, a smaller tier keeps cost and complexity down.',
					body: 'This tier is for products that need multiple moving parts to work together: contract between frontend and API, caching strategy when Redis is in play, and operational clarity from day one.'
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


