"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] w-full rounded-[2.5rem] bg-black/5 md:h-[680px]" />
  ),
});

type RiskPoint = {
  lat: number;
  lng: number;
  label: string;
  asset: string;
  risk: number;
};

function riskColor(risk: number) {
  if (risk >= 0.82) return "#ef4444";
  if (risk >= 0.66) return "#f97316";
  if (risk >= 0.45) return "#facc15";
  return "#22c55e";
}

export default function RiskGlobe() {
  const globeRef = useRef<any>(null);
  const [hovered, setHovered] = useState<RiskPoint | null>(null);

  const points = useMemo<RiskPoint[]>(
    () => [
      { lat: -3.4, lng: -60.0, label: "Amazon Basin", asset: "Timber", risk: 0.91 },
      { lat: -8.2, lng: -55.1, label: "Brazilian Cerrado", asset: "Agriculture", risk: 0.78 },
      { lat: 37.1, lng: -120.2, label: "California Central Valley", asset: "Agriculture", risk: 0.83 },
      { lat: 36.7, lng: -119.4, label: "San Joaquin Valley", asset: "Water", risk: 0.88 },
      { lat: 43.6, lng: -116.2, label: "Snake River Plain", asset: "Water", risk: 0.62 },
      { lat: 49.3, lng: -123.1, label: "British Columbia Coast", asset: "Timber", risk: 0.54 },
      { lat: 31.8, lng: -106.5, label: "Rio Grande Basin", asset: "Water", risk: 0.81 },
      { lat: 19.4, lng: -99.1, label: "Central Mexico", asset: "Agriculture", risk: 0.69 },

      { lat: 40.4, lng: -3.7, label: "Iberian Plateau", asset: "Agriculture", risk: 0.71 },
      { lat: 45.1, lng: 7.7, label: "Po Valley", asset: "Agriculture", risk: 0.67 },
      { lat: 48.8, lng: 2.3, label: "Northern France", asset: "Agriculture", risk: 0.41 },
      { lat: 60.2, lng: 24.9, label: "Nordic Forestry Belt", asset: "Timber", risk: 0.37 },
      { lat: 45.8, lng: 24.9, label: "Carpathian Forestry", asset: "Timber", risk: 0.52 },

      { lat: 30.0, lng: 31.2, label: "Nile Corridor", asset: "Water", risk: 0.82 },
      { lat: 6.5, lng: 12.4, label: "Congo Basin", asset: "Timber", risk: 0.64 },
      { lat: -1.3, lng: 36.8, label: "East African Rift", asset: "Water", risk: 0.72 },
      { lat: -26.2, lng: 28.0, label: "South African Highveld", asset: "Agriculture", risk: 0.66 },
      { lat: 13.5, lng: 2.1, label: "Sahel Cropland Belt", asset: "Agriculture", risk: 0.86 },

      { lat: 22.5, lng: 78.9, label: "Central India", asset: "Agriculture", risk: 0.79 },
      { lat: 28.6, lng: 77.2, label: "Indo-Gangetic Plain", asset: "Agriculture", risk: 0.84 },
      { lat: 23.8, lng: 90.4, label: "Ganges Delta", asset: "Water", risk: 0.76 },
      { lat: 34.3, lng: 108.9, label: "North China Plain", asset: "Agriculture", risk: 0.82 },
      { lat: 13.7, lng: 100.5, label: "Chao Phraya Basin", asset: "Water", risk: 0.68 },
      { lat: -2.5, lng: 118.0, label: "Indonesian Forest Belt", asset: "Timber", risk: 0.77 },

      { lat: -25.2, lng: 133.7, label: "Australia Interior", asset: "Water", risk: 0.88 },
      { lat: -34.9, lng: 138.6, label: "Murray-Darling Basin", asset: "Water", risk: 0.81 },

      { lat: -34.6, lng: -58.4, label: "La Plata Basin", asset: "Agriculture", risk: 0.58 },
      { lat: -32.9, lng: -68.8, label: "Mendoza Irrigation Belt", asset: "Water", risk: 0.73 },
      { lat: -13.5, lng: -72.0, label: "Andean Watersheds", asset: "Water", risk: 0.69 },
      { lat: -39.8, lng: -73.2, label: "Chile Forestry Belt", asset: "Timber", risk: 0.55 },
    ],
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!globeRef.current) return;

      const controls = globeRef.current.controls();

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.85;
      controls.enableZoom = true;
      controls.enablePan = false;
      controls.minDistance = 250;
      controls.maxDistance = 850;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.update();

      globeRef.current.pointOfView(
        { lat: 15, lng: -20, altitude: 1.85 },
        0
      );
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-[520px] w-full items-center justify-center overflow-hidden md:h-[680px]">
      <div className="flex items-center justify-center">
        <Globe
          ref={globeRef}
          width={760}
          height={700}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={(d: object) => 0.05 + (d as RiskPoint).risk * 0.24}
          pointRadius={(d: object) => 0.24 + (d as RiskPoint).risk * 0.36}
          pointResolution={18}
          pointColor={(d: object) => riskColor((d as RiskPoint).risk)}
          pointsMerge={false}
          onPointHover={(p: object | null) => setHovered(p as RiskPoint | null)}
          enablePointerInteraction={true}
          atmosphereColor="#7fb7ff"
          atmosphereAltitude={0.18}
        />
      </div>

      {hovered && (
        <div className="pointer-events-none absolute right-4 top-4 rounded-2xl border border-black/10 bg-white/90 p-4 text-sm shadow-xl backdrop-blur">
          <div className="font-semibold">{hovered.label}</div>
          <div className="mt-1 text-neutral-600">{hovered.asset}</div>
          <div className="mt-2 text-neutral-800">
            Signal intensity: {Math.round(hovered.risk * 100)}%
          </div>
        </div>
      )}
    </div>
  );
}
