import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();

	const tags: string[] = [];

	posts.forEach((post: Post) => {
		post.tags.forEach((tag: string) => {
			if(!tags.includes(tag)) {
				tags.push(tag);
			}
		});
	});

	tags.sort();

	return { posts, tags };
}	