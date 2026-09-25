import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Briefcase,
  FileText,
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
  },
  {
    name: "Half-Day Business Concierge",
    price: "From ₱5,000",
    detail:
      "Up to 4 consecutive hours of dedicated remote or on-ground local support.",
  },
  {
    name: "Full-Day Business Concierge",
    price: "From ₱7,500",
    detail:
      "Up to 8 consecutive hours of dedicated remote or on-ground local support.",
  },
  {
    name: "Multi-Day Business Support",
    price: "From ₱20,000",
    detail:
      "Comprehensive multi-day itinerary execution and field coordination.",
  },
  {
    name: "Business Project / Local Execution",
    price: "From ₱25,000",
    detail: "Task-based local execution assignment with defined deliverables.",
  },
  {
    name: "Ongoing / Corporate Support",
    price: "Custom retainer",
    detail:
      "Dedicated monthly retainer for recurring on-ground administrative support.",
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

      <div className="pt-28">
        {/* Hero */}
        <section className="pb-14 sm:pb-16 lg:pb-20">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Service</p>
              <h1 className="heading-xl mb-5">Business Concierge</h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-8">
                Local coordination and execution support for foreign executives,
                entrepreneurs, investors, and companies doing business or
                exploring opportunities in the Philippines — without maintaining
                a permanent local team.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/request" className="btn-primary rounded-xl">
                  Request this service
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#pricing" className="btn-secondary rounded-xl">
                  See pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Can / Cannot */}
        <section className="pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Check className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h2 className="text-lg font-semibold text-navy">
                    What Astra can do
                  </h2>
                </div>
                <ul className="space-y-3">
                  {canDo.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-foreground/75 leading-relaxed"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5"
                        strokeWidth={2.25}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-warm-200 bg-warm-50/80 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <X className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h2 className="text-lg font-semibold text-navy">
                    What Astra cannot do
                  </h2>
                </div>
                <ul className="space-y-3">
                  {cannotDo.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-foreground/70 leading-relaxed"
                    >
                      <X
                        className="h-4 w-4 shrink-0 text-navy/40 mt-0.5"
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

        {/* Example requests */}
        <section className="pb-16 sm:pb-20 bg-warm-100/50">
          <div className="container-wide section-padding !pb-16 sm:!pb-20">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Example request</p>
              <h2 className="heading-md">What this looks like in practice</h2>
            </div>
            <div className="max-w-2xl">
              {examples.map((quote) => (
                <blockquote
                  key={quote}
                  className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8"
                >
                  <MessageSquare
                    className="h-4 w-4 text-amber-400 mb-4"
                    strokeWidth={1.75}
                  />
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    “{quote}”
                  </p>
                  <p className="text-sm text-navy/60 font-medium">
                    Astra can coordinate the entire local itinerary.
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-28 pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Pricing</p>
              <h2 className="heading-md mb-3">Quotation-based</h2>
              <p className="body text-foreground/70">
                Service fees cover coordination and administrative support only.
                Professional fees and third-party expenses are always separate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pricing.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6 flex flex-col"
                >
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-navy/45 mb-2">
                    {tier.name}
                  </p>
                  <p className="text-xl font-semibold text-navy mb-3">
                    {tier.price}
                  </p>
                  <p className="text-sm text-foreground/65 leading-relaxed mt-auto">
                    {tier.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="rounded-2xl border border-warm-200 bg-warm-50/60 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-5 w-5 text-navy/60" strokeWidth={1.75} />
                <h2 className="text-lg font-semibold text-navy">
                  Service requirements &amp; limits
                </h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm text-foreground/70 leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
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
                These apply specifically to Business Concierge. By requesting
                this service you agree to them.
              </p>
            </div>

            <div className="max-w-3xl space-y-12 sm:space-y-14">
              {/* 1. Terms */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  1. Terms of Service
                </h3>

                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
                      1.2 Written Scope of Work &amp; Client Verification
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
                      1.3 Description of Services
                    </h4>
                    <p className="mb-2">
                      Astra acts as an administrative facilitator, logistics
                      manager, and local operational point of contact. Permitted
                      activities include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
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
                    <h4 className="font-medium text-navy mb-1.5">
                      1.4 Fee Structure &amp; Pricing Model
                    </h4>
                    <p className="mb-3">
                      Astra’s service fees cover administrative labor, research
                      time, and local coordination only. Professional fees and
                      third-party expenses are strictly separate.
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
                      1.5 Professional Fees &amp; Pass-Through Disbursements
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
              </article>

              {/* 2. Privacy */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  2. Privacy &amp; Confidentiality Policy
                </h3>
                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
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
                      2.2 Information Collected
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
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
                    <h4 className="font-medium text-navy mb-1.5">
                      2.3 Commercial Confidentiality &amp; Non-Disclosure
                    </h4>
                    <p className="mb-2">
                      Information shared during an engagement — including
                      expansion plans, investment inquiries, site selection
                      preferences, and supplier discussions — is treated as
                      commercially sensitive. Astra agrees to:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
              </article>

              {/* 3. Refund */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  3. Refund &amp; Cancellation Policy
                </h3>
                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.1 Standard Service Fee Cancellations
                    </h4>
                    <p className="mb-2">
                      Cancellations must be submitted in writing. Because Astra
                      reserves dedicated personnel upon booking:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
                      3.4 Force Majeure &amp; Astra Cancellations
                    </h4>
                    <p className="mb-2">
                      If Astra cancels due to severe weather, natural disasters,
                      national emergencies, sudden regulatory travel
                      restrictions, or unforeseen safety risks:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
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
              </article>

              {/* 4. Limitations */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  4. Service Limitations &amp; Disclaimers
                </h3>
                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.1 Strict Exclusion of Regulated Professional Advice
                    </h4>
                    <p className="mb-2">
                      Astra is an administrative and logistical coordination
                      firm, not a professional services practice.
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
                      4.3 No Guarantee of Business Outcomes
                    </h4>
                    <p className="mb-2">
                      Astra makes no warranties regarding commercial success and
                      does not guarantee:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
                    <h4 className="font-medium text-navy mb-1.5">
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
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="container-narrow text-center">
            <div className="flex justify-center mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Briefcase
                  className="h-5 w-5 text-amber-400"
                  strokeWidth={1.75}
                />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Need someone on the ground?
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us what you&apos;re trying to accomplish, the cities
              involved, and your timeline. We&apos;ll confirm scope and send a
              clear quote.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
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
