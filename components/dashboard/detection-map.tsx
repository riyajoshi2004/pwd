"use client"

import { useState } from "react"
import { MapPin, AlertCircle } from "lucide-react"

const mockDetections = [
  { id: 1, name: "Main Street - 5th Ave", severity: "critical", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "Park Avenue - 3rd St", severity: "high", lat: 40.715, lng: -74.005 },
  { id: 3, name: "Broadway - 10th St", severity: "medium", lat: 40.71, lng: -74.008 },
]

export default function DetectionMap() {
  const [selectedPoint, setSelectedPoint] = useState<(typeof mockDetections)[0] | null>(null)

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="relative w-full h-96 bg-muted flex items-center justify-center">
        <img src="/road-map-with-detection-points-overlaid.jpg" alt="Detection Map" className="w-full h-full object-cover" />
        {/* Map points overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-12">
          {mockDetections.map((detection) => (
            <button
              key={detection.id}
              onClick={() => setSelectedPoint(detection)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                detection.severity === "critical"
                  ? "bg-destructive/80 text-destructive-foreground"
                  : detection.severity === "high"
                    ? "bg-secondary/80 text-secondary-foreground"
                    : "bg-primary/60 text-primary-foreground"
              } ${selectedPoint?.id === detection.id ? "ring-2 ring-foreground scale-125" : ""}`}
            >
              <AlertCircle size={16} />
            </button>
          ))}
        </div>
      </div>

      {/* Info Panel */}
      {selectedPoint ? (
        <div className="p-4 border-t border-border">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold">{selectedPoint.name}</h3>
              <p className="text-sm text-muted-foreground">
                Severity:{" "}
                <span
                  className={`font-medium ${
                    selectedPoint.severity === "critical" ? "text-destructive" : "text-secondary"
                  }`}
                >
                  {selectedPoint.severity.toUpperCase()}
                </span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Coordinates: {selectedPoint.lat}, {selectedPoint.lng}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 border-t border-border text-center text-sm text-muted-foreground">
          Click on a marker to view details
        </div>
      )}
    </div>
  )
}
