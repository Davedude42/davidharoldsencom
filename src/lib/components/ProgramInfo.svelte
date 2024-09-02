<style>
.program-info {
	position: fixed;
	top: 1rem;
	right: 1rem;

	display: flex;
	flex-direction: column;
	align-items: stretch;

	background-color: white;

	transition: width 0.5s, height 0.5s;

	line-height: 1.3;

	overflow: hidden;
	cursor: pointer;

	z-index: 1000;
}
.program-info:hover {
	@apply bg-gray-100;
}

.program-info.open {
	width: 18rem;
	height: 16rem;
}

.program-info.closed {
	width: 3rem;
	height: 3rem;
}

</style>
<div class={`border-comical program-info text-sm ${visible ? 'open' : 'closed'}`} on:click={toggleOpen} on:keypress={toggleOpen}>
	{#if visible}
		<div class="p-2 break-words overflow-y-auto" style="width: 17.5rem; height: 15.5rem;" in:fade|local={{ delay: 250, duration: 250 }} out:fade|local={{ duration: 250 }}>
			<slot />
		</div>
	{:else}
		<div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" in:fade|local={{ delay: 250, duration: 250 }} out:fade|local={{ duration: 250 }}>
			<i class="fa-solid fa-question"></i>
		</div>
	{/if}
</div>
<script>
import { fade } from 'svelte/transition';
let visible = false;

function toggleOpen() {
	visible = !visible;
}
</script>