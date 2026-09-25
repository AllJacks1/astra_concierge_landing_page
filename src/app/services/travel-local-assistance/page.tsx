import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Plane,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travel & Local Assistance in the Philippines | Astra Concierge",
  description:
    "Practical on-the-ground support for visitors to the Philippines. Airport coordination, itinerary help, reservations, workspace, and local troubleshooting — with clear pricing and limits.",
  openGraph: {
    title: "Travel & Local Assistance | Astra Concierge Philippines",
    description:
      "A reliable local point of contact for your visit — from arrival to everyday assistance. Quotation-based, clear scope, verified coordinators.",
    type: "website",
  },
  alternates: {
    canonical: "/services/travel-local-assistance",
  },
};

const canDo = [
  "Local orientation",
  "Itinerary coordination",
  "Restaurant and reservation coordination",
  "Airport arrival coordination",
  "Local recommendations",
  "Workspace coordination",
  "Appointment scheduling",
  "Communication with local establishments",
  "Basic sourcing",
  "Local troubleshooting",
  "General visitor assistance",
];

const cannotDo = [
  "Guarantee visa or immigration approval",
  "Guarantee airline, hotel, restaurant, attraction, or third-party availability",
  "Guarantee third-party prices, schedules, cancellations, or refunds",
  "Provide regulated travel or tour services without the required accreditation",
  "Facilitate illegal, unsafe, or prohibited activities",
];

const examples = [
  "I'm arriving in Davao for the first time. Can someone help me arrange everything I need for my first day?",
  "I'll be in Cebu for four days and need help coordinating transportation and appointments.",
  "I need somewhere professional to work while I'm in Davao.",
];

const pricing = [
  {
    name: "Remote Travel Assistance",
    price: "From ₱1,500",
    detail: "Remote coordination, messaging, research, and booking support.",
  },
  {
    name: "Half-Day Concierge",
    price: "From ₱4,500",
    detail:
      "Up to 4 consecutive hours of dedicated remote or on-ground coordination.",
  },
  {
    name: "Full-Day Concierge",
    price: "From ₱7,500",
    detail:
      "Up to 8 consecutive hours of dedicated remote or on-ground coordination.",
  },
  {
    name: "Multi-Day Assistance",
    price: "Custom quote",
    detail:
      "Tailored multi-day management based on itinerary complexity and hours.",
  },
];

const requirements = [
  "Subject to availability and request review",
  "Third-party costs are separate from Astra’s service fee",
  "You may be required to pay hotels, airlines, or other providers directly",
  "Regulated services are coordinated through appropriately qualified providers",
  "Third-party bookings remain subject to the provider’s own terms",
  "Advance payment may be required before arrangements are confirmed",
];

export default function TravelAssistancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Travel & Local Assistance",
    description:
      "Practical, personalized support for visitors navigating the Philippines — arrival arrangements, local transportation, reservations, appointments, workspace, and everyday assistance.",
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
              <h1 className="heading-xl mb-5">Travel &amp; Local Assistance</h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-8">
                Practical, personalized support for visitors navigating the
                Philippines. From arrival arrangements and local transport to
                reservations, appointments, workspace, and everyday assistance —
                a reliable local point of contact throughout your stay.
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
              <p className="eyebrow mb-3">Example requests</p>
              <h2 className="heading-md">What people typically ask for</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
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
                Service fees cover coordination time only. Transportation,
                bookings, tickets, purchases, and other third-party expenses are
                always separate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                These apply specifically to Travel &amp; Local Assistance. By
                requesting this service you agree to them.
              </p>
            </div>

            <div className="max-w-3xl space-y-12 sm:space-y-14 prose-legal">
              {/* 1. Terms */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  1. Terms of Service
                </h3>

                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.1 Acceptance of Terms
                    </h4>
                    <p>
                      By requesting, booking, or using the services provided by
                      Astra Concierge Philippines (&quot;Astra,&quot;
                      &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you
                      (&quot;Client,&quot; &quot;Visitor,&quot; &quot;you&quot;)
                      agree to be bound by these Terms of Service. If you do not
                      agree, you must not engage or use Astra’s services.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.2 Description of Services
                    </h4>
                    <p className="mb-2">
                      Astra provides practical, non-regulated travel
                      coordination, concierge, and local assistance services
                      within the Philippines. Services include, but are not
                      limited to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-2">
                      <li>Local orientation and visitor recommendations</li>
                      <li>Itinerary planning and schedule coordination</li>
                      <li>
                        Reservations, restaurant bookings, and appointment
                        scheduling
                      </li>
                      <li>
                        Airport arrival assistance and local transport
                        arrangement
                      </li>
                      <li>Workspace and venue coordination</li>
                      <li>
                        Basic sourcing and communication with local
                        establishments
                      </li>
                      <li>General on-ground local troubleshooting</li>
                    </ul>
                    <p>
                      Astra operates strictly as an intermediary and assistant
                      coordinator. Astra is not a licensed travel agency, tour
                      operator, transportation carrier, insurer, or health
                      provider unless explicitly stated and accredited.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.3 Service Fees &amp; Pricing
                    </h4>
                    <p className="mb-3">
                      Astra’s service fees cover coordination, research, and
                      administrative support time only. Rates are
                      quotation-based:
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
                              Inclusions
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
                        Flights, hotels, car rentals, ride-hailing, entrance
                        fees, meals, venue rentals, and emergency purchases are
                        not included in Astra’s service fee.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Direct payment:
                        </strong>{" "}
                        Clients may be required to pay third-party providers
                        directly.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Advance funding:
                        </strong>{" "}
                        Where Astra pays a third party on your behalf, upfront
                        payment or deposit is required before confirmation. A
                        handling fee may apply for disbursements.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.5 Client Responsibilities
                    </h4>
                    <p className="mb-1">You agree to:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Provide accurate, complete, and timely information
                        (travel dates, flight numbers, identity documents,
                        preferences).
                      </li>
                      <li>
                        Comply with all applicable laws of the Republic of the
                        Philippines.
                      </li>
                      <li>
                        Treat Astra coordinators and third-party providers with
                        courtesy.
                      </li>
                      <li>
                        Secure your own travel, health, and property insurance
                        prior to travel.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.6 Governing Law &amp; Jurisdiction
                    </h4>
                    <p>
                      These Terms are governed by the laws of the Republic of
                      the Philippines. Disputes are subject to the exclusive
                      jurisdiction of the courts in Davao City, Philippines (or
                      the designated regional seat of Astra’s operating entity).
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
                      Astra protects personal information in compliance with
                      Republic Act No. 10173 (Data Privacy Act of 2012), its
                      Implementing Rules and Regulations, and related issuances.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.2 Information We Collect
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong className="text-navy/80">Contact:</strong> Name,
                        email, phone / WhatsApp / Telegram
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Travel details:
                        </strong>{" "}
                        Flight itineraries, passport copies (when required for
                        third-party bookings), hotel arrangements,
                        arrival/departure schedules
                      </li>
                      <li>
                        <strong className="text-navy/80">Preferences:</strong>{" "}
                        Dietary needs, accessibility, workspace requirements,
                        requested itineraries
                      </li>
                      <li>
                        <strong className="text-navy/80">Financial:</strong>{" "}
                        Payment receipts, billing details, transfer references
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.3 Purpose of Processing
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Provide, execute, and troubleshoot requested assistance
                      </li>
                      <li>
                        Communicate with local vendors, transport, hotels, and
                        restaurants on your behalf
                      </li>
                      <li>
                        Process invoicing, payments, and pass-through expenses
                      </li>
                      <li>
                        Respond to inquiries, emergencies, or support issues
                        during your stay
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.4 Disclosure to Third Parties
                    </h4>
                    <p>
                      Astra does not sell, trade, or rent your personal data. We
                      disclose information only to parties necessary to carry
                      out your request, and only the minimum data required.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.5 Data Retention and Security
                    </h4>
                    <p>
                      Data is stored using encrypted digital storage and secure
                      channels. Travel itineraries and passport documents are
                      retained only as long as needed to complete the
                      engagement, then archived or deleted per legal and
                      accounting standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.6 Client Rights
                    </h4>
                    <p>
                      Under the Data Privacy Act of 2012, you may request to be
                      informed, access, correct, object to, or erase your
                      personal data held by Astra. Contact Astra’s designated
                      Data Protection Officer in writing.
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
                      3.1 Astra Service Fees
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          More than 48 hours
                        </strong>{" "}
                        before service start: 80% refund (20% retained for admin
                        and planning)
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
                      3.2 Third-Party Costs &amp; Deposits
                    </h4>
                    <p>
                      Astra service fee refunds do not apply to third-party
                      bookings. Those are governed by each provider’s own
                      policy. Astra will make reasonable efforts to request
                      refunds on your behalf but accepts no liability for
                      non-refundable third-party fees.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.3 Astra-Initiated Cancellations &amp; Force Majeure
                    </h4>
                    <p className="mb-2">
                      If Astra cancels due to extreme events (severe weather,
                      natural disasters, typhoon warnings, civil disturbance,
                      government travel bans, or severe staff illness):
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        100% refund of unearned Astra service fees, or full
                        credit toward rescheduled hours
                      </li>
                      <li>
                        Astra is not liable for indirect losses, alternative
                        accommodation, or rebooking fees from Force Majeure
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.4 Refund Processing
                    </h4>
                    <p>
                      Approved refunds are processed within 7–14 business days
                      via the original payment method or local bank transfer /
                      e-wallet. Bank, transaction, or FX fees are borne by the
                      Client.
                    </p>
                  </div>
                </div>
              </article>

              {/* 4. Limitations */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  4. Service Limitations &amp; Scope
                </h3>
                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.1 Facilitator Role
                    </h4>
                    <p>
                      Astra is an administrative facilitator and local point of
                      contact. It does not operate airlines, vehicle rentals,
                      hotels, restaurants, or tour sites, and does not control
                      third-party vendors or their personnel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.2 Explicit Exclusions
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        No guarantee of visa issuance, immigration clearance, or
                        entry/exit permits
                      </li>
                      <li>
                        No guarantee of third-party availability, seating, room
                        access, or fixed prices
                      </li>
                      <li>
                        Not a licensed tour operator or transport franchise
                        holder; regulated services are coordinated with
                        accredited providers only
                      </li>
                      <li>
                        No illegal, unsafe, or prohibited activities (including
                        anything that violates Philippine law or compromises
                        safety)
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.3 Limitation of Liability
                    </h4>
                    <p>
                      To the maximum extent permitted by law, Astra is not
                      liable for direct or indirect damages arising from
                      third-party delays, cancellations, accidents, injuries,
                      loss of property, or service deficiencies by third
                      parties. Total liability for any claim related to our
                      services shall not exceed the Astra service fees actually
                      paid for the specific booking giving rise to the claim.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.4 Right of Refusal
                    </h4>
                    <p className="mb-1">
                      Astra may decline service, end an active session, or
                      cancel an agreement if:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        The request involves illegal, unsafe, or unethical
                        activities
                      </li>
                      <li>
                        The Client is abusive or threatening toward staff or
                        partners
                      </li>
                      <li>
                        Required deposits or service fees are not paid in
                        advance
                      </li>
                    </ul>
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
                <Plane className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Planning a visit?
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us where you’re going, when you arrive, and what you need
              handled. We’ll confirm whether we can help and send a clear quote.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
            >
              Request Travel Assistance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
