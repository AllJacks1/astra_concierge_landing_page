import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us",
    description: "Describe what you need, where you need it and when.",
  },
  {
    number: "02",
    title: "We Clarify",
    description:
      "An Astra representative reviews your request and contacts you if additional information is needed.",
  },
  {
    number: "03",
    title: "We Scope",
    description:
      "We'll explain what's possible, what is required and the expected cost.",
  },
  {
    number: "04",
    title: "You Confirm",
    description:
      "Once the scope and quotation are agreed upon, we proceed.",
  },
  {
    number: "05",
    title: "Astra Coordinates",
    description:
      "Your request is assigned to the appropriate Astra team member or verified local representative.",
  },
  {
    number: "06",
    title: "You Get Results",
    description:
      "We keep you informed throughout the process and confirm completion.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="heading-lg mb-4">From request to results.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <div className="shrink-0">
                <span className="text-2xl font-serif font-medium text-gold">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link href="/request" className="btn-primary">
            Start a Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
