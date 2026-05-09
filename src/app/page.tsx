export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold tracking-tight">Origin Risk</div>
        <a className="rounded-full border border-black px-4 py-2 text-sm" href="mailto:hello@originrisk.ai">
          Contact
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-600">
          Natural Asset Intelligence
        </p>

        <h1 className="max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          Foundation models for natural asset risk.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-700">
          Origin Risk classifies long-term productivity, resilience, and impairment risk across timber, agriculture, and water resources.
        </p>
      </section>
    </main>
  );
}
