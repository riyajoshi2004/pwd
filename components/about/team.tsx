"use client"

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Civil engineer with 12 years in infrastructure tech",
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    bio: "ML specialist with expertise in computer vision",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    bio: "Former city transportation director",
  },
  {
    name: "David Kim",
    role: "Lead Data Scientist",
    bio: "10+ years in AI/ML at major tech companies",
  },
]

export default function AboutTeam() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground">Led by experts in infrastructure, AI, and municipal systems</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👤
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
