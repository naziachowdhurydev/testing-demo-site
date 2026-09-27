import Image from "next/image";
import { getSiteData } from "@/lib/siteData";

export interface ITimelineItem {
  year: string;
  title: string;
  text: string;
}

export default function ExperiencePage() {
  const data = getSiteData();
  const page = data.experience;

  interface ITimelineItem {
    year: string;
    title: string;
    text: string;
  }

  return (
    <main className="min-h-screen bg-(--page-bg) px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-300 space-y-8">
        <section className="overflow-hidden rounded-[28px] border border-(--border) bg-(--panel) p-4 shadow-[0_20px_45px_rgba(24,20,18,0.05)] sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-(--muted)">
                {page.eyebrow}
              </p>
              <h1 className="font-serif text-[2.8rem] leading-[0.88] tracking-[-0.08em] text-(--text) sm:text-[4.2rem]">
                {page.title}
              </h1>
              <p className="max-w-[38ch] text-base leading-7 text-(--text)/75">
                {page.description}
              </p>
            </div>

            <div className="relative aspect-5/4 overflow-hidden rounded-[22px] border border-(--border)">
              <Image
                src={page.image}
                alt={page.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {page.timeline.map((item: ITimelineItem) => (
            <article
              key={item.year}
              className="rounded-[22px] border border-(--border) bg-(--panel) p-5 shadow-[0_18px_32px_rgba(24,20,18,0.04)]"
            >
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.24em] text-(--muted)">
                {item.year}
              </p>
              <h2 className="mt-3 font-serif text-[2rem] leading-none tracking-tighter text-(--text)">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-(--text)/75">
                {item.text}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
