<svelte:head>
	<title>David Haroldsen</title>
</svelte:head>
<div class="blog-content pt-nav">
	<div 
		class="blog-box responsive-text-size flex flex-col items-center font-IBMPlexMono bg-neutral-800 text-white"
	>
		<div class="whitespace-pre font-medium pt-1" style="line-height: 1;">
<WelcomeASCII />
<br />
<br />
<br /><span class="less-responsive-text-size">I am...<br />&nbsp;</span>
 ___  ____ _  _ _ ___     _  _ ____ ____ ____ _    ___  ____ ____ _  _ 
 |  \ |__| |  | | |  \    |__| |__| |__/ |  | |    |  \ [__  |___ |\ | 
 |__/ |  |  \/  | |__/    |  | |  | |  \ |__| |___ |__/ ___] |___ | \|

<span class="less-responsive-text-size whitespace-pre-wrap"><br />As you could probably guess from the domain name.</span>
		</div>
	</div>
	<div class="blog-box">
		<div class="fake-h1">Who... am I?</div>
		<p>
			I am a freshman at <span class="font-bold text-blue-800">BYU</span> and I'm majoring in <span class="bg-green-200">Computer Engineering</span>.
		</p>
		<p>
			Some of my interests include:
		</p>
		<ul class="block font-IBMPlexMono text-sm ml-4 my-1">
			<li>1 Programming (as you can tell)</li>
			<li>2 Fighting with my linux machine to do anything (Arch btw)</li>
			<li>3 Singing and playing piano</li>
			<li>4 Riding my bike</li>
			<li>5 Playing board games</li>
			<li>6 Reading (audiobooks def count)</li>
			<li>7 Solving the rubik's cube (45 second pr.)</li>
		</ul>
		<p>
			That's a little introduction to me.
		</p>
		<p>
			If you want to learn about me more professionally, check out my <a href="/about">About</a> page.<br>
			Otherwise, check out my <a href="/blog">Blog</a> or play my games on the <a href="/projects">Projects</a> page.
		</p>
		<p>
			Or you could do none of those; I'm just a block of text, not a cop.
		</p>
	</div>
</div>
<script lang="ts">
	import WelcomeASCII from '../lib/components/WelcomeASCII.svelte';
	import BlogBoxLabel from '../lib/components/BlogBoxLabel.svelte';
	import CodeBlock from '../lib/components/CodeBlock.svelte';
</script>
<style scoped>
li {
	@apply py-0.5;
}
.responsive-text-size {
	font-size: 4px;
}
.less-responsive-text-size {
	font-size: 12px;
}
@media only screen and (min-width: 350px) {
	.responsive-text-size {
		font-size: 6.5px;
	}
}
@media only screen and (min-width: 500px) {
	.responsive-text-size {
		font-size: 9px;
	}
}
@media only screen and (min-width: 600px) {
	.responsive-text-size {
		font-size: 12px;
	}
	.less-responsive-text-size {
		font-size: 16px;
	}
}
@media only screen and (min-width: 800px) {
	.responsive-text-size {
		font-size: 16px;
	}
}
</style>