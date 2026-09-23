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
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="pb-16">
        <div className="container-narrow text-center">
          <h1 className="heading-xl mb-4">From request to results.</h1>
          <p className="body-lg max-w-2xl mx-auto">
            A simple process designed for people who need local capability
            without being physically present.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-12">
            {stages.map((stage) => (
              <div key={stage.number} className="flex gap-6 sm:gap-8">
                <div className="shrink-0">
                  <span className="text-3xl font-serif font-medium text-gold">
                    {stage.number}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-navy mb-2">
                    {stage.title}
                  </h2>
                  <p className="body">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After submission */}
      <section className="section-padding bg-warm-100/60">
        <div className="container-narrow">
          <h2 className="heading-md mb-6">What happens after you submit?</h2>
          <div className="space-y-4 body">
            <p>
              After you submit a request, an Astra representative reviews the
              information you provided. Some requests can move quickly; others
              require additional steps before we can proceed.
            </p>
            <p className="font-medium text-navy">
              Some requests may require:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/75 ml-1">
              <li>Additional information from you</li>
              <li>Third-party coordination</li>
              <li>Quotation approval before work begins</li>
              <li>Payment before execution</li>
              <li>Identity verification of the client or recipient</li>
              <li>Acknowledgment of service limitations</li>
            </ul>
            <p>
              We are transparent about these requirements. If something cannot
              be done, or if it falls outside our scope, we will tell you
              clearly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16">
        <div className="container-narrow text-center">
          <Link href="/request" className="btn-primary">
            Start a Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
