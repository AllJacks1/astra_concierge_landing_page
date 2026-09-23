import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export const metadata = {
  title: "Verify a Concierge",
  description:
    "Verify the identity of an Astra Concierge representative using their unique Concierge ID.",
};

export default function VerifyIndexPage() {
  return (
    <div className="pt-28 pb-20 min-h-[70vh]">
      <div className="container-narrow text-center">
        <h1 className="heading-lg mb-4">Verify a Concierge</h1>
        <p className="body-lg max-w-xl mx-auto mb-10">
          Enter a Concierge ID to confirm that an individual is registered in
          Astra&apos;s network.
        </p>

        <div className="bg-white rounded-3xl border border-warm-200 shadow-soft p-8 max-w-md mx-auto">
          <form action="/verify/AC-DVO-001" className="space-y-4">
            <div>
              <label
                htmlFor="conciergeId"
                className="block text-sm font-medium text-navy mb-2 text-left"
              >
                Concierge ID
              </label>
              <input
                id="conciergeId"
                name="id"
                type="text"
                placeholder="e.g. AC-DVO-001"
                className="w-full px-4 py-3 rounded-xl border border-warm-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Search className="w-4 h-4" />
              Verify
            </button>
          </form>
          <p className="mt-6 text-xs text-foreground/50">
            Example ID for demonstration:{" "}
            <Link
              href="/verify/AC-DVO-001"
              className="text-navy font-medium hover:underline"
            >
              AC-DVO-001
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
