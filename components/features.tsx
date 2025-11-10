"use client"

import { TrendingUp, MapPin, AlertCircle, BarChart3, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: AlertCircle,
    title: "Real-Time Detection",
    description: "AI-powered cameras detect potholes and road damage instantly as they occur.",
  },
  {
    icon: MapPin,
    title: "Precise Location Tracking",
    description: "GPS coordinates pinpoint exact locations for maintenance crews.",
  },
  {
    icon: TrendingUp,
    title: "Severity Assessment",
    description: "Automatically classify damage levels from minor cracks to major potholes.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into road infrastructure health and trends.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Sub-second analysis with edge computing for rapid response.",
  },
  {
    icon: Shield,
    title: "Public Safety",
    description: "Proactive maintenance prevents accidents and vehicle damage.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage road infrastructure efficiently and keep communities safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
