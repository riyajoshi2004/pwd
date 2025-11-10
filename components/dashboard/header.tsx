"use client"

import { Button } from "@/components/ui/button"
import { Download, Settings } from "lucide-react"

export default function DashboardHeader() {
  return (
    <div className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Detection Dashboard</h1>
            <p className="text-muted-foreground mt-1">Real-time road damage monitoring and analysis</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Settings size={16} />
              <span className="hidden sm:inline">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
