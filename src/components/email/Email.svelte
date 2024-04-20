<script lang="ts">
	import type { Element } from '.';
	import Head from './Head.svelte';
	import Html from './Html.svelte';

	export let lang: string;
	export let content: Element;
</script>

<Html {lang}>
	<Head />
	<body>
		<slot>
			<svelte:component this={content.component} {...content.props} />
		</slot>
	</body>
</Html>
