"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/#why-astra", label: "Why Astra" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Transparent only on homepage at the top
  const isTransparent = isHome && !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent py-5"
          : "bg-background/95 backdrop-blur-md border-b border-warm-200 shadow-soft py-3",
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span
            className={cn(
              "text-lg font-semibold tracking-tight transition-colors",
              isTransparent
                ? "text-white group-hover:text-white/90"
                : "text-navy group-hover:text-navy-800",
            )}
          >
            ASTRA
          </span>
          <span
            className={cn(
              "text-[10px] font-medium tracking-[0.15em] uppercase -mt-0.5 transition-colors",
              isTransparent ? "text-white/70" : "text-navy/60",
            )}
          >
            Concierge Philippines
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isTransparent
                  ? pathname === link.href
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                  : pathname === link.href
                    ? "text-navy"
                    : "text-navy/70 hover:text-navy",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className={cn(
              "text-sm font-semibold tracking-wide transition-colors",
              isTransparent
                ? "text-white/90 hover:text-white"
                : "text-navy/80 hover:text-navy",
            )}
          >
            Talk to a Concierge
          </Link>
          <Link
            href="/request"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200",
              isTransparent
                ? "bg-white text-navy hover:bg-warm-100"
                : "bg-navy text-white hover:bg-navy-800",
            )}
          >
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-3 py-2">
          <Link
            href="/request"
            className={cn(
              "inline-flex items-center rounded-md gap-1.5 px-4 py-4 text-xs font-semibold tracking-wide transition-all hidden sm:inline-flex",
              isTransparent
                ? "bg-white text-navy hover:bg-warm-100"
                : "bg-navy text-white hover:bg-navy-800",
            )}
          >
            Tell Us
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 transition-colors",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-navy hover:bg-navy/5",
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-[min(70dvh,calc(100dvh-5rem))] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="container-wide py-6 border-t border-warm-200 bg-background/98 backdrop-blur-md">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-navy/80 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-warm-200 flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-secondary w-full justify-center rounded-xl"
              >
                Talk to a Concierge
              </Link>
              <Link
                href="/request"
                className="btn-primary w-full justify-center rounded-xl"
              >
                Tell Us What You Need
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
