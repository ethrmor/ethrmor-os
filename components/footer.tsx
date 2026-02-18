import Link from "next/link";

const sitemapLinks = [
  { href: "/about", label: "/about" },
  { href: "/blog", label: "/blog" },
  { href: "/uses", label: "/uses" },
  { href: "/resume", label: "/resume" },
];

const connectLinks = [
  { href: "mailto:hello@ethrmor.com", label: "Email" },
  { href: "https://github.com/ethrmor", label: "GitHub", external: true },
  {
    href: "https://linkedin.com/in/ethanmorris1",
    label: "LinkedIn",
    external: true,
  },
  { href: "https://twitter.com/ethrmor", label: "Twitter", external: true },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-2xl flex-wrap items-start justify-between gap-8 px-6 py-10">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground">
            Sitemap
          </p>
          <ul className="flex flex-col gap-2">
            {sitemapLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-sm text-muted-foreground no-underline transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground">
            Connect
          </p>
          <ul className="flex flex-col gap-2">
            {connectLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground no-underline transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground no-underline transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full pt-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Ethan Morris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
