"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
  Globe,
  Clock,
  UserCheck,
  Mail,
  AlertTriangle,
  Cookie,
} from "lucide-react";

const sections = [
  { id: "commitment", num: "1.1", label: "Our Commitment", icon: Shield },
  {
    id: "information",
    num: "1.2",
    label: "Information We May Collect",
    icon: Eye,
  },
  {
    id: "why",
    num: "1.3",
    label: "Why We Process Your Information",
    icon: FileText,
  },
  { id: "basis", num: "1.4", label: "Basis for Processing", icon: FileText },
  {
    id: "sharing",
    num: "1.5",
    label: "Sharing of Personal Information",
    icon: Globe,
  },
  {
    id: "international",
    num: "1.6",
    label: "International Processing",
    icon: Globe,
  },
  { id: "retention", num: "1.7", label: "Data Retention", icon: Clock },
  { id: "security", num: "1.8", label: "Data Security", icon: Lock },
  { id: "rights", num: "1.9", label: "Your Rights", icon: UserCheck },
  { id: "requests", num: "1.10", label: "Privacy Requests", icon: Mail },
  {
    id: "sensitive",
    num: "1.11",
    label: "Sensitive Information",
    icon: AlertTriangle,
  },
  { id: "cookies", num: "1.12", label: "Cookies and Analytics", icon: Cookie },
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

export default function PrivacyClient() {
  const [activeSection, setActiveSection] = useState<string>("commitment");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Adjusts trigger zone near top of viewport
        threshold: 0.1,
      },
    );

    const headingElements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
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
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-foreground/55 leading-relaxed">
            How Astra Group of Companies, Inc., through Astra Concierge
            Philippines, collects, uses, shares, and protects your personal
            data.
          </p>
          <p className="mt-6 text-xs font-medium text-navy/45">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-22">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-navy/50 mb-4">
                Contents
              </p>
              <nav className="space-y-1 border-l border-warm-200">
                {sections.map((s) => {
                  const isActive = activeSection === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={() => setActiveSection(s.id)}
                      className={`block -ml-px border-l-2 pl-4 py-1.5 text-[13px] transition-colors ${
                        isActive
                          ? "border-navy text-navy font-semibold"
                          : "border-transparent text-navy/55 hover:text-navy hover:border-navy/40"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] mr-1.5 ${
                          isActive ? "text-navy font-medium" : "text-navy/35"
                        }`}
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
              <SectionHeading id="commitment" num="1.1">
                Our Commitment
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra Group of Companies, Inc., through Astra Concierge
                Philippines, respects your privacy and processes personal data
                in accordance with applicable Philippine data-protection laws
                and regulations.
              </p>
            </section>

            {/* 1.2 */}
            <section className="space-y-4">
              <SectionHeading id="information" num="1.2">
                Information We May Collect
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Depending on your request, we may collect:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Full name",
                    "Email address",
                    "Telephone or WhatsApp number",
                    "Current country",
                    "Nationality, where relevant and necessary",
                    "Requested service location",
                    "Travel or service dates",
                    "Details of your service request",
                    "Documents voluntarily provided by you",
                    "Payment and transaction information",
                    "Communications with Astra",
                    "Service history",
                    "Feedback and complaints",
                    "Technical information associated with use of our website, where applicable",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We will seek to collect only information reasonably necessary
                for legitimate business and service purposes.
              </p>
            </section>

            {/* 1.3 */}
            <section className="space-y-4">
              <SectionHeading id="why" num="1.3">
                Why We Process Your Information
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We may process personal information to:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Review and respond to inquiries",
                    "Determine whether Astra can accept a request",
                    "Prepare quotations",
                    "Provide and coordinate services",
                    "Communicate with clients",
                    "Coordinate approved third-party providers",
                    "Process and document payments",
                    "Maintain transaction and accounting records",
                    "Manage complaints and disputes",
                    "Protect clients, Astra personnel, and third parties",
                    "Detect or prevent fraud, misuse, or unlawful activity",
                    "Comply with legal and regulatory obligations",
                    "Improve our services and operations",
                    "Conduct marketing where permitted and, where required, with appropriate consent",
                  ]}
                />
              </div>
            </section>

            {/* 1.4 */}
            <section className="space-y-4">
              <SectionHeading id="basis" num="1.4">
                Basis for Processing
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Depending on the circumstances, processing may be necessary:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "With your consent",
                    "To take steps at your request before entering into a contract",
                    "To perform our agreement with you",
                    "To comply with legal obligations",
                    "For other lawful grounds permitted under applicable Philippine data-protection law",
                  ]}
                />
              </div>
            </section>

            {/* 1.5 */}
            <section className="space-y-4">
              <SectionHeading id="sharing" num="1.5">
                Sharing of Personal Information
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where necessary to perform your request, information may be
                shared with:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Authorized Astra personnel",
                    "Relevant Astra business units",
                    "Assigned concierge personnel",
                    "Transportation providers",
                    "Licensed professionals",
                    "Property professionals",
                    "Hotels and accommodation providers",
                    "Couriers and logistics providers",
                    "Payment providers",
                    "Technology and communications providers",
                    "Other suppliers specifically required for your assignment",
                    "Government authorities where required by law",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                We will seek to limit disclosure to information reasonably
                necessary for the relevant purpose.
              </p>
            </section>

            {/* 1.6 */}
            <section className="space-y-4">
              <SectionHeading id="international" num="1.6">
                International Processing
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Some technology, communications, cloud, payment, or other
                service providers used by Astra may process information outside
                the Philippines.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where applicable, Astra will take reasonable measures required
                by law in relation to such processing.
              </p>
            </section>

            {/* 1.7 */}
            <section className="space-y-4">
              <SectionHeading id="retention" num="1.7">
                Data Retention
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Personal information will be retained only for as long as
                reasonably necessary for the purpose for which it was collected,
                for legitimate business requirements, or as required or
                permitted by law.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Different categories of records may have different retention
                periods.
              </p>
            </section>

            {/* 1.8 */}
            <section className="space-y-4">
              <SectionHeading id="security" num="1.8">
                Data Security
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra will implement reasonable organizational, physical, and
                technical safeguards designed to protect personal information
                from unauthorized access, disclosure, alteration, loss, or
                misuse.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                However, no internet transmission or electronic storage system
                can be guaranteed to be completely secure.
              </p>
            </section>

            {/* 1.9 */}
            <section className="space-y-4">
              <SectionHeading id="rights" num="1.9">
                Your Rights
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Subject to applicable law, you may have rights regarding your
                personal data, including rights to:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Be informed",
                    "Access your personal data",
                    "Request correction of inaccurate data",
                    "Object to certain processing",
                    "Request erasure or blocking where applicable",
                    "Withdraw consent where processing depends on consent",
                    "Data portability where applicable",
                    "Seek damages where legally applicable",
                    "Lodge a complaint with the National Privacy Commission",
                  ]}
                />
              </div>
            </section>

            {/* 1.10 */}
            <section className="space-y-4">
              <SectionHeading id="requests" num="1.10">
                Privacy Requests
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Privacy-related requests may be directed to:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6 space-y-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-navy/45 mb-1">
                    Data Protection Officer / Privacy Contact
                  </p>
                  <p className="text-sm text-foreground/70">
                    [NAME OR POSITION]
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-navy/45 mb-1">
                    Email
                  </p>
                  <p className="text-sm text-foreground/70">
                    [DEDICATED PRIVACY/DPO EMAIL]
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-navy/45 mb-1">
                    Address
                  </p>
                  <p className="text-sm text-foreground/70">
                    [OFFICIAL BUSINESS ADDRESS]
                  </p>
                </div>
              </div>
            </section>

            {/* 1.11 */}
            <section className="space-y-4">
              <SectionHeading id="sensitive" num="1.11">
                Sensitive Information
              </SectionHeading>
              <div className="rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5 sm:p-6 space-y-3">
                <p className="text-sm font-medium text-amber-900">
                  Do not submit the following through the general inquiry form:
                </p>
                <BulletList
                  items={[
                    "Passwords",
                    "PINs",
                    "OTPs",
                    "Online banking credentials",
                    "Complete credit/debit card details",
                    "Account login credentials",
                    "Unnecessary medical information",
                    "Other highly sensitive information that Astra has not specifically requested through an appropriate secure channel",
                  ].map((item) => (
                    <span key={item} className="text-amber-900/80">
                      {item}
                    </span>
                  ))}
                />
              </div>
            </section>

            {/* 1.12 */}
            <section className="space-y-4">
              <SectionHeading id="cookies" num="1.12">
                Cookies and Analytics
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                The website may use cookies, analytics, or similar technologies
                for security, website functionality, performance measurement,
                and understanding how visitors use the site.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where consent is required, users will be provided an appropriate
                mechanism to provide or withhold consent.
              </p>
            </section>

            {/* Footer */}
            <div className="pt-6 border-t border-warm-200">
              <p className="text-xs text-foreground/45 leading-relaxed">
                This policy may be updated from time to time. Continued use of
                this website after changes are posted constitutes acceptance of
                the updated policy.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
