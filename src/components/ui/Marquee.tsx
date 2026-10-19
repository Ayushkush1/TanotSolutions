import type { ReactNode } from "react";

/**
 * Infinite horizontal marquee. Items are rendered `copies` times (must be even) and the track
 * slides by -50% (spacing is padding, not flex gap, so both halves are exactly equal), so the loop is seamless even on ultra-wide screens. Pauses on hover and
 * falls back to a scrollable row for users who prefer reduced motion.
 */
export function Marquee({
  items,
  reverse = false,
  copies = 4,
  duration = 60,
  spacing = "pr-4",
  className = "",
}: {
  items: ReactNode[];
  reverse?: boolean;
  copies?: number;
  duration?: number;
  spacing?: string;
  className?: string;
}) {
  return (
    <div
      className={`group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] motion-reduce:overflow-x-auto ${className}`}
    >
      <ul
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: copies }, (_, c) =>
          items.map((item, i) => (
            <li key={`${c}-${i}`} aria-hidden={c > 0 || undefined} className={`shrink-0 ${spacing}`}>
              {item}
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
