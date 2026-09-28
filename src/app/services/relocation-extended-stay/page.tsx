import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Home,
  FileText,
  ShieldCheck,
  Clock3,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Relocation & Extended Stay in the Philippines | Astra Concierge",
  description:
    "Practical support for moving to or staying long-term in the Philippines. Accommodation search, orientation, transportation, workspace, and settling-in coordination. From ₱2,500.",
  openGraph: {
    title: "Relocation & Extended Stay | Astra Concierge Philippines",
    description:
      "From arrival planning to settling in — accommodation, orientation, workspace, and local coordination. From ₱2,500.",
    type: "website",
  },
  alternates: {
    canonical: "/services/relocation",
  },
};

const canDo = [
  "Conduct relocation planning consultations",
  "Help clients understand their chosen city before arrival",
  "Research accommodation options",
  "Coordinate property searches and viewings",
  "Arrange temporary accommodation",
  "Coordinate airport arrival and transportation",
  "Provide local orientation",
  "Assist with coworking and workspace arrangements",
  "Help identify local service providers",
  "Coordinate appointments with appropriate professionals",
  "Assist with practical settling-in requirements",
  "Coordinate recurring transportation or errands",
  "Assist foreign employees and their families with local arrangements",
  "Provide ongoing local concierge support",
  "Coordinate qualified immigration, legal, tax, property, or other professionals when required",
];

const cannotDo = [
  "Provide immigration advice",
  "Provide legal or tax advice",
  "Guarantee visa or immigration approval",
  "Guarantee work permits",
  "Guarantee lease approval",
  "Guarantee property availability",
  "Guarantee banking or financial approvals",
  "Guarantee government registrations",
  "Guarantee school admission",
  "Make government decisions on behalf of the client",
];

const examples = [
  "I'm moving to Davao for six months. Can you help me find somewhere to stay and get settled?",
  "I'm a digital nomad moving to Cebu. I need accommodation, workspace, transportation and local orientation.",
  "Our company is relocating an employee to the Philippines. Can Astra assist them?",
  "I'm considering retiring in the Philippines and want someone to help me understand Davao before deciding.",
  "Can you arrange property viewings, coworking options and transportation during my relocation visit?",
  "I've just arrived. Can someone accompany me while I set up the practical things I need?",
];

const pricing = [
  {
    name: "Relocation Consultation / Planning",
    price: "From ₱2,500",
    detail:
      "Remote pre-arrival planning session, needs assessment, and custom relocation roadmap.",
    features: [
      "Pre-arrival planning session",
      "Needs assessment",
      "Custom relocation roadmap",
    ],
  },
  {
    name: "Half-Day Orientation",
    price: "From ₱4,500",
    detail:
      "Up to 4 consecutive hours of dedicated local orientation, neighborhood tours, or viewings.",
    features: [
      "Up to 4 consecutive hours",
      "Neighborhood orientation",
      "Viewings support",
    ],
  },
  {
    name: "Full-Day Orientation",
    price: "From ₱7,500",
    detail:
      "Up to 8 consecutive hours of dedicated local orientation, facility visits, and settling-in assistance.",
    features: [
      "Up to 8 consecutive hours",
      "Facility visits",
      "Settling-in assistance",
    ],
  },
  {
    name: "Basic Relocation Assistance Package",
    price: "From ₱10,000",
    detail:
      "Structured package covering arrival coordination, orientation, accommodation search, and initial settling-in.",
    features: [
      "Arrival coordination",
      "Orientation & search",
      "Initial settling-in",
    ],
    popular: true,
  },
  {
    name: "Comprehensive Relocation Coordination",
    price: "From ₱25,000",
    detail:
      "Full end-to-end relocation management, multi-property viewings, vendor coordination, and ongoing support.",
    features: [
      "End-to-end management",
      "Multi-property viewings",
      "Vendor coordination",
    ],
  },
  {
    name: "Corporate / Extended Support",
    price: "Custom quote",
    detail:
      "Tailored employee relocation packages or ongoing monthly concierge retainers.",
    features: [
      "Employee relocation packages",
      "Monthly retainer options",
      "Tailored scope",
    ],
  },
];

const requirements = [
  "Astra primarily provides research, coordination, orientation, and local assistance",
  "Immigration matters will be referred to appropriate professionals",
  "Legal and tax matters will be referred to appropriate professionals",
  "Property transactions will be handled through appropriately licensed professionals",
  "Accommodation remains subject to landlord or property-provider availability and approval",
  "Third-party deposits, rentals, utilities, professional fees, and other expenses are separate",
  "Client remains responsible for compliance with applicable Philippine laws and requirements",
  "Advance payment may be required for third-party arrangements",
];

export default function RelocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Relocation & Extended Stay",
    description:
      "Practical support for people moving to or spending an extended period in the Philippines — accommodation and property search, local orientation, transportation, workspace, and settling-in coordination.",
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
              <h1 className="heading-xl mb-5">
                Relocation &amp; Extended Stay
              </h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-8">
                Practical support for people moving to or spending an extended
                period in the Philippines. Accommodation and property searches,
                local orientation, transportation, workspace, service providers,
                appointments, and other settling-in requirements — so the
                transition is easier and more organized.
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
                  Arrival to settling-in
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
                Service fees cover research, administrative coordination,
                orientation, and local support only. Accommodation, deposits,
                transportation, professional services, and third-party expenses
                are always separate.
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
                These apply specifically to Relocation &amp; Extended Stay. By
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
                      By requesting, booking, or retaining the services of Astra
                      Concierge Philippines (&quot;Astra,&quot; &quot;we,&quot;
                      &quot;us,&quot; or &quot;our&quot;), you
                      (&quot;Client,&quot; &quot;Expat,&quot; &quot;Corporate
                      Client,&quot; &quot;you&quot;) agree to be bound by these
                      Terms of Service. Astra provides non-regulated
                      administrative, logistical, orientation, and settling-in
                      coordination for individuals, digital nomads, retirees,
                      foreign employees, and families relocating to or staying
                      long-term in the Philippines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.2 Description of Services
                    </h4>
                    <p className="mb-2">
                      Astra acts as an administrative facilitator, logistics
                      coordinator, and local settling-in contact. Permitted
                      activities include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Conducting relocation planning consultations and
                        pre-arrival orientation
                      </li>
                      <li>
                        Researching accommodation options, temporary housing,
                        and long-term rental listings
                      </li>
                      <li>
                        Coordinating property viewings and accompanying clients
                        during site visits
                      </li>
                      <li>
                        Arranging airport pickup, arrival logistics, and local
                        transportation
                      </li>
                      <li>
                        Providing local city orientation, neighborhood
                        overviews, and daily living guidance
                      </li>
                      <li>
                        Coordinating workspace, coworking space, and internet
                        setup arrangements
                      </li>
                      <li>
                        Identifying local service providers, medical facilities,
                        utilities, and lifestyle resources
                      </li>
                      <li>
                        Coordinating appointments with accredited third-party
                        professionals (immigration attorneys, tax advisors,
                        licensed brokers, school admissions offices)
                      </li>
                      <li>
                        Assisting foreign employees and corporate assignees with
                        practical local arrangements
                      </li>
                      <li>
                        Providing ongoing local concierge support and recurring
                        settling-in assistance
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.3 Service Tiers &amp; Pricing Structure
                    </h4>
                    <p className="mb-3">
                      Service fees cover research time, administrative
                      coordination, orientation labor, and local support only.
                      Professional fees and third-party expenses are strictly
                      separate.
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
                      1.4 Third-Party Costs &amp; Pass-Through Expenses
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Separate expenses:
                        </strong>{" "}
                        Rent, security deposits, lease reservation fees, utility
                        connections, coworking memberships, school
                        tuition/application fees, flight tickets, temporary
                        hotel stays, and professional fees (attorneys, CPAs,
                        brokers) are not included in Astra’s service fee.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Direct billing:
                        </strong>{" "}
                        Clients pay third-party providers, landlords, and
                        educational institutions directly whenever possible.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Advance funding:
                        </strong>{" "}
                        Where Astra pays a third party or disburses deposits on
                        the Client’s behalf, cleared advance funding is required
                        before confirming any arrangement.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.5 Client Responsibilities &amp; Legal Compliance
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        The Client remains solely responsible for complying with
                        all laws, rules, and immigration regulations of the
                        Republic of the Philippines.
                      </li>
                      <li>
                        The Client agrees to supply complete, truthful, and
                        timely documentation regarding identity, travel
                        schedules, family members, and housing criteria.
                      </li>
                      <li>
                        The Client must secure independent travel, health, and
                        property insurance coverage prior to relocation.
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
                      Astra complies with Republic Act No. 10173 (Data Privacy
                      Act of 2012), its Implementing Rules and Regulations, and
                      applicable data protection directives.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.2 Information We Collect
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong className="text-navy/80">
                          Personal &amp; family contact:
                        </strong>{" "}
                        Full names, contact numbers, email, messaging handles,
                        and family member details (when coordinating family
                        relocations)
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Travel &amp; immigration data:
                        </strong>{" "}
                        Flight itineraries, entry dates, visa types, passport
                        copies, and relocation timelines (for logistics
                        coordination only)
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Housing &amp; lifestyle preferences:
                        </strong>{" "}
                        Accommodation requirements, budget, workspace needs,
                        medical preferences, and school requirements
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Financial details:
                        </strong>{" "}
                        Payment receipts, wire transfer confirmations, and
                        billing addresses
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.3 Purpose of Processing
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Formulate custom relocation schedules, housing lists,
                        and orientation itineraries
                      </li>
                      <li>
                        Coordinate viewings, appointments, and introductions
                        with landlords, coworking spaces, schools, and
                        professional providers
                      </li>
                      <li>
                        Facilitate airport pickups, driver dispatch, and local
                        transportation
                      </li>
                      <li>
                        Process service billing, invoices, and expense
                        reimbursements
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.4 Disclosure to Third Parties
                    </h4>
                    <p>
                      Astra does not sell or rent personal information. Relevant
                      data is disclosed only to vetted third parties necessary
                      to complete the relocation request (property owners,
                      licensed brokers, building administration, transport
                      operators, immigration counsel). Disclosures are limited
                      to necessary coordination details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.5 Data Retention &amp; Security
                    </h4>
                    <p>
                      Relocation records, communication logs, and identity
                      documents are stored in secure, encrypted environments.
                      Personal data is retained for the duration of the
                      engagement and required accounting periods (up to 12
                      months post-engagement), then permanently deleted or
                      anonymized.
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
                      3.1 Astra Standard Service Fee Cancellations
                    </h4>
                    <p className="mb-2">
                      Cancellations must be submitted in writing. Because Astra
                      allocates staff time and coordinates with local partners
                      upon booking:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">48+ hours</strong>{" "}
                        before scheduled service start: 80% refund (20% retained
                        for admin setup and planning)
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
                      3.2 Relocation Packages &amp; Retainers
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        Package cancellations requested prior to service
                        initiation follow the standard 80% refund parameter.
                      </li>
                      <li>
                        Once work, research, site checks, or orientation
                        sessions have commenced, refunds are calculated pro-rata
                        based on hours spent and milestones delivered. Completed
                        orientation days or custom research outputs are
                        non-refundable.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.3 Third-Party &amp; Housing Expenses
                    </h4>
                    <p>
                      Astra service fee refunds do not cover third-party costs
                      (hotel reservations, landlord deposits, lease reservation
                      fees, coworking fees, professional retainers). Those are
                      governed exclusively by each provider’s policy. Astra
                      accepts no liability for non-refundable third-party
                      disbursements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.4 Force Majeure &amp; Astra Cancellations
                    </h4>
                    <p className="mb-2">
                      If Astra cancels due to severe typhoons, natural
                      disasters, sudden government border closures, civil
                      disturbance, or health emergencies:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        100% refund of unearned service fees, or credit toward
                        rescheduled relocation support
                      </li>
                      <li>
                        Astra is not liable for secondary expenses, canceled
                        lease agreements, or flight rebooking fees from Force
                        Majeure
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
                      4.1 Facilitator &amp; Administrative Role Disclaimer
                    </h4>
                    <p>
                      Astra functions as an administrative coordinator and local
                      guide. Astra is not a law firm, immigration agency, tax
                      advisory firm, licensed real estate brokerage, educational
                      placement agency, or bank.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.2 Explicit Exclusions &amp; Guarantees Disclaimed
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          No legal, tax, or immigration advice:
                        </strong>{" "}
                        Astra does not provide legal opinions, tax structuring,
                        or regulated immigration advice. Those inquiries are
                        referred to accredited professionals.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No visa or work permit guarantees:
                        </strong>{" "}
                        Astra cannot guarantee visa issuance, ACR I-Card
                        approvals, quota visas, SRRV, or Alien Employment Permit
                        (AEP) approvals — these rest with Philippine government
                        agencies (Bureau of Immigration, DOLE, PRA, etc.).
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No lease or property approval guarantees:
                        </strong>{" "}
                        Astra cannot guarantee landlord approval of a tenancy
                        application, property availability, rental prices, or
                        specific lease terms.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No financial or banking guarantees:
                        </strong>{" "}
                        Astra cannot guarantee bank account openings, credit
                        card approvals, money transfers, or financial
                        institution registrations.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No school admission guarantees:
                        </strong>{" "}
                        Astra cannot guarantee acceptance or enrollment into
                        local or international schools.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No representation before government:
                        </strong>{" "}
                        Astra cannot make official legal or government
                        declarations on behalf of the Client.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.3 Licensed Service Referrals
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        Real estate acquisitions and formal lease contracts are
                        handled through appropriately licensed real estate
                        brokers or legal counsel.
                      </li>
                      <li>
                        Visa and immigration filings are handled directly by the
                        Client or referred to accredited immigration lawyers or
                        agency partners.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.4 Limitation of Liability
                    </h4>
                    <p>
                      To the maximum extent permitted under Philippine law,
                      Astra is not liable for direct, indirect, incidental,
                      consequential, or special damages — including lost
                      security deposits, lease disputes, failed visa
                      applications, missed business opportunities, or personal
                      losses — arising from our relocation services or
                      third-party performance. Total aggregate liability for any
                      claim related to a relocation engagement shall not exceed
                      the total Astra service fees actually paid for that
                      specific service.
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
                <Home className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Planning a move or extended stay?
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us the city, your timeline, and what you need help with —
              accommodation, orientation, workspace, or full settling-in
              support. We&apos;ll confirm scope and send a clear quote.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
            >
              Request Relocation Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
