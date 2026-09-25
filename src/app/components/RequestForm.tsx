"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, Check, Paperclip, AlertTriangle } from "lucide-react";
import { cn } from "@/app/lib/utils";

const steps = [
  { id: 1, label: "Request" },
  { id: 2, label: "Location" },
  { id: 3, label: "Timing" },
  { id: 4, label: "Details" },
  { id: 5, label: "Contact" },
];

const serviceOptions = [
  "Travel & Local Assistance",
  "Business Concierge",
  "Property Assistance",
  "Transportation",
  "Errand / Local Execution",
  "Relocation / Extended Stay",
  "Multiple Requirements",
  "Other",
];

const locationOptions = [
  "Davao",
  "Cebu",
  "Cagayan de Oro",
  "Iloilo",
  "Metro Manila",
  "Multiple Cities",
  "Other",
];

const urgencyOptions = [
  "Today / Urgent",
  "Within 48 Hours",
  "Within 7 Days",
  "Future Date",
];

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200",
        selected
          ? "border-navy bg-navy text-white shadow-sm"
          : "border-warm-200 bg-white text-navy/80 hover:border-navy/25 hover:bg-warm-50/50",
      )}
    >
      <span className="flex items-center justify-between gap-2">
        <span>{children}</span>
        {selected && (
          <Check className="w-4 h-4 shrink-0 opacity-90" strokeWidth={2.5} />
        )}
      </span>
    </button>
  );
}

function FieldLabel({
  children,
  optional,
  required,
}: {
  children: React.ReactNode;
  optional?: boolean;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-navy mb-1.5">
      {children}{" "}
      {required && <span className="text-navy/35">*</span>}
      {optional && (
        <span className="text-navy/35 font-normal">(optional)</span>
      )}
    </label>
  );
}

const inputClasses =
  "w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50/30 text-sm text-navy placeholder:text-navy/35 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy/40 focus:bg-white transition-colors";

export function RequestForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    serviceOther: "",
    location: "",
    locationOther: "",
    dateRange: "",
    urgency: "",
    details: "",
    physicalPresence: "",
    attachment: "",
    name: "",
    email: "",
    phone: "",
    nationality: "",
    currentCountry: "",
    consent: false,
  });

  const update = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        if (!formData.service) return false;
        if (formData.service === "Other" && !formData.serviceOther.trim())
          return false;
        return true;
      case 2:
        if (!formData.location) return false;
        if (formData.location === "Other" && !formData.locationOther.trim())
          return false;
        return true;
      case 3:
        return !!formData.dateRange.trim() && !!formData.urgency;
      case 4:
        return formData.details.trim().length > 10;
      case 5:
        return (
          formData.name.trim().length > 0 &&
          formData.email.trim().length > 0 &&
          formData.consent
        );
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    const requestId = `AST-CON-2026-${String(Math.floor(Math.random() * 90000) + 10000)}`;
    sessionStorage.setItem("astra_request_id", requestId);
    sessionStorage.setItem("astra_request_data", JSON.stringify(formData));
    router.push("/request/success");
  };

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-navy/50">
            Step {currentStep} of {steps.length}
          </p>
          <p className="text-xs font-medium text-navy/60">
            {steps[currentStep - 1].label}
          </p>
        </div>

        {/* Track */}
        <div className="relative h-1.5 rounded-full bg-warm-200 overflow-hidden mb-5">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-navy transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step labels — desktop */}
        <div className="hidden sm:flex justify-between">
          {steps.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                if (step.id < currentStep) setCurrentStep(step.id);
              }}
              disabled={step.id > currentStep}
              className={cn(
                "flex items-center gap-2 text-xs font-medium transition-colors",
                step.id === currentStep
                  ? "text-navy"
                  : step.id < currentStep
                    ? "text-navy/60 hover:text-navy cursor-pointer"
                    : "text-navy/30 cursor-default",
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold",
                  step.id < currentStep
                    ? "bg-navy text-white"
                    : step.id === currentStep
                      ? "bg-navy/10 text-navy ring-2 ring-navy/20"
                      : "bg-warm-100 text-navy/40",
                )}
              >
                {step.id < currentStep ? (
                  <Check className="w-3 h-3" strokeWidth={2.5} />
                ) : (
                  step.id
                )}
              </span>
              {step.label}
            </button>
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-warm-200 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08)] overflow-hidden">
        {/* Card top accent */}
        <div className="h-1 bg-gradient-to-r from-navy via-navy/80 to-amber-400/60" />

        <div className="p-6 sm:p-9">
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-navy tracking-tight mb-2">
                What do you need help with?
              </h2>
              <p className="text-sm text-foreground/55 mb-7 leading-relaxed">
                Pick the closest category. You can add detail in a later step.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => (
                  <OptionButton
                    key={opt}
                    selected={formData.service === opt}
                    onClick={() => update("service", opt)}
                  >
                    {opt}
                  </OptionButton>
                ))}
              </div>
              {formData.service === "Other" && (
                <div className="mt-4">
                  <FieldLabel required>Please specify</FieldLabel>
                  <input
                    type="text"
                    value={formData.serviceOther}
                    onChange={(e) => update("serviceOther", e.target.value)}
                    placeholder="e.g. Event coordination"
                    className={inputClasses}
                  />
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-navy tracking-tight mb-2">
                Where do you need assistance?
              </h2>
              <p className="text-sm text-foreground/55 mb-7 leading-relaxed">
                Primary location for this request. Multi-city is fine —
                we&apos;ll scope it with you.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {locationOptions.map((opt) => (
                  <OptionButton
                    key={opt}
                    selected={formData.location === opt}
                    onClick={() => update("location", opt)}
                  >
                    {opt}
                  </OptionButton>
                ))}
              </div>
              {formData.location === "Other" && (
                <div className="mt-4">
                  <FieldLabel required>Please specify location</FieldLabel>
                  <input
                    type="text"
                    value={formData.locationOther}
                    onChange={(e) => update("locationOther", e.target.value)}
                    placeholder="e.g. Bohol, Bacolod…"
                    className={inputClasses}
                  />
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-navy tracking-tight mb-2">
                When do you need this?
              </h2>
              <p className="text-sm text-foreground/55 mb-7 leading-relaxed">
                Timing helps us plan capacity. Approximate dates are fine.
              </p>
              <div className="mb-7">
                <FieldLabel required>Date or date range</FieldLabel>
                <input
                  type="text"
                  value={formData.dateRange}
                  onChange={(e) => update("dateRange", e.target.value)}
                  placeholder="e.g. October 15–20, 2026"
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel required>Urgency</FieldLabel>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {urgencyOptions.map((opt) => (
                    <OptionButton
                      key={opt}
                      selected={formData.urgency === opt}
                      onClick={() => update("urgency", opt)}
                    >
                      {opt}
                    </OptionButton>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-navy tracking-tight mb-2">
                What do you need us to handle?
              </h2>
              <p className="text-sm text-foreground/55 mb-7 leading-relaxed">
                Describe the outcome. Specifics (dates, places, people) help us
                respond faster.
              </p>
              <textarea
                value={formData.details}
                onChange={(e) => update("details", e.target.value)}
                rows={6}
                placeholder="I'm arriving in Davao on October 15 and need a driver, workspace, and help arranging three business meetings…"
                className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50/30 text-sm text-navy placeholder:text-navy/35 focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy/40 focus:bg-white transition-colors resize-none mb-2"
              />
              <p className="text-xs text-navy/40 mb-7">
                {formData.details.trim().length < 10
                  ? "A few more details help us scope this properly."
                  : `${formData.details.trim().length} characters`}
              </p>

              <div className="mb-7">
                <FieldLabel>
                  Do you need someone physically present?
                </FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {["Yes", "No", "Not Sure"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("physicalPresence", opt)}
                      className={cn(
                        "px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200",
                        formData.physicalPresence === opt
                          ? "border-navy bg-navy text-white"
                          : "border-warm-200 text-navy/75 hover:border-navy/25 bg-white",
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel optional>
                  Attach a file or document, if needed
                </FieldLabel>
                <label
                  className={cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-xl border border-dashed cursor-pointer transition-colors text-sm",
                    formData.attachment
                      ? "border-navy/40 bg-warm-50/50 text-navy"
                      : "border-warm-200 bg-warm-50/30 text-navy/55 hover:border-navy/30 hover:text-navy",
                  )}
                >
                  <Paperclip className="w-4 h-4 shrink-0" />
                  <span className="truncate">
                    {formData.attachment || "Choose a file…"}
                  </span>
                  <input
                    type="file"
                    className="sr-only"
                    onChange={(e) =>
                      update("attachment", e.target.files?.[0]?.name ?? "")
                    }
                  />
                </label>
                <div className="mt-3 flex gap-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 px-3.5 py-3">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                  <p className="text-xs text-amber-800/90 leading-relaxed">
                    Please do not upload passwords, credit card information,
                    banking credentials or highly sensitive personal
                    information.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-navy tracking-tight mb-2">
                How should we reach you?
              </h2>
              <p className="text-sm text-foreground/55 mb-7 leading-relaxed">
                We&apos;ll reply on your preferred channel to confirm scope and
                next steps.
              </p>
              <div className="space-y-4">
                <div>
                  <FieldLabel required>Full Name</FieldLabel>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <FieldLabel required>Email Address</FieldLabel>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <FieldLabel optional>WhatsApp / preferred communication</FieldLabel>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+63 or country code"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <FieldLabel optional>Nationality</FieldLabel>
                  <input
                    type="text"
                    value={formData.nationality}
                    onChange={(e) => update("nationality", e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <FieldLabel optional>Current country</FieldLabel>
                  <input
                    type="text"
                    value={formData.currentCountry}
                    onChange={(e) => update("currentCountry", e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Consent */}
              <label className="mt-7 flex items-start gap-3 cursor-pointer select-none">
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                    formData.consent
                      ? "bg-navy border-navy text-white"
                      : "border-warm-200 bg-white",
                  )}
                >
                  {formData.consent && (
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  )}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={formData.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                />
                <span className="text-sm text-foreground/60 leading-relaxed">
                  I agree to Astra&apos;s{" "}
                  <a
                    href="/legal/privacy"
                    className="underline underline-offset-2 hover:text-navy"
                  >
                    Privacy Policy
                  </a>{" "}
                  and understand that submitting a request does not guarantee
                  acceptance of the assignment.
                </span>
              </label>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-warm-100 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((s) => s - 1)}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors py-2.5 px-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => canProceed() && setCurrentStep((s) => s + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-navy"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-navy/90 transition-colors disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-navy"
              >
                Submit request
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}