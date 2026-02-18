import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  code?: string;
  alt: string;
}

export function ProjectCard({
  title,
  image,
  link,
  code,
  alt,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground no-underline transition-colors group-hover:text-accent"
        >
          <h3 className="text-sm font-medium">{title}</h3>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            />
          </svg>
        </a>
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`View source code for ${title}`}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        )}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={alt}
          className="w-full rounded-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
        />
      </a>
    </article>
  );
}
