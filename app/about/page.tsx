"use client"

import Navigation from "@/components/navigation"
import AboutHero from "@/components/about/hero"
import AboutMission from "@/components/about/mission"
import AboutTeam from "@/components/about/team"
import AboutCTA from "@/components/about/cta"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutCTA />
      <Footer />
    </main>
  )
}
