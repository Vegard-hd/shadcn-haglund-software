<script lang="ts">
	import { Badge, type BadgeVariant } from '$lib/components/ui/badge';
	import TechIcon from './TechIcon.svelte';

	let {
		label,
		variant = 'outline',
		class: className = ''
	}: {
		label: string;
		variant?: BadgeVariant;
		class?: string;
	} = $props();
</script>

<Badge data-icon="inline-start" {variant} class="font-normal {className}">
	<TechIcon {label} />
	{label}
</Badge>
