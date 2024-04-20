<script lang="ts">
	import type { ComponentType } from 'svelte';
	import clsx from 'clsx';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let icon: ComponentType;
</script>

<button
	{type}
	class={clsx('flex hover:bg-[#eaebef] transition-all rounded-full items-center justify-center', $$props.class)}
	on:click
>
	<svelte:component this={icon} class="w-full h-full p-[25%]" />
</button>
