<script lang="ts">
	import '../app.css';
	import templateList from '$templates/templateList';
	import Sidebar from '$components/Sidebar.svelte';
	import Mail from '$components/Mail.svelte';

	export let selectedTemplate: keyof typeof templateList | undefined = undefined;
</script>

<div class="flex flex-col bg-[#f6f8fc] h-full">
	<div class="h-16"></div>
	<div class="flex-1 min-h-0 flex">
		<nav class="contents">
			<Sidebar bind:selectedTemplate class="w-64 max-w-64" />
		</nav>
		<main class="contents">
			{#if selectedTemplate !== undefined}
				<Mail class="flex-1 min-w-0" title={selectedTemplate} />
			{/if}
		</main>
		<nav class="contents">
			<div class="w-14"></div>
		</nav>
	</div>
</div>
