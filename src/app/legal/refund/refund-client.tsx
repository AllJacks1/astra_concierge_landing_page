"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Ban,
  Clock,
  Zap,
  Building2,
  XCircle,
  Scale,
} from "lucide-react";

const sections = [
  {
    id: "before-work",
    num: "1.1",
    label: "Cancellation Before Work Begins",
    icon: Ban,
  },
  {
    id: "after-work",
    num: "1.2",
    label: "Cancellation After Work Has Started",
    icon: Clock,
  },
  {
    id: "urgent",
    num: "1.3",
    label: "Same-Day or Urgent Assignments",
    icon: Zap,
  },
  {
    id: "third-party",
    num: "1.4",
    label: "Third-Party Cancellations",
    icon: Building2,
  },
  {
    id: "by-astra",
    num: "1.5",
    label: "Cancellation by Astra",
    icon: XCircle,
  },
  {
    id: "service-problems",
    num: "1.6",
    label: "Service Problems",
    icon: Scale,
  },
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

export default function RefundClient() {
  const [activeSection, setActiveSection] = useState<string>("before-work");

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
        rootMargin: "-20% 0px -60% 0px",
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
            Refund and Cancellation Policy
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-foreground/55 leading-relaxed">
            Terms governing cancellations, refunds, and related obligations for
            services provided by Astra Group of Companies, Inc., through Astra
            Concierge Philippines.
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
              <SectionHeading id="before-work" num="1.1">
                Cancellation Before Astra Begins Work
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where a client cancels before Astra has commenced substantial
                work or incurred expenses, Astra may refund amounts paid, less:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Work already performed",
                    "Non-refundable third-party charges",
                    "Payment processing charges where legally permissible",
                    "Expenses already incurred",
                    "Other amounts specifically agreed as non-refundable where legally permissible",
                  ]}
                />
              </div>
            </section>

            {/* 1.2 */}
            <section className="space-y-4">
              <SectionHeading id="after-work" num="1.2">
                Cancellation After Work Has Started
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where Astra has already commenced the assignment, the client
                remains responsible for:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Services already performed",
                    "Time already committed where applicable",
                    "Approved expenses already incurred",
                    "Non-refundable reservations or third-party charges",
                    "Work reasonably undertaken in reliance on the confirmed assignment",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Any remaining refundable balance will be calculated after these
                amounts have been determined.
              </p>
            </section>

            {/* 1.3 */}
            <section className="space-y-4">
              <SectionHeading id="urgent" num="1.3">
                Same-Day or Urgent Assignments
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Urgent or same-day requests may involve immediate deployment,
                reservations, purchases, personnel allocation, or third-party
                commitments.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Once work has commenced or non-refundable costs have been
                incurred, some or all amounts may no longer be refundable,
                subject to applicable law.
              </p>
            </section>

            {/* 1.4 */}
            <section className="space-y-4">
              <SectionHeading id="third-party" num="1.4">
                Third-Party Cancellations
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Airlines, hotels, transportation providers, venues,
                professionals, suppliers, and other third parties maintain their
                own cancellation and refund policies.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra will assist with reasonable coordination of an eligible
                third-party refund but cannot guarantee that a third party will
                approve or process a refund.
              </p>
            </section>

            {/* 1.5 */}
            <section className="space-y-4">
              <SectionHeading id="by-astra" num="1.5">
                Cancellation by Astra
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra may cancel, decline, or discontinue an assignment where:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "The request becomes illegal or prohibited",
                    "Material information was misrepresented",
                    "Required payment is not made",
                    "The client requests activity outside the accepted scope",
                    "The assignment presents an unreasonable safety or security risk",
                    "Required personnel or providers become unavailable",
                    "Continuing would breach applicable law, professional rules, or Astra policies",
                    "Force majeure or circumstances outside Astra's reasonable control make performance impracticable",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where Astra cancels for reasons not attributable to the client,
                Astra will determine any appropriate refund for the unperformed
                portion, taking into account work already completed and expenses
                already incurred, subject to applicable law.
              </p>
            </section>

            {/* 1.6 */}
            <section className="space-y-4">
              <SectionHeading id="service-problems" num="1.6">
                Service Problems
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Nothing in this Refund and Cancellation Policy limits any remedy
                that a consumer is entitled to under applicable Philippine
                consumer law.
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
