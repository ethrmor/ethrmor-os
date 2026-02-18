import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { FormattedDate } from "@/components/formatted-date";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Ethan Morris
        </h1>
        <p className="mt-1 text-muted-foreground">
          Developer at{" "}
          <a
            href="https://centralstatesmarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
          >
            Central States Marketing
          </a>
        </p>
        <p className="mt-4 leading-relaxed text-foreground/80">
          My passions lie in building (and occasionally breaking) things,
          solving problems, and being a lifelong learner.
        </p>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="mb-6 text-lg font-semibold tracking-tight text-foreground">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Fantasy Football League Website"
            image="/images/chug-league.jpg"
            link="https://chug-official.vercel.app"
            code="https://github.com/ethrmor/chug-official/"
            alt="Fantasy football league website screenshot"
          />
          <ProjectCard
            title="Fantasy Football League Website"
            image="/images/chug-league.jpg"
            link="https://chug-official.vercel.app"
            alt="Fantasy football league website screenshot"
          />
        </div>
      </section>

      {/* About Preview */}
      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">
          About Me
        </h2>
        <p className="leading-relaxed text-foreground/80">
          {"Hi, I'm Ethan! Thanks for coming to my little corner of the internet. I'm a software developer with a passion for building websites and web applications. I've been writing code professionally for more than 3 years, but my experience in building websites extends back more than 20 years."}
        </p>
        <Link
          href="/about"
          className="mt-3 inline-flex items-center gap-1 text-sm text-accent no-underline transition-colors hover:text-accent/80"
        >
          More about me
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </Link>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className="mb-6 text-lg font-semibold tracking-tight text-foreground">
          Latest Posts
        </h2>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col no-underline"
              >
                <FormattedDate date={post.pubDate} />
                <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-1 text-sm text-accent no-underline transition-colors hover:text-accent/80"
        >
          View all posts
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
