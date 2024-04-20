<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAttributes<HTMLParagraphElement> {
		text: string;
		style: string;
	}

	export let text: string;
	export let style = '';
</script>

<p {...$$props} style="font-size: 16px; line-height: normal; margin: 0; {style}">
	<slot>{text}</slot>
</p>
