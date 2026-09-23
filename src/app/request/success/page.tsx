"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";

export default function RequestSuccessPage() {
  const [requestId, setRequestId] = useState("AST-CON-2026-00001");

  useEffect(() => {
    const stored = sessionStorage.getItem("astra_request_id");
    if (stored) setRequestId(stored);
  }, []);

  return (
    <div className="pt-28 pb-20 min-h-[70vh] flex items-center">
      <div className="container-narrow text-center">
        <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-navy" strokeWidth={1.5} />
        </div>

        <h1 className="heading-lg mb-3">Request received.</h1>
        <p className="body-lg mb-2">
          Your request has been successfully received.
        </p>

        <div className="inline-block bg-warm-100 rounded-xl px-6 py-3 mb-8 mt-4">
          <p className="text-xs font-medium text-navy/50 mb-1">Request ID</p>
          <p className="text-lg font-mono font-semibold text-navy tracking-wide">
            {requestId}
          </p>
        </div>

        <p className="body max-w-md mx-auto mb-10">
          An Astra representative will review your requirements and contact you
          using your preferred communication method.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            View Request Status
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/" className="btn-secondary">
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
