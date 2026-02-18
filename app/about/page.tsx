import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ethan Morris, web developer.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h1>
        <p className="mt-4 leading-relaxed text-foreground/80">
          My passion for the web began during the days of dialup internet.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/80">
          Before that, I spent nearly 10 years working in the finance industry
          as a financial advisor, consultant, and banker.
        </p>
        <ul className="mt-4 flex flex-col gap-2 pl-5 text-foreground/80">
          <li className="list-disc leading-relaxed">
            Developed more than 20 websites, while maintaining upwards of 400
            customer sites.
          </li>
          <li className="list-disc leading-relaxed">
            Managed customer email marketing, utilizing custom html emails
            designed by agency designers.
          </li>
          <li className="list-disc leading-relaxed">
            Decreased time from design-to-production with enhanced workflows to
            decrease friction between team members.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          History
        </h2>
        <blockquote className="mt-4 border-l-4 border-accent pl-5">
          <p className="text-lg italic text-foreground/70 text-balance">
            {'"If you are not learning, you are not living"'}
          </p>
          <footer className="mt-2 text-sm text-muted-foreground">
            {"— Kevin James Breaux"}
          </footer>
        </blockquote>
      </section>

      <section>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Work
        </h2>
        <p className="mt-4 text-foreground/80">
          {"Here are some of the places I've worked."}
        </p>
        <div className="mt-6 flex flex-col gap-8">
          {/* Job 1 */}
          <div className="relative border-l-2 border-border pl-6">
            <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <h3 className="text-base font-semibold text-foreground">
              Web Developer
              <span className="ml-2 font-mono text-xs font-normal text-muted-foreground">
                2021 - Present
              </span>
            </h3>
            <p className="mt-1 text-sm italic text-muted-foreground">
              Central States Marketing
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              As a web developer, I build custom Wordpress themes using PHP to
              meet the unique needs of our clients. I also help maintain and
              update older client websites to keep them running smoothly. In
              addition, I lead the email marketing efforts for our clients,
              creating and scheduling engaging email content to help drive
              results for their businesses.
            </p>
          </div>

          {/* Job 2 */}
          <div className="relative border-l-2 border-border pl-6">
            <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-background" />
            <h3 className="text-base font-semibold text-foreground">
              Financial Advisor
              <span className="ml-2 font-mono text-xs font-normal text-muted-foreground">
                2013 - 2021
              </span>
            </h3>
            <p className="mt-1 text-sm italic text-muted-foreground">
              JPMorgan Chase, Charles Schwab, Edward Jones
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              As a financial advisor, I spent the first 8+ years of my
              professional career helping clients grow and keep their hard earned
              money. I learned many things and honed many skills that help me as
              a developer, including sales, effective communication, and hard
              work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
