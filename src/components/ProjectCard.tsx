// One project card.
// variant "image": thumbnail of the real work on top (Marketing page, technical projects).
// variant "peek":  calm dark card with an icon and no picture. On hover it lifts a little and
//                  a soft amber glow follows the cursor. The real work is on the project page.
import { MagicCard } from '@/components/ui/magic-card';

type IconName = 'coffee' | 'newspaper' | 'brochure' | 'swatch' | 'megaphone' | 'snowflake' | 'browser' | 'briefcase';

interface Props {
  label: string;   // e.g. "TOOL / OPEN SOURCE"
  title: string;
  summary: string;
  href: string;
  image?: string;  // thumbnail URL of the real work
  variant?: 'image' | 'peek';
  icon?: IconName;
}

// Simple square-ended line icons, drawn to match the sharp style.
const paths: Record<IconName, string> = {
  coffee: 'M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8zM17 9h2a2 2 0 0 1 0 5h-2M7 3v2M11 3v2M15 3v2',
  newspaper: 'M4 4h13v16H6a2 2 0 0 1-2-2V4zM17 8h3v10a2 2 0 0 1-2 2M7 8h7M7 12h7M7 16h4',
  brochure: 'M3 5l6 2 6-2 6 2v12l-6-2-6 2-6-2V5zM9 7v12M15 5v12',
  swatch: 'M4 4h6v16H4zM10 8l5-3 4 7-5 3M10 17h10v3H10z',
  megaphone: 'M3 11l13-6v14L3 13zM7 13v5h3v-4M19 9v6',
  snowflake: 'M12 2v20M3.5 7l17 10M3.5 17l17-10M9 3.5l3 2 3-2M9 20.5l3-2 3 2',
  browser: 'M3 5h18v14H3zM3 9h18M6 7h.01M9 7h.01',
  briefcase: 'M3 8h18v11H3zM9 8V5h6v3M3 13h18',
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className="text-primary transition-transform duration-200 ease-out motion-reduce:transition-none [@media(hover:hover)]:group-hover/card:-translate-y-0.5 [@media(hover:hover)]:group-hover/card:-rotate-6 motion-reduce:[@media(hover:hover)]:group-hover/card:transform-none"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export default function ProjectCard({ label, title, summary, href, image, variant = 'image', icon }: Props) {
  const peek = variant === 'peek';
  return (
    <MagicCard
      className="group/card h-full rounded-[2px] border-2 transition-transform duration-150 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      gradientSize={220}
      gradientColor="rgba(255, 200, 87, 0.14)"
      gradientOpacity={1}
      gradientFrom="#FFC857"
      gradientTo="#B8862E"
    >
      <article className="relative flex h-full flex-col overflow-hidden">
        {!peek && image && (
          <div className="aspect-[4/3] overflow-hidden border-b-2 border-border bg-muted">
            <img src={image} alt="" width={640} height={480} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
          </div>
        )}

        <div className={`flex flex-1 flex-col gap-1.5 p-4 ${peek ? 'min-h-48' : ''}`}>
          {peek && icon && <Icon name={icon} />}
          <p className="label">[ {label} ]</p>
          <h3 className="font-serif text-xl leading-snug font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{summary}</p>
          <a
            href={href}
            data-umami-event="Project card click"
            data-umami-event-project={title}
            className="mt-auto pt-3 font-mono text-xs tracking-wider text-primary uppercase no-underline after:absolute after:inset-0 after:content-[''] hover:underline"
          >
            View project <span aria-hidden="true">→</span>
            <span className="sr-only">: {title}</span>
          </a>
        </div>

      </article>
    </MagicCard>
  );
}
