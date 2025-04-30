"use client"

import WaveBackground from "@/components/wave-background"

export default function Underdevelopment() {
  return (
    <>
      {/* Hero Section with Wave Background */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <WaveBackground />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">Under Development</h1>
        </div>
      </section>

      {/* Who We Are Section */}

    </>
  )
}

