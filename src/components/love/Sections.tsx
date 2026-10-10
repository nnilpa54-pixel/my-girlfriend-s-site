import { useEffect, useState } from "react";
import * as C from "@/content";
import { Card, GhostButton, PillButton, Section } from "./Bits";
import hero from "@/assets/hero-roses.jpg";

/* 1. Welcome */
export function Welcome({ onOpen, opened }: { onOpen: () => void; opened: boolean }) {
  return (
    <section data-chapter="welcome" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
      <img src={hero} width={1280} height={896} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <h1 className="animate-rise text-6xl text-rose sm:text-8xl">Our Little World ♡</h1>
      <p className="mt-3 text-lg">for {C.names.nicknames.join(" · ")}</p>
      {!opened ? (
        <button onClick={onOpen} className="group mt-12 animate-rise" aria-label="Open the letter">
          <div className="relative mx-auto h-44 w-72 rounded-lg bg-peach shadow-polaroid transition group-hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-24 origin-top bg-blush [clip-path:polygon(0_0,100%_0,50%_100%)]" />
            <span className="animate-heartbeat absolute left-1/2 top-16 -translate-x-1/2 text-4xl">💌</span>
          </div>
          <p className="mt-6 font-hand text-4xl text-rose">Open this, bachha ♡</p>
          <p className="text-xs text-muted-foreground">(tap — music begins softly)</p>
        </button>
      ) : (
        <Card className="paper-lines mt-10 max-w-lg animate-rise text-left">
          {C.welcomeLetter.map((l, i) => (
            <p key={i} className={i === 0 ? "font-hand text-3xl text-rose" : "mt-3 leading-8"}>{l}</p>
          ))}
          <p className="mt-4 text-right font-hand text-2xl">— your {C.names.me} ({C.names.meAlt})</p>
          <a href="#memories" className="mt-6 block text-center font-bold text-rose">Scroll down slowly ↓</a>
        </Card>
      )}
    </section>
  );
}

/* 2. Memories */
export function Memories() {
  return (
    <Section id="memories" chapter="memories" kicker="Chapter one" title="Our Memories">
      <ol className="relative mx-auto max-w-2xl border-l-2 border-dashed border-primary/40 pl-8">
        {C.memories.map((m) => (
          <li key={m.title} className="relative mb-10">
            <span className="absolute -left-[3.05rem] grid size-10 place-items-center rounded-full bg-card text-xl shadow-soft">{m.emoji}</span>
            <Card>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{m.date}</p>
              <h3 className="text-3xl text-rose">{m.title}</h3>
              <p className="mt-1 leading-7">{m.text}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* 3. Gallery */
export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const items = C.gallery;
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o! + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, items.length]);

  const Media = ({ i, big }: { i: number; big?: boolean }) => {
    const it = items[i];
    if (!it.src) return <div className="screentone grid aspect-square w-full place-items-center bg-muted text-center text-sm text-muted-foreground">{it.type === "video" ? "🎬" : "📷"}<br />add in content.ts</div>;
    return it.type === "video"
      ? <video src={it.src} controls={big} muted={!big} playsInline className={`w-full object-cover ${big ? "max-h-[70vh]" : "aspect-square"}`} />
      : <img src={it.src} alt={it.caption} loading="lazy" className={`w-full object-cover ${big ? "max-h-[70vh] object-contain" : "aspect-square"}`} />;
  };

  return (
    <Section id="gallery" chapter="gallery" kicker="Chapter two" title="Photos & Videos">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((it, i) => (
          <button key={i} onClick={() => setOpen(i)} style={{ rotate: `${((i * 7) % 9) - 4}deg` }}
            className="bg-paper p-2.5 pb-10 shadow-polaroid transition hover:z-10 hover:scale-105 hover:rotate-0">
            <Media i={i} />
            <p className="mt-2 font-hand text-xl leading-5">{it.caption}</p>
          </button>
        ))}
      </div>
      {open !== null && (
        <div role="dialog" aria-label="Photo viewer" onClick={() => setOpen(null)} className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl bg-paper p-4 pb-6 shadow-polaroid">
            <Media i={open} big />
            <p className="mt-3 text-center font-hand text-3xl">{items[open].caption}</p>
            <div className="mt-3 flex justify-between">
              <GhostButton onClick={() => setOpen((open - 1 + items.length) % items.length)}>‹ Prev</GhostButton>
              <GhostButton onClick={() => setOpen(null)}>Close</GhostButton>
              <GhostButton onClick={() => setOpen((open + 1) % items.length)}>Next ›</GhostButton>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

/* 5. Games */
function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const done = i >= C.quiz.length;
  if (done) return <div className="text-center"><p className="text-2xl font-hand">You got {score}/{C.quiz.length} ♡</p><p className="mt-1 text-sm">{score === C.quiz.length ? "Perfect, bachha!" : "Still my favourite answer: you."}</p><GhostButton className="mt-4" onClick={() => { setI(0); setScore(0); setPicked(null); }}>Play again</GhostButton></div>;
  const q = C.quiz[i]!;
  return (
    <div>
      <p className="font-bold">{i + 1}. {q.q}</p>
      <div className="mt-3 grid gap-2">
        {q.options.map((o, j) => (
          <button key={j} disabled={picked !== null}
            onClick={() => { setPicked(j); if (j === q.answer) setScore((s) => s + 1); setTimeout(() => { setPicked(null); setI(i + 1); }, 900); }}
            className={`rounded-xl border px-4 py-2 text-left transition ${picked === null ? "hover:bg-blush" : j === q.answer ? "bg-accent" : picked === j ? "bg-muted line-through" : ""}`}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Reasons() {
  const [n, setN] = useState(0);
  return (
    <div className="text-center">
      <p className="text-xs text-muted-foreground">Reason {n + 1} of {C.reasons.length}</p>
      <p key={n} className="animate-rise my-4 min-h-16 font-hand text-3xl text-rose">“{C.reasons[n]}”</p>
      <PillButton onClick={() => setN((n + 1) % C.reasons.length)}>Next reason ♡</PillButton>
    </div>
  );
}

function Wheel() {
  const [rot, setRot] = useState(0);
  const [res, setRes] = useState<string | null>(null);
  const n = C.wheel.length, seg = 360 / n;
  const spin = () => {
    const pick = Math.floor(Math.random() * n);
    const target = rot + 1440 + (360 - (rot % 360)) - pick * seg - seg / 2;
    setRes(null); setRot(target);
    setTimeout(() => setRes(C.wheel[pick]!), 3200);
  };
  const colors = ["var(--blush)", "var(--peach)", "var(--paper)", "var(--accent)"];
  const bg = `conic-gradient(${C.wheel.map((_, i) => `${colors[i % 4]} ${i * seg}deg ${(i + 1) * seg}deg`).join(",")})`;
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <span className="absolute left-1/2 -top-2 z-10 -translate-x-1/2 text-2xl">▼</span>
        <div className="relative size-60 rounded-full border-4 border-primary shadow-soft transition-transform duration-[3s] ease-out" style={{ background: bg, rotate: `${rot}deg` }}>
          {C.wheel.map((w, i) => (
            <span key={i} className="absolute left-1/2 top-1/2 origin-left text-lg" style={{ rotate: `${i * seg + seg / 2 - 90}deg`, translate: "0 -50%" }}>
              <span className="ml-20 inline-block">{w.slice(-2)}</span>
            </span>
          ))}
        </div>
      </div>
      <PillButton className="mt-4" onClick={spin}>Spin ♡</PillButton>
      <p className="mt-3 min-h-8 font-hand text-2xl text-rose">{res}</p>
    </div>
  );
}

function HiddenNotes() {
  const [found, setFound] = useState<number[]>([]);
  const spots = ["🌹", "🌸", "🍓", "🎀", "🌷"];
  return (
    <div>
      <p className="text-sm text-muted-foreground">Tap the flowers to find hidden notes ({found.length}/{spots.length})</p>
      <div className="mt-3 flex flex-wrap justify-center gap-4">
        {spots.map((s, i) => (
          <button key={i} onClick={() => setFound((f) => (f.includes(i) ? f : [...f, i]))} className="text-4xl transition hover:scale-125" aria-label="Hidden note">{s}</button>
        ))}
      </div>
      <ul className="mt-4 space-y-2">
        {found.map((i) => <li key={i} className="animate-rise rounded-xl bg-blush px-4 py-2 font-hand text-2xl">{C.hiddenNotes[i]}</li>)}
      </ul>
    </div>
  );
}

function Questions() {
  const [n, setN] = useState(0);
  return (
    <div className="text-center">
      <p key={n} className="animate-rise my-3 min-h-16 text-lg">{C.questions[n]}</p>
      <GhostButton onClick={() => setN((n + 1) % C.questions.length)}>Another question</GhostButton>
      <p className="mt-2 text-xs text-muted-foreground">Answer only if you feel like it ♡</p>
    </div>
  );
}

export function Games() {
  const tabs = [
    ["How well do you know us?", <Quiz />], ["30 reasons", <Reasons />], ["Love wheel", <Wheel />],
    ["Hidden notes", <HiddenNotes />], ["Little questions", <Questions />],
  ] as const;
  const [t, setT] = useState(0);
  return (
    <Section id="games" chapter="games" kicker="Chapter three" title="Love Games">
      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {tabs.map(([l], i) => (
          <button key={l} onClick={() => setT(i)} className={`rounded-full px-4 py-1.5 text-sm font-bold transition ${t === i ? "bg-rose-grad text-primary-foreground" : "bg-card"}`}>{l}</button>
        ))}
      </div>
      <Card className="mx-auto max-w-xl">{tabs[t][1]}</Card>
    </Section>
  );
}

/* 6. Distance */
export function Distance() {
  const [d, setD] = useState(0);
  const msg = C.distanceMessages[Math.min(C.distanceMessages.length - 1, Math.floor((d / 101) * C.distanceMessages.length))];
  const gap = 4 + d * 0.42; // % from centre
  return (
    <Section id="distance" chapter="distance" kicker="Chapter four" title="The Distance Game">
      <Card className="mx-auto max-w-2xl">
        <div className="relative h-40">
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden>
            <path d={`M ${50 - gap} 50 Q 50 ${50 + d * 0.35} ${50 + gap} 50`} stroke="var(--rose)" strokeWidth="0.8" fill="none" style={{ filter: "drop-shadow(0 0 2px var(--rose))" }} />
          </svg>
          <span className="animate-heartbeat absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl" style={{ left: `${50 - gap}%` }}>💗</span>
          <span className="animate-heartbeat absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl" style={{ left: `${50 + gap}%` }}>💗</span>
        </div>
        <input aria-label="Distance" type="range" min={0} max={100} value={d} onChange={(e) => setD(+e.target.value)} className="w-full accent-primary" />
        <p className="mt-1 flex justify-between text-xs text-muted-foreground"><span>together</span><span>far apart</span></p>
        <p key={msg} className="animate-rise mt-5 text-center font-hand text-3xl text-rose">{msg}</p>
      </Card>
      <p className="mx-auto mt-8 max-w-2xl text-center italic leading-7">“{C.coreMessage}”</p>
    </Section>
  );
}

/* 7. Food */
type Foods = typeof C.foods;
const foodLabels: Record<keyof Foods, string> = { snacks: "🍿 Snacks", meals: "🍛 Meals", desserts: "🍰 Desserts", drinks: "🧋 Drinks", futureDates: "💞 Future date foods" };

export function Food() {
  const [foods, setFoods] = useState<Foods>(C.foods);
  const [draft, setDraft] = useState<Record<string, string>>({});
  useEffect(() => { const s = localStorage.getItem("tulsi-foods"); if (s) setFoods(JSON.parse(s)); }, []);
  const save = (f: Foods) => { setFoods(f); localStorage.setItem("tulsi-foods", JSON.stringify(f)); };
  return (
    <Section id="food" chapter="food" kicker="Chapter five" title="Her Favourite Food">
      <p className="-mt-6 mb-8 text-center text-sm text-muted-foreground">Edit it, bachha — add or remove anything. It saves on your phone.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(Object.keys(foodLabels) as (keyof Foods)[]).map((k) => (
          <Card key={k} className={k === "futureDates" ? "sm:col-span-2 lg:col-span-1 bg-blush/70" : ""}>
            <h3 className="text-3xl text-rose">{foodLabels[k]}</h3>
            <ul className="mt-2 space-y-1">
              {foods[k].map((f, i) => (
                <li key={i} className="flex items-center justify-between gap-2 border-b border-dashed py-1">
                  <span>{f}</span>
                  <button aria-label={`Remove ${f}`} onClick={() => save({ ...foods, [k]: foods[k].filter((_, j) => j !== i) })} className="text-muted-foreground hover:text-rose">✕</button>
                </li>
              ))}
            </ul>
            <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); const v = (draft[k] || "").trim(); if (!v) return; save({ ...foods, [k]: [...foods[k], v] }); setDraft({ ...draft, [k]: "" }); }}>
              <input value={draft[k] || ""} onChange={(e) => setDraft({ ...draft, [k]: e.target.value })} placeholder="Add…" className="min-w-0 flex-1 rounded-full border bg-paper px-3 py-1.5 text-sm" />
              <button className="rounded-full bg-rose-grad px-3 text-primary-foreground" aria-label="Add">+</button>
            </form>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* 8. Open when */
export function OpenWhen() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="openwhen" chapter="openwhen" kicker="Chapter six" title="Open When…">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {C.openWhen.map((o, i) => (
          <button key={i} onClick={() => setOpen(open === i ? null : i)} className="rounded-2xl bg-peach p-5 text-left shadow-polaroid transition hover:-translate-y-1">
            <p className="text-3xl">{open === i ? "💌" : "✉️"} {o.emoji}</p>
            <p className="mt-2 font-hand text-3xl">Open when {o.when}</p>
            {open === i && <p className="animate-rise paper-lines mt-3 rounded-lg p-3 leading-8">{o.text}</p>}
          </button>
        ))}
      </div>
    </Section>
  );
}

/* 9. Letter */
export function Letter() {
  return (
    <Section id="letter" chapter="letter" kicker="Chapter seven" title="My Heartfelt Letter">
      <Card className="paper-lines mx-auto max-w-2xl">
        {C.letter.map((p, i) => <p key={i} className={i === 0 ? "font-hand text-4xl text-rose" : "mt-4 leading-8"}>{p}</p>)}
        <p className="mt-6 text-right font-hand text-3xl">Always yours,<br />{C.names.me} ♡</p>
      </Card>
    </Section>
  );
}

/* 10. Final */
export function Final() {
  const [choice, setChoice] = useState<string | null>(null);
  const opts = [
    { k: "talk", l: "I want to talk", r: "Thank you for telling me. I'm ready to listen — really listen. Whenever and however you want." },
    { k: "time", l: "I need some time", r: "That's completely okay. Take all the time you need. I'll be right here, no pressure, no guilt. ♡" },
    { k: "hug", l: "Send me a virtual hug", r: "🤗 Sending you the biggest, longest, warmest hug. Hold on as long as you like." },
  ];
  const picked = opts.find((o) => o.k === choice);
  const wa = C.contact.whatsapp && picked ? `https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(`From our little world: ${picked.l} ♡`)}` : null;
  return (
    <section data-chapter="final" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-28 text-center">
      <h2 className="text-6xl text-rose sm:text-7xl">Whenever you're ready, bachha ♡</h2>
      <p className="mt-3 max-w-md text-muted-foreground">There's no wrong answer. Any choice is okay with me.</p>
      {!picked ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {opts.map((o) => <PillButton key={o.k} onClick={() => setChoice(o.k)}>{o.l}</PillButton>)}
        </div>
      ) : (
        <Card className="mt-8 max-w-md animate-rise">
          {picked.k === "hug" && <p className="animate-heartbeat text-6xl">💞</p>}
          <p className="mt-2 font-hand text-3xl">{picked.r}</p>
          {wa && <a href={wa} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-rose underline">Let him know ♡</a>}
          <GhostButton className="mt-5 block mx-auto" onClick={() => setChoice(null)}>Go back</GhostButton>
        </Card>
      )}
    </section>
  );
}
