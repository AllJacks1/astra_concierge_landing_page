import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-narrow text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] mb-4">
          Something needs to be handled in the Philippines?
        </h2>
        <p className="text-xl text-white/90 font-medium mb-6">
          Tell us what you need.
        </p>
        <p className="text-base text-white/70 max-w-lg mx-auto mb-10">
          Whether it&apos;s a simple local requirement or something more
          complex, start with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/request"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all hover:bg-warm-100"
          >
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-white/10"
          >
            Talk to a Concierge
          </Link>
        </div>
      </div>
    </section>
  );
}
