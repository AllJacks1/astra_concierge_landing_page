import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Building,
  FileText,
  ShieldCheck,
  Clock3,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Property Assistance in the Philippines | Astra Concierge",
  description:
    "Local support for searching, viewing, inspecting, and coordinating property in the Philippines. Site checks, photo/video reports, viewings, and coordination with licensed brokers and professionals.",
  openGraph: {
    title: "Property Assistance | Astra Concierge Philippines",
    description:
      "Eyes on the ground for property searches, inspections, and viewings. From ₱2,500. Brokerage and professional services quoted separately.",
    type: "website",
  },
  alternates: {
    canonical: "/services/property-assistance",
  },
};

const canDo = [
  "Search for properties based on client requirements",
  "Coordinate property inquiries",
  "Arrange property viewings",
  "Accompany clients during property visits",
  "Conduct basic physical site checks for overseas clients",
  "Take current photos and videos of properties",
  "Prepare basic site visit reports",
  "Check the surrounding location and accessibility",
  "Coordinate meetings with property owners or representatives",
  "Coordinate with licensed brokers",
  "Assist with leasing and property acquisition requirements through Axial",
  "Coordinate lawyers, appraisers, engineers, surveyors, and other professionals when required",
  "Assist with documentation coordination",
  "Conduct follow-ups with property owners, developers, or representatives",
];

const cannotDo = [
  "Guarantee clean or valid property title",
  "Guarantee ownership or authenticity of documents",
  "Provide legal opinions regarding property ownership or contracts",
  "Guarantee property condition",
  "Guarantee zoning or development approvals",
  "Guarantee market value or future appreciation",
  "Guarantee investment returns",
  "Guarantee financing or transaction completion",
  "Conduct regulated brokerage activities except through an appropriately licensed professional",
];

const examples = [
  "I'm overseas but I'm interested in a property in Davao. Can someone inspect it?",
  "I'm coming to Cebu and want to view potential commercial locations.",
];

const pricing = [
  {
    name: "Basic Property Site Check",
    price: "From ₱2,500",
    detail:
      "Basic observational site check, surrounding location review, and status update.",
    features: [
      "Observational site visit",
      "Location & surroundings review",
      "Written status update",
    ],
  },
  {
    name: "Site Check with Photo/Video Report",
    price: "From ₱3,500",
    detail:
      "Observational site visit with a photographic and video visual report.",
    features: [
      "On-site photo & video report",
      "Condition overview",
      "Shared digital delivery",
    ],
  },
  {
    name: "Half-Day Property Assistance",
    price: "From ₱4,500",
    detail:
      "Up to 4 consecutive hours accompanying viewings or conducting site visits.",
    features: [
      "Up to 4 consecutive hours",
      "Accompanied viewings",
      "Multiple site visits",
    ],
  },
  {
    name: "Full-Day Property Assistance",
    price: "From ₱7,500",
    detail:
      "Up to 8 consecutive hours accompanying viewings or conducting site visits.",
    features: [
      "Up to 8 consecutive hours",
      "Full-day scheduling",
      "Priority coordination",
    ],
    popular: true,
  },
  {
    name: "Property Search / Sourcing",
    price: "From ₱5,000",
    detail:
      "Custom property search and list compilation based on client criteria.",
    features: [
      "Criteria-based search",
      "Shortlist compilation",
      "Initial shortlist review",
    ],
  },
  {
    name: "Complex Acquisition / Brokerage",
    price: "Custom quote",
    detail:
      "Documentation, leasing, or brokerage coordination through Axial or a licensed professional.",
    features: [
      "Licensed professional coordination",
      "Documentation support",
      "Transaction facilitation",
    ],
  },
];

const requirements = [
  "Brokerage transactions must be handled through Axial or an appropriately licensed real estate professional",
  "Property visits require owner or authorized-party permission where applicable",
  "Concierge inspections are observational only",
  "Structural assessments require qualified engineers or architects",
  "Title and legal verification require appropriate professional due diligence",
  "Appraisals require appropriately qualified professionals",
  "Professional and third-party fees are separate from Astra’s concierge fee",
  "Travel and transportation expenses may be charged separately",
];

export default function PropertyAssistancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Property Assistance",
    description:
      "Local support for clients looking for, evaluating, leasing, buying, or managing property-related requirements in the Philippines — including searches, viewings, site checks, and coordination with licensed professionals.",
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
            <div className="absolute inset-0 bg-gradient-to-b from-warm-50 to-white" />
            <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />
            <div className="absolute top-32 -left-24 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
          </div>

          <div className="container-wide">
            <div className="max-w-3xl pt-28">
              <p className="eyebrow mb-4">Service</p>
              <h1 className="heading-xl mb-5">Property Assistance</h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-8">
                Local support for clients looking for, evaluating, leasing,
                buying, or managing property in the Philippines. Searches,
                viewings, physical site checks, photo and video reports, and
                coordination with brokers, lawyers, and other qualified
                professionals when required.
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
                  Verified local coordinators
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-emerald-600" />
                  On-ground site checks
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
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
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
                Service fees cover observational research, field time,
                reporting, and coordination only. Brokerage commissions,
                professional fees, government fees, and transportation are
                always separate.
              </p>
            </div>

            <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {pricing.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    tier.popular
                      ? "relative flex flex-col rounded-2xl border-2 border-amber-400/70 bg-white p-5 shadow-md shadow-amber-900/5 sm:p-6"
                      : "relative flex flex-col rounded-2xl border border-warm-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                  }
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-navy shadow-sm">
                      Most popular
                    </span>
                  )}
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-navy/45">
                    {tier.name}
                  </p>
                  <p className="mb-2 text-xl font-semibold text-navy">
                    {tier.price}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/65">
                    {tier.detail}
                  </p>
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
                These apply specifically to Property Assistance. By requesting
                this service you agree to them.
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
                      By requesting, booking, or using the services provided by
                      Astra Concierge Philippines (&quot;Astra,&quot;
                      &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you
                      (&quot;Client,&quot; &quot;you&quot;) agree to be bound by
                      these Terms of Service. Astra provides localized
                      administrative, observational, and coordination assistance
                      for clients searching for, evaluating, leasing, buying, or
                      managing property requirements in the Philippines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.2 Description of Services
                    </h4>
                    <p className="mb-2">
                      Astra provides on-the-ground support, observational field
                      reporting, and administrative coordination. Permitted
                      activities include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Searching for properties based on specified client
                        criteria
                      </li>
                      <li>
                        Coordinating property inquiries, viewings, and schedule
                        management
                      </li>
                      <li>
                        Accompanying clients during property viewings and site
                        visits
                      </li>
                      <li>
                        Conducting basic observational site checks, location
                        assessments, and accessibility checks
                      </li>
                      <li>
                        Capturing photographic and video media and compiling
                        basic site visit reports
                      </li>
                      <li>
                        Coordinating meetings with property owners, developers,
                        or authorized representatives
                      </li>
                      <li>
                        Coordinating with licensed brokers, lawyers, appraisers,
                        engineers, surveyors, and other accredited professionals
                      </li>
                      <li>
                        Assisting with administrative documentation coordination
                        and status follow-ups
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.3 Licensed Real Estate Brokerage &amp; Relationship with
                      Axial
                    </h4>
                    <p className="mb-2">
                      Astra is an administrative and concierge service provider.
                      Astra does not directly perform acts requiring a real
                      estate broker or appraiser license under Republic Act No.
                      9646 (Real Estate Service Act of the Philippines).
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        Regulated brokerage transactions, lease negotiations,
                        sales contracts, and formal acquisitions are handled
                        through Axial or an appropriately licensed real estate
                        broker.
                      </li>
                      <li>
                        Brokerage arrangements and commission agreements are
                        subject to separate contracts with Axial or the licensed
                        professional.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.4 Fee Structure &amp; Pricing Model
                    </h4>
                    <p className="mb-3">
                      Astra’s service fees cover observational research, field
                      travel time, reporting, and administrative coordination
                      only.
                    </p>
                    <div className="overflow-x-auto rounded-xl border border-warm-200">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-warm-50 text-navy/70">
                          <tr>
                            <th className="px-4 py-2.5 font-medium">
                              Service level
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
                      1.5 Third-Party Expenses &amp; Travel Fees
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Separate charges:
                        </strong>{" "}
                        Brokerage commissions, professional fees (lawyers,
                        appraisers, engineers, surveyors), title search fees,
                        government taxes, and notary fees are not included in
                        Astra’s concierge fees.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Travel &amp; transportation:
                        </strong>{" "}
                        Travel outside standard local coverage, long-distance
                        transport, tolls, and special site access fees are
                        billed separately or as pass-through expenses.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.6 Site Access &amp; Permissions
                    </h4>
                    <p>
                      Property visits, photo/video capture, and site inspections
                      require express permission from the property owner,
                      authorized developer, or listing broker. The Client is
                      responsible for ensuring authorization is granted, or for
                      requesting Astra to coordinate access before dispatch.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.7 Governing Law &amp; Jurisdiction
                    </h4>
                    <p>
                      This Agreement is governed by the laws of the Republic of
                      the Philippines. Disputes are subject to the exclusive
                      jurisdiction of the courts in Davao City, Philippines (or
                      the designated corporate seat of Astra).
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
                      Astra complies with Republic Act No. 10173 (Data Privacy
                      Act of 2012), its Implementing Rules and Regulations, and
                      related data privacy mandates.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.2 Information We Collect
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong className="text-navy/80">
                          Client identification:
                        </strong>{" "}
                        Name, contact details, government-issued ID (for
                        verification or gated community / condominium entry)
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Property inquiries:
                        </strong>{" "}
                        Desired locations, budget ranges, usage needs, and
                        viewing schedules
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Property media:
                        </strong>{" "}
                        Photographs, videos, GPS tags, and observational notes
                        from site checks
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Financial data:
                        </strong>{" "}
                        Payment confirmations, receipts, and bank transfer
                        details
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.3 Purpose of Processing
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Identify suitable properties matching your preferences
                      </li>
                      <li>
                        Arrange access, viewings, and meetings with owners,
                        developers, or brokers
                      </li>
                      <li>Prepare photographic and video site reports</li>
                      <li>
                        Facilitate introductions with licensed professionals at
                        Axial or partner practices
                      </li>
                      <li>Process service billing and accounting</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.4 Disclosure to Third Parties
                    </h4>
                    <p>
                      Astra does not sell or rent personal information. Data is
                      disclosed only to parties necessary to fulfill your
                      request (property owners, building administration,
                      security, listing brokers at Axial, closing attorneys).
                      Disclosures are limited to necessary coordination details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.5 Media Security &amp; Retention
                    </h4>
                    <p>
                      Photographs, videos, and site reports are delivered via
                      secure digital channels. Copies are retained for
                      record-keeping and support for up to 12 months, then
                      archived or securely deleted.
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
                      3.1 Astra Concierge Fee Cancellations
                    </h4>
                    <p className="mb-2">
                      Cancellations must be communicated in writing. Because
                      Astra reserves staff time and coordinates third-party
                      access upon booking:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">48+ hours</strong>{" "}
                        before scheduled visit: 80% refund (20% retained for
                        admin and logistics)
                      </li>
                      <li>
                        <strong className="text-navy/80">24–48 hours</strong>{" "}
                        before: 50% refund
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Less than 24 hours / no-show:
                        </strong>{" "}
                        Non-refundable
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.2 Denied Site Access
                    </h4>
                    <p>
                      If an Astra coordinator arrives but is denied entry by
                      security, the owner, or building administration due to
                      lack of authorization, unarranged permissions, or
                      inaccurate information from the Client or seller, Astra
                      will make reasonable attempts to resolve access. If entry
                      remains impossible, the service fee is treated as
                      fulfilled (transit and time) and is non-refundable.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.3 Custom Quotes &amp; Transaction Assignments
                    </h4>
                    <p>
                      For complex acquisition coordination, custom search
                      retainers, or multi-property sourcing, cancellation and
                      refund rules are governed by the written scope agreement
                      for that assignment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.4 Third-Party &amp; Professional Fee Refunds
                    </h4>
                    <p>
                      Astra service fee refunds do not apply to third-party
                      expenses (appraiser deposits, broker retainers, legal
                      fees, government processing). Those are governed
                      exclusively by each provider’s policy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.5 Force Majeure &amp; Astra Cancellations
                    </h4>
                    <p className="mb-2">
                      If Astra cancels due to typhoons, flooding, natural
                      disasters, severe weather, or unsafe civil conditions:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        100% refund of unearned service fees, or reschedule at
                        no additional charge
                      </li>
                      <li>
                        Astra accepts no liability for travel delays, hotel
                        costs, or indirect losses from Force Majeure
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
                      4.1 Observational Nature of Site Checks
                    </h4>
                    <p className="mb-2">
                      Astra site inspections and reports are strictly
                      observational and informational.
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Visual inspection only:
                        </strong>{" "}
                        Photos, videos, and basic notes on current visual
                        condition, neighborhood context, and accessibility
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No structural or engineering assessments:
                        </strong>{" "}
                        Astra personnel are not licensed engineers, architects,
                        or building inspectors. Astra does not test electrical,
                        plumbing, foundations, soil, or mechanical systems.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No appraisal or valuation:
                        </strong>{" "}
                        Reports do not constitute a formal appraisal or
                        certified market valuation. Formal valuations require a
                        licensed real estate appraiser.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.2 Explicit Exclusions &amp; Guarantees Disclaimed
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          No title or ownership guarantee:
                        </strong>{" "}
                        Astra cannot guarantee clean, valid, or unencumbered
                        titles, or authenticity of ownership documents. Title
                        verification requires formal legal due diligence by a
                        licensed attorney or title practitioner.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No property condition guarantee:
                        </strong>{" "}
                        Astra cannot guarantee a property is free of hidden
                        defects, pests, environmental hazards, or structural
                        damage.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No zoning or permit guarantee:
                        </strong>{" "}
                        Astra cannot guarantee zoning compliance, building
                        permits, or government development approvals.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No financial or investment guarantees:
                        </strong>{" "}
                        Astra does not guarantee appreciation, rental yields,
                        future market value, or financial returns.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No transaction completion guarantee:
                        </strong>{" "}
                        Astra cannot guarantee that a lease or purchase will
                        successfully close.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.3 Licensed Activities Constraint
                    </h4>
                    <p>
                      Where regulated brokerage, leasing agreements, title
                      transfers, or legal documentation are required, services
                      are referred to and conducted exclusively by Axial or
                      another appropriately licensed real estate broker or
                      attorney. Astra’s role remains limited to logistical
                      support and client coordination.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.4 Limitation of Liability
                    </h4>
                    <p>
                      To the maximum extent permitted under Philippine law,
                      Astra is not liable for direct or indirect damages,
                      financial losses, failed purchases, title disputes, or
                      undisclosed property defects arising from our services.
                      Maximum aggregate liability for claims related to a
                      property assistance engagement shall not exceed the total
                      Astra service fees actually paid for that specific
                      engagement.
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
                <Building
                  className="h-5 w-5 text-amber-400"
                  strokeWidth={1.75}
                />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Need eyes on a property?
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us the location, what you need checked, and whether you want
              photos, a full report, or accompanied viewings. We&apos;ll confirm
              scope and pricing.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
            >
              Request Property Assistance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
