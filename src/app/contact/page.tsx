export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--ink)] md:text-6xl">
          Get in touch.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--mute)]">
          Feel free to reach out by phone or email for opportunities, projects,
          or general inquiries.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a
            href="tel:3018415069"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Phone
            </p>
            <p className="mt-3 text-2xl font-medium text-[var(--ink)]">
              (301) 841-5069
            </p>
            <p className="mt-2 text-sm text-[var(--mute)]">Tap to call</p>
          </a>

          <a
            href="mailto:tommyh.r2019@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Email
            </p>
            <p className="mt-3 break-all text-2xl font-medium text-[var(--ink)]">
              tommyh.r2019@gmail.com
            </p>
            <p className="mt-2 text-sm text-[var(--mute)]">Tap to email</p>
          </a>
        </div>
      </div>
    </main>
  );
}
