<script lang="ts">
	import { content } from '$lib/content';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { MapPin, Building2 } from '@lucide/svelte';
</script>

<!-- Hero -->
<section class="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-24 text-center">
	<div class="bg-primary/5 absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"></div>

	<div class="max-w-2xl space-y-6">
		<h1 class="font-heading text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
			{content.home.hero.headline}
		</h1>
		<p class="text-muted-foreground text-lg leading-relaxed sm:text-xl">
			{content.home.hero.tagline}
		</p>
		<div class="flex items-center justify-center gap-3 pt-2">
			<Button href="/projects" size="lg" class="font-medium">
				{content.home.hero.cta}
			</Button>
			<Button href="/contact" variant="outline" size="lg" class="font-medium">
				{content.nav.contact}
			</Button>
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

		<!-- Avatar placeholder -->
		<div class="flex justify-center md:justify-end">
			<div class="bg-muted border-border flex h-48 w-48 items-center justify-center rounded-full border-2 border-dashed">
				<span class="text-muted-foreground text-xs">Photo</span>
			</div>
		</div>
	</div>
</section>

<Separator />

<!-- Services -->
<section class="bg-muted/30 w-full px-6 py-20">
	<div class="mx-auto max-w-5xl space-y-10">
		<h2 class="font-heading text-foreground text-3xl font-bold tracking-tight">
			{content.home.services.sectionTitle}
		</h2>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each content.home.services.items as service}
				<Card class="bg-background border-border/60">
					<CardHeader class="pb-3">
						<CardTitle class="font-heading text-lg">{service.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-muted-foreground text-sm leading-relaxed">{service.body}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
