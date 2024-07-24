{#each list as _}<span>&nbsp;</span>{/each}
<script lang="ts">
	export let l: number = 12;

	$: list = {length: l};
</script>