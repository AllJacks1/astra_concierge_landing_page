import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Founder() {
  return (
    <section className="section-padding bg-warm-100/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/images/astra_ceo.png"
                alt="Mares Mae Nuera, Founder & CEO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">People you can actually verify</p>
            <h2 className="heading-lg mb-2">Mares Mae Nuera</h2>
            <p className="text-base font-medium text-navy/80 mb-1">
              Founder & CEO
            </p>
            <p className="text-sm text-navy/60 mb-6">
              Astra Group of Companies, Inc. · Licensed Real Estate Broker
            </p>

            <div className="space-y-4 body mb-8">
              <p>
                Mares Mae Nuera founded Astra Group of Companies with a focus on
                professional services that bridge the gap between international
                clients and reliable local execution in the Philippines.
              </p>
              <p>
                With experience in real estate, corporate coordination and
                client-facing operations, she built Astra Concierge as a response
                to a recurring problem: capable people abroad who simply need
                someone trustworthy on the ground.
              </p>
              <p>
                Her visibility as founder is intentional. Clients should know
                who is accountable for the company that coordinates their
                requests.
              </p>
            </div>

            <Link href="/about" className="btn-primary">
              Meet the Astra Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
