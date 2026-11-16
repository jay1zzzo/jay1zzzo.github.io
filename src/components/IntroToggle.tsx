// Short / Long switch for the home page intro.
// The "What I've Learned So Far" reflections only appear in the Long view.
// The text crossfades between versions (and just switches for visitors who prefer reduced motion).
import { useEffect, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface Reflection {
  title: string;
  text: string;
}

interface Props {
  short: string;
  long: string;
  longLead?: string; // a one-line opener shown in bold above the Long text
  moreHref?: string; // a small link under the Long story, e.g. to the About page
  moreLabel?: string;
  reflectionsTitle?: string;
  reflections?: Reflection[];
}

type Mode = 'short' | 'long';

// Mono caps label. The selected one gets brackets and the amber accent.
const itemClass =
  'min-w-[6.5rem] border px-4 font-mono text-xs tracking-widest uppercase [@media(pointer:coarse)]:min-h-11 ' +
  'border-border text-muted-foreground hover:text-foreground ' +
  'data-[state=on]:border-primary/70 data-[state=on]:bg-transparent data-[state=on]:text-primary';

export default function IntroToggle({ short, long, longLead, moreHref, moreLabel, reflectionsTitle, reflections }: Props) {
  const [mode, setMode] = useState<Mode>('short'); // the button that is selected
  const [shown, setShown] = useState<Mode>('short'); // the text on screen (follows the button after a short fade)
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (mode === shown) {
      setFading(false);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(mode);
      return;
    }
    setFading(true);
    const t = setTimeout(() => {
      setShown(mode);
      setFading(false);
    }, 200);
    return () => clearTimeout(t);
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup
        type="single"
        variant="outline"
        value={mode}
        onValueChange={(v) => v && setMode(v as Mode)}
        aria-label="Intro length"
        className="w-fit gap-2"
      >
        <ToggleGroupItem value="short" className={itemClass} aria-label="Short">
          {mode === 'short' ? '[ Short ]' : 'Short'}
        </ToggleGroupItem>
        <ToggleGroupItem value="long" className={itemClass} aria-label="Long">
          {mode === 'long' ? '[ Long ]' : 'Long'}
        </ToggleGroupItem>
      </ToggleGroup>
      <div
        aria-live="polite"
        className={
          'flex max-w-[65ch] flex-col gap-3 text-base text-muted-foreground transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ' +
          (fading ? 'translate-y-1 opacity-0' : 'translate-y-0 opacity-100')
        }
      >
        {shown === 'long' && longLead && (
          <p className="font-serif text-xl leading-snug font-semibold text-foreground">{longLead}</p>
        )}
        {(shown === 'short' ? short : long)
          .trim()
          .split(/\n\s*\n/) // a blank line starts a new paragraph
          .map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        {shown === 'long' && moreHref && moreLabel && (
          <p>
            <a
              href={moreHref}
              className="inline-block py-1 font-mono text-xs tracking-wider text-primary uppercase underline-offset-4 hover:underline [@media(pointer:coarse)]:py-3"
            >
              {moreLabel} <span aria-hidden="true">→</span>
            </a>
          </p>
        )}
        {shown === 'long' && reflections && reflections.length > 0 && (
          <div className="mt-4 border-t border-border pt-5">
            <h3 className="label">[ {reflectionsTitle ?? "What I've Learned So Far"} ]</h3>
            <ol className="mt-4 flex flex-col gap-5">
              {reflections.map((r, i) => (
                <li key={r.title} className="flex gap-4">
                  <span className="pt-0.5 font-mono text-xs text-primary" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{r.title}</p>
                    <p className="mt-1 text-sm leading-snug">{r.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
