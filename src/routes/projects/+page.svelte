<style>
	.project-item {
		display: grid;
		grid-template-columns: 8rem 1fr;
		grid-template-rows: min-content 1fr;
		row-gap: 1rem;
		column-gap: 2rem;
	
		padding: 1rem;
	
		font-weight: 500;
	}
	.project-item img {
		height: 8rem;
	}
	
	.toys-grid {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: stretch;
		align-self: center;
		gap: 1.5rem;
	
		padding: 1rem;
	
		overflow: hidden;
	}
	
	.toys-grid.one-column, .toys-grid.two-columns {
		grid-template-columns: 1fr;
		width: 42rem;
		max-width: 100%;
	}
	
	@media only screen and (min-width: 900px) {
		.toys-grid.two-columns {
			grid-template-columns: 1fr 1fr;
			width: 1100px;
			max-width: 100%;
		}
	}
	
	</style>
	<div class="relative flex-grow flex flex-col items-stretch gap-6 pb-8">
		<div class="self-center flex flex-col items-stretch w-96 mt-nav border-comical">
			<div class="project-title p-2 bg-black text-white text-center font-IBMPlexMono font-bold text-xl">
				Projects
			</div>
		</div>
		<div class="toys-grid one-column">
			<a class="project-item border-comical comical-button bg-white hover:bg-green-400" href="/project/voxelbasedgame">
				<img src={vbgImage} alt="My mindcraft" class="row-span-2 border-comical" />
				<div class="font-IBMPlexMono text-2xl">Voxel Based Game</div>
				<div class="text-lg">A completely original idea, one of a kind</div>
			</a>
			<a class="project-item border-comical comical-button bg-white hover:bg-green-400" href="/project/lightblue">
				<img src={lightblueImage} alt="A board of Light Blue" class="row-span-2 border-comical" />
				<div class="font-IBMPlexMono text-2xl">Light Blue</div>
				<div class="text-lg">Who knew computers could be good at chess?</div>
			</a>
			<!--<a class="project-item border-comical comical-button bg-white hover:bg-green-400" href="/project/ledlights/ph">
				<img src={ledlightsImage} alt="Light Emitting Diodes" class="row-span-2 border-comical" />
				<div class="font-IBMPlexMono text-2xl">LED Lights</div>
				<div class="text-lg">My strip of Light Emitting Diodes</div>
			</a>-->
		</div>
		<div class="self-center flex flex-col items-stretch w-96 border-comical mt-1.5">
			<div class="project-title p-2 bg-black text-white text-center font-IBMPlexMono font-bold text-xl">
				Toys
			</div>
		</div>
		<div class="toys-grid two-columns">
			<a class="project-item border-comical comical-button bg-white hover:bg-green-400" href="/project/sandbox">
				<img src={sandImage} alt="Sand" class="row-span-2 border-comical" />
				<div class="font-IBMPlexMono text-2xl">Sand.box</div>
				<div class="text-lg">&#x23F3; &#x1F4A7; &#x1F525 &#x1FAB5;<br>You have control of the elements.</div>
			</a>
			<a class="project-item border-comical comical-button bg-white hover:bg-green-400" href="/project/gravity">
				<img src={gravityImage} alt="Gravity" class="row-span-2 border-comical" />
				<div class="font-IBMPlexMono text-2xl">Gravity</div>
				<div class="text-lg">Take a break from the world by smashing some circles against each other.</div>
			</a>
			<a class="project-item border-comical comical-button bg-white hover:bg-green-400" href="/project/threedee">
				<img src={d3Image} alt="Three dee" class="row-span-2 border-comical" />
				<div class="font-IBMPlexMono text-2xl">Homemade 3D Renderer</div>
				<div class="text-lg">Who needs Three.js?? Not me!!</div>
			</a>
		</div>
		<div class="self-center flex flex-col items-stretch w-96 border-comical mt-1.5">
			<div class="project-title p-2 bg-black text-white text-center font-IBMPlexMono font-bold text-xl">
				Published Work
			</div>
		</div>
		<div class="toys-grid one-column">
			<a class="project-item border-comical comical-button bg-white hover:bg-green-400" href="/project/bestris">
				<img src={bestrisImage} alt="Bestris icon" class="row-span-2 border-comical rounded-full" />
				<div class="font-IBMPlexMono text-2xl">Bestris</div>
				<div class="text-lg">My Tetris clone for the Samsung Watch</div>
			</a>
		</div>
	</div>
	<script>
	import vbgImage from '$lib/imgs/projects/voxelbasedgame.jpg';
	import lightblueImage from '$lib/imgs/projects/lightblue.jpg';
	import ledlightsImage from '$lib/imgs/projects/ledlights.jpg';
	import gravityImage from '$lib/imgs/projects/gravity.jpg';
	import sandImage from '$lib/imgs/projects/sand.jpg';
	import d3Image from '$lib/imgs/projects/threedee.gif';
	import bestrisImage from '$lib/imgs/projects/bestris.jpg';
	</script>