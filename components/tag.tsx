import Link from "next/link";

interface TagProps {
  name: string;
  href?: string;
}

export function Tag({ name, href }: TagProps) {
  const className =
    "inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent no-underline transition-colors hover:bg-accent/20";

  if (href) {
    return (
      <Link href={href} className={className}>
        #{name}
      </Link>
    );
  }

  return <span className={className}>#{name}</span>;
}
