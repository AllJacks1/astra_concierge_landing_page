import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="/images/hero.png"
        alt="Professional meeting in a modern Philippine office environment"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

      <div className="container-wide relative z-10">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-5">
            Astra Concierge Philippines
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
            Your team on the ground in the Philippines.
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8">
            Traveling, investing, doing business, relocating—or simply need
            something handled locally?
            <br className="hidden sm:block" />
            Tell Astra what you need. We&apos;ll handle the local part.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/request"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold tracking-wide text-navy transition-all duration-200 hover:bg-warm-100"
            >
              Tell Us What You Need
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10"
            >
              Talk to a Concierge
            </Link>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-3">
              Serving clients across
            </p>
            <p className="text-sm text-white/80 font-medium">
              Davao · Cebu · Cagayan de Oro · Iloilo · Metro Manila
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
