import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Tell Us",
    description:
      "Describe what you need, where you need it and when. You don't need to select a rigid service category—just explain the outcome you're looking for.",
  },
  {
    number: "02",
    title: "Clarify",
    description:
      "An Astra representative reviews your request and contacts you if additional information is needed. We ask clarifying questions so we can scope accurately.",
  },
  {
    number: "03",
    title: "Scope",
    description:
      "We'll explain what's possible, what is required, any limitations, and the expected cost. You'll receive a clear quotation before anything proceeds.",
  },
  {
    number: "04",
    title: "Confirm",
    description:
      "Once the scope and quotation are agreed upon, you confirm and we proceed. Payment arrangements, if required, are clarified at this stage.",
  },
  {
    number: "05",
    title: "Coordinate",
    description:
      "Your request is assigned to the appropriate Astra team member or verified local representative. We manage coordination on the ground.",
  },
  {
    number: "06",
    title: "Complete",
    description:
      "We keep you informed throughout the process and confirm completion. You'll know when the work is done.",
  },
];

export const metadata = {
  title: "How It Works",
  description:
    "From request to results—how Astra Concierge Philippines coordinates local assistance.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <section className="pb-20">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-5">
            The process
          </p>
          <h1 className="heading-xl mb-5">From request to results.</h1>
          <p className="body-lg max-w-2xl mx-auto text-foreground/80">
            A clear, managed sequence designed for people who need local
            capability without being physically present.
          </p>
        </div>
      </section>

      {/* Process timeline */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical spine */}
            <div
              className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-amber-400/80 via-amber-400/40 to-amber-400/20 sm:left-[1.4rem]"
              aria-hidden
            />

            <div className="space-y-0">
              {stages.map((stage, index) => (
                <div
                  key={stage.number}
                  className="relative flex gap-8 sm:gap-10 pb-14 last:pb-0"
                >
                  {/* Marker */}
                  <div className="relative z-10 shrink-0">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-amber-400/40 bg-background shadow-sm">
                      <span className="font-serif text-base sm:text-lg font-medium text-amber-400 leading-none">
                        {stage.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1.5 sm:pt-2.5 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold text-navy mb-2.5 tracking-tight">
                      {stage.title}
                    </h2>
                    <p className="body text-foreground/80 leading-relaxed max-w-xl">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* After submission */}
      <section className="section-padding bg-warm-100/70 border-y border-warm-200/60">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-4">
              After you submit
            </p>
            <h2 className="heading-md mb-6 text-navy">
              What happens next
            </h2>

            <div className="space-y-5 body text-foreground/85">
              <p>
                An Astra representative reviews the information you provided.
                Some requests can move quickly; others require additional steps
                before we can proceed.
              </p>

              <div className="rounded-lg border border-navy/10 bg-background/80 p-6 sm:p-7">
                <p className="font-medium text-navy mb-4">
                  Some requests may require:
                </p>
                <ul className="space-y-3">
                  {[
                    "Additional information from you",
                    "Third-party coordination",
                    "Quotation approval before work begins",
                    "Payment before execution",
                    "Identity verification of the client or recipient",
                    "Acknowledgment of service limitations",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-foreground/80">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                We are transparent about these requirements. If something cannot
                be done, or if it falls outside our scope, we will tell you
                clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-20">
        <div className="container-narrow text-center">
          <h2 className="heading-md text-navy mb-3">Ready when you are.</h2>
          <p className="body text-foreground/75 mb-8 max-w-md mx-auto">
            Start with a clear description of what you need. We’ll take it from
            there.
          </p>
          <Link href="/request" className="btn-primary rounded-xl">
            Start a Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}