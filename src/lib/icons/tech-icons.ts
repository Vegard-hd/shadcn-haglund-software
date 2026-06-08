import type { Component } from 'svelte';
import {
	Cloud,
	Code,
	Component as ComponentIcon,
	Container,
	Database,
	FileJson,
	Globe,
	Hexagon,
	Layers,
	Layout,
	Server,
	Workflow
} from '@lucide/svelte';
import brandColors from '$lib/assets/company-logos/colors.json';
import dotnetLogo from '$lib/assets/company-logos/dotnet.svg?raw';
import nextdotjsLogo from '$lib/assets/company-logos/nextdotjs.svg?raw';
import postgresqlLogo from '$lib/assets/company-logos/postgresql.svg?raw';
import reactLogo from '$lib/assets/company-logos/react.svg?raw';
import redisLogo from '$lib/assets/company-logos/redis.svg?raw';
import svelteLogo from '$lib/assets/company-logos/svelte.svg?raw';
import tailwindcssLogo from '$lib/assets/company-logos/tailwindcss.svg?raw';
import typescriptLogo from '$lib/assets/company-logos/typescript.svg?raw';

export type ServiceIconKey = 'layout' | 'layers' | 'server' | 'container';

type LucideIcon = Component<{ size?: number | string; class?: string }>;

export type TechIconConfig =
	| { kind: 'brand'; svg: string; alt: string; color: string }
	| { kind: 'lucide'; icon: LucideIcon };

type BrandKey = keyof typeof brandColors;

function brandIcon(key: BrandKey, svg: string, alt: string): TechIconConfig {
	return { kind: 'brand', svg, alt, color: brandColors[key] };
}

/** Inline Simple Icons SVG with brand fill from colors.json. */
export function coloredBrandSvg(svg: string, color: string, size: number): string {
	return svg
		.replace(/<title>.*?<\/title>/, '')
		.replace('<svg ', `<svg width="${size}" height="${size}" fill="${color}" `);
}

const brandIcons = {
	react: brandIcon('react', reactLogo, 'React'),
	nextdotjs: brandIcon('nextJs', nextdotjsLogo, 'Next.js'),
	svelte: brandIcon('svelte', svelteLogo, 'Svelte'),
	typescript: brandIcon('typescript', typescriptLogo, 'TypeScript'),
	tailwindcss: brandIcon('tailwind', tailwindcssLogo, 'Tailwind CSS'),
	postgresql: brandIcon('postgres', postgresqlLogo, 'PostgreSQL'),
	dotnet: brandIcon('dotnet', dotnetLogo, '.NET'),
	redis: brandIcon('redis', redisLogo, 'Redis')
};

const exactTechIcons: Record<string, TechIconConfig> = {
	SvelteKit: brandIcons.svelte,
	Svelte: brandIcons.svelte,
	TypeScript: brandIcons.typescript,
	'Tailwind CSS': brandIcons.tailwindcss,
	React: brandIcons.react,
	'ASP.NET Core': brandIcons.dotnet,
	'C#': { kind: 'lucide', icon: Code },
	PostgreSQL: brandIcons.postgresql,
	'PostgreSQL / SQL Server': brandIcons.postgresql,
	'PostgreSQL eller SQL Server': brandIcons.postgresql,
	'PostgreSQL or SQL Server': brandIcons.postgresql,
	'TanStack Start or Next.js': brandIcons.nextdotjs,
	'TanStack Start eller Next.js': brandIcons.nextdotjs,
	'TanStack Start / Next.js / SvelteKit': brandIcons.nextdotjs,
	'shadcn-svelte': { kind: 'lucide', icon: ComponentIcon },
	'Static hosting': { kind: 'lucide', icon: Globe },
	'Statisk hosting': { kind: 'lucide', icon: Globe },
	'Server components / loaders': { kind: 'lucide', icon: Workflow },
	'Your host of choice': { kind: 'lucide', icon: Cloud },
	'Ønsket vert': { kind: 'lucide', icon: Cloud },
	'EF Core or Dapper': { kind: 'lucide', icon: Database },
	'EF Core eller Dapper': { kind: 'lucide', icon: Database },
	OpenAPI: { kind: 'lucide', icon: FileJson },
	'Redis (optional)': brandIcons.redis,
	'Redis (valgfritt)': brandIcons.redis,
	'Docker Compose': { kind: 'lucide', icon: Container },
	'Node.js': { kind: 'lucide', icon: Hexagon },
	'SQL Server': { kind: 'lucide', icon: Database }
};

const keywordRules: { test: (label: string) => boolean; config: TechIconConfig }[] = [
	{ test: (l) => /postgresql/i.test(l), config: brandIcons.postgresql },
	{ test: (l) => /sveltekit|svelte/i.test(l), config: brandIcons.svelte },
	{ test: (l) => /typescript/i.test(l), config: brandIcons.typescript },
	{ test: (l) => /tailwind/i.test(l), config: brandIcons.tailwindcss },
	{ test: (l) => /\breact\b/i.test(l), config: brandIcons.react },
	{ test: (l) => /next\.?js|tanstack/i.test(l), config: brandIcons.nextdotjs },
	{ test: (l) => /asp\.net/i.test(l), config: brandIcons.dotnet },
	{ test: (l) => /redis/i.test(l), config: brandIcons.redis },
	{ test: (l) => /docker/i.test(l), config: { kind: 'lucide', icon: Container } },
	{ test: (l) => /openapi/i.test(l), config: { kind: 'lucide', icon: FileJson } },
	{ test: (l) => /sql server/i.test(l), config: { kind: 'lucide', icon: Database } },
	{ test: (l) => /ef core|dapper/i.test(l), config: { kind: 'lucide', icon: Database } },
	{ test: (l) => /hosting/i.test(l), config: { kind: 'lucide', icon: Globe } },
	{ test: (l) => /node\.?js/i.test(l), config: { kind: 'lucide', icon: Hexagon } }
];

const serviceIcons: Record<ServiceIconKey, LucideIcon> = {
	layout: Layout,
	layers: Layers,
	server: Server,
	container: Container
};

const fallbackIcon: TechIconConfig = { kind: 'lucide', icon: Code };

export function resolveTechIcon(label: string): TechIconConfig {
	return exactTechIcons[label] ?? keywordRules.find((r) => r.test(label))?.config ?? fallbackIcon;
}

export function resolveServiceIcon(key: ServiceIconKey): LucideIcon {
	return serviceIcons[key];
}
