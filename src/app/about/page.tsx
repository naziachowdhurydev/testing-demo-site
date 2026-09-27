import Image from "next/image";
import { getSiteData } from "@/lib/siteData";

export default function AboutPage() {
  const data = getSiteData().about;

  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text)]">
      <div className="mx-auto max-w-[1320px] px-3 py-5 sm:px-6 lg:px-8">
        <section className="overflow-hidden bg-[#c8b08f] px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pb-8">
          <div className="grid items-end gap-6 lg:grid-cols-[0.7fr_1.3fr_0.7fr]">
            <div className="max-w-[170px] text-[0.52rem] font-medium uppercase tracking-[0.25em] text-white/80 sm:text-[0.64rem]">
              {data.introBadge}
            </div>

            <div className="relative mx-auto w-full max-w-[780px]">
              <div className="pointer-events-none absolute -left-5 top-10 hidden font-serif text-[3.2rem] leading-none tracking-[-0.08em] text-white/75 sm:block">
                Meet
              </div>
              <div className="pointer-events-none absolute -right-4 bottom-10 hidden font-serif text-[3.3rem] leading-none tracking-[-0.08em] text-white/75 sm:block">
                {data.heroName}
              </div>

              <div className="relative overflow-hidden rounded-[14px] border border-white/30 bg-white/10 shadow-[0_25px_50px_rgba(34,28,20,0.18)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={data.heroImage}
                    alt={data.heroAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 780px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-end gap-3 text-left text-[var(--text)] lg:items-end lg:text-right">
              <p className="font-serif text-[2.5rem] leading-none tracking-[-0.08em] text-[var(--text)] sm:text-[3.2rem]">
                {data.heroName}
              </p>
              <p className="max-w-[200px] text-[0.5rem] uppercase tracking-[0.2em] text-[var(--text)]/85 sm:text-[0.7rem]">
                {data.heroCaption}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--page-bg)] px-4 py-9 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="border-r border-[var(--border)] pr-0 lg:pr-10">
              <h2 className="max-w-[450px] font-serif text-[2.5rem] leading-[0.92] tracking-[-0.08em] text-[var(--text)] sm:text-[4rem]">
                {data.storyHeading}
              </h2>

              <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
                {data.storySubheading}
              </p>

              <div className="mt-6 space-y-5 text-[0.94rem] leading-7 text-[var(--text)]/80">
                {data.storyParagraphs.map((paragraph: string) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-full border-[10px] border-white/70 bg-white/60 shadow-[0_25px_60px_rgba(39,32,28,0.12)]">
                <div className="relative aspect-square w-full">
                  <Image
                    src={data.portraitImage}
                    alt={data.portraitAlt}
                    fill
                    sizes="(max-width: 768px) 85vw, 520px"
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="mt-6 max-w-[340px] text-center font-serif text-[1.8rem] italic leading-none tracking-[-0.04em] text-[var(--text)]/80 sm:text-[2.2rem]">
                {data.signature}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--page-bg)] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="order-2 overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--panel)] p-2 shadow-[0_18px_35px_rgba(30,25,20,0.06)] lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                <Image
                  src={data.galleryImage}
                  alt={data.galleryAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2">
              <h3 className="max-w-[560px] font-serif text-[2.5rem] leading-[0.92] tracking-[-0.08em] text-[var(--text)] sm:text-[3.2rem] lg:text-[4rem]">
                {data.lowerTitle}
              </h3>

              <p className="mt-5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
                {data.lowerDescription}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
