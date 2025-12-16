"use client";

import dynamic from "next/dynamic";

const PlanetCanvas = dynamic(() => import("./PlanetCanvas"), {
  ssr: false,
});

export default function HologramPlanet() {
  return <PlanetCanvas />;
}
