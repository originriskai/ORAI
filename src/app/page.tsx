import RiskGlobe from "@/components/RiskGlobe";
import { assetClasses, dimensions } from "@/lib/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#111]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-xl font-semibold tracking-tight">
          Origin Risk
        </a>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="/platform">Platform</a>
          <a href="/timber">Timber</a>
          <a href="/agriculture">Agriculture</a>
          <a href="/water">Water</a>
          <a href="/api">API</a>
        </div>

        <a
          className="rounded-full border border-black px-4 py-2 text-sm"
          href="mailto:hello@originrisk.ai"
        >
          Contact
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-24 pt-16 lg:grid-cols-[1fr_1fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-600">
            Natural Asset Intelligence
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
            Foundation models for natural asset risk.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-700">
            Origin Risk classifies long-term productivity, resilience, and impairment
            risk across timber, agriculture, and water resources.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/api" className="rounded-full bg-black px-6 py-3 text-white">
              Explore the API
            </a>

            <a href="/platform" className="rounded-full border border-black px-6 py-3">
              View platform
            </a>
          </div>
        </div>

        <div className="relative flex min-w-0 items-center justify-center">
          <RiskGlobe />
        </div>
      </section>

      <section className="bg-[#111] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <h2 className="text-4xl font-semibold">
            A classification engine for real assets under environmental and market stress.
          </h2>

          <p className="text-lg leading-8 text-neutral-300">
            We fuse satellite time series, climate records, operational signals,
            insurance behavior, market intelligence, and local ground evidence into a
            unified asset-state model.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-4xl font-semibold">Three core asset classes</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {assetClasses.map((item) => (
            <a
              key={item.slug}
              href={`/${item.slug}`}
              className="rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm transition hover:bg-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
              <p className="leading-7 text-neutral-700">{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-6 text-4xl font-semibold">
          Eight-dimensional classification
        </h2>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-neutral-700">
          Origin Risk does not average weak and strong signals into a generic score.
          The model identifies critical failure points across non-compensatory dimensions.
        </p>

        <div className="grid gap-4 md:grid-cols-4">
          {dimensions.map((dimension, i) => (
            <div
              key={dimension}
              className="rounded-2xl border border-black/10 bg-white/70 p-5"
            >
              <div className="mb-4 text-sm text-neutral-500">0{i + 1}</div>
              <div className="font-medium">{dimension}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
