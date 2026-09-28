import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Package,
  FileText,
  ShieldCheck,
  Clock3,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Errands & Local Execution in the Philippines | Astra Concierge",
  description:
    "Legitimate on-the-ground tasks in the Philippines: pickups, deliveries, purchasing, location checks, photo/video verification, and approved errands when you cannot handle them yourself. From ₱1,500.",
  openGraph: {
    title: "Errands & Local Execution | Astra Concierge Philippines",
    description:
      "Need something legitimately handled in the Philippines while you're away? Pickups, deliveries, sourcing, site checks, and more. From ₱1,500.",
    type: "website",
  },
  alternates: {
    canonical: "/services/local-execution",
  },
};

const canDo = [
  "Pick up and deliver documents or items",
  "Purchase approved products on behalf of clients",
  "Source products, suppliers, or services locally",
  "Visit a physical location on behalf of a client",
  "Check whether a location or business physically exists",
  "Take current photos and videos",
  "Conduct basic visual verification",
  "Visit suppliers or service providers",
  "Collect approved documents or items where authorization permits",
  "Deliver items to hotels, offices, residences, or other approved locations",
  "Attend appointments for information gathering where permitted",
  "Coordinate couriers and deliveries",
  "Check the physical condition of an item before purchase where reasonably possible",
  "Handle other legitimate physical tasks approved by Astra",
];

const cannotDo = [
  "Perform illegal activities",
  "Pay bribes or unofficial facilitation payments",
  "Create or use falsified documents",
  "Impersonate the client",
  "Participate in money laundering or suspicious financial transactions",
  "Purchase or transport illegal drugs, weapons, or prohibited items",
  "Provide sexual services",
  "Conduct stalking or unauthorized surveillance",
  "Obtain confidential or private information without authorization",
  "Access the client’s bank, email, social media, or other private accounts",
  "Sign contracts or make legal declarations on behalf of the client without proper authority",
  "Handle suspicious or unidentified packages",
];

const examples = [
  "I left something at my hotel in Davao. Can someone collect it and arrange delivery?",
  "Can someone pick up a document from an office and deliver it somewhere else?",
  "I'm overseas. Can someone check whether this business/location actually exists?",
  "Can someone buy an item locally and have it delivered?",
  "Can someone visit this supplier and take photos for me?",
  "I need something collected in Cebu and sent to my hotel.",
  "Can you check the condition of an item before I purchase it?",
  "Can someone attend an appointment to obtain information for me?",
];

const pricing = [
  {
    name: "Simple Local Errand",
    price: "From ₱1,500",
    detail:
      "Single-point basic task (e.g., simple pickup, drop-off, or quick local task).",
    features: [
      "Single-point task",
      "Pickup or drop-off",
      "Status confirmation",
    ],
  },
  {
    name: "Pickup / Delivery Coordination",
    price: "From ₱1,500",
    detail: "Coordinating pickup and delivery of approved items or documents.",
    features: [
      "Approved items or documents",
      "Pickup & handoff",
      "Delivery confirmation",
    ],
  },
  {
    name: "Physical Location Check",
    price: "From ₱2,000",
    detail:
      "On-site visit to confirm physical existence and operational status of a site or business.",
    features: [
      "On-site presence check",
      "Operational status update",
      "Written summary",
    ],
  },
  {
    name: "Photo / Video Verification",
    price: "From ₱2,500",
    detail: "Observational site visit with a photo and video visual report.",
    features: [
      "Photo & video report",
      "Observational documentation",
      "Digital delivery",
    ],
  },
  {
    name: "Purchasing / Sourcing Assistance",
    price: "From ₱1,500 + item cost",
    detail:
      "Sourcing or buying approved products (item costs funded separately).",
    features: [
      "Product sourcing",
      "Approved purchases only",
      "Item cost separate",
    ],
  },
  {
    name: "Half-Day Local Execution",
    price: "From ₱3,500",
    detail:
      "Up to 4 consecutive hours of dedicated field tasks or multi-stop errands.",
    features: [
      "Up to 4 consecutive hours",
      "Multi-stop capability",
      "Dedicated runner",
    ],
  },
  {
    name: "Full-Day Local Execution",
    price: "From ₱5,500",
    detail:
      "Up to 8 consecutive hours of dedicated field tasks or multi-stop errands.",
    features: [
      "Up to 8 consecutive hours",
      "Full-day scheduling",
      "Priority coordination",
    ],
    popular: true,
  },
  {
    name: "Multiple Locations / Complex",
    price: "Custom quote",
    detail:
      "Tailored multi-stop or complex project requiring extensive logistics.",
    features: [
      "Custom logistics plan",
      "Multi-location coverage",
      "Project coordination",
    ],
  },
];

const requirements = [
  "Astra must understand the legitimate purpose of the request",
  "Client identification may be required",
  "Proof of ownership or authority may be required for collections or sensitive transactions",
  "Written authorization may be required",
  "High-value or unusual assignments require management approval",
  "Purchases and third-party expenses may require advance funding",
  "Receipts will be provided where reasonably available",
  "Astra may refuse unsafe, suspicious, unethical, unlawful, or impractical requests",
  "Physical verification does not guarantee that information supplied by a third party is truthful or authentic",
];

export default function ErrandsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Errands & Local Execution",
    description:
      "Legitimate on-the-ground tasks in the Philippines: pickups, deliveries, purchasing, location checks, photo and video documentation, and approved errands when you cannot handle them personally.",
    provider: {
      "@type": "Organization",
      name: "Astra Concierge Philippines",
      parentOrganization: {
        "@type": "Organization",
        name: "Astra Group of Companies, Inc.",
      },
    },
    areaServed: { "@type": "Country", name: "Philippines" },
    offers: pricing.map((p) => ({
      "@type": "Offer",
      name: p.name,
      priceCurrency: "PHP",
      description: p.detail,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pb-14 sm:pb-16 lg:pb-20">
          {/* ambient background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-linear-to-b from-warm-50 to-white" />
            <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />
            <div className="absolute top-32 -left-24 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
          </div>

          <div className="container-wide">
            <div className="max-w-3xl pt-28">
              <p className="eyebrow mb-4">Service</p>
              <h1 className="heading-xl mb-5">Errands &amp; Local Execution</h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-8">
                For legitimate tasks that need someone physically on the ground
                in the Philippines. Pickups and deliveries, purchasing and
                sourcing, location visits, document collection, basic physical
                verification, photo and video documentation, supplier visits,
                and other approved errands when you cannot handle them
                personally.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/request" className="btn-primary rounded-xl">
                  Request this service
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#pricing" className="btn-secondary rounded-xl">
                  See pricing
                </a>
              </div>

              {/* trust chips */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/55">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Verified local runners
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-emerald-600" />
                  Photo &amp; video proof
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  Clear quotation, no surprises
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Can / Cannot ─────────────────────────────────────── */}
        <section className="pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {/* What Astra can do */}
              <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-900/5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/25 ring-1 ring-emerald-500">
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-navy">
                      What Astra can do
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
                      Capabilities
                    </p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {canDo.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-lg px-3 py-2 text-sm leading-relaxed text-foreground/80 transition-colors hover:bg-emerald-50/60"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                        <Check
                          className="h-3 w-3 text-emerald-700"
                          strokeWidth={3}
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Astra cannot do */}
              <div className="group relative overflow-hidden rounded-2xl border border-warm-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-warm-900/5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm-100 text-warm-500 ring-1 ring-warm-200">
                    <X className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-navy">
                      What Astra cannot do
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-wide text-warm-400">
                      Limitations
                    </p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {cannotDo.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-lg px-3 py-2 text-sm leading-relaxed text-foreground/60 transition-colors hover:bg-warm-50"
                    >
                      <X
                        className="mt-0.5 h-4 w-4 shrink-0 text-warm-300"
                        strokeWidth={2.25}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Example requests ─────────────────────────────────── */}
        <section className="pb-16 sm:pb-20 bg-gradient-to-b from-warm-100/60 to-warm-50/40 border-y border-warm-200/60">
          <div className="container-wide section-padding !pb-16 sm:!pb-20">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Example requests</p>
              <h2 className="heading-md">What people typically ask for</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {examples.map((quote) => (
                <blockquote
                  key={quote}
                  className="relative rounded-2xl border border-warm-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                >
                  <MessageSquare
                    className="h-5 w-5 text-amber-400 mb-4"
                    strokeWidth={1.75}
                  />
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    “{quote}”
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────── */}
        <section id="pricing" className="scroll-mt-28 py-16 sm:py-20">
          <div className="container-wide">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Pricing</p>
              <h2 className="heading-md mb-3">Quotation-based</h2>
              <p className="body text-foreground/70">
                Service fees cover runner labor, field coordination, and
                administrative support only. Transportation, courier charges,
                purchases, and other third-party expenses are always separate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
              {pricing.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    tier.popular
                      ? "relative flex flex-col rounded-2xl border-2 border-amber-400/70 bg-white p-5 sm:p-6 shadow-md shadow-amber-900/5"
                      : "relative flex flex-col rounded-2xl border border-warm-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  }
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-navy shadow-sm">
                      Most popular
                    </span>
                  )}
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-navy/45 mb-2">
                    {tier.name}
                  </p>
                  <p className="text-xl font-semibold text-navy mb-2">
                    {tier.price}
                  </p>
                  <p className="text-sm text-foreground/65 leading-relaxed mb-4">
                    {tier.detail}
                  </p>
                  {tier.features && (
                    <ul className="mt-auto space-y-2 border-t border-warm-100 pt-4">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs text-foreground/70"
                        >
                          <Check
                            className="h-3.5 w-3.5 shrink-0 text-emerald-600"
                            strokeWidth={2.5}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Requirements ─────────────────────────────────────── */}
        <section className="pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-white p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-400 to-amber-200" />
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 ring-1 ring-amber-200">
                  <FileText className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-navy">
                    Service requirements &amp; limits
                  </h2>
                  <p className="text-xs font-medium uppercase tracking-wide text-amber-600/80">
                    Please read before booking
                  </p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm text-foreground/70 leading-relaxed"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="pb-16 sm:pb-20 border-t border-warm-200">
          <div className="container-wide pt-14 sm:pt-16">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Policies for this service</p>
              <h2 className="heading-md">
                Terms, privacy, refunds &amp; limitations
              </h2>
              <p className="body text-foreground/65 mt-3">
                These apply specifically to Errands &amp; Local Execution. By
                requesting this service you agree to them.
              </p>
            </div>

            <div className="max-w-3xl space-y-4 prose-legal">
              {/* 1. Terms */}
              <details className="group rounded-2xl border border-warm-200 bg-white overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-base font-semibold text-navy hover:bg-warm-50/80 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>1. Terms of Service</span>
                  <span className="shrink-0 text-navy/40 transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-warm-200 px-5 py-5 sm:px-6 sm:py-6 space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.1 Acceptance of Terms &amp; Scope of Agreement
                    </h4>
                    <p>
                      By booking, requesting, or authorizing any errand or local
                      execution task provided by Astra Concierge Philippines
                      (&quot;Astra,&quot; &quot;we,&quot; &quot;us,&quot; or
                      &quot;our&quot;), you (&quot;Client,&quot;
                      &quot;you&quot;) agree to be bound by these Terms of
                      Service. Astra provides legitimate on-the-ground
                      administrative, purchasing, pickup, delivery, and physical
                      verification assistance across supported regions in the
                      Philippines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.2 Legitimate Purpose &amp; Client Verification
                    </h4>
                    <p className="mb-2">
                      Astra operates under a legitimate-purpose framework:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">Scope review:</strong>{" "}
                        Every request is evaluated. Astra may require a full
                        explanation of background and purpose before acceptance.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Identity verification (KYC):
                        </strong>{" "}
                        Government-issued ID, proof of residence, or corporate
                        credentials may be required before execution.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Proof of authority:
                        </strong>{" "}
                        For item collection, document retrieval, or sensitive
                        transactions, clear proof of ownership, authorization
                        letters, or official confirmation from the releasing
                        entity is required.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Management approval:
                        </strong>{" "}
                        High-value purchases, sensitive physical checks, or
                        unusual assignments require explicit management
                        approval.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.3 Description of Permitted Services
                    </h4>
                    <p className="mb-2">
                      Astra acts as an administrative runner, local
                      representative, and field coordinator. Permitted
                      activities include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Picking up and delivering legitimate documents,
                        packages, or personal items
                      </li>
                      <li>
                        Purchasing approved products, goods, or supplies on
                        behalf of the Client
                      </li>
                      <li>
                        Sourcing local products, suppliers, or service providers
                      </li>
                      <li>
                        Conducting physical site visits to verify whether a
                        business or location exists
                      </li>
                      <li>
                        Capturing photographic and video media of items,
                        locations, or facilities
                      </li>
                      <li>
                        Conducting basic visual condition checks on items prior
                        to purchase where reasonably possible
                      </li>
                      <li>
                        Visiting suppliers, service providers, or offices to
                        gather public information or drop off materials
                      </li>
                      <li>
                        Coordinating local couriers and third-party delivery
                        dispatch
                      </li>
                      <li>
                        Attending permitted information-gathering appointments
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.4 Pricing Structure &amp; Service Tiers
                    </h4>
                    <p className="mb-3">
                      Service fees cover runner labor, field coordination time,
                      and administrative support only. Third-party costs,
                      courier fees, and purchases are billed separately.
                    </p>
                    <div className="overflow-x-auto rounded-xl border border-warm-200">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-warm-50 text-navy/70">
                          <tr>
                            <th className="px-4 py-2.5 font-medium">
                              Service tier
                            </th>
                            <th className="px-4 py-2.5 font-medium">
                              Starting rate
                            </th>
                            <th className="px-4 py-2.5 font-medium hidden sm:table-cell">
                              Included scope
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-warm-200">
                          {pricing.map((row) => (
                            <tr key={row.name}>
                              <td className="px-4 py-2.5 text-navy font-medium">
                                {row.name}
                              </td>
                              <td className="px-4 py-2.5">{row.price}</td>
                              <td className="px-4 py-2.5 hidden sm:table-cell text-foreground/65">
                                {row.detail}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.5 Third-Party Costs &amp; Advance Funding
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Separate expenses:
                        </strong>{" "}
                        Transportation, long-distance transit, tolls, courier
                        charges, third-party processing fees, and product
                        purchase costs are not included in Astra’s service fee.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Advance funding:
                        </strong>{" "}
                        Advance funding and cleared payment are required for all
                        product purchases, third-party fees, and disbursements
                        before the assignment starts.
                      </li>
                      <li>
                        <strong className="text-navy/80">Receipts:</strong>{" "}
                        Itemized receipts for purchases and pass-through costs
                        are provided where reasonably available from local
                        vendors.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.6 Governing Law &amp; Jurisdiction
                    </h4>
                    <p>
                      This Agreement is governed by the laws of the Republic of
                      the Philippines. Disputes are subject to the exclusive
                      jurisdiction of the competent courts in Davao City,
                      Philippines.
                    </p>
                  </div>
                </div>
              </details>

              {/* 2. Privacy */}
              <details className="group rounded-2xl border border-warm-200 bg-white overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-base font-semibold text-navy hover:bg-warm-50/80 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>2. Privacy Policy</span>
                  <span className="shrink-0 text-navy/40 transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-warm-200 px-5 py-5 sm:px-6 sm:py-6 space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.1 Compliance with the Data Privacy Act
                    </h4>
                    <p>
                      Astra safeguards client and recipient information in
                      compliance with Republic Act No. 10173 (Data Privacy Act
                      of 2012), its Implementing Rules and Regulations, and
                      related data privacy directives.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.2 Information We Collect
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong className="text-navy/80">
                          Client &amp; recipient data:
                        </strong>{" "}
                        Full names, contact numbers, delivery addresses, email,
                        messaging handles
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Verification documents:
                        </strong>{" "}
                        Government-issued IDs, authorization letters, purchase
                        invoices, proof of ownership
                      </li>
                      <li>
                        <strong className="text-navy/80">Task media:</strong>{" "}
                        Photos, videos, GPS tags, and status logs from site
                        visits or item inspections
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Financial details:
                        </strong>{" "}
                        Payment confirmations, transaction receipts,
                        reimbursement proof
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.3 Purpose of Processing
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Verify Client identity and ensure the legality of the
                        requested errand
                      </li>
                      <li>
                        Complete pickups, deliveries, purchases, and site checks
                      </li>
                      <li>
                        Authenticate authorization with vendors, hotels,
                        offices, or building administration
                      </li>
                      <li>
                        Deliver photographic/video reports and proof of
                        completion
                      </li>
                      <li>Maintain billing and tax accounting records</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.4 Operational Disclosure to Third Parties
                    </h4>
                    <p>
                      Astra does not sell or rent personal information. Data is
                      disclosed only to parties essential to the errand
                      (couriers, vendor staff, hotel concierges, building
                      security), limited to the minimum required to complete the
                      task.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.5 Media Security &amp; Data Retention
                    </h4>
                    <p>
                      Photos, videos, and authorization letters are stored
                      securely. Media and task records are retained for up to 12
                      months for verification, record-keeping, and accounting,
                      then permanently deleted or archived.
                    </p>
                  </div>
                </div>
              </details>

              {/* 3. Refund */}
              <details className="group rounded-2xl border border-warm-200 bg-white overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-base font-semibold text-navy hover:bg-warm-50/80 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>3. Refund &amp; Cancellation Policy</span>
                  <span className="shrink-0 text-navy/40 transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-warm-200 px-5 py-5 sm:px-6 sm:py-6 space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.1 Astra Service Fee Cancellations
                    </h4>
                    <p className="mb-2">
                      Cancellations must be submitted in writing via official
                      Astra channels:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">24+ hours</strong>{" "}
                        before errand dispatch: 80% refund (20% retained for
                        admin setup)
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          After dispatch / runner en route
                        </strong>{" "}
                        (no physical task executed yet): 50% refund
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          After execution has commenced:
                        </strong>{" "}
                        Non-refundable
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.2 Product Purchases &amp; Third-Party Expenses
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Unused disbursement funds:
                        </strong>{" "}
                        If canceled before any purchase or third-party fee is
                        incurred, 100% of advanced purchase/disbursement funds
                        are refunded.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Completed purchases:
                        </strong>{" "}
                        Funds used for completed purchases or paid third-party
                        services are non-refundable. Returns follow the vendor’s
                        policy; additional transit or labor to return items is
                        billed to the Client.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.3 Failed Execution Due to Client Error or Third-Party
                      Refusal
                    </h4>
                    <p className="mb-2">
                      The service fee covers coordinator time, transit, and
                      effort. It is non-refundable if an errand cannot be
                      completed due to:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Inaccurate, incomplete, or false addresses or contact
                        information from the Client
                      </li>
                      <li>
                        Refusal by a third party, hotel, or office to release an
                        item due to inadequate authorization, ID, or payment
                        from the Client
                      </li>
                      <li>
                        Absence of the designated recipient during a scheduled
                        delivery window
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.4 Astra-Initiated Cancellations &amp; Force Majeure
                    </h4>
                    <p className="mb-2">
                      If Astra cancels due to severe weather, natural disasters,
                      severe civil disruption, or safety threats to field staff:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        100% refund of unearned service fees and unspent
                        disbursement funds, or reschedule at no additional cost
                      </li>
                      <li>
                        Astra accepts no liability for indirect losses or
                        secondary delays from Force Majeure
                      </li>
                    </ol>
                  </div>
                </div>
              </details>

              {/* 4. Limitations */}
              <details className="group rounded-2xl border border-warm-200 bg-white overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-base font-semibold text-navy hover:bg-warm-50/80 transition-colors [&::-webkit-details-marker]:hidden">
                  <span>4. Service Limitations &amp; Scope</span>
                  <span className="shrink-0 text-navy/40 transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-warm-200 px-5 py-5 sm:px-6 sm:py-6 space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.1 Strict Prohibitions &amp; Anti-Illegality Rules
                    </h4>
                    <p className="mb-2">
                      Astra enforces a zero-tolerance policy for illegal,
                      unethical, or dangerous requests. Astra cannot and will
                      not:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        Perform illegal activities, offer bribes, or pay
                        unofficial facilitation fees
                      </li>
                      <li>
                        Create, present, or use falsified documents, or
                        impersonate the Client or any other individual
                      </li>
                      <li>
                        Participate in money laundering, unauthorized cash
                        distributions, or suspicious financial transactions
                      </li>
                      <li>
                        Purchase, transport, or handle illegal drugs, weapons,
                        explosives, hazardous substances, or contraband
                      </li>
                      <li>
                        Transport, open, or handle suspicious, sealed, or
                        unidentified packages from unknown origins without prior
                        inspection or verification
                      </li>
                      <li>
                        Conduct stalking, unauthorized surveillance, photo/video
                        of private individuals without consent, or gather
                        confidential personal data without authorization
                      </li>
                      <li>
                        Access a client’s bank, email, social media, or private
                        accounts, or sign legal contracts/declarations without
                        formal power of attorney
                      </li>
                      <li>
                        Provide or facilitate any sexual, adult, or
                        escort-related services
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.2 Observational &amp; Physical Check Limitations
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Surface inspection only:
                        </strong>{" "}
                        Visual checks consist of basic surface observation
                        (photographs, videos, visual condition notes)
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No technical diagnostics:
                        </strong>{" "}
                        Astra staff are not certified mechanics, technicians,
                        jewelers, or appraisers and do not perform internal
                        mechanical, electronic, or technical diagnostics
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No guarantee of third-party information:
                        </strong>{" "}
                        Confirming physical existence of a business or location
                        does not guarantee legal status, financial solvency,
                        integrity, or accuracy of vendor statements
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.3 Item Condition &amp; Transit Risk Disclaimer
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        Astra is not responsible for latent manufacturing
                        defects, internal electronic faults, or undisclosed
                        damage in items purchased on the Client’s behalf
                      </li>
                      <li>
                        Where items are handed to third-party couriers (e.g.,
                        Lalamove, GrabExpress, DHL, J&amp;T), condition and
                        transit insurance are governed by the courier’s terms.
                        Astra is not liable for loss or damage during
                        third-party courier transit
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.4 Limitation of Liability
                    </h4>
                    <p>
                      To the maximum extent permitted under Philippine law,
                      Astra functions as a local execution assistant. Astra is
                      not liable for indirect, incidental, consequential, or
                      punitive damages — including loss of contracts, business
                      interruption, or loss of items due to third-party vendor
                      fraud — arising from our services. Maximum aggregate
                      liability for any claim from an errand or local execution
                      assignment shall not exceed the total Astra service fee
                      actually paid for that specific task.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="container-narrow text-center">
            <div className="flex justify-center mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Package
                  className="h-5 w-5 text-amber-400"
                  strokeWidth={1.75}
                />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Need something handled on the ground?
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us what you need done, where, and any authorization or
              documentation involved. We&apos;ll confirm whether we can take it
              on and send a clear quote.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
            >
              Request an Errand
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
