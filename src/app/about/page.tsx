import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Astra",
  description:
    "Built to make the Philippines easier to navigate. Learn about Astra Concierge, our founder, and our approach to local capability.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="pb-16">
        <div className="container-narrow text-center">
          <h1 className="heading-xl mb-4">
            Built to make the Philippines easier to navigate.
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Astra exists for people who need reliable local capability—without
            having to build it themselves.
          </p>
        </div>
      </section>

      {/* Why Astra Exists */}
      <section className="section-padding bg-warm-100/50">
        <div className="container-narrow">
          <h2 className="heading-md mb-6">Why Astra exists</h2>
          <div className="space-y-4 body">
            <p>
              Remote tools and booking platforms solve many problems. They do
              not solve the problem of needing a capable person on the ground in
              the Philippines—someone who can inspect a property, coordinate a
              meeting, handle a document, or simply be present when presence is
              required.
            </p>
            <p>
              Astra was built for that gap. We coordinate local people,
              logistics, and information so that clients abroad (or simply
              elsewhere in the country) can get things done without having to
              figure out every local system themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="heading-md mb-6">Our approach</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Scoped and transparent",
                text: "We clarify what is possible, what it costs, and what the limitations are before work begins.",
              },
              {
                title: "Identifiable and accountable",
                text: "Clients know who they are dealing with. Field representatives can be verified. The company has a face.",
              },
              {
                title: "Human, not anonymous",
                text: "We are not a marketplace of unknown freelancers. We coordinate through trained and verified representatives.",
              },
              {
                title: "Practical over promotional",
                text: "We do not sell vacation packages or tropical fantasies. We sell local execution capability.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-warm-100/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/images/astra_ceo.png"
                alt="Mares Mae Nuera"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div>
              <p className="eyebrow mb-3">Founder</p>
              <h2 className="heading-md mb-2">Mares Mae Nuera</h2>
              <p className="text-base font-medium text-navy/80 mb-1">
                Founder & CEO · Astra Group of Companies, Inc.
              </p>
              <p className="text-sm text-navy/60 mb-6">
                Licensed Real Estate Broker
              </p>
              <div className="space-y-4 body">
                <p>
                  Mares Mae Nuera leads Astra Group of Companies with a focus on
                  professional services that connect international and remote
                  clients to reliable local capability in the Philippines.
                </p>
                <p>
                  Her background in real estate and client-facing operations
                  shaped the design of Astra Concierge: clear accountability,
                  verifiable representatives, and a process that prioritizes
                  clarity over complexity.
                </p>
                <p>
                  The founder&apos;s visibility is intentional. When clients
                  entrust Astra with requests that matter, they should be able
                  to identify who stands behind the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company & Standards */}
      <section className="section-padding">
        <div className="container-narrow space-y-12">
          <div>
            <h2 className="heading-md mb-4">Astra Group of Companies, Inc.</h2>
            <p className="body">
              Astra Concierge Philippines is a service of Astra Group of
              Companies, Inc. Corporate information and legitimate contact
              channels are available on this website and upon request.
            </p>
          </div>
          <div>
            <h2 className="heading-md mb-4">Accountability</h2>
            <p className="body">
              We design processes around identity and documentation. Requests
              are scoped, assigned, and tracked. Field representatives operate
              under Astra&apos;s coordination and can be independently verified
              where verification profiles are available.
            </p>
          </div>
          <div>
            <h2 className="heading-md mb-4">Professional standards</h2>
            <p className="body">
              We are transparent about service limitations. We do not claim
              capabilities we cannot support. When a request requires licensed
              professionals outside our scope, we say so.
            </p>
          </div>
          <div>
            <h2 className="heading-md mb-4">Our growing local network</h2>
            <p className="body">
              Astra maintains presence and verified capabilities in key cities
              including Davao, Cebu, Cagayan de Oro, Iloilo, and Metro Manila.
              The network expands as we build reliable local capacity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-8">
        <div className="container-narrow text-center">
          <p className="body mb-6">Meet the people behind Astra.</p>
          <Link href="/request" className="btn-primary">
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
