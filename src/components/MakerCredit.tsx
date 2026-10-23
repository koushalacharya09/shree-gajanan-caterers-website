import type { ReactNode } from "react";

export function MakerCredit() {
  return (
    <div className="mt-10 border-t border-gold/30 pt-8 text-center">
      <p className="font-display text-lg text-ivory">Designed &amp; built by Koushal Acharya</p>
      <p className="mt-2 text-sm tracking-wide text-gold-soft">Let&apos;s connect with Koushal</p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <IconLink
          href="https://www.linkedin.com/in/koushal-acharya09"
          label="LinkedIn"
          tooltip="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
            <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3.5 9h3v12h-3zM9 9h2.9v1.6h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.63-2.42 3.32V21H9z" />
          </svg>
        </IconLink>
        <IconLink href="mailto:koushalacharya3009@gmail.com" label="Email Koushal" tooltip="Email">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="M4 7l8 6 8-6" />
          </svg>
        </IconLink>
        <IconLink href="https://github.com/koushalacharya09" label="GitHub" tooltip="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.65.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
          </svg>
        </IconLink>
      </div>
    </div>
  );
}

function IconLink({
  href,
  label,
  tooltip,
  children,
}: {
  href: string;
  label: string;
  tooltip: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={tooltip}
      className="inline-flex h-11 w-11 items-center justify-center border border-gold/50 text-ivory no-underline transition-colors hover:bg-gold hover:text-maroon-deep"
    >
      {children}
    </a>
  );
}
