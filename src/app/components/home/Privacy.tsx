import { Lock, Eye, FileCheck, MessageSquare, Shield, Ban } from "lucide-react";

const principles = [
  {
    icon: Lock,
    title: "Requests stay in controlled channels",
    description:
      "We don’t take sensitive details over random chats or personal accounts. Everything goes through official Astra pathways.",
  },
  {
    icon: Eye,
    title: "Access is limited by design",
    description:
      "Only the people assigned to your request can see what they need to do the work — not the whole team.",
  },
  {
    icon: MessageSquare,
    title: "We share the minimum required",
    description:
      "Banks, agencies, or counterparties get only what’s necessary to complete the task. Nothing extra.",
  },
  {
    icon: Ban,
    title: "Official channels only",
    description:
      "If someone contacts you claiming to be from Astra outside verified channels, treat it as unauthorized.",
  },
  {
    icon: Shield,
    title: "Clear limits on what we do",
    description:
      "We’re upfront about what we can handle and what we won’t. Ambiguity is where problems start.",
  },
  {
    icon: FileCheck,
    title: "Policies you can actually read",
    description:
      "How we collect, use, and retain information is written down — not buried in fine print you’ll never open.",
  },
];

export function Privacy() {
  return (
    <section className="section-padding bg-warm-100/60">
      <div className="container-wide">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="eyebrow mb-4">How we handle information</p>
          <h2 className="heading-lg mb-4">
            Your details aren&apos;t inventory.
          </h2>
          <p className="body-lg text-foreground/70">
            When you trust us with a request, you&apos;re also trusting us with
            context that doesn&apos;t belong in open group chats or loose
            inboxes. These are the rules we work by.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-warm-50/80 p-6 sm:p-7 transition-colors hover:bg-white"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-warm-200 shadow-sm">
                <item.icon className="h-4 w-4 text-navy" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-navy mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
