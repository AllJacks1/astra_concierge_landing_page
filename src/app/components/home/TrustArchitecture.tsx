import Link from "next/link";
import { Building2, Users, BadgeCheck, FileText } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Identifiable Company",
    content: (
      <>
        <p className="font-medium text-navy mb-1">Astra Concierge Philippines</p>
        <p className="text-sm text-foreground/70 mb-2">
          A service of Astra Group of Companies, Inc.
        </p>
        <p className="text-sm text-foreground/70">
          Corporate information and legitimate contact channels.
        </p>
      </>
    ),
  },
  {
    icon: Users,
    title: "Identifiable People",
    content: (
      <p className="text-sm text-foreground/70">
        Meet the people responsible for Astra. No anonymous operators.
      </p>
    ),
  },
  {
    icon: BadgeCheck,
    title: "Verified Field Representatives",
    content: (
      <p className="text-sm text-foreground/70">
        Every Astra field representative can have a unique Concierge ID and
        verification profile.
      </p>
    ),
  },
  {
    icon: FileText,
    title: "Clear Policies",
    content: (
      <ul className="text-sm text-foreground/70 space-y-1">
        <li>
          <Link href="/legal/terms" className="hover:text-navy underline-offset-2 hover:underline">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href="/legal/privacy" className="hover:text-navy underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/legal/refund" className="hover:text-navy underline-offset-2 hover:underline">
            Refund & Cancellation Policy
          </Link>
        </li>
        <li>
          <Link href="/legal/limitations" className="hover:text-navy underline-offset-2 hover:underline">
            Service Limitations
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-navy underline-offset-2 hover:underline">
            Contact Information
          </Link>
        </li>
      </ul>
    ),
  },
];

export function TrustArchitecture() {
  return (
    <section id="why-astra" className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="heading-lg mb-4">
            You&apos;re trusting us with something that matters.
          </h2>
          <p className="body-lg">
            When you&apos;re thousands of kilometers away, trust isn&apos;t optional.
            Astra is designed around identity, accountability and transparency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card-elevated">
              <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                <pillar.icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                {pillar.title}
              </h3>
              {pillar.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
