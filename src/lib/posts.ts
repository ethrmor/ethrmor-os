import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Rough reading time from the raw Markdown/MDX body, ignoring code blocks. */
export function readingTime(post: Post): number {
	const text = (post.body ?? '').replace(/```[\s\S]*?```/g, ' ').replace(/<[^>]+>/g, ' ');
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 230));
}

export function tagSlug(tag: string): string {
	return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
