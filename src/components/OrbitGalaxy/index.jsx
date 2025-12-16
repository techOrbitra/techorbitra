"use client";

import dynamic from "next/dynamic";

const GalaxyCanvas = dynamic(() => import("./GalaxyCanvas"), {
  ssr: false,
});

export default function OrbitGalaxy() {
  return <GalaxyCanvas />;
}
