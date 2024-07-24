<div class="absolute top-0 inset-x-0 z-40 flex flex-row items-center gap-4 h-nav" style="padding-left: calc((100px - 52px) / 2);">
	<div class="border-comical font-IBMPlexMono font-semibold text-xl px-4 py-2">David Haroldsen</div>
	<nav class="flex flex-row gap-6 border-comical px-4 py-2 bg-green-500 font-IBMPlexMono font-medium text-lg">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/blog">Blog</a>
		<a href="/projects">Projects</a>
	</nav>
</div>
<slot />
<script lang="ts">
	import "../app.css";
	import "../text.css";
	import "../formatting.css";
</script>
<style>
	nav > a {
		@apply hover:underline;
	}
</style>