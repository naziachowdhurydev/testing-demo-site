import { getSiteData } from "@/lib/siteData";
export interface IField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}
export default function InquirePage() {
  const data = getSiteData();
  const page = data.inquire;

  return (
    <main className="min-h-screen bg-(--page-bg) px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-245 rounded-[28px] border border-(--border) bg-(--panel) p-6 shadow-[0_22px_45px_rgba(24,20,18,0.05)] sm:p-8">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-(--muted)">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-[2.7rem] leading-[0.9] tracking-[-0.08em] text-(--text) sm:text-[4rem]">
          {page.title}
        </h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 text-sm leading-7 text-(--text)/75">
            <p>{page.description}</p>
            <div className="rounded-[20px] border border-(--border) bg-(--page-bg) p-4">
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.24em] text-(--muted)">
                {page.detailsLabel}
              </p>
              <p className="mt-2 text-base text-(--text)">{page.email}</p>
            </div>
          </div>

          <form className="space-y-4">
            {page.fields.map((field: IField) => (
              <div key={field.name}>
                <label className="mb-2 block text-[0.55rem] font-medium uppercase tracking-[0.24em] text-(--muted)">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-(--border) bg-(--page-bg) px-4 py-3 text-sm text-(--text) outline-none ring-0 placeholder:text-(--muted) focus:border-(--accent)"
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full rounded-2xl border border-(--border) bg-(--page-bg) px-4 py-3 text-sm text-(--text) outline-none ring-0 placeholder:text-(--muted) focus:border-(--accent)"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}

            <button
              type="button"
              className="btn mt-2 border-none bg-(--accent) px-6 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-white hover:bg-(--accent)/90"
            >
              {page.buttonText}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
