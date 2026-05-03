<script lang="ts">
	import { content } from '$lib/content';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink } from '@lucide/svelte';
</script>

<section class="mx-auto w-full max-w-5xl px-6 py-20">
	<div class="mb-12 space-y-3">
		<h1 class="font-heading text-foreground text-4xl font-bold tracking-tight">
			{content.projects.sectionTitle}
		</h1>
		<p class="text-muted-foreground text-lg">
			{content.projects.subtitle}
		</p>
	</div>

	{#if content.projects.items.length === 0}
		<p class="text-muted-foreground">Projects coming soon.</p>
	{:else}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each content.projects.items as project}
				<Card class="border-border/60 flex flex-col">
					<CardHeader class="pb-3">
						<CardTitle class="font-heading text-lg">{project.title}</CardTitle>
						<CardDescription class="text-sm leading-relaxed">
							{project.description}
						</CardDescription>
					</CardHeader>
					<CardContent class="flex flex-1 flex-wrap gap-2">
						{#each project.tags as tag}
							<Badge variant="secondary" class="text-xs">{tag}</Badge>
						{/each}
					</CardContent>
					{#if project.url}
						<CardFooter>
							<Button href={project.url} variant="ghost" size="sm" class="gap-1.5 px-0 text-sm" target="_blank" rel="noopener noreferrer">
								View project <ExternalLink size={13} />
							</Button>
						</CardFooter>
					{/if}
				</Card>
			{/each}
		</div>
	{/if}
</section>
