<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface $$Props extends HTMLImgAttributes {
		src: string;
		width: number;
		height: number;
		alt: string;
	}

	export let alt: string;
	export let width: number;
	export let height: number;
	export let src: string;
</script>

<img {...$$props} {src} {height} {width} {alt} />
