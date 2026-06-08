<script lang="ts">
	import ContactSection from '$lib/components/ContactSection.svelte';

	let { data } = $props();
	const content = $derived(data.content);
</script>

<div class="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
	<ContactSection contact={content.contact} />
</div>
