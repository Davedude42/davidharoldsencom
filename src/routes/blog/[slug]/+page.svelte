<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description}>
	<meta name="author" content="David Haroldsen">
	<meta name="keywords" content={data.meta.tags.join(',')}>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="blog-content pt-nav">
	<div class="blog-box text-lg bg-green-200">
		<h1>{data.meta.title}</h1>
		<div class="grid justify-start items-center gap-x-6 gap-y-2 pt-4" style="grid-template-columns: auto auto;">
			<div>Published</div>
			<div>{formatDate(data.meta.date)}</div>
			<div>Tags</div>
			<div class="flex flex-row gap-2">
				{ #each data.meta.tags as tag }
					<div class="border-2 border-black px-2 py-0.5 bg-white hover:bg-green-100 hover:shadow-comical cursor-pointer">{tag}</div>
				{ /each }
			</div>
		</div>
	</div>
	<article class="contents">
		<svelte:component this={data.content} />
	</article>
</div>
<script lang="ts">
import { formatDate } from '$lib/utils';

export let data
</script>