// Short / Long switch for the home page intro.
// The "What I've Learned So Far" reflections only appear in the Long view.
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface Reflection {
  title: string;
  text: string;
}

interface Props {
  short: string;
  long: string;
  reflectionsTitle?: string;
  reflections?: Reflection[];
}

// Mono caps label. The selected one gets brackets and the amber accent.
const itemClass =
  'min-w-[6.5rem] border px-4 font-mono text-xs tracking-widest uppercase ' +
  'border-border text-muted-foreground hover:text-foreground ' +
  'data-[state=on]:border-primary/70 data-[state=on]:bg-transparent data-[state=on]:text-primary';

export default function IntroToggle({ short, long, reflectionsTitle, reflections }: Props) {
  const [mode, setMode] = useState<'short' | 'long'>('short');

  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup
        type="single"
        variant="outline"
        value={mode}
        onValueChange={(v) => v && setMode(v as 'short' | 'long')}
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
      <div aria-live="polite" className="flex max-w-[65ch] flex-col gap-3 text-base text-muted-foreground">
        {(mode === 'short' ? short : long)
          .trim()
          .split(/\n\s*\n/) // a blank line starts a new paragraph
          .map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        {mode === 'long' && reflections && reflections.length > 0 && (
          <div className="mt-4 border-t-2 border-border pt-5">
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
