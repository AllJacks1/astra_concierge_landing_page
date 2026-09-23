import { Plane, Briefcase, Building, Home, Users } from "lucide-react";

const audiences = [
  {
    icon: Plane,
    title: "International Travelers",
    description:
      "You're visiting the Philippines and need reliable local assistance.",
  },
  {
    icon: Briefcase,
    title: "Business Owners & Executives",
    description:
      "You need someone on the ground without maintaining a local team.",
  },
  {
    icon: Building,
    title: "Property Clients",
    description:
      "You're considering or managing property from somewhere else.",
  },
  {
    icon: Home,
    title: "People Relocating",
    description:
      "You're preparing to move, stay or establish yourself in the Philippines.",
  },
  {
    icon: Users,
    title: "Families Abroad",
    description:
      "You need someone trustworthy to coordinate something locally for your family.",
  },
];

export function WhoFor() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="heading-lg mb-4">
            Built for people who need local capability.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div key={item.title} className="card">
              <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
