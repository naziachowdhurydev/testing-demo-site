"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type HeaderNavItem = {
  label: string;
  href: string;
};

export default function SiteHeader({
  brand,
  nav,
}: {
  brand: string;
  nav: HeaderNavItem[];
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--page-bg)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-[1.7rem] leading-none tracking-[-0.06em] text-[var(--text)] sm:text-[2.2rem]"
        >
          {brand}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.58rem] font-medium uppercase tracking-[0.24em] transition-colors ${
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/inquire"
          className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-[0.56rem] font-medium uppercase tracking-[0.22em] text-[var(--text)] transition-colors hover:bg-[var(--accent)] hover:text-white"
        >
          Inquire
        </Link>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-4 pb-3 lg:hidden">
        {nav.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-[0.52rem] font-medium uppercase tracking-[0.2em] ${
                isActive
                  ? "border-[var(--border)] bg-[var(--panel)] text-[var(--text)]"
                  : "border-transparent bg-[var(--panel)]/70 text-[var(--muted)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
