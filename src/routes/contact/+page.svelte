<script lang="ts">
	import { content } from '$lib/content';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Mail, MapPin, Link } from '@lucide/svelte';
</script>

<section class="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-6 py-20">
	<div class="w-full max-w-lg space-y-8 text-center">
		<div class="space-y-3">
			<h1 class="font-heading text-foreground text-4xl font-bold tracking-tight">
				{content.contact.sectionTitle}
			</h1>
			<p class="text-muted-foreground text-lg">
				{content.contact.subtitle}
			</p>
		</div>

		<Card class="border-border/60 text-left">
			<CardContent class="space-y-5 pt-6">
				<div class="flex items-center gap-3">
					<div class="bg-muted text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-md">
						<Mail size={16} />
					</div>
					<div>
						<p class="text-muted-foreground text-xs uppercase tracking-wider">{content.contact.emailLabel}</p>
						<p class="text-foreground text-sm font-medium">{content.contact.email}</p>
					</div>
				</div>

				<div class="flex items-center gap-3">
					<div class="bg-muted text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-md">
						<MapPin size={16} />
					</div>
					<div>
						<p class="text-muted-foreground text-xs uppercase tracking-wider">{content.contact.locationLabel}</p>
						<p class="text-foreground text-sm font-medium">{content.contact.location}</p>
					</div>
				</div>
			</CardContent>
		</Card>

		<div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
			<Button href="mailto:{content.contact.email}" size="lg" class="gap-2 font-medium">
				<Mail size={16} />
				{content.contact.ctaEmail}
			</Button>
			<Button
				href={content.contact.linkedInUrl}
				variant="outline"
				size="lg"
				class="gap-2 font-medium"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Link size={16} />
				{content.contact.ctaLinkedIn}
			</Button>
		</div>
	</div>
</section>
