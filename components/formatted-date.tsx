interface FormattedDateProps {
  date: Date;
  className?: string;
}

export function FormattedDate({ date, className }: FormattedDateProps) {
  return (
    <time
      dateTime={date.toISOString()}
      className={className ?? "text-sm text-muted-foreground"}
    >
      {date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}
