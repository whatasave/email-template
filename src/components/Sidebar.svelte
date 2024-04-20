<script lang="ts">
	import { keys } from '$lib/objects';
	import clsx from 'clsx';
	import templateList from '$templates/templateList';

	export let selectedTemplate: keyof typeof templateList | undefined = undefined;
</script>

<div class={clsx('flex flex-col', $$props.class)}>
	{#each keys(templateList) as template}
		<button
			type="button"
			class={clsx('text-[0.875rem] font-bold pl-16 h-8 mr-4 rounded-r-full text-start', {
				'bg-[#d3e3fd]': selectedTemplate === template,
				'hover:bg-[#eaebef]': selectedTemplate !== template,
			})}
			on:click={() => (selectedTemplate = template)}
		>
			{template}
		</button>
	{/each}
</div>
