import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageSquare,
  Layers,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom & Other Requests | Astra Concierge Philippines",
  description:
    "Not every request fits a category. Tell Astra what you’re trying to accomplish — we’ll assess whether we can handle it, coordinate the right provider, or build a custom scope. Initial review is free.",
  openGraph: {
    title: "Custom & Other Requests | Astra Concierge Philippines",
    description:
      "Multi-service, multi-city, and unusual requests. Free initial review. Clear scope before anything is confirmed.",
    type: "website",
  },
  alternates: {
    canonical: "/services/other",
  },
};

const canDo = [
  "Review requests that do not fall under the standard service categories",
  "Determine whether Astra can safely and legally execute the request",
  "Design a customized scope of work",
  "Coordinate requirements involving multiple Astra services",
  "Handle multi-city assignments",
  "Deploy local representatives where available",
  "Source appropriate third-party providers",
  "Coordinate one-time special projects",
  "Provide temporary local execution support",
  "Build ongoing support arrangements for individuals or businesses",
  "Refer the client to an appropriate professional or provider when Astra cannot perform the task directly",
];

const examples = [
  "I'm not sure which service I need. Can I explain what I'm trying to accomplish?",
  "I need someone in the Philippines to coordinate several different things for me.",
  "My company has a project in the Philippines and needs temporary local support.",
  "I need someone to represent me physically at a location and report back.",
  "I have an unusual request. Can Astra tell me whether you can handle it?",
  "I need assistance across several cities.",
];

const pricing = [
  {
    name: "Initial Request Review",
    price: "Free",
    detail:
      "Feasibility assessment, safety review, and preliminary consultation.",
  },
  {
    name: "Simple Remote Assistance",
    price: "From ₱1,500",
    detail:
      "Remote coordination, research, vendor outreach, or basic custom tasks.",
  },
  {
    name: "Physical Deployment",
    price: "From ₱2,500",
    detail:
      "Single-location field deployment for a specific custom task or representation.",
  },
  {
    name: "Half-Day Assignment",
    price: "From ₱4,500",
    detail:
      "Up to 4 consecutive hours of dedicated field execution or multi-stop coordination.",
  },
  {
    name: "Full-Day Assignment",
    price: "From ₱7,500",
    detail:
      "Up to 8 consecutive hours of dedicated field execution or multi-stop coordination.",
  },
  {
    name: "Multi-Day / Multi-City Project",
    price: "Custom quote",
    detail:
      "Tailored multi-region project management, complex logistics, or field teams.",
  },
  {
    name: "Dedicated Ongoing Support",
    price: "Custom retainer",
    detail:
      "Dedicated monthly retainer for recurring custom administrative support.",
  },
];

const generalLimits = [
  "All requests are subject to Astra review and acceptance",
  "Submission of a request does not automatically confirm the service",
  "Services are subject to availability",
  "Final scope and pricing must be confirmed before deployment",
  "Astra may decline requests outside its capabilities",
  "Astra may decline illegal, unsafe, suspicious, or unethical requests",
  "Services requiring licenses or professional qualifications will be referred to appropriately qualified providers",
  "Third-party services are subject to their own terms, availability, and pricing",
  "Astra cannot guarantee outcomes controlled by government agencies, third parties, or circumstances outside Astra’s reasonable control",
  "Additional expenses outside the approved scope require client approval",
  "Payment may be required before an assignment is confirmed",
];

export default function OtherServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom & Other Requests",
    description:
      "Custom scope evaluation, multi-service coordination, multi-city assignments, and ad-hoc local execution for requests that do not fit standard Astra service categories.",
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
              <h1 className="heading-xl mb-5">Other / Custom Requests</h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-6">
                Not every request fits neatly into a category. Tell Astra what
                you are trying to accomplish, and our team will assess whether
                we can handle it directly, coordinate the appropriate provider,
                or build a customized solution around your requirements.
              </p>
              <p className="text-sm text-navy/60 mb-8 max-w-xl">
                Have a different request? Tell us what you need. We&apos;ll
                review it and let you know whether Astra can handle it. Initial
                request review is free.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/request" className="btn-primary rounded-xl">
                  Submit a request
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#pricing" className="btn-secondary rounded-xl">
                  See pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What we can do */}
        <section className="pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="max-w-2xl mb-8">
              <h2 className="heading-md mb-3">What Astra can do</h2>
              <p className="body text-foreground/70">
                Custom work starts with a clear assessment. We only take on what
                we can do safely, legally, and well.
              </p>
            </div>
            <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
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
          </div>
        </section>

        {/* Example requests */}
        <section className="pb-16 sm:pb-20 bg-warm-100/50">
          <div className="container-wide section-padding !pb-16 sm:!pb-20">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Example requests</p>
              <h2 className="heading-md">What people typically ask for</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {examples.map((quote) => (
                <blockquote
                  key={quote}
                  className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6"
                >
                  <MessageSquare
                    className="h-4 w-4 text-amber-400 mb-3"
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

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-28 pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">Pricing</p>
              <h2 className="heading-md mb-3">Quotation-based</h2>
              <p className="body text-foreground/70">
                Service fees cover assessment, setup, coordination, and field
                execution. Third-party costs, disbursements, and travel are
                billed separately. Initial request review is free.
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

        {/* General limitations */}
        <section className="pb-16 sm:pb-20">
          <div className="container-wide">
            <div className="rounded-2xl border border-warm-200 bg-warm-50/60 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-5 w-5 text-navy/60" strokeWidth={1.75} />
                <h2 className="text-lg font-semibold text-navy">
                  General limitations for all services
                </h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {generalLimits.map((item) => (
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
                These apply specifically to custom and other requests. By
                submitting a request you agree to them.
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
                      1.1 Acceptance of Terms &amp; Scope of Agreement
                    </h4>
                    <p>
                      By submitting a custom request, booking an ad-hoc
                      assignment, or retaining the services of Astra Concierge
                      Philippines (&quot;Astra,&quot; &quot;we,&quot;
                      &quot;us,&quot; or &quot;our&quot;), you
                      (&quot;Client,&quot; &quot;you&quot;) agree to be bound by
                      these Terms of Service. These terms govern all
                      non-standard, multi-category, multi-city, and
                      custom-designed operational assignments executed by Astra
                      within the Philippines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.2 Nature of Custom Services
                    </h4>
                    <p className="mb-2">
                      For requests that do not fall under standard service
                      categories, Astra provides custom scope evaluation,
                      project design, administrative execution, and
                      multi-service coordination. Permitted activities include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Reviewing complex or non-standard client requirements
                      </li>
                      <li>
                        Assessing safety, feasibility, and legal compliance of
                        custom tasks
                      </li>
                      <li>
                        Designing tailored Scopes of Work (SOW) and service
                        plans
                      </li>
                      <li>
                        Coordinating requirements involving multiple Astra
                        service departments (e.g., transport, property, errands,
                        workspace)
                      </li>
                      <li>
                        Managing multi-city logistics and deploying local
                        representatives across supported regions
                      </li>
                      <li>
                        Sourcing vetted third-party vendors and coordinating
                        one-time special projects
                      </li>
                      <li>
                        Providing temporary on-the-ground operational support
                        for individuals or corporate entities
                      </li>
                      <li>
                        Establishing ongoing retainer arrangements for
                        customized administrative or logistical needs
                      </li>
                      <li>
                        Referring clients to licensed professionals when a task
                        exceeds Astra’s administrative scope
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.3 Request Review &amp; Pre-Deployment Approval
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          No automatic confirmation:
                        </strong>{" "}
                        Submission of an inquiry, form, or custom request does
                        not constitute a confirmed booking or binding agreement.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Review &amp; acceptance:
                        </strong>{" "}
                        All requests are subject to internal review. Astra may
                        accept, adjust, or decline any assignment based on
                        capability, staff safety, resource availability, and
                        legal compliance.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Formal quotation:
                        </strong>{" "}
                        Deployment occurs only after Astra issues a formal scope
                        description and pricing quote, and the Client provides
                        explicit written confirmation along with required
                        advance funding.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.4 Pricing Structure &amp; Service Tiers
                    </h4>
                    <p className="mb-3">
                      Service fees cover assessment time, administrative setup,
                      coordination, and field execution labor. Third-party
                      costs, disbursements, and travel expenses are billed
                      separately.
                    </p>
                    <div className="overflow-x-auto rounded-xl border border-warm-200">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-warm-50 text-navy/70">
                          <tr>
                            <th className="px-4 py-2.5 font-medium">
                              Service tier
                            </th>
                            <th className="px-4 py-2.5 font-medium">
                              Rate model
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
                      1.5 Third-Party Expenses &amp; Out-of-Scope Variations
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Separate billing:
                        </strong>{" "}
                        Transportation, tolls, parking, third-party vendor
                        charges, government fees, retail purchases, and
                        professional fees are not included in Astra’s service
                        fees.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Scope variations:
                        </strong>{" "}
                        Additional tasks, extra stops, extended hours, or
                        expense variations outside the approved Scope of Work
                        require written Client pre-approval and additional
                        funding before execution.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Advance funding:
                        </strong>{" "}
                        Advance payment of service fees and full deposit
                        clearing for pass-through expenses are required before
                        deploying personnel or confirming third-party bookings.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.6 Governing Law &amp; Jurisdiction
                    </h4>
                    <p>
                      This Agreement is governed by the laws of the Republic of
                      the Philippines. Disputes arising from custom assignments
                      are subject to the exclusive jurisdiction of the competent
                      courts in Davao City, Philippines (or the designated
                      corporate seat of Astra).
                    </p>
                  </div>
                </div>
              </article>

              {/* 2. Privacy */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  2. Privacy Policy
                </h3>
                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.1 Compliance with the Data Privacy Act
                    </h4>
                    <p>
                      Astra protects personal data gathered during custom
                      project evaluations in compliance with Republic Act No.
                      10173 (Data Privacy Act of 2012), its Implementing Rules
                      and Regulations, and related privacy directives.
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
                        Full name, contact details, business affiliation, and
                        government-issued ID (for verification or site access)
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Custom project briefings:
                        </strong>{" "}
                        Strategic context, location data, vendor details,
                        special instructions, and specific goals
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Project media &amp; outputs:
                        </strong>{" "}
                        Photos, videos, field notes, GPS logs, and status
                        updates
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Financial information:
                        </strong>{" "}
                        Payment confirmations, billing details, and
                        reimbursement receipts
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.3 Commercial &amp; Operational Confidentiality
                    </h4>
                    <p className="mb-2">
                      Non-public information shared during custom request
                      reviews — including proprietary project plans, commercial
                      expansion ideas, site selection choices, and personal
                      errands — is treated as strictly confidential. Astra
                      agrees to:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Use custom project details exclusively for evaluating,
                        quoting, and executing the requested assignment
                      </li>
                      <li>
                        Restrict internal access solely to personnel directly
                        involved in assignment execution
                      </li>
                      <li>
                        Refrain from selling, sharing, or utilizing client
                        project concepts for third-party commercial gain
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.4 Necessary Third-Party Disclosures
                    </h4>
                    <p>
                      To carry out complex custom requests, Astra may share
                      minimum required operational details with vetted
                      third-party vendors, venue managers, transport operators,
                      or licensed professionals. Disclosures are limited to what
                      is required to complete the specific task component
                      authorized by the Client.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.5 Data Retention &amp; File Disposal
                    </h4>
                    <p>
                      Custom project files, correspondence, and visual outputs
                      are stored in encrypted cloud systems. Project records are
                      retained for up to 12 months for quality assurance,
                      dispute resolution, and accounting compliance, then
                      permanently deleted or anonymized.
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
                      3.1 Standard Custom Assignment Cancellations
                    </h4>
                    <p className="mb-2">
                      Cancellations must be submitted in writing. Because custom
                      assignments involve dedicated staff scheduling and
                      resource locking:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">48+ hours</strong>{" "}
                        before deployment: 80% refund (20% retained for SOW
                        design, preliminary research, and setup)
                      </li>
                      <li>
                        <strong className="text-navy/80">24–48 hours</strong>{" "}
                        before: 50% refund
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Less than 24 hours / runner en route:
                        </strong>{" "}
                        Non-refundable
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.2 Custom Project Agreements &amp; Retainers
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        For multi-day/multi-city assignments, special projects,
                        and custom monthly retainers, cancellation parameters
                        and refund schedules are governed by the written Scope
                        of Work for that project.
                      </li>
                      <li>
                        In the absence of specific contractual clauses, work
                        commenced beyond the initial setup phase is calculated
                        pro-rata; completed milestones or retainer periods are
                        non-refundable.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.3 Pass-Through Expenses &amp; Third-Party
                      Non-Refundability
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        Astra service fee refunds do not cover funds already
                        disbursed to third parties (venue deposits, transit
                        tickets, professional retainers, purchased supplies).
                      </li>
                      <li>
                        Unspent advance disbursement funds are refunded in full.
                        Disbursed funds follow the refund policies of the
                        respective third-party vendors.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.4 Astra Right to Decline &amp; Force Majeure
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Declined requests:
                        </strong>{" "}
                        If Astra determines it cannot safely, legally, or
                        practically fulfill a task prior to service initiation,
                        100% of any advance payments or deposits are promptly
                        refunded.
                      </li>
                      <li>
                        <strong className="text-navy/80">Force Majeure:</strong>{" "}
                        If Astra cancels an active assignment due to extreme
                        typhoons, severe flooding, natural disasters, sudden
                        government restrictions, or major civil disruption,
                        Astra will issue a 100% refund for unearned service fees
                        or provide a credit toward rescheduled execution. Astra
                        accepts no liability for indirect losses from Force
                        Majeure.
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* 4. Limitations */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  4. Service Limitations &amp; General Service Terms
                </h3>
                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.1 Universal Service Limitations for All Astra Offerings
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Subject to review &amp; acceptance:
                        </strong>{" "}
                        Submission of any request does not automatically confirm
                        service. Every request is subject to review and formal
                        acceptance.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Subject to availability:
                        </strong>{" "}
                        Services, drivers, field staff, and third-party bookings
                        remain subject to availability at confirmation.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Prior scope &amp; pricing confirmation:
                        </strong>{" "}
                        Final scope and pricing must be confirmed in writing
                        before personnel deployment.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Right of refusal:
                        </strong>{" "}
                        Astra may decline any request outside its operational
                        capabilities or staff safety thresholds.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Advance payment:
                        </strong>{" "}
                        Full payment of service fees and cleared deposits for
                        estimated expenses are required before an assignment is
                        confirmed or commenced.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.2 Prohibited Activities &amp; Ethical Boundaries
                    </h4>
                    <p className="mb-2">
                      Astra enforces a zero-tolerance policy. Astra will not
                      fulfill requests that involve:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Any activity that violates laws of the Republic of the
                        Philippines
                      </li>
                      <li>
                        Payment of bribes, kickbacks, or unofficial facilitation
                        fees
                      </li>
                      <li>
                        Falsification of records, fraudulent documents, or
                        impersonation
                      </li>
                      <li>
                        Money laundering, suspicious financial movements, or
                        unauthorized cash distributions
                      </li>
                      <li>
                        Purchasing, handling, or transporting illegal drugs,
                        unregistered firearms, weapons, explosives, or hazardous
                        contraband
                      </li>
                      <li>Adult, escort, or sexual services of any kind</li>
                      <li>
                        Stalking, unauthorized surveillance, invasion of
                        privacy, or unlawful data collection
                      </li>
                      <li>
                        Accessing private financial, social media, or
                        communication accounts without legal authority
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.3 Referrals &amp; Regulated Professional Services
                    </h4>
                    <p>
                      Astra functions solely as an administrative, logistical,
                      and local execution coordinator. Tasks requiring
                      professional licenses, government certifications, or
                      statutory accreditations (legal advice, tax filing,
                      accounting, real estate brokerage, structural engineering,
                      formal medical care) are referred exclusively to
                      appropriately qualified and licensed third-party
                      providers. Astra does not directly provide licensed
                      professional advice or regulated services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.4 Disclaimers on Outcomes Controlled by External
                      Entities
                    </h4>
                    <p className="mb-2">
                      Astra exercises reasonable care in executing assignments
                      but does not guarantee outcomes controlled by external
                      entities, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Approval, issuance, or processing speeds of government
                        permits, visas, licenses, or registrations
                      </li>
                      <li>
                        Third-party vendor availability, pricing stability,
                        cancellation policies, or service delays
                      </li>
                      <li>
                        Commercial success, financial profitability, or
                        successful closing of business transactions
                      </li>
                      <li>
                        Weather delays, severe traffic, transit interruptions,
                        or acts of nature
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.5 Limitation of Liability
                    </h4>
                    <p>
                      To the maximum extent permitted under Philippine law,
                      Astra is not liable for indirect, incidental,
                      consequential, special, or punitive damages — including
                      lost profits, lost commercial opportunities, business
                      interruption, or third-party vendor failures — arising
                      from our custom services. Maximum aggregate financial
                      liability for any claim related to a custom assignment
                      shall not exceed the total Astra service fees actually
                      paid for that specific assignment.
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
                <Layers className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Have a different request?
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us what you&apos;re trying to accomplish. We&apos;ll review
              it and let you know whether Astra can handle it — directly,
              through a coordinated provider, or as a custom scope. Initial
              review is free.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
            >
              Submit a request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
