import { RequestForm } from "@/app/components/RequestForm";

export const metadata = {
  title: "Tell Us What You Need",
  description:
    "Submit a request to Astra Concierge Philippines. Describe what you need and where—we'll handle the local part.",
};

export default function RequestPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">Tell us what you need.</h1>
          <p className="body-lg max-w-xl mx-auto">
            You don&apos;t need to know which service you need. Just tell us what
            you&apos;re trying to accomplish and where.
          </p>
        </div>
        <RequestForm />
      </div>
    </div>
  );
}
