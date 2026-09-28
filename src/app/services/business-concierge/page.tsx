import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Briefcase,
  FileText,
  ShieldCheck,
  Building2,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Concierge in the Philippines | Astra",
  description:
    "Local coordination for foreign executives, entrepreneurs, and companies in the Philippines. Meetings, research, site visits, professional introductions, and on-ground support — with clear scope and limits.",
  openGraph: {
    title: "Business Concierge | Astra Concierge Philippines",
    description:
      "Temporary on-the-ground support for companies without a local team. Meetings, research, site visits, and logistics — quotation-based.",
    type: "website",
  },
  alternates: {
    canonical: "/services/business-concierge",
  },
};

const canDo = [
  "Coordinate business meetings and appointments",
  "Build and manage business visit itineraries",
  "Conduct preliminary local research",
  "Source potential suppliers and service providers",
  "Coordinate meetings with lawyers, accountants, brokers, consultants, and other professionals",
  "Arrange property and site visits",
  "Coordinate office, coworking, and meeting spaces",
  "Arrange local transportation",
  "Assist with supplier and vendor visits",
  "Coordinate business introductions where appropriate",
  "Provide local administrative and logistical support",
  "Conduct permitted physical checks or visits on behalf of overseas clients",
  "Follow up with local contacts and service providers",
  "Coordinate multi-city business requirements",
  "Provide temporary on-the-ground support for foreign companies without their own local team",
];

const cannotDo = [
  "Provide legal advice",
  "Provide tax or accounting advice",
  "Provide immigration advice",
  "Provide investment or financial advice requiring professional authorization",
  "Guarantee permits, registrations, financing, partnerships, contracts, or government approvals",
  "Guarantee the success of a business transaction or investment",
  "Perform activities requiring professional licenses unless handled by an appropriately qualified provider",
];

const examples = [
  "I'm visiting the Philippines for five days because I'm considering establishing a business. I need meetings with a lawyer, accountant and broker and would like to inspect several locations.",
];

const pricing = [
  {
    name: "Remote Business Assistance",
    price: "From ₱2,500",
    detail:
      "Remote coordination, scheduling, vendor outreach, and initial research.",
    features: [
      "Scheduling & outreach",
      "Preliminary research",
      "Best for scoping visits",
    ],
  },
  {
    name: "Half-Day Business Concierge",
    price: "From ₱5,000",
    detail:
      "Up to 4 consecutive hours of dedicated remote or on-ground local support.",
    features: [
      "4 consecutive hours",
      "Remote or on-ground",
      "Meeting & site coordination",
    ],
  },
  {
    name: "Full-Day Business Concierge",
    price: "From ₱7,500",
    detail:
      "Up to 8 consecutive hours of dedicated remote or on-ground local support.",
    features: [
      "8 consecutive hours",
      "Remote or on-ground",
      "Multi-stop itineraries",
    ],
    popular: true,
  },
  {
    name: "Multi-Day Business Support",
    price: "From ₱20,000",
    detail:
      "Comprehensive multi-day itinerary execution and field coordination.",
    features: [
      "Multi-city execution",
      "Field coordination",
      "Dedicated coordinator",
    ],
  },
  {
    name: "Business Project / Local Execution",
    price: "From ₱25,000",
    detail: "Task-based local execution assignment with defined deliverables.",
    features: [
      "Defined deliverables",
      "Written scope of work",
      "Progress reporting",
    ],
  },
  {
    name: "Ongoing / Corporate Support",
    price: "Custom retainer",
    detail:
      "Dedicated monthly retainer for recurring on-ground administrative support.",
    features: [
      "Monthly retainer",
      "Recurring support",
      "Priority availability",
    ],
  },
];

const requirements = [
  "Scope of work must be agreed upon before engagement",
  "Professional services are separately handled and charged by the appropriate provider",
  "Complex assignments may require a written engagement agreement",
  "Client identification or additional verification may be required",
  "Deposits or advance payment may be required",
  "Business research from Astra is for coordination and informational purposes unless formal professional due diligence is separately engaged",
  "Introductions to third parties do not constitute guarantees or endorsements",
];

export default function BusinessConciergePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Concierge",
    description:
      "Local coordination and execution support for foreign executives, entrepreneurs, investors, and companies doing business or exploring opportunities in the Philippines.",
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
            <div className="absolute top-32 -left-24 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
          </div>

          <div className="container-wide">
            <div className="max-w-3xl pt-28">
              <p className="eyebrow mb-4">Service</p>
              <h1 className="heading-xl mb-5">Business Concierge</h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-8">
                Local coordination and execution support for foreign executives,
                entrepreneurs, investors, and companies doing business or
                exploring opportunities in the Philippines — without maintaining
                a permanent local team.
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
                  <Building2 className="h-4 w-4 text-emerald-600" />
                  Your temporary local team
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Handshake className="h-4 w-4 text-emerald-600" />
                  Vetted professional network
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Confidential by default
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
                {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" /> */}
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
                {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-warm-300 to-warm-200" /> */}
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

        {/* ── Example request ──────────────────────────────────── */}
        <section className="border-y border-warm-200/60 bg-gradient-to-b from-warm-100/60 to-warm-50/40 pb-16 sm:pb-20">
          <div className="container-wide section-padding !pb-16 sm:!pb-20">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Example request</p>
              <h2 className="heading-md">What this looks like in practice</h2>
            </div>
            <div className="max-w-2xl">
              {examples.map((quote) => (
                <blockquote
                  key={quote}
                  className="relative rounded-2xl border border-warm-200 bg-white p-6 shadow-md sm:p-8"
                >
                  {/* accent stripe */}
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-400 to-amber-300" />
                  <MessageSquare
                    className="h-5 w-5 text-amber-400 mb-4"
                    strokeWidth={1.75}
                  />
                  <p className="text-base text-foreground/80 leading-relaxed mb-5">
                    “{quote}”
                  </p>
                  <div className="flex items-center gap-2.5 border-t border-warm-100 pt-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <Check
                        className="h-3.5 w-3.5 text-emerald-700"
                        strokeWidth={3}
                      />
                    </span>
                    <p className="text-sm text-navy/70 font-medium">
                      Astra can coordinate the entire local itinerary.
                    </p>
                  </div>
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
                Service fees cover coordination and administrative support only.
                Professional fees and third-party expenses are always separate.
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
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/70"
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

        {/* ── Legal ────────────────────────────────────────────── */}
        <section className="border-t border-warm-200 bg-warm-50/40 pb-16 sm:pb-20">
          <div className="container-wide pt-14 sm:pt-16">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Policies for this service</p>
              <h2 className="heading-md">
                Terms, privacy, refunds &amp; limitations
              </h2>
              <p className="body mt-3 text-foreground/65">
                These apply specifically to Business Concierge. By requesting
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
                    <h4 className="mb-1.5 font-medium text-navy">
                      1.1 Acceptance &amp; Scope of Agreement
                    </h4>
                    <p>
                      By requesting, booking, or retaining the services of Astra
                      Concierge Philippines (&quot;Astra,&quot; &quot;we,&quot;
                      &quot;us,&quot; or &quot;our&quot;), you
                      (&quot;Client,&quot; &quot;Company,&quot; &quot;you&quot;)
                      agree to be bound by these Terms of Service. Astra
                      provides localized administrative, logistical, and
                      coordination support for foreign executives,
                      entrepreneurs, investors, and corporate entities exploring
                      or conducting business in the Philippines.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      1.2 Written Scope of Work &amp; Client Verification
                    </h4>
                    <ul className="list-disc space-y-1.5 pl-5">
                      <li>
                        <strong className="text-navy/80">
                          Scope approval:
                        </strong>{" "}
                        All business engagements must have a defined and
                        mutually agreed Scope of Work (SOW) before service
                        begins. Complex, multi-day, or project-based assignments
                        may require a separate written engagement agreement.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          KYC verification:
                        </strong>{" "}
                        Astra may require identity verification, corporate
                        documentation, passport copies, or proof of business
                        registration before accepting or starting an assignment.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      1.3 Description of Services
                    </h4>
                    <p className="mb-2">
                      Astra acts as an administrative facilitator, logistics
                      manager, and local operational point of contact. Permitted
                      activities include:
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        Scheduling and coordinating business meetings,
                        appointments, and venue bookings
                      </li>
                      <li>
                        Building and managing multi-city business visit
                        itineraries
                      </li>
                      <li>
                        Conducting preliminary, non-regulated local market
                        research and sourcing suppliers or vendors
                      </li>
                      <li>
                        Coordinating introductions and sessions with licensed
                        professionals (lawyers, accountants, brokers,
                        consultants)
                      </li>
                      <li>
                        Conducting permitted physical site visits, property
                        inspections, and administrative follow-ups on behalf of
                        overseas clients
                      </li>
                      <li>
                        Providing temporary on-the-ground support and logistics
                        for entities without a local presence
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      1.4 Fee Structure &amp; Pricing Model
                    </h4>
                    <p className="mb-3">
                      Astra’s service fees cover administrative labor, research
                      time, and local coordination only. Professional fees and
                      third-party expenses are strictly separate.
                    </p>
                    <div className="overflow-x-auto rounded-xl border border-warm-200">
                      <table className="w-full text-left text-sm">
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
                              <td className="px-4 py-2.5 font-medium text-navy">
                                {row.name}
                              </td>
                              <td className="px-4 py-2.5">{row.price}</td>
                              <td className="hidden px-4 py-2.5 text-foreground/65 sm:table-cell">
                                {row.detail}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      1.5 Professional Fees &amp; Pass-Through Disbursements
                    </h4>
                    <ul className="list-disc space-y-1.5 pl-5">
                      <li>
                        <strong className="text-navy/80">
                          Separate billing:
                        </strong>{" "}
                        Retainers and fees from third-party licensed
                        professionals (legal counsel, CPAs, real estate agents,
                        etc.) are paid by the Client directly to the provider,
                        or funded in advance through Astra.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Third-party expenses:
                        </strong>{" "}
                        Transportation, workspace, venues, government fees, and
                        procurement costs are not included in Astra’s service
                        fees.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Advance funding:
                        </strong>{" "}
                        Advance payment or deposit clearing is required before
                        confirming third-party bookings or starting field
                        execution.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      1.6 Governing Law &amp; Jurisdiction
                    </h4>
                    <p>
                      This Agreement is governed by the laws of the Republic of
                      the Philippines. Disputes are subject to the exclusive
                      jurisdiction of the competent courts of Davao City,
                      Philippines (or the designated corporate seat of Astra).
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
                    <h4 className="mb-1.5 font-medium text-navy">
                      2.1 Compliance with the Data Privacy Act
                    </h4>
                    <p>
                      Astra complies with Republic Act No. 10173 (Data Privacy
                      Act of 2012), its Implementing Rules and Regulations, and
                      applicable data protection directives.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      2.2 Information Collected
                    </h4>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        <strong className="text-navy/80">
                          Client identification:
                        </strong>{" "}
                        Contact name, corporate designation, business email,
                        phone, company registration details, and
                        government-issued IDs (for KYC)
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Operational data:
                        </strong>{" "}
                        Meeting notes, target site locations, vendor
                        requirements, business schedules, and travel itineraries
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Financial data:
                        </strong>{" "}
                        Proof of payments, bank transfer details, and billing
                        addresses
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      2.3 Commercial Confidentiality &amp; Non-Disclosure
                    </h4>
                    <p className="mb-2">
                      Information shared during an engagement — including
                      expansion plans, investment inquiries, site selection
                      preferences, and supplier discussions — is treated as
                      commercially sensitive. Astra agrees to:
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>
                        Maintain strict confidentiality over non-public client
                        business data
                      </li>
                      <li>
                        Limit internal access to personnel directly involved in
                        the assignment
                      </li>
                      <li>
                        Refrain from using client strategies or contacts for
                        unauthorized commercial gain
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      2.4 Disclosure to Professional Providers
                    </h4>
                    <p>
                      Astra may disclose relevant client information to vetted
                      third-party professionals (legal counsel, accounting
                      firms, venue operators, local partners). Disclosures are
                      limited to what is necessary to fulfill the authorized
                      coordination request.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      2.5 Data Retention
                    </h4>
                    <p>
                      Business verification and project documentation are
                      retained for the duration of the engagement and required
                      statutory accounting periods, after which digital files
                      are permanently deleted or anonymized.
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
                    <h4 className="mb-1.5 font-medium text-navy">
                      3.1 Standard Service Fee Cancellations
                    </h4>
                    <p className="mb-2">
                      Cancellations must be submitted in writing. Because Astra
                      reserves dedicated personnel upon booking:
                    </p>
                    <ul className="list-disc space-y-1.5 pl-5">
                      <li>
                        <strong className="text-navy/80">48+ hours</strong>{" "}
                        before service start: 80% refund (20% retained for admin
                        and setup)
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
                    <h4 className="mb-1.5 font-medium text-navy">
                      3.2 Retainers &amp; Custom Project Contracts
                    </h4>
                    <p>
                      For Business Project / Local Execution Assignments and
                      Ongoing Corporate Retainers, cancellation terms, milestone
                      payouts, and refunds are dictated by the written
                      engagement agreement. In the absence of specific terms,
                      work commenced beyond initial planning is non-refundable.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      3.3 Third-Party &amp; Professional Fee Refunds
                    </h4>
                    <p>
                      Astra service fee refunds do not cover payments to
                      third-party professionals, venues, transport, or
                      government agencies. Those are governed solely by each
                      provider’s policy. Astra bears no liability for
                      non-refundable third-party disbursements.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      3.4 Force Majeure &amp; Astra Cancellations
                    </h4>
                    <p className="mb-2">
                      If Astra cancels due to severe weather, natural disasters,
                      national emergencies, sudden regulatory travel
                      restrictions, or unforeseen safety risks:
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>
                        100% refund of unearned Astra service fees, or credit
                        toward rescheduled hours
                      </li>
                      <li>
                        Astra is not responsible for indirect commercial losses,
                        canceled flight costs, or third-party cancellation
                        penalties from Force Majeure
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
                    <h4 className="mb-1.5 font-medium text-navy">
                      4.1 Strict Exclusion of Regulated Professional Advice
                    </h4>
                    <p className="mb-2">
                      Astra is an administrative and logistical coordination
                      firm, not a professional services practice.
                    </p>
                    <ul className="list-disc space-y-1.5 pl-5">
                      <li>
                        <strong className="text-navy/80">
                          No legal advice:
                        </strong>{" "}
                        Astra does not draft contracts, issue legal opinions, or
                        represent clients in legal matters. Legal inquiries go
                        to independent licensed lawyers.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No tax or accounting advice:
                        </strong>{" "}
                        Astra does not perform formal tax auditing, accounting,
                        or official financial filing.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No immigration advice:
                        </strong>{" "}
                        Astra does not provide regulated immigration, visa
                        processing, or legal residency advisory.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No financial or investment advisory:
                        </strong>{" "}
                        Astra does not sell financial instruments, manage
                        investments, or provide regulated investment advice.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      4.2 Preliminary Nature of Research
                    </h4>
                    <p>
                      Market research, supplier lists, property notes, and
                      physical site checks from Astra are for preliminary
                      informational and logistical guidance only. They do not
                      constitute formal legal due diligence, environmental
                      audits, structural inspections, or certified financial
                      analysis. Clients must retain qualified licensed
                      professionals for official due diligence before binding
                      commercial transactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      4.3 No Guarantee of Business Outcomes
                    </h4>
                    <p className="mb-2">
                      Astra makes no warranties regarding commercial success and
                      does not guarantee:
                    </p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        Approval of permits, business registrations, visas, or
                        operational licenses
                      </li>
                      <li>
                        Securing financing, grants, investor backing, or bank
                        account openings
                      </li>
                      <li>
                        Third-party availability, pricing stability, or
                        willingness to contract
                      </li>
                      <li>
                        Profitability or commercial success of any transaction,
                        joint venture, or investment in the Philippines
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      4.4 Third-Party Introductions &amp; Performance
                    </h4>
                    <p>
                      Introductions to local professionals, vendors, suppliers,
                      or government contacts are provided as a courtesy only.
                      They do not constitute endorsement, warranty, or financial
                      guarantee of competence, creditworthiness, or performance.
                      Clients are responsible for independently evaluating and
                      contracting with third parties.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1.5 font-medium text-navy">
                      4.5 Limitation of Liability
                    </h4>
                    <p>
                      To the maximum extent permitted by Philippine law, Astra
                      is not liable for indirect, incidental, consequential,
                      special, or punitive damages — including lost profits,
                      lost opportunities, operational disruptions, or data loss
                      — arising from our services or third-party performance.
                      Maximum aggregate liability for direct claims shall not
                      exceed the total Astra service fees actually paid for the
                      specific engagement giving rise to the claim.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section-padding relative overflow-hidden bg-navy text-white">
          {/* ambient glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="container-narrow relative text-center">
            <div className="mb-5 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <Briefcase
                  className="h-5 w-5 text-amber-400"
                  strokeWidth={1.75}
                />
              </div>
            </div>
            <h2 className="font-serif mb-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Need someone on the ground?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              Tell us what you&apos;re trying to accomplish, the cities
              involved, and your timeline. We&apos;ll confirm scope and send a
              clear quote.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-navy shadow-lg shadow-amber-400/20 transition-colors hover:bg-amber-300"
            >
              Request Business Concierge
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
