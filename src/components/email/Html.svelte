<script lang="ts">
	import type { HTMLHtmlAttributes } from 'svelte/elements';

	interface $$Props extends HTMLHtmlAttributes {
		lang: string;
	}

	export let lang: string;
</script>

<html {...$$props} {lang}>
	<slot />
</html>
