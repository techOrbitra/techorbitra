"use client";

import Hero from "@/components/Hero";
import WhatWeAreBuilding from "@/components/WhatWeAreBuilding";
import HowItWorks from "@/components/HowItWorks";

import FounderSection from "@/components/FounderSection";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className=" text-gray-100 min-h-screen    ">
      <Hero />
      <WhatWeAreBuilding />
      <HowItWorks />

      <FounderSection />
      <Blog />
    </main>
  );
}
