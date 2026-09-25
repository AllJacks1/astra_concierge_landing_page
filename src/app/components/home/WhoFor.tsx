import { Plane, Briefcase, Building, Home, Users } from "lucide-react";

const audiences = [
  {
    icon: Plane,
    title: "Visiting the Philippines",
    description:
      "You need a reliable person on the ground for logistics, appointments, or situations that can’t wait until you land.",
  },
  {
    icon: Briefcase,
    title: "Running things from abroad",
    description:
      "You need local execution without hiring staff, opening an office, or relying on someone you barely know.",
  },
  {
    icon: Building,
    title: "Buying or managing property",
    description:
      "You’re considering a purchase, handling paperwork, or need eyes on a unit — without flying in for every step.",
  },
  {
    icon: Home,
    title: "Moving or settling in",
    description:
      "You’re preparing to relocate, stay longer, or establish yourself and want the early steps handled properly.",
  },
  {
    icon: Users,
    title: "Looking after family from overseas",
    description:
      "Something needs coordinating locally for parents, relatives, or a household — and trust matters more than convenience.",
  },
];

export function WhoFor() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="eyebrow mb-4">Who this is for</p>
          <h2 className="heading-lg mb-4">
            Built for people who can&apos;t be here — but still need things done right.
          </h2>
          <p className="body-lg text-foreground/70">
            Different situations. Same requirement: someone local you can
            actually rely on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-warm-200 bg-white p-6 transition-all duration-300 hover:border-navy/15 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <item.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold text-navy leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground/65">
                {item.description}
              </p>
            </div>
          ))}

          {/* intentional empty / CTA cell on large screens */}
          <div className="hidden lg:flex flex-col justify-between rounded-2xl border border-dashed border-warm-300 bg-warm-50/50 p-6">
            <div>
              <p className="text-sm font-medium text-navy mb-2">
                Somewhere in between?
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                If your situation doesn&apos;t fit neatly above, that&apos;s
                fine. Most requests don&apos;t.
              </p>
            </div>
            <p className="text-xs text-navy/50 mt-6">
              Tell us what you need — we&apos;ll say if we can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}