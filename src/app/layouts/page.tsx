import Image from "next/image";
import { getSiteData } from "@/lib/siteData";

export interface ILayoutItem {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

export default function LayoutsPage() {
  const data = getSiteData();
  const page = data.layouts;

  return (
    <main className="min-h-screen bg-(--page-bg) px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-300 space-y-8">
        <section className="rounded-[28px] border border-(--border) bg-(--panel) p-6 shadow-[0_18px_35px_rgba(24,20,18,0.05)]">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-(--muted)">
            {page.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-[2.7rem] leading-[0.9] tracking-[-0.08em] text-(--text) sm:text-[4rem]">
            {page.title}
          </h1>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {page.items.map((item: ILayoutItem) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[26px] border border-(--border) bg-(--panel) p-3 shadow-[0_18px_35px_rgba(24,20,18,0.04)]"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-[18px]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <h2 className="font-serif text-[2rem] leading-none tracking-[-0.06em] text-(--text)">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-(--text)/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
