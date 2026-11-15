// Short / Long switch for the home page intro.
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface Props {
  short: string;
  long: string;
}

export default function IntroToggle({ short, long }: Props) {
  const [mode, setMode] = useState<'short' | 'long'>('short');

  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup
        type="single"
        variant="outline"
        value={mode}
        onValueChange={(v) => v && setMode(v as 'short' | 'long')}
        aria-label="Intro length"
        className="w-fit border-2 border-border"
      >
        <ToggleGroupItem value="short" className="px-4">Short</ToggleGroupItem>
        <ToggleGroupItem value="long" className="px-4">Long</ToggleGroupItem>
      </ToggleGroup>
      <p aria-live="polite" className="max-w-[60ch] text-base text-muted-foreground">
        {mode === 'short' ? short : long}
      </p>
    </div>
  );
}
