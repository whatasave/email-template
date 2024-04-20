<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
		target: string;
	}

	export let href: string;
	export let target: string = '_blank';
</script>

<a {href} {target} {...$$props}>
	<slot />
</a>
