<style>
  .program {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  iframe {
    flex-grow: 1;
  }

</style>
<div class="program self-stretch h-full">
	<ProgramInfo>
		<h4 class="!m-0">Voxel Based Game</h4>
		<p>Made with THREE.js and my tears.</p>
		<h5>Controls</h5>
		<p>WASD to move and click to hide mouse</p>
		<h5>Mobile Controls</h5>
		<p>Swipe around and use the buttons. Sorry, no movement for u</p>
	</ProgramInfo>
	<iframe src="/oldhtml/mindcraft/index.html" scrolling="no" allow="fullscreen" on:load={setHeight} />
</div>
<script>
import ProgramInfo from "$lib/components/ProgramInfo.svelte";

function setHeight(event) {
	event.target.style.height = event.target.contentWindow.document.body.offsetHeight + 'px';
}
</script>