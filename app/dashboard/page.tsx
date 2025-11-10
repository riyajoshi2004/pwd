"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import DashboardHeader from "@/components/dashboard/header"
import DetectionMap from "@/components/dashboard/detection-map"
import RecentDetections from "@/components/dashboard/recent-detections"
import StatsOverview from "@/components/dashboard/stats-overview"

export default function DashboardPage() {
  const [filter, setFilter] = useState("all")

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DashboardHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsOverview />
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <DetectionMap />
          </div>
          <div>
            <RecentDetections filter={filter} setFilter={setFilter} />
          </div>
        </div>
      </div>
    </main>
  )
}
