"use client"

import { BarChart3, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: AlertTriangle,
    label: "Critical Issues",
    value: "24",
    trend: "+3 this week",
    color: "text-destructive",
  },
  {
    icon: TrendingUp,
    label: "Total Detections",
    value: "1,284",
    trend: "+12% from last month",
    color: "text-secondary",
  },
  {
    icon: CheckCircle,
    label: "Resolved",
    value: "952",
    trend: "74% resolution rate",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: BarChart3,
    label: "Detection Accuracy",
    value: "99.2%",
    trend: "ML Model v2.1",
    color: "text-primary",
  },
]

export default function StatsOverview() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
                <p className="text-xs text-muted-foreground mt-2">{stat.trend}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${stat.color}`}>
                <Icon size={20} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
