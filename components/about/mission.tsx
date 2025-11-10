"use client"

import { Users, Target, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make road infrastructure maintenance faster, safer, and more cost-effective through cutting-edge AI technology.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description:
      "A world where infrastructure damage is detected and resolved before it becomes a public safety issue.",
  },
  {
    icon: Zap,
    title: "Our Promise",
    description: "Deliver accurate, reliable detection systems that municipalities can trust with their road networks.",
  },
]

export default function AboutMission() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why RoadGuard?</h2>
            <ul className="space-y-4">
              {[
                "AI accuracy that meets municipal standards",
                "Real-time detection and alerting",
                "Comprehensive analytics and reporting",
                "Cost reduction through proactive maintenance",
                "Community safety prioritized",
                "Easy integration with existing systems",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
            <img src="/team-working-on-infrastructure-project.jpg" alt="Our Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
