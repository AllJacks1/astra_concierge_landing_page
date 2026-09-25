import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  MessageSquare,
  Car,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transportation Coordination in the Philippines | Astra Concierge",
  description:
    "Airport transfers, point-to-point transport, vehicles with drivers, multi-stop itineraries, and group vans across the Philippines. From ₱1,000. Coordinated through vetted partners including J-MaVe in Davao.",
  openGraph: {
    title: "Transportation | Astra Concierge Philippines",
    description:
      "Airport transfers, dedicated vehicles, and multi-stop itineraries. Final pricing depends on city, vehicle, route, and duration.",
    type: "website",
  },
  alternates: {
    canonical: "/services/transportation",
  },
};

const canDo = [
  "Arrange airport pickup and drop-off",
  "Arrange point-to-point transportation",
  "Provide or arrange vehicles with drivers",
  "Arrange transportation for business meetings",
  "Arrange transportation for property viewings",
  "Coordinate multi-stop itineraries",
  "Arrange half-day or full-day dedicated vehicles",
  "Coordinate group transportation",
  "Arrange vans for larger groups",
  "Coordinate out-of-town transportation",
  "Arrange multi-day transportation requirements",
  "Coordinate transportation through J-MaVe in Davao where appropriate",
  "Source vetted transportation providers in other service cities",
];

const cannotDo = [
  "Guarantee vehicle availability until confirmed",
  "Guarantee exact arrival or travel times",
  "Operate outside applicable transportation permits or authority",
  "Guarantee against delays caused by traffic, weather, road conditions, mechanical issues, or government restrictions",
  "Transport illegal or prohibited goods",
  "Transport suspicious or unidentified packages",
  "Facilitate transportation connected with illegal activities",
];

const examples = [
  "Can you arrange airport pickup when I arrive in Davao?",
  "I need a car and driver for my meetings tomorrow.",
  "Can you arrange transportation from my hotel to several property viewings?",
  "We are a group of six traveling around Davao for business. Can you arrange a van?",
  "I need transportation between meetings for three days.",
  "Can you arrange transportation in Cebu during my visit?",
];

const requirements = [
  "Subject to vehicle and driver availability",
  "Client must provide passenger count, route, date, time, luggage, and relevant itinerary details",
  "Appropriate authorized providers will be used where specific permits or accreditation are required",
  "Tolls, parking, overtime, waiting time, fuel, and out-of-town expenses may be charged separately",
  "Special vehicle requests are subject to availability",
  "Final rate depends on route, duration, vehicle type, and service requirements",
];

export default function TransportationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transportation Coordination",
    description:
      "Reliable transportation coordination for local travel requirements in the Philippines — airport transfers, point-to-point transport, vehicles with drivers, multi-stop itineraries, and group vans through vetted partners.",
    provider: {
      "@type": "Organization",
      name: "Astra Concierge Philippines",
      parentOrganization: {
        "@type": "Organization",
        name: "Astra Group of Companies, Inc.",
      },
    },
    areaServed: { "@type": "Country", name: "Philippines" },
    offers: {
      "@type": "Offer",
      name: "Transportation Services",
      priceCurrency: "PHP",
      price: "1000",
      description:
        "Airport transfers, point-to-point transport, and dedicated vehicles. Final pricing depends on city, vehicle, route, and duration.",
    },
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
              <h1 className="heading-xl mb-5">Transportation</h1>
              <p className="body-lg text-foreground/70 max-w-2xl mb-6">
                Reliable transportation coordination for your local travel
                requirements. Airport transfers, point-to-point transport,
                vehicles with drivers, business-day transportation,
                property-viewing trips, and multi-stop itineraries — through
                Astra&apos;s resources and vetted partners.
              </p>
              <p className="text-sm text-navy/60 mb-8 max-w-xl">
                From ₱1,000 · Airport transfers, point-to-point transport, and
                dedicated vehicles. Final pricing depends on city, vehicle,
                route, and duration.
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
                Rates follow partner rate sheets (including J-MaVe Cars in
                Davao) or a custom quote. Final pricing depends on city, vehicle
                class, route, duration, and operational needs. Tolls, parking,
                overtime, and out-of-town expenses are separate.
              </p>
            </div>

            <div className="rounded-2xl border border-warm-200 bg-white p-6 sm:p-8 max-w-xl">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-navy/45 mb-2">
                Transportation services
              </p>
              <p className="text-2xl font-semibold text-navy mb-3">
                From ₱1,000
              </p>
              <p className="text-sm text-foreground/65 leading-relaxed mb-4">
                Airport transfers, point-to-point transport, and dedicated
                vehicles. Destination city, vehicle class (sedan, SUV, van),
                route distance, duration, and special needs determine the final
                rate.
              </p>
              <p className="text-xs text-navy/50">
                In Davao, rates typically follow J-MaVe Cars. Other cities use
                vetted local partners.
              </p>
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
                These apply specifically to Transportation. By requesting this
                service you agree to them.
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
                      By booking, requesting, or utilizing transportation
                      coordination services provided by Astra Concierge
                      Philippines (&quot;Astra,&quot; &quot;we,&quot;
                      &quot;us,&quot; or &quot;our&quot;), you
                      (&quot;Client,&quot; &quot;Passenger,&quot;
                      &quot;you&quot;) agree to be bound by these Terms of
                      Service. Astra provides transportation coordination, fleet
                      dispatch, and logistics arrangement for personal and
                      business travel within the Philippines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.2 Description of Services
                    </h4>
                    <p className="mb-2">
                      Astra arranges point-to-point, airport, and dedicated
                      vehicle transportation through internal resources, primary
                      partners (J-MaVe Cars — Car Rental Davao in Davao City),
                      and vetted operators in other coverage cities (e.g.,
                      Cebu). Permitted activities include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Airport arrivals and departure transfers</li>
                      <li>Point-to-point urban and regional transportation</li>
                      <li>
                        Dedicated half-day (up to 4 hours) or full-day (up to 8
                        hours) vehicles with professional drivers
                      </li>
                      <li>
                        Transportation for multi-stop business itineraries and
                        property viewings
                      </li>
                      <li>
                        Group transportation, van rentals, and multi-day
                        itineraries
                      </li>
                      <li>Out-of-town transfers and custom regional routes</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.3 Booking Confirmation &amp; Information Requirements
                    </h4>
                    <p className="mb-2">
                      Vehicles are not guaranteed until Astra issues a formal
                      booking confirmation after request review and payment. The
                      Client must provide complete and accurate details before
                      dispatch:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 mb-2">
                      <li>
                        Exact passenger count and total luggage count/dimensions
                      </li>
                      <li>
                        Flight details (airline, flight number, scheduled
                        arrival/departure) for airport pickups
                      </li>
                      <li>
                        Detailed pickup/drop-off locations and full daily
                        itinerary routes
                      </li>
                      <li>Special vehicle or accessibility requirements</li>
                    </ol>
                    <p>
                      Inaccurate passenger or luggage counts may result in
                      service refusal or additional vehicle fees at the
                      Client&apos;s expense.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.4 Pricing, Rates &amp; Exclusions
                    </h4>
                    <p className="mb-3">
                      Rates are quotation-based or aligned with partner rate
                      sheets (including J-MaVe Cars). Display starting rate:
                      from ₱1,000. Final rate depends on destination city,
                      vehicle class, route distance, duration, and operational
                      needs.
                    </p>
                    <p className="mb-2 font-medium text-navy/80">
                      Separate &amp; pass-through expenses (unless bundled in a
                      written quote):
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Tolls and highway fees</li>
                      <li>Parking (mall, airport, venue, hotel)</li>
                      <li>
                        Waiting time and overtime beyond grace periods or
                        allocated hours
                      </li>
                      <li>
                        Fuel surcharges, out-of-town fees, driver overnight
                        allowances, and excess mileage
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      1.5 Franchise &amp; Permit Compliance
                    </h4>
                    <p>
                      Astra operates in compliance with national and local
                      transport regulations. Where specialized permits, LTFRB
                      accreditations, or DOT tourist transport franchises are
                      required, services use appropriately licensed, permitted,
                      and insured operators or partners.
                    </p>
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
                      Astra protects passenger information in compliance with
                      Republic Act No. 10173 (Data Privacy Act of 2012), its
                      Implementing Rules and Regulations, and related privacy
                      guidelines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.2 Information We Collect
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong className="text-navy/80">
                          Passenger contact:
                        </strong>{" "}
                        Full name, mobile, WhatsApp/messaging handles, email
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Flight &amp; logistics:
                        </strong>{" "}
                        Flight numbers, landing times, hotel room numbers,
                        pickup/drop-off addresses, itinerary schedules
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Specifications:
                        </strong>{" "}
                        Luggage counts, group size, child seat or special access
                        requests
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.3 Purpose &amp; Third-Party Operational Sharing
                    </h4>
                    <p>
                      Data is processed exclusively to coordinate pickups, route
                      drivers, verify arrival times, and communicate trip
                      updates. Necessary operational data is shared only with
                      assigned drivers and vetted transport partners (e.g.,
                      J-MaVe Cars) to fulfill the trip.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      2.4 Data Retention
                    </h4>
                    <p>
                      Flight and passenger dispatch logs are retained for
                      operational verification, billing disputes, and accounting
                      for up to 12 months, then securely archived or deleted.
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
                      3.1 Standard Cancellation Timelines
                    </h4>
                    <p className="mb-2">
                      Cancellations must be submitted in writing via official
                      Astra channels:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">24+ hours</strong>{" "}
                        before scheduled pickup: 80% refund (20% retained for
                        dispatch setup)
                      </li>
                      <li>
                        <strong className="text-navy/80">12–24 hours</strong>{" "}
                        before: 50% refund
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Less than 12 hours / no-show:
                        </strong>{" "}
                        Non-refundable
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.2 Flight Delays &amp; Airport Pickup Grace Periods
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">Grace period:</strong>{" "}
                        Airport transfers include 60 minutes from actual
                        confirmed landing time. Point-to-point and hotel pickups
                        include 15 minutes.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Extended flight delays:
                        </strong>{" "}
                        Astra monitors flight status and will attempt to adjust
                        dispatch. If the driver cannot wait beyond the grace
                        period, Astra will attempt to reassign a vehicle or
                        offer a service credit.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Unannounced delays:
                        </strong>{" "}
                        If the passenger does not locate the driver or contact
                        Astra within the grace period, the trip is classified as
                        a no-show and forfeited. Additional waiting beyond grace
                        periods is billed at published overtime rates.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      3.3 Force Majeure &amp; Operator Cancellations
                    </h4>
                    <p className="mb-2">
                      If Astra or its transport partner cancels due to severe
                      typhoons, road flooding, landslides, government travel
                      bans, or sudden mechanical failure prior to pickup:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        100% refund of fees paid for the affected trip, or
                        alternative vehicle class if agreed
                      </li>
                      <li>
                        Astra accepts no liability for missed flights, hotel
                        check-ins, business meetings, or secondary travel costs
                        from Force Majeure or driver cancellations
                      </li>
                    </ol>
                  </div>
                </div>
              </article>

              {/* 4. Limitations */}
              <article>
                <h3 className="text-base font-semibold text-navy mb-4">
                  4. Service Limitations &amp; Safety Scope
                </h3>
                <div className="space-y-5 text-sm text-foreground/70 leading-relaxed">
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.1 Absence of Travel Time &amp; Arrival Guarantees
                    </h4>
                    <p className="mb-2">
                      Astra cannot guarantee exact transit times, durations, or
                      arrival times.
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          Road conditions &amp; delays:
                        </strong>{" "}
                        Travel times are estimates only. Astra is not liable for
                        delays from traffic, weather, accidents, construction,
                        checkpoints, ferry delays, or mechanical issues.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Time-sensitive travel:
                        </strong>{" "}
                        Passengers going to airports, formal appointments, or
                        connections should schedule pickups with adequate
                        buffer.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.2 Prohibited Goods, Luggage &amp; Unlawful Activity
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li>
                        <strong className="text-navy/80">
                          No unlawful transportation:
                        </strong>{" "}
                        Astra prohibits use of its coordination for illegal
                        acts, prostitution, smuggling, or fleeing law
                        enforcement.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No hazardous or illegal goods:
                        </strong>{" "}
                        Vehicles will not transport illegal drugs, unregistered
                        firearms, explosives, hazardous chemicals, or
                        contraband.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          No unidentified packages:
                        </strong>{" "}
                        Drivers will not transport unattended, suspicious, or
                        unidentified packages without an authorized passenger
                        present, unless pre-vetted under a formal corporate
                        courier scope.
                      </li>
                      <li>
                        <strong className="text-navy/80">
                          Passenger conduct:
                        </strong>{" "}
                        Drivers and Astra may refuse service to anyone visibly
                        intoxicated, abusive, violent, or posing a threat to
                        driver or vehicle safety.
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.3 Passenger Liability &amp; Vehicle Damage
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        Extreme mess, spillage, upholstery damage, or physical
                        damage caused by the passenger or party may result in a
                        cleaning or repair fee charged to the Client.
                      </li>
                      <li>
                        Astra and its partners are not liable for personal
                        items, valuables, or luggage left unattended in vehicles
                        during or after a trip.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1.5">
                      4.4 Limitation of Liability
                    </h4>
                    <p>
                      To the maximum extent permitted under Philippine law,
                      Astra functions as a transportation coordinator through
                      vetted partners. Astra is not liable for indirect,
                      consequential, or special damages — including lost
                      business opportunities, missed connections, or loss of
                      income — arising from travel delays or third-party vehicle
                      incidents. Maximum aggregate liability for any claim from
                      a transportation booking shall not exceed the total
                      transportation service fee paid for that specific trip
                      segment.
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
                <Car className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Need a vehicle arranged?
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us the city, date, route, passenger count, and luggage. We
              will confirm availability and send a clear quote before anything
              is locked in.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
            >
              Request Transportation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
