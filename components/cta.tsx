"use client"

import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 bg-card rounded-2xl p-8 sm:p-12 border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Roads?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join municipalities and transportation departments using RoadGuard to maintain safer, better infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Access Dashboard
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
