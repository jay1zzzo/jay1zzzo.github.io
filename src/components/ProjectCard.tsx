// One project card: label, title, one line, and "VIEW PROJECT →".
// Uses Magic UI's Magic Card for the amber spotlight that follows the mouse.
import { MagicCard } from '@/components/ui/magic-card';

interface Props {
  label: string;   // e.g. "TOOL / OPEN SOURCE"
  title: string;
  summary: string;
  href: string;
}

export default function ProjectCard({ label, title, summary, href }: Props) {
  return (
    <MagicCard
      className="h-full rounded-[2px] border-2 transition-transform duration-150 hover:-translate-y-1"
      gradientSize={220}
      gradientColor="rgba(255, 200, 87, 0.14)"
      gradientOpacity={1}
      gradientFrom="#FFC857"
      gradientTo="#B8862E"
    >
      <article className="relative flex h-full min-h-48 flex-col gap-2 p-5">
        <p className="label">[ {label} ]</p>
        <h3 className="font-serif text-xl font-semibold leading-snug">{title}</h3>
        <p className="text-sm text-muted-foreground">{summary}</p>
        <a
          href={href}
          className="mt-auto pt-3 font-mono text-xs tracking-wider text-primary uppercase no-underline after:absolute after:inset-0 after:content-[''] hover:underline"
        >
          View project <span aria-hidden="true">→</span>
          <span className="sr-only">: {title}</span>
        </a>
      </article>
    </MagicCard>
  );
}
