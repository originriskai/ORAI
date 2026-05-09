export default function Api() {
  return (
    <main className="min-h-screen bg-[#111] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-neutral-300">← Origin Risk</a>
        <h1 className="mt-12 text-6xl font-semibold tracking-tight">API</h1>
        <p className="mt-8 text-xl leading-8 text-neutral-300">
          Query an asset, polygon, watershed, or portfolio. Receive asset state,
          impairment probability, dominant drivers, breakpoints, confidence, and comparable context.
        </p>
        <pre className="mt-10 overflow-x-auto rounded-3xl bg-black p-8 text-sm">
{`POST /v1/classify

{
  "asset_class": "timber | agriculture | water",
  "geometry": "GeoJSON",
  "start": "1982-01",
  "end": "2026-05",
  "outputs": [
    "asset_state",
    "impairment_probability",
    "drivers",
    "breakpoints",
    "confidence"
  ]
}`}
        </pre>
      </div>
    </main>
  );
}
