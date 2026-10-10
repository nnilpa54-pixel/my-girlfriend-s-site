import type { ReactNode } from "react";
import type { Chapter } from "@/content";

export function FloatingHearts() {
  const items = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((i) => (
        <span key={i} className="animate-float-up absolute bottom-[-40px] text-primary/40"
          style={{ left: `${(i * 37) % 100}%`, animationDuration: `${10 + (i % 6) * 3}s`, animationDelay: `${i * 1.3}s`, fontSize: `${14 + (i % 4) * 8}px` }}>
          {i % 3 === 0 ? "🌸" : "♡"}
        </span>
      ))}
    </div>
  );
}

export function Section({ id, chapter, title, kicker, children }: { id: string; chapter: Chapter; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={id} data-chapter={chapter} className="relative z-10 mx-auto max-w-5xl scroll-mt-6 px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        {kicker && <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">{kicker}</p>}
        <h2 className="mt-2 text-5xl text-rose sm:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border bg-card/85 p-5 shadow-soft backdrop-blur-sm sm:p-7 ${className}`}>{children}</div>;
}

export function PillButton({ children, className = "", ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...p} className={`rounded-full bg-rose-grad px-6 py-2.5 font-bold text-primary-foreground shadow-soft transition hover:scale-105 active:scale-95 disabled:opacity-50 ${className}`}>
      {children}
    </button>
  );
}

export function GhostButton({ children, className = "", ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...p} className={`rounded-full border-2 border-primary/40 bg-card px-5 py-2 font-bold text-rose transition hover:bg-blush ${className}`}>
      {children}
    </button>
  );
}
