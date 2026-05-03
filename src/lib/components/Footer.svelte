<script lang="ts">
	import type { SiteContent } from '$lib/content';

	let { footer }: { footer: SiteContent['footer'] } = $props();
</script>

<footer class="border-border/60 mt-auto border-t">
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm sm:flex-row">
		<p class="text-muted-foreground font-medium">{footer.org}</p>
		<p class="text-muted-foreground">{footer.rights}</p>
	</div>
</footer>
