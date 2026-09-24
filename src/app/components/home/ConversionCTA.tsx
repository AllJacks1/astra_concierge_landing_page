import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ConversionCTA() {
  return (
    <section className="section-padding bg-warm-100/80">
      <div className="container-narrow text-center">
        <h2 className="heading-lg mb-4">
          Have something that needs to be done?
        </h2>
        <p className="text-xl text-navy/80 font-medium mb-6">
          Tell us what you need.
        </p>
        <p className="body max-w-xl mx-auto mb-10">
          You don&apos;t need to know which service category applies. Just
          explain the outcome you&apos;re looking for.
        </p>
        <Link href="/request" className="btn-primary text-base px-8 py-4 rounded-xl">
          Start Your Request
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="mt-8 text-sm text-foreground/60 max-w-md mx-auto">
          No complicated booking process. No need to figure out which service
          you need first. Just tell us what you&apos;re trying to accomplish.
        </p>
      </div>
    </section>
  );
}
