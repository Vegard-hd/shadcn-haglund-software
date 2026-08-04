<script lang="ts">
	import { withLocale } from '$lib/i18n/paths';
	import PortraitImg from '$lib/assets/Portrait.webp';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { ArrowDown, Building2, MapPin } from '@lucide/svelte';
	import StackBadge from '$lib/icons/StackBadge.svelte';
	import { resolveServiceIcon } from '$lib/icons/tech-icons';
	import type { ServiceDelivery } from '$lib/translations/Itranslations';

	let { data } = $props();
	const content = $derived(data.content);

	const deliveryBadgeVariant: Record<ServiceDelivery, 'default' | 'secondary' | 'outline'> = {
		fast: 'default',
		medium: 'secondary',
		extended: 'outline'
	};
</script>

<!-- Hero -->
<section class="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-24 text-center">
	<div class="bg-primary/5 absolute inset-0 -z-10 mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"></div>

	<div class="max-w-2xl space-y-6">
		<h1 class="font-heading text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
			{content.home.hero.headline}
		</h1>
		<p class="text-muted-foreground text-lg leading-relaxed sm:text-xl">
			{content.home.hero.tagline}
		</p>
		<div class="flex flex-col items-center gap-6 pt-2">
			<div class="flex items-center justify-center gap-3">
				<Button href={withLocale(data.locale, '/projects')} size="lg" class="font-medium">
					{content.home.hero.cta}
				</Button>
				<Button href="#contact" variant="outline" size="lg" class="font-medium">
					{content.nav.contact}
				</Button>
			</div>
			<a
				href="#services"
				rel="noopener noreferrer"
				class="mt-8   p-3 text-muted-foreground hover:text-primary flex flex-col items-center gap-2 text-sm font-medium transition-colors"
			>
				{content.home.hero.servicesBelow}
				<ArrowDown size={40} strokeWidth={1.75} class="text-primary" aria-hidden="true" />
			</a>
		</div>
	</div>
</section>

<Separator />

<!-- About -->
<section class="mx-auto w-full max-w-5xl px-6 py-20">
	<div class="grid gap-12 md:grid-cols-2 md:items-start">
		<div class="space-y-6">
			<h2 class="font-heading text-foreground text-3xl font-bold tracking-tight">
				{content.home.about.sectionTitle}
			</h2>
			<p class="text-muted-foreground leading-relaxed">
				{content.home.about.bio}
			</p>
			<div class="text-muted-foreground flex flex-col gap-2 text-sm">
				<span class="flex items-center gap-2">
					<MapPin size={15} class="text-primary shrink-0" />
					{content.home.about.location}
				</span>
				<span class="flex items-center gap-2">
					<Building2 size={15} class="text-primary shrink-0" />
					{content.home.about.org}
				</span>
			</div>
		</div>

		<div class="flex justify-center">

			<img
				class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-500/40"
				src={PortraitImg}
				alt="Portrait"
			/>
			</div>

	</div>
</section>

<Separator />

<!-- Services -->
<section id="services" class="bg-muted/30 w-full px-6 py-20">
	<div class="mx-auto max-w-6xl space-y-10">
		<div class="max-w-3xl space-y-4">
			<h2 class="font-heading text-foreground text-3xl font-bold tracking-tight">
				{content.home.services.sectionTitle}
			</h2>
			<p class="text-muted-foreground text-lg leading-relaxed">
				{content.home.services.sectionIntro}
			</p>
		</div>

		<div class="flex w-full flex-col gap-8">
			{#each content.home.services.items as service}
				{@const ServiceIcon = resolveServiceIcon(service.icon)}
				<Card class="bg-background border-border/60 w-full overflow-hidden shadow-sm">
					<CardHeader class="gap-4 pb-4">
						<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
							<div class="min-w-0 flex-1 space-y-2">
								<div class="flex items-start gap-3">
									<div
										class="bg-muted text-primary mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
									>
										<span aria-hidden="true"><ServiceIcon size={18} /></span>
									</div>
									<CardTitle class="font-heading text-xl leading-snug sm:text-2xl">{service.title}</CardTitle>
								</div>
								<CardDescription class="text-base leading-relaxed">{service.summary}</CardDescription>
							</div>
							<Badge variant={deliveryBadgeVariant[service.delivery]} class="h-6 shrink-0 px-3 text-xs font-semibold">
								{content.home.services.deliveryLabels[service.delivery]}
							</Badge>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each service.stack as tech}
								<StackBadge label={tech} />
							{/each}
						</div>
					</CardHeader>
					<CardContent class="space-y-5 pt-0">
						<ul class="text-foreground list-inside list-disc space-y-2 text-sm leading-relaxed sm:list-outside sm:pl-4">
							{#each service.highlights as point}
								<li>{point}</li>
							{/each}
						</ul>
						<p class="text-muted-foreground text-sm leading-relaxed">{service.body}</p>
						<p
							class="text-muted-foreground border-border/80 bg-muted/40 rounded-md border-l-2 border-l-primary/50 px-3 py-2 text-sm leading-relaxed"
						>
							{service.notFit}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<p
			class="text-muted-foreground border-border/60 mt-2 max-w-3xl border-t pt-8 text-sm leading-relaxed"
			role="note"
		>
			{content.home.services.disclaimer}
		</p>

		<div class="flex flex-col items-center gap-3 pt-4 text-center">
			<p class="text-muted-foreground max-w-2xl text-sm leading-relaxed">
				{content.home.services.contactHook}
			</p>
			<Button rel="noreferrer noopener" href="/contact" size="lg" class="font-medium">
				{content.home.services.contactCta}
			</Button>
		</div>
	</div>
</section>

<Separator />

