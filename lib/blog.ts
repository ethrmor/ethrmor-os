import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  tags?: string[];
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        pubDate: new Date(data.pubDate),
        updatedDate: data.updatedDate ? new Date(data.updatedDate) : undefined,
        heroImage: data.heroImage,
        tags: data.tags,
        content,
      };
    })
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const files = fs.readdirSync(BLOG_DIR);
  const file = files.find(
    (f) =>
      f.replace(/\.(md|mdx)$/, "") === slug &&
      (f.endsWith(".md") || f.endsWith(".mdx"))
  );

  if (!file) return undefined;

  const filePath = path.join(BLOG_DIR, file);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    pubDate: new Date(data.pubDate),
    updatedDate: data.updatedDate ? new Date(data.updatedDate) : undefined,
    heroImage: data.heroImage,
    tags: data.tags,
    content,
  };
}
