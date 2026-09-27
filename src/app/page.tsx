import fs from "fs";
import path from "path";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
};

type SiteData = {
  name: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  photographyNote: string;
  storyTitle: string;
  storyImage: string;
  storyAlt: string;
  storyDescription: string;
  journeyPrompt: string;
  gallery: GalleryItem[];
};

function getHomeData(): SiteData {
  const dataPath = path.join(process.cwd(), "public", "data.json");
  const file = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(file) as SiteData;
}

export default function Home() {
  const data = getHomeData();

  return (
    <main className="min-h-screen bg-[var(--page-bg)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <header className="mb-8 text-center">
          <h1 className="font-serif text-[2.8rem] tracking-[-0.06em] text-[var(--text)] sm:text-[4.1rem]">
            {data.name}
          </h1>
          <p className="mt-3 text-[0.62rem] font-medium uppercase tracking-[0.38em] text-[var(--muted)] sm:text-[0.72rem]">
            {data.subtitle}
          </p>
        </header>

        <section className="overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--panel)] shadow-[0_24px_50px_rgba(24,20,18,0.08)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={data.heroImage}
              alt={data.heroAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1080px"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mt-5 rounded-[18px] border border-[var(--border)] bg-[var(--panel)] px-5 py-4 text-center shadow-[0_10px_25px_rgba(24,20,18,0.04)]">
          <p className="text-[0.64rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)] sm:text-[0.72rem]">
            {data.photographyNote}
          </p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.45fr]">
          <div className="rounded-[18px] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_10px_25px_rgba(24,20,18,0.04)] sm:p-8">
            <div className="flex h-full flex-col justify-center">
              <h2 className="max-w-[220px] font-serif text-[2.2rem] leading-[1.05] tracking-[-0.06em] text-[var(--text)] sm:text-[2.6rem]">
                {data.storyTitle}
              </h2>
              <div className="mt-6">
                <button className="btn btn-sm h-10 rounded-none border-none bg-[var(--accent)] px-5 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-white shadow-none hover:bg-[var(--accent)]/90">
                  Book a session
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--accent-soft)] shadow-[0_18px_35px_rgba(24,20,18,0.08)]">
            <div className="grid gap-5 p-3 sm:grid-cols-[0.9fr_1.1fr] sm:p-5">
              <div className="relative min-h-[220px] overflow-hidden rounded-[14px] border border-white/30 bg-white/20">
                <Image
                  src={data.storyImage}
                  alt={data.storyAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center px-2 py-3 sm:px-4">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                  Family storytelling
                </p>
                <p className="mt-4 max-w-[26ch] text-base leading-7 text-[var(--text)]/80">
                  {data.storyDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 text-center">
          <p className="font-serif text-[1.25rem] italic text-[var(--text)]/80 sm:text-[1.5rem]">
            {data.journeyPrompt}
          </p>
        </div>

        <section className="mt-8 grid gap-5 sm:grid-cols-2">
          {data.gallery.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--panel)] p-3 shadow-[0_12px_22px_rgba(24,20,18,0.05)]"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[12px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
