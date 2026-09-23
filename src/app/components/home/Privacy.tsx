import { Lock, Eye, FileCheck, MessageSquare, Shield, Ban } from "lucide-react";

const principles = [
  {
    icon: Lock,
    title: "Secure request handling",
    description: "Requests are received and managed through controlled channels.",
  },
  {
    icon: Eye,
    title: "Controlled access",
    description: "Information is shared only with those assigned to your request.",
  },
  {
    icon: FileCheck,
    title: "Privacy policies",
    description: "Clear policies govern how your information is collected and used.",
  },
  {
    icon: MessageSquare,
    title: "Limited information sharing",
    description: "We share only what is necessary to fulfill your request.",
  },
  {
    icon: Shield,
    title: "Clear service boundaries",
    description: "We are transparent about what we can and cannot do.",
  },
  {
    icon: Ban,
    title: "Official channels only",
    description: "Communication happens through verified Astra channels.",
  },
];

export function Privacy() {
  return (
    <section className="section-padding bg-warm-100/60">
      <div className="container-wide">
        <div className="max-w-2xl mb-12">
          <h2 className="heading-lg mb-4">Your information deserves care.</h2>
          <p className="body-lg">
            We treat your requests and personal details with the seriousness they
            deserve. Here are the principles that guide how we handle information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-warm-200 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-navy" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
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
