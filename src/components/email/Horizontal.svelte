<script lang="ts">
	import type { Element } from '.';

	export let children: Element[] = [];
</script>

<table align="center" width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
	<tr style="width: 100%;">
		{#each children as child}
			<td>
				<svelte:component this={child.component} {...child.props} />
			</td>
		{/each}
	</tr>
</table>
