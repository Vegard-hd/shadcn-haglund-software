<script lang="ts">
	import favicon from '$lib/assets/favicon.webp';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{data.content.meta.title}</title>
	<meta name="description" content={data.content.meta.description} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar nav={data.content.nav} locale={data.locale} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer footer={data.content.footer} />
</div>
