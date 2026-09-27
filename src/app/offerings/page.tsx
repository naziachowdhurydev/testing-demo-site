import Image from "next/image";
import { getSiteData } from "@/lib/siteData";

export interface IService {
  badge: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

export default function OfferingsPage() {
  const data = getSiteData();
  const page = data.offerings;

  return (
    <main className="min-h-screen bg-(--page-bg) px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-300 space-y-8">
        <section className="rounded-[28px] border border-(--border) bg-(--panel) p-5 shadow-[0_18px_35px_rgba(24,20,18,0.05)] sm:p-7">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-(--muted)">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-[2.7rem] leading-[0.9] tracking-[-0.08em] text-(--text) sm:text-[4rem]">
            {page.title}
          </h1>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {page.services.map((item: IService) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border border-(--border) bg-(--panel) shadow-[0_18px_35px_rgba(24,20,18,0.04)]"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-(--muted)">
                  {item.badge}
                </p>
                <h2 className="font-serif text-[2rem] leading-none tracking-[-0.06em] text-(--text)">
                  {item.title}
                </h2>
                <p className="text-sm leading-7 text-(--text)/75">
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
