<script lang="ts">
	import { page } from '$app/state';
	import { withLocale } from '$lib/i18n/paths';
	import { Button } from '$lib/components/ui/button';
	import { Menu, X } from '@lucide/svelte';
	import type { SiteContent } from '$lib/content';
	import type { TranslationLocale } from '$lib/translations';

	let { nav, locale }: { nav: SiteContent['nav']; locale: TranslationLocale } = $props();

	let mobileOpen = $state(false);

	const links = $derived([
		{ href: withLocale(locale, '/'), label: nav.home },
		{ href: withLocale(locale, '/projects'), label: nav.projects },
		{ href: withLocale(locale, '/contact'), label: nav.contact }
	]);

	function isActive(href: string) {
		const path = page.url.pathname;
		if (path === href) return true;
		// Norwegian home is `/no` — must not match every `/no/...` route.
		if (href === '/no') return false;
		return href !== '/' && path.startsWith(`${href}/`);
	}
</script>

<header class="border-border/60 bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
	<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
		<a
			href={withLocale(locale, '/')}
			class="text-foreground font-heading text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
		>
			{nav.brand}
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-1 md:flex">
			{#each links as link}
				<Button
					href={link.href}
					variant={isActive(link.href) ? 'secondary' : 'ghost'}
					size="sm"
					class="text-sm font-medium"
				>
					{link.label}
				</Button>
			{/each}
		</nav>

		<!-- Mobile toggle -->
		<button
			class="text-foreground md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<X size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<nav class="border-border/60 border-t md:hidden">
			<div class="flex flex-col gap-1 px-4 py-3">
				{#each links as link}
					<Button
						href={link.href}
						variant={isActive(link.href) ? 'secondary' : 'ghost'}
						class="w-full justify-start text-sm"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</Button>
				{/each}
			</div>
		</nav>
	{/if}
</header>
