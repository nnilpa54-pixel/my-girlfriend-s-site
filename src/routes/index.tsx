import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Chapter } from "@/content";
import { FloatingHearts } from "@/components/love/Bits";
import { MusicPlayer } from "@/components/love/Music";
import { Distance, Final, Food, Gallery, Games, Letter, Memories, OpenWhen, Welcome } from "@/components/love/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Little World ♡ — for Tulsi" },
      { name: "description", content: "A little world of memories, letters and love, made for Tulsi." },
      { property: "og:title", content: "Our Little World ♡" },
      { property: "og:description", content: "A little world of memories, letters and love, made for Tulsi." },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  const [chapter, setChapter] = useState<Chapter>("welcome");

  useEffect(() => {
    if (!opened) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setChapter((e.target as HTMLElement).dataset.chapter as Chapter)),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    document.querySelectorAll("[data-chapter]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [opened]);

  return (
    <main className="relative overflow-x-hidden">
      <FloatingHearts />
      <Welcome opened={opened} onOpen={() => setOpened(true)} />
      {opened && (
        <>
          <Memories />
          <Gallery />
          <Games />
          <Distance />
          <Food />
          <OpenWhen />
          <Letter />
          <Final />
        </>
      )}
      <MusicPlayer chapter={chapter} started={opened} />
    </main>
  );
}
