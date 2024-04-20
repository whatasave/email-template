<script lang="ts">
	import type { ComponentType } from 'svelte';
	import clsx from 'clsx';

	export let href: string;
	export let icon: ComponentType;
</script>

<a
	{href}
	class={clsx('flex hover:bg-[#eaebef] transition-all rounded-full items-center justify-center', $$props.class)}
	on:click
>
	<svelte:component this={icon} class="w-full h-full p-[25%]" />
</a>
