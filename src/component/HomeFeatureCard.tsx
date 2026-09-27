import Image from "next/image";
import Link from "next/link";

export type FeatureCardData = {
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export default function HomeFeatureCard({ card }: { card: FeatureCardData }) {
  return (
    <section className="mt-10">
      <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--panel)] p-3 shadow-[0_18px_40px_rgba(25,22,19,0.06)] sm:p-5 lg:p-6">
        <div className="grid items-center gap-5 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="order-2 space-y-4 lg:order-1 lg:pr-4">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[var(--muted)] sm:text-[0.66rem]">
              {card.eyebrow}
            </p>

            <h2 className="max-w-[11ch] font-serif text-[2.6rem] leading-[0.88] tracking-[-0.07em] text-[var(--text)] sm:text-[3.4rem] lg:text-[4.2rem]">
              {card.title}
            </h2>

            <p className="max-w-[42ch] text-sm leading-7 text-[var(--text)]/75 sm:text-base">
              {card.description}
            </p>

            <Link
              href={card.ctaHref}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--page-bg)] px-4 py-2 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[var(--text)] transition-colors hover:bg-[var(--accent)] hover:text-white"
            >
              {card.ctaText}
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--page-bg)]">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
