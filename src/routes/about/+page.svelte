<svelte:head>
	<title>David Haroldsen - About</title>
</svelte:head>
<div class="pt-nav blog-content !pb-24">
	<div class="flex flex-row items-center gap-8">
		<div class="flex-grow blog-box bg-blue-200">
			<h1>David Haroldsen</h1>
			<p class="text-left">
				Hi! I am a freshman at BYU studying Computer Engineering.
			</p>
			<p class="text-left">
				I have been programming since 6th grade and am proficient in many languages and technologies. I chose to study Computer Engineering to suppliment what I already know so I can work with computers from top to bottom.
			</p>
		</div>
		<div class="flex-shrink-0 border-comical p-4 bg-white">
			<img src={meeee} style="width: 220px; height: 220px;" alt="David Haroldsen in front of a beautiful Icelandic waterfall." />
		</div>
	</div>
	<div class="self-center flex flex-col items-stretch border-comical mt-4" style="width: 500px;">
		<div class="relative bg-neutral-100" style="height: 40px;">
			<div class="absolute left-3 top-1/2 transform -translate-y-1/2 flex flex-row gap-2 text-xs">
				<i class="fa-solid fa-square text-red-500"></i>
				<i class="fa-solid fa-square text-yellow-500"></i>
				<i class="fa-solid fa-square text-green-500"></i>
			</div>
			<div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold font-IBMPlexMono text-neutral-800">
				Languages I Know
			</div>
		</div>
		<ul class="block px-4 py-2 font-IBMPlexMono font-medium bg-neutral-800 text-white">
			<li>1&nbsp;&nbsp;Javascript + Node</li>
			<ul>
				<li>&nbsp;&nbsp;&nbsp;- Vue</li>
				<li>&nbsp;&nbsp;&nbsp;- Svelte</li>
			</ul>
			<li>2&nbsp;&nbsp;HTML/CSS</li>
			<li>3&nbsp;&nbsp;Tailwind</li>
			<li>4&nbsp;&nbsp;PHP</li>
			<li>5&nbsp;&nbsp;SQL</li>
			<li>6&nbsp;&nbsp;Python</li>
			<li>7&nbsp;&nbsp;Java</li>
			<li>8&nbsp;&nbsp;TI Basic &lt;3</li>
		</ul>
	</div>
	<div class="self-center flex flex-col gap-4 mt-16" style="width: 600px;">
		<h2 class="p-4 border-comical bg-green-500">
			Experience
		</h2>
		<div class="flex flex-row justify-between p-6 gap-4 border-comical comical-button text-lg">
			<div class="font-medium">Software Developer at Swimage</div>
			<div class="font-bold">2022-2024</div>
		</div>
	</div>
</div>
<script lang="ts">
import meeee from '$lib/imgs/davidh.jpg';
</script>