"use client"

import { Clock } from "lucide-react"

const detections = [
  {
    id: 1,
    location: "Main St & 5th Ave",
    severity: "critical",
    time: "2 minutes ago",
    confidence: 98,
  },
  {
    id: 2,
    location: "Park Avenue - 3rd St",
    severity: "high",
    time: "15 minutes ago",
    confidence: 95,
  },
  {
    id: 3,
    location: "Broadway - 10th St",
    severity: "medium",
    time: "1 hour ago",
    confidence: 87,
  },
  {
    id: 4,
    location: "Oak Street - 2nd Ave",
    severity: "low",
    time: "3 hours ago",
    confidence: 76,
  },
]

export default function RecentDetections({
  filter,
  setFilter,
}: {
  filter: string
  setFilter: (filter: string) => void
}) {
  const filtered = filter === "all" ? detections : detections.filter((d) => d.severity === filter)

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold mb-3">Recent Detections</h3>
        <div className="flex gap-2 flex-wrap">
          {["all", "critical", "high", "medium"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-border max-h-96 overflow-y-auto">
        {filtered.map((detection) => (
          <div key={detection.id} className="p-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-start gap-3">
              <div
                className={`w-2 h-2 rounded-full mt-2 ${
                  detection.severity === "critical"
                    ? "bg-destructive"
                    : detection.severity === "high"
                      ? "bg-secondary"
                      : detection.severity === "medium"
                        ? "bg-primary"
                        : "bg-muted-foreground"
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{detection.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock size={12} className="text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">{detection.time}</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">Confidence: {detection.confidence}%</span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      detection.severity === "critical"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {detection.severity.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
