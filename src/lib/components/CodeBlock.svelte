<div 
class="relative p-3 bg-neutral-800 text-white font-medium font-IBMPlexMono whitespace-pre-line {elClass}" 
class:border-comical={!noBorder}
style="line-height: 1.5;"
>
	<slot />
</div>
<script lang="ts">
	export let elClass = "";

	export let noBorder = false;
</script>