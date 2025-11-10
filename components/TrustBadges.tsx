import { ShieldCheck, Star, Clock } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      text: "Licensed & Insured",
    },
    {
      icon: Star,
      text: "5-Star Rated",
    },
    {
      icon: Clock,
      text: "Bist's On-Time Guarantee",
    },
  ]

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="rounded-full bg-primary p-4 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {badge.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
