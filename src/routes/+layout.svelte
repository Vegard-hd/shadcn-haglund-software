<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { content } from '$lib/content';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{content.meta.title}</title>
	<meta name="description" content={content.meta.description} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar nav={content.nav} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer footer={content.footer} />
</div>
