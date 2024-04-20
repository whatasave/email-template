<script lang="ts">
	import type { Element } from '.';

	export let children: Element[] = [];
</script>

<table align="center" width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
	{#each children as child}
		<tr style="width: 100%;">
			<td style="width: 100%;">
				<svelte:component this={child.component} {...child.props} />
			</td>
		</tr>
	{/each}
</table>
