"use client"

import Link from "next/link"

export default function AboutCTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 bg-card rounded-2xl p-8 sm:p-12 border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold">Want to Help Your Community?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together to build safer, better-maintained roads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Start Detection
            </Link>
            <a
              href="mailto:contact@roadguard.io"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
