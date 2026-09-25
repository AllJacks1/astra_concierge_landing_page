"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Info,
  Plane,
  Briefcase,
  Home,
  Car,
  Package,
  MapPin,
} from "lucide-react";

const sections = [
  {
    id: "scope",
    num: "1.1",
    label: "Scope of Services",
    icon: Info,
  },
  {
    id: "travel",
    num: "1.2",
    label: "Travel & Local Assistance",
    icon: Plane,
  },
  {
    id: "business",
    num: "1.3",
    label: "Business Concierge",
    icon: Briefcase,
  },
  {
    id: "property",
    num: "1.4",
    label: "Property Assistance",
    icon: Home,
  },
  {
    id: "transportation",
    num: "1.5",
    label: "Transportation",
    icon: Car,
  },
  {
    id: "errands",
    num: "1.6",
    label: "Errands & Local Execution",
    icon: Package,
  },
  {
    id: "relocation",
    num: "1.7",
    label: "Relocation & Extended Stay",
    icon: MapPin,
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

export default function ServiceLimitationsClient() {
  const [activeSection, setActiveSection] = useState<string>("scope");

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
            Service Limitations
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-foreground/55 leading-relaxed">
            Scope and limitations of the coordination, local assistance, and
            execution support provided by Astra Group of Companies, Inc.,
            through Astra Concierge Philippines.
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
              <SectionHeading id="scope" num="1.1">
                Scope of Services
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra Concierge provides coordination, local assistance, and
                execution support within the scope of each accepted assignment.
              </p>
            </section>

            {/* 1.2 */}
            <section className="space-y-4">
              <SectionHeading id="travel" num="1.2">
                Travel & Local Assistance
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra may coordinate travel-related arrangements but does not
                guarantee airline, hotel, restaurant, attraction, visa,
                immigration, or government availability or approval.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where an activity requires a licensed or accredited travel or
                tourism provider, Astra may coordinate with an appropriately
                authorized third party.
              </p>
            </section>

            {/* 1.3 */}
            <section className="space-y-4">
              <SectionHeading id="business" num="1.3">
                Business Concierge
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra provides logistical, administrative, research,
                coordination, and local execution support.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra Concierge does not itself provide legal, accounting, tax,
                immigration, investment, securities, or other regulated
                professional advice unless the service is expressly provided by
                an appropriately qualified professional.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Business introductions are not guarantees or endorsements.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra does not guarantee investments, partnerships,
                negotiations, financing, registrations, permits, or business
                outcomes.
              </p>
            </section>

            {/* 1.4 */}
            <section className="space-y-4">
              <SectionHeading id="property" num="1.4">
                Property Assistance
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Property-related activities requiring professional real estate
                services will be handled through appropriately licensed
                professionals.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Physical site visits and concierge reports are observational and
                are not substitutes for:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Legal due diligence",
                    "Title verification",
                    "Property appraisal",
                    "Structural inspection",
                    "Engineering assessment",
                    "Surveying",
                    "Environmental assessment",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra does not guarantee title, ownership, zoning, property
                condition, investment return, appreciation, or transaction
                approval.
              </p>
            </section>

            {/* 1.5 */}
            <section className="space-y-4">
              <SectionHeading id="transportation" num="1.5">
                Transportation
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Transportation is subject to vehicle, driver, route, and
                provider availability.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Where a particular transportation activity requires permits,
                franchises, accreditation, or other authority, Astra will use or
                coordinate an appropriately authorized provider.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Travel times cannot be guaranteed due to traffic, weather, road
                conditions, accidents, government restrictions, and other
                circumstances outside reasonable control.
              </p>
            </section>

            {/* 1.6 */}
            <section className="space-y-4">
              <SectionHeading id="errands" num="1.6">
                Errands & Local Execution
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra may perform legitimate physical tasks including approved
                pickups, deliveries, sourcing, purchases, location visits, and
                basic verification.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                A physical visit or photographic report confirms only what Astra
                personnel reasonably observed at the time of the visit. It does
                not constitute legal, financial, forensic, technical, or
                professional verification unless separately agreed and performed
                by a qualified professional.
              </p>
            </section>

            {/* 1.7 */}
            <section className="space-y-4">
              <SectionHeading id="relocation" num="1.7">
                Relocation & Extended Stay
              </SectionHeading>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra may provide orientation, research, coordination, and
                settling-in assistance.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Astra does not guarantee:
              </p>
              <div className="rounded-2xl border border-warm-200 bg-white p-5 sm:p-6">
                <BulletList
                  items={[
                    "Visas",
                    "Immigration status",
                    "Work permits",
                    "Lease approval",
                    "Banking approval",
                    "Government registration",
                    "School admission",
                    "Property approval",
                  ]}
                />
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Legal, immigration, tax, employment, and regulatory matters will
                be referred to appropriately qualified professionals where
                required.
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
