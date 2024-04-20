<script lang="ts">
	import clsx from 'clsx';
	import Download from '$components/icons/Download.svelte';
	import IconButton from './IconButton.svelte';
	import Clipboard from '$components/icons/Clipboard.svelte';
	import { downloadURI, downloadURIToText } from '$lib/download';
	import Reload from './icons/Reload.svelte';

	export let title: string;
	let iframe: HTMLIFrameElement | undefined;

	async function download() {
		downloadURI(`/html/${title}`, `${title}.html`);
	}

	async function copySource() {
		try {
			const html = await downloadURIToText(`/html/${title}`);
			navigator.clipboard.writeText(html);
		} catch (error) {
			return alert('An error occurred while rendering: ' + error);
		}
		alert('Source code copied to clipboard');
	}

	async function refreshTemplate() {
		if (!iframe) return;
		iframe?.contentWindow?.location.reload();
	}
</script>

<div class={clsx('bg-white rounded-2xl flex flex-col', $$props.class)}>
	<div class="h-12 flex items-center pl-[4.5rem] gap-1">
		<IconButton icon={Download} class="w-10 h-10 fill-[#424544]" on:click={download} />
		<IconButton icon={Clipboard} class="w-10 h-10 fill-[#424544]" on:click={copySource} />
		<IconButton icon={Reload} class="w-10 h-10 fill-[#424544]" on:click={refreshTemplate} />
	</div>
	<div class="flex flex-col flex-1 min-h-0">
		<div class="pl-[4.5rem] pt-5 pb-2 text-[1.375rem]">{title}</div>
		<div class="h-10 pt-5"></div>
		<div class="flex flex-1 min-h-0 flex-col pr-4 pl-[4.5rem]">
			{#key title}
				<iframe bind:this={iframe} class="h-full" src="/html/{title}" {title} />
			{/key}
		</div>
	</div>
</div>
