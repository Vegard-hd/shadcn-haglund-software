<script lang="ts">
	import { coloredBrandSvg, resolveTechIcon } from './tech-icons';

	let {
		label,
		size = 16,
		class: className = ''
	}: {
		label: string;
		size?: number;
		class?: string;
	} = $props();

	const config = $derived(resolveTechIcon(label));
	const brandMarkup = $derived(
		config.kind === 'brand' ? coloredBrandSvg(config.svg, config.color, size) : ''
	);
</script>

{#if config.kind === 'brand'}
	<span class="inline-flex shrink-0 {className}" aria-hidden="true">
		{@html brandMarkup}
	</span>
{:else}
	<span class="inline-flex shrink-0" aria-hidden="true">
		<config.icon {size} class="text-muted-foreground opacity-80 {className}" />
	</span>
{/if}
