<div class="blog-content pt-nav">
	<h1 class="blog-box bg-green-900 text-white text-3xl tracking-widest">
		David's Discoveries
	</h1>
	<div class="blog-box">
		<h2>
			<span class="highlight">What is David's Discoveries?</span>
		</h2>
		<p>
			It's where I write about... things. What have I been doing? What do I want the world to know? Why did I spend four hours try to connect linux to my printer just for it to never connect? 
		</p>
		<p>
			All of these questions, and possibly more, will (someday) be answered on David's Discoveries.
		</p>
	</div>
	<div class="blog-grid gap-4 mt-16">
		<div class="row-span-2 border-comical flex flex-row items-center px-6 py-4 bg-white font-IBMPlexMono text-3xl font-semibold">
			{ data.posts.length } Posts
		</div>
		<!--<input class="border-comical bg-white px-2" style="height: 45px;" placeholder="Filter by title">
		<select class="border-comical bg-white px-2" value="" style="height: 45px;">
			<option value="" disabled>Filter by tag</option>
			<option value="">No tag filter</option>
			{ #each data.tags as tag }
				<option value={ tag }>{ tag }</option>
			{ /each }
		</select>-->
	</div>
	{ #each data.posts as post }
		<a class="group blog-box !p-0 comical-button hover:bg-neutral-100 mt-4" href={"/blog/" + post.slug}>
			<div class="bg-blue-200 group-hover:bg-green-400 border-b-4 border-black p-6 pb-0">
				<h2>
					{ post.title }
				</h2>
				<div class="grid justify-start items-baseline gap-x-6 gap-y-4 mt-4 mb-8 text-lg" style="grid-template-columns: auto auto;">
					<div class="text-sm font-semibold">Published</div>
					<div class="font-medium">{formatDate(post.date)}</div>
					<div class="text-sm font-semibold">Tags</div>
					<div class="flex flex-row gap-2">
						{ #each post.tags as tag }
							<div class="border-[3px] border-black px-2 bg-white font-medium cursor-pointer">{ tag }</div>
						{ /each }
					</div>
				</div>
			</div>
			<div class="p-4">
				<p class="whitespace-pre-line text-gray-600">{ post.preview }</p>
				<p>Continue...</p>
			</div>
		</a>
	{ /each }
</div>
<script lang="ts">
import { formatDate } from '$lib/utils';

export let data;
</script>
<style scoped>
	.blog-grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	}
</style>