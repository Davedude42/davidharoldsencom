<div class="blog-content pt-nav">
	<div class="blog-box bg-green-200 fake-h1">
		This is <h1 class="inline">David's Discoveries</h1>.
	</div>
	{ #each data.posts as post }
		<a class="blog-box comical-button hover:bg-green-50" href={"/blog/" + post.slug}>
			<h2>{ post.title }</h2>
			<div class="grid justify-start items-center gap-x-6 gap-y-2 mt-4 mb-8 text-lg" style="grid-template-columns: auto auto;">
				<div>Published</div>
				<div>{formatDate(post.date)}</div>
				<div>Tags</div>
				<div class="flex flex-row gap-2">
					{ #each post.tags as tag }
						<div class="border-2 border-black px-2 py-0.5 bg-white cursor-pointer">{tag}</div>
					{ /each }
				</div>
			</div>
			<p class="whitespace-pre-line text-gray-600">{ post.preview }</p>
			<p>Continue...</p>
		</a>
	{ /each }
</div>
<script lang="ts">
import { formatDate } from '$lib/utils';

export let data;
</script>