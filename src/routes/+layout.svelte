<div class="nav-wrapper">
	<div class="pointer-events-auto z-40 border-comical bg-white font-IBMPlexMono font-semibold text-xl px-4 py-2 whitespace-nowrap">David Haroldsen</div>
	<div class="relative" style="height: 52px;">
		<button class="nav-button border-comical" on:click={toggleNav} class:navOpen={navOpen}>
			<nav class="nav-nav" class:navOpen={navOpen}>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/blog">Blog</a>
				<a href="/projects">Projects</a>
			</nav>
			<i class="nav-hamburger fa-solid fa-bars" class:navOpen={navOpen}></i>
		</button>
	</div>
</div>
<slot />
<script lang="ts">
	import "../app.css";
	import "../text.css";
	import "../formatting.css";

	let navOpen = false;

	function toggleNav() {
		navOpen = !navOpen;
	}
</script>
<style>
	nav > a {
		@apply hover:underline;
	}
	.nav-wrapper {
		@apply fixed top-0 inset-x-0 z-40 pointer-events-none flex flex-row items-center justify-between gap-4 h-nav;

		padding: 0 calc((100px - 52px) / 2);
	}
	
	.nav-button {
		@apply pointer-events-auto z-40 flex flex-col px-4 py-2 bg-green-500 hover:bg-green-400 font-IBMPlexMono font-medium text-lg overflow-hidden;

		position: absolute;
		top: 0px;
		right: 0px;

		width: 52px;
		height: 52px;

		cursor: pointer;

		transition: width 0.3s, height 0.3s;
		transition-delay: 0.3s, 0s;
	}


	.nav-nav {
		display: flex;
		flex-direction: column;
		gap: 16px;

		transition: opacity 0.3s;
	}

	.nav-hamburger {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		font-size: 18px;

		transition: opacity 0.3s;
	}


	@media only screen and (max-width: 649px) {
		.nav-button.navOpen {

			width: calc(100vw - (100px - 52px));
			height: 184px;

			transition-delay: 0s, 0.3s;
		}
		.nav-nav, .nav-hamburger.navOpen {
			opacity: 0;
		}
		.nav-nav.navOpen, .nav-hamburger {
			opacity: 1;
		}

		.nav-nav:not(.navOpen) {
			pointer-events: none;
		}
	}

	@media only screen and (min-width: 650px) {
		.nav-button {
			position: relative;
			top: 0;
			right: 0;
			transform: none;
		}
		.nav-hamburger {
			display: none;
		}
		.nav-wrapper {
			@apply justify-start;
		}
		.nav-button {
			@apply hover:bg-green-500;
			width: auto;
			height: auto;

			cursor: default;
		}
	.nav-nav {
		flex-direction: row;
	}
	}


</style>