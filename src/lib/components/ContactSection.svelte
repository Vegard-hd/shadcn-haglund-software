<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { SiteContent } from '$lib/content';
	import { Link, Mail, MapPin } from '@lucide/svelte';

	let { contact }: { contact: SiteContent['contact'] } = $props();
</script>

<section id="contact" class="mx-auto w-full max-w-5xl px-6 py-20">
	<div class="mx-auto w-full max-w-lg space-y-8 text-center">
		<div class="space-y-3">
			<h2 class="font-heading text-foreground text-3xl font-bold tracking-tight">
				{contact.sectionTitle}
			</h2>
			<p class="text-muted-foreground text-lg">
				{contact.subtitle}
			</p>
		</div>

		<Card class="border-border/60 text-left">
			<CardContent class="space-y-5 pt-6">
				<div class="flex items-center gap-3">
					<div class="bg-muted text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-md">
						<Mail size={16} />
					</div>
					<div>
						<p class="text-muted-foreground text-xs uppercase tracking-wider">{contact.emailLabel}</p>
						<p class="text-foreground text-sm font-medium">{contact.email}</p>
					</div>
				</div>

				<div class="flex items-center gap-3">
					<div class="bg-muted text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-md">
						<MapPin size={16} />
					</div>
					<div>
						<p class="text-muted-foreground text-xs uppercase tracking-wider">{contact.locationLabel}</p>
						<p class="text-foreground text-sm font-medium">{contact.location}</p>
					</div>
				</div>
			</CardContent>
		</Card>

		<div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
			<Button href="mailto:{contact.email}" size="lg" class="gap-2 font-medium">
				<Mail size={16} />
				{contact.ctaEmail}
			</Button>
			<Button
				href={contact.linkedInUrl}
				variant="outline"
				size="lg"
				class="gap-2 font-medium"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Link size={16} />
				{contact.ctaLinkedIn}
			</Button>
		</div>
	</div>
</section>
