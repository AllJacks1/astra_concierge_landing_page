"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  ClipboardList,
  Tag,
  Receipt,
  CreditCard,
  UserCheck,
  Users,
  ShieldAlert,
  RefreshCcw,
  MessageSquare,
  Scale,
} from "lucide-react";
import { cn } from "@/app/lib/utils";

const sections = [
  {
    id: "about",
    num: "1.1",
    label: "About Astra Concierge Philippines",
    icon: Building2,
  },
  {
    id: "requesting",
    num: "1.2",
    label: "Requesting a Service",
    icon: ClipboardList,
  },
  { id: "quotations", num: "1.3", label: "Quotations", icon: Tag },
  {
    id: "fees",
    num: "1.4",
    label: "Fees & Third-Party Expenses",
    icon: Receipt,
  },
  { id: "payment", num: "1.5", label: "Payment", icon: CreditCard },
  {
    id: "responsibilities",
    num: "1.6",
    label: "Client Responsibilities",
    icon: UserCheck,
  },
  {
    id: "third-party",
    num: "1.7",
    label: "Third-Party Providers",
    icon: Users,
  },
  {
    id: "outcome",
    num: "1.8",
    label: "No Guaranteed Outcome",
    icon: ShieldAlert,
  },
  { id: "scope", num: "1.9", label: "Changes to Scope", icon: RefreshCcw },
  { id: "complaints", num: "1.10", label: "Complaints", icon: MessageSquare },
  { id: "governing-law", num: "1.11", label: "Governing Law", icon: Scale },
];

function SectionHeading({
  id,
  num,
  children,
}: {
  id: string;
  num: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="flex items-baseline gap-3 text-lg sm:text-xl font-semibold text-navy tracking-tight scroll-mt-24"
    >
      <span className="text-sm font-mono text-navy/40 shrink-0">{num}</span>
      {children}
    </h2>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-sm text-foreground/70 leading-relaxed"
        >
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-navy/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TermsClient() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      // A band near the top of the viewport decides the active section
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-warm-50/40">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-navy via-navy/80 to-amber-400/60" />

      {/* Hero */}
      <section className="border-b border-warm-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-navy/50 mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-navy tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-foreground/55 leading-relaxed">
            The terms that govern requests, quotations, payments, and the
            delivery of services by Astra Concierge Philippines.
          </p>
          <p className="mt-6 text-xs font-medium text-navy/45">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Table of contents — scroll spy */}
          <aside className="hidden lg:block">
            <div className="sticky top-22">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-navy/50 mb-4">
                Contents
              </p>
              <nav className="space-y-1 border-l border-warm-200">
                {sections.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={cn(
                        "-ml-px block border-l-2 pl-4 py-1.5 text-[13px] transition-colors",
                        active
                          ? "border-navy text-navy font-medium"
                          : "border-transparent text-navy/55 hover:text-navy hover:border-navy/40",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[11px] mr-1.5",
                          active ? "text-navy/60" : "text-navy/35",
                        )}
                      >
                        {s.num}
                      </span>
                      {s.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="max-w-2xl space-y-12">
            {/* 1.1 */}
            <section className="space-y-4">
              <SectionHeading id="about" num="1.1">
                About Astra Concierge Philippines
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra Concierge Philippines (&ldquo;Astra Concierge,&rdquo;
                &ldquo;Astra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is a service operated by Astra Group of
                Companies, Inc.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra provides concierge, coordination, local assistance, and
                execution support for individuals and businesses requiring
                legitimate assistance in the Philippines.
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-navy/45 mb-3">
                  Our services may include
                </p>
                <BulletList
                  items={[
                    "Travel and Local Assistance",
                    "Business Concierge",
                    "Property Assistance",
                    "Transportation Coordination",
                    "Errands and Local Execution",
                    "Relocation and Extended Stay Assistance",
                    "Other approved custom requests",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Some requests may be fulfilled directly by Astra, through
                another Astra business unit, or through an appropriately
                qualified third-party provider.
              </p>
            </section>

            {/* 1.2 */}
            <section className="space-y-4">
              <SectionHeading id="requesting" num="1.2">
                Requesting a Service
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Submitting an inquiry, form, message, email, or service request
                does not automatically create a confirmed engagement.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Every request is subject to:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Scope review",
                    "Availability",
                    "Location coverage",
                    "Legality",
                    "Safety assessment",
                    "Required professional qualifications or licenses",
                    "Personnel and partner availability",
                    "Pricing confirmation",
                    "Client verification, when required",
                    "Payment requirements",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                A service becomes confirmed only after Astra has accepted the
                request and communicated confirmation to the client.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra may decline any request that falls outside its
                capabilities, service standards, legal authority, safety
                requirements, or acceptable-use policies.
              </p>
            </section>

            {/* 1.3 */}
            <section className="space-y-4">
              <SectionHeading id="quotations" num="1.3">
                Quotations
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Unless expressly stated otherwise, prices displayed on the
                website are starting or indicative prices only.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                The final quotation may depend on:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Location",
                    "Duration",
                    "Complexity",
                    "Urgency",
                    "Personnel required",
                    "Transportation requirements",
                    "Number of locations",
                    "Working hours",
                    "Required third-party providers",
                    "Purchases or advances",
                    "Special risks or requirements",
                    "Other circumstances relevant to the assignment",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                The client must approve the final scope and quotation before
                deployment.
              </p>
            </section>

            {/* 1.4 */}
            <section className="space-y-4">
              <SectionHeading id="fees" num="1.4">
                Astra Professional Fees and Third-Party Expenses
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra separates its professional or service fee from third-party
                and out-of-pocket expenses whenever reasonably practical.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Third-party expenses may include:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Transportation",
                    "Hotels and accommodation",
                    "Airline or other tickets",
                    "Food and refreshments",
                    "Parking and tolls",
                    "Courier and delivery fees",
                    "Purchases requested by the client",
                    "Government fees",
                    "Legal fees",
                    "Accounting fees",
                    "Brokerage or professional fees",
                    "Contractor or supplier charges",
                    "Other approved expenses",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Whenever practical, clients may be requested to pay major
                third-party providers directly.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where Astra must advance funds, advance payment from the client
                may be required.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Material expenses outside the approved scope will require client
                approval before being incurred, except where immediate
                expenditure is reasonably necessary to protect the client,
                personnel, property, or assignment and prior approval cannot
                reasonably be obtained.
              </p>
            </section>

            {/* 1.5 */}
            <section className="space-y-4">
              <SectionHeading id="payment" num="1.5">
                Payment
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Depending on the assignment, Astra may require:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Full advance payment",
                    "A deposit",
                    "Milestone payments",
                    "A retainer",
                    "Advance funding of third-party expenses",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra is not required to begin an assignment until the required
                payment has been received and the assignment has been formally
                accepted.
              </p>
              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 sm:p-6">
                <p className="text-sm text-amber-900/90 leading-relaxed">
                  Payments must be made only through payment channels officially
                  communicated by Astra. Clients should never provide passwords,
                  PINs, OTPs, online banking credentials, or complete
                  payment-card credentials to an Astra representative.
                </p>
              </div>
            </section>

            {/* 1.6 */}
            <section className="space-y-4">
              <SectionHeading id="responsibilities" num="1.6">
                Client Responsibilities
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Clients must:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Provide accurate and complete information",
                    "Disclose the true purpose of the request",
                    "Provide necessary documents and authorization",
                    "Inform Astra of relevant risks or special circumstances",
                    "Ensure that their requested activity is lawful",
                    "Obtain permissions where required",
                    "Pay agreed fees and approved expenses",
                    "Treat Astra personnel and third-party providers respectfully",
                    "Avoid asking Astra personnel to perform prohibited activities",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra may suspend or terminate an assignment if information
                supplied by the client is materially false, misleading,
                incomplete, or creates legal, ethical, financial, or safety
                concerns.
              </p>
            </section>

            {/* 1.7 */}
            <section className="space-y-4">
              <SectionHeading id="third-party" num="1.7">
                Third-Party Providers
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra may coordinate independent third parties such as:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Lawyers",
                    "Accountants",
                    "Licensed real estate professionals",
                    "Engineers and architects",
                    "Transportation providers",
                    "Hotels",
                    "Airlines",
                    "Restaurants",
                    "Medical facilities",
                    "Contractors",
                    "Couriers",
                    "Government-accredited providers",
                    "Other specialists",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Unless expressly stated otherwise, third-party providers are
                independent from Astra.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra&rsquo;s coordination or introduction of a provider does
                not constitute a guarantee of that provider&rsquo;s performance,
                professional conclusions, availability, pricing, or outcome.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                The third party&rsquo;s own terms and conditions may apply.
              </p>
            </section>

            {/* 1.8 */}
            <section className="space-y-4">
              <SectionHeading id="outcome" num="1.8">
                No Guaranteed Outcome
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra agrees to provide the accepted services with reasonable
                care within the agreed scope.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra does not guarantee outcomes controlled by:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Government agencies",
                    "Courts",
                    "Embassies or immigration authorities",
                    "Airlines",
                    "Hotels",
                    "Property owners",
                    "Banks",
                    "Professional advisers",
                    "Suppliers",
                    "Contractors",
                    "Transportation providers",
                    "Weather",
                    "Traffic",
                    "Force majeure events",
                    "Other circumstances reasonably outside Astra&rsquo;s control",
                  ]}
                />
              </div>
            </section>

            {/* 1.9 */}
            <section className="space-y-4">
              <SectionHeading id="scope" num="1.9">
                Changes to Scope
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Any request outside the agreed scope may result in:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Additional fees",
                    "Additional expenses",
                    "Revised timelines",
                    "A new quotation",
                    "Reassessment of whether Astra can accept the additional work",
                  ]}
                />
              </div>
            </section>

            {/* 1.10 */}
            <section className="space-y-4">
              <SectionHeading id="complaints" num="1.10">
                Complaints
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Clients may submit complaints through:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6 space-y-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-navy/45 mb-1">
                    Email
                  </p>
                  <p className="text-sm text-foreground/70">
                    [CONCIERGE EMAIL]
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-navy/45 mb-1">
                    Telephone / WhatsApp
                  </p>
                  <p className="text-sm text-foreground/70">
                    [ASTRA PHONE NUMBER]
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Please include the relevant Astra Request ID, description of the
                concern, and supporting documents where applicable.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra will acknowledge and review complaints through its
                internal customer-resolution process.
              </p>
            </section>

            {/* 1.11 */}
            <section className="space-y-4">
              <SectionHeading id="governing-law" num="1.11">
                Governing Law
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                These Terms are governed by the laws of the Republic of the
                Philippines.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Nothing in these Terms is intended to exclude, restrict, or
                waive consumer rights or remedies that cannot lawfully be
                excluded or waived under applicable Philippine law.
              </p>
            </section>

            {/* Footer */}
            <div className="pt-6 border-t border-warm-200">
              <p className="text-xs text-foreground/45 leading-relaxed">
                By submitting a request through this website, you acknowledge
                that you have read and agree to these Terms of Service and our{" "}
                <Link
                  href="/legal/privacy"
                  className="underline underline-offset-2 hover:text-navy"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
