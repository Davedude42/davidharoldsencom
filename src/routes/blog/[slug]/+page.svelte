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
	<div class="blog-box text-lg bg-blue-200">
		<h1>{data.meta.title}</h1>
		<div class="grid justify-start items-baseline gap-x-6 gap-y-4 pt-4 text-lg" style="grid-template-columns: auto auto;">
			<div class="text-sm font-semibold">Published</div>
			<div class="font-medium">{formatDate(data.meta.date)}</div>
			<div class="text-sm font-semibold">Tags</div>
			<div class="flex flex-row gap-2">
				{ #each data.meta.tags as tag }
					<div class="border-[3px] border-black px-2 bg-white font-medium cursor-pointer">{ tag }</div>
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