import Link from "next/link";
import { Building2, Users, BadgeCheck, FileText } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "A real company, not a middleman",
    content: (
      <>
        <p className="font-medium text-navy mb-1">
          Astra Concierge Philippines
        </p>
        <p className="text-sm text-foreground/70 mb-2">
          A service of Astra Group of Companies, Inc.
        </p>
        <p className="text-sm text-foreground/70">
          Registered entity. Real address. Direct lines. No shell companies, no
          anonymous operators hiding behind a chat window.
        </p>
      </>
    ),
  },
  {
    icon: Users,
    title: "Named people you can reach",
    content: (
      <p className="text-sm text-foreground/70">
        The people running Astra have names, roles, and accountability. You will
        never be passed between faceless agents when something important is at
        stake.
      </p>
    ),
  },
  {
    icon: BadgeCheck,
    title: "Field reps you can verify",
    content: (
      <p className="text-sm text-foreground/70">
        Every Astra representative carries a unique Concierge ID and a public
        verification profile. If someone claims to be from us, you can check in
        seconds.
      </p>
    ),
  },
  {
    icon: FileText,
    title: "Policies written in plain language",
    content: (
      <ul className="text-sm text-foreground/70 space-y-1">
        <li>
          <Link
            href="/legal/terms"
            className="hover:text-navy underline-offset-2 hover:underline"
          >
            Terms of Service
          </Link>
        </li>
        <li>
          <Link
            href="/legal/privacy"
            className="hover:text-navy underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/legal/refund"
            className="hover:text-navy underline-offset-2 hover:underline"
          >
            Refund & Cancellation
          </Link>
        </li>
        <li>
          <Link
            href="/legal/limitations"
            className="hover:text-navy underline-offset-2 hover:underline"
          >
            What we can and cannot do
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-navy underline-offset-2 hover:underline"
          >
            How to reach us
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
            You&apos;re trusting us with things that actually matter.
          </h2>
          <p className="body-lg">
            When you&apos;re thousands of kilometers away, vague promises and
            corporate jargon don&apos;t help. Astra is built so you always know
            who is responsible, who is on the ground, and what the rules are.
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
