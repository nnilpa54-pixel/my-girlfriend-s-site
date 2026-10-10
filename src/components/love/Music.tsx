import { useEffect, useRef, useState } from "react";
import { soundtrack, type Chapter } from "@/content";

/** Global soundtrack player. Starts only after `started` (her first tap) and crossfades on chapter change. */
export function MusicPlayer({ chapter, started }: { chapter: Chapter; started: boolean }) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const volRef = useRef(volume);
  volRef.current = volume;
  const song = soundtrack[chapter];

  const fade = (el: HTMLAudioElement, to: number, ms = 700) =>
    new Promise<void>((res) => {
      const from = el.volume;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / ms);
        el.volume = from + (to - from) * p;
        p < 1 ? requestAnimationFrame(step) : res();
      };
      requestAnimationFrame(step);
    });

  useEffect(() => {
    if (!audio.current) audio.current = new Audio();
    const el = audio.current;
    el.loop = true;
    if (!started) return;
    let cancelled = false;
    (async () => {
      if (!el.paused) await fade(el, 0);
      if (cancelled) return;
      if (!song.src) { el.pause(); setPlaying(false); return; }
      el.src = song.src;
      el.volume = 0;
      try { await el.play(); setPlaying(true); await fade(el, volRef.current); } catch { setPlaying(false); }
    })();
    return () => { cancelled = true; };
  }, [chapter, started, song.src]);

  useEffect(() => { if (audio.current && !audio.current.paused) audio.current.volume = volume; }, [volume]);
  useEffect(() => { if (audio.current) audio.current.muted = muted; }, [muted]);
  useEffect(() => () => audio.current?.pause(), []);

  const toggle = async () => {
    const el = audio.current;
    if (!el || !song.src) return;
    if (el.paused) { el.volume = volume; await el.play().catch(() => {}); setPlaying(!el.paused); }
    else { el.pause(); setPlaying(false); }
  };

  if (!started) return null;
  return (
    <div className="fixed bottom-3 left-1/2 z-40 flex w-[min(94vw,420px)] -translate-x-1/2 items-center gap-3 rounded-full border bg-card/90 px-4 py-2 shadow-soft backdrop-blur">
      <button onClick={toggle} aria-label={playing ? "Pause" : "Play"} disabled={!song.src}
        className="grid size-9 shrink-0 place-items-center rounded-full bg-rose-grad text-primary-foreground disabled:opacity-40">
        {playing ? "❚❚" : "▶"}
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-bold">{song.src ? song.title : "No song added for this chapter"}</p>
        <p className="truncate text-[11px] text-muted-foreground">{song.src ? song.artist : "Add one in content.ts ♪"}</p>
      </div>
      <button onClick={() => setMuted((m) => !m)} aria-label={muted ? "Unmute" : "Mute"} className="text-lg">{muted ? "🔇" : "🔊"}</button>
      <input aria-label="Volume" type="range" min={0} max={1} step={0.05} value={volume}
        onChange={(e) => setVolume(+e.target.value)} className="w-16 accent-primary sm:w-20" />
    </div>
  );
}
