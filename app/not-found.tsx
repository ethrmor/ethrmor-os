import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background no-underline transition-colors hover:bg-foreground/90"
      >
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
          <path d="M19 12H5m7-7-7 7 7 7" />
        </svg>
        Back home
      </Link>
    </div>
  );
}
