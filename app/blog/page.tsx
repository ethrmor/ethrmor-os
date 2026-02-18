import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { FormattedDate } from "@/components/formatted-date";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read blog posts about web development and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Blog
      </h1>
      <p className="mt-2 text-muted-foreground">
        Thoughts on web development, design, and more.
      </p>

      <ul className="mt-10 flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 no-underline sm:flex-row sm:items-baseline sm:gap-4"
            >
              <FormattedDate
                date={post.pubDate}
                className="shrink-0 font-mono text-xs text-muted-foreground"
              />
              <div>
                <h2 className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
