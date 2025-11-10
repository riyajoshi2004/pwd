"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              🚀 Smart Infrastructure Monitoring
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Detect Potholes Before They Become Problems
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Use AI-powered vision technology to identify road damage in real-time. Report, track, and resolve
              infrastructure issues faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Try Dashboard →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/pothole-detection-road-damage-ai-inspection.jpg"
                alt="Pothole Detection System"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg max-w-xs">
              <p className="text-sm font-medium">99.2% Detection Accuracy</p>
              <p className="text-xs text-muted-foreground">Real-time AI Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
