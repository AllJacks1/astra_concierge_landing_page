"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
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
  "Business",
  "Property",
  "Transportation",
  "Errand / Local Execution",
  "Relocation",
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
  "Today",
  "Within 48 hours",
  "Within one week",
  "Future date",
];

export function RequestForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    dateRange: "",
    urgency: "",
    details: "",
    physicalPresence: "",
    name: "",
    email: "",
    phone: "",
    nationality: "",
  });

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.service;
      case 2:
        return !!formData.location;
      case 3:
        return !!formData.urgency;
      case 4:
        return formData.details.trim().length > 10;
      case 5:
        return formData.name.trim() && formData.email.trim();
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    // In production this would POST to an API
    const requestId = `AST-CON-2026-${String(Math.floor(Math.random() * 90000) + 10000)}`;
    sessionStorage.setItem("astra_request_id", requestId);
    sessionStorage.setItem("astra_request_data", JSON.stringify(formData));
    router.push("/request/success");
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
                  currentStep > step.id
                    ? "bg-navy text-white"
                    : currentStep === step.id
                      ? "bg-navy text-white"
                      : "bg-warm-200 text-navy/50",
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-4 h-4" strokeWidth={2.5} />
                ) : (
                  step.id
                )}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "hidden sm:block w-8 lg:w-12 h-px mx-1",
                    currentStep > step.id ? "bg-navy" : "bg-warm-200",
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {steps.map((step) => (
            <span
              key={step.id}
              className={cn(
                "text-[10px] sm:text-xs font-medium tracking-wide",
                currentStep >= step.id ? "text-navy" : "text-navy/40",
              )}
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="bg-white rounded-3xl border border-warm-200 shadow-soft p-6 sm:p-10">
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold text-navy mb-2">
              What can Astra help you with?
            </h2>
            <p className="text-sm text-foreground/60 mb-6">
              Select the closest category. You can refine details later.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {serviceOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => update("service", opt)}
                  className={cn(
                    "text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all",
                    formData.service === opt
                      ? "border-navy bg-navy/5 text-navy"
                      : "border-warm-200 text-navy/80 hover:border-navy/30",
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold text-navy mb-2">
              Where do you need assistance?
            </h2>
            <p className="text-sm text-foreground/60 mb-6">
              Select the primary location for this request.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {locationOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => update("location", opt)}
                  className={cn(
                    "text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all",
                    formData.location === opt
                      ? "border-navy bg-navy/5 text-navy"
                      : "border-warm-200 text-navy/80 hover:border-navy/30",
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold text-navy mb-2">
              When do you need assistance?
            </h2>
            <p className="text-sm text-foreground/60 mb-6">
              Share timing so we can plan appropriately.
            </p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-navy mb-2">
                Date or date range
              </label>
              <input
                type="text"
                value={formData.dateRange}
                onChange={(e) => update("dateRange", e.target.value)}
                placeholder="e.g. October 15–20, 2026"
                className="w-full px-4 py-3 rounded-xl border border-warm-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-3">
                Urgency
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {urgencyOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update("urgency", opt)}
                    className={cn(
                      "text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all",
                      formData.urgency === opt
                        ? "border-navy bg-navy/5 text-navy"
                        : "border-warm-200 text-navy/80 hover:border-navy/30",
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-semibold text-navy mb-2">
              What do you need accomplished?
            </h2>
            <p className="text-sm text-foreground/60 mb-6">
              Describe the outcome you&apos;re looking for. The more detail, the
              better.
            </p>
            <textarea
              value={formData.details}
              onChange={(e) => update("details", e.target.value)}
              rows={6}
              placeholder="I'm arriving in Davao on October 15 and need a driver, workspace, and assistance arranging three business meetings..."
              className="w-full px-4 py-3 rounded-xl border border-warm-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none mb-6"
            />
            <div>
              <label className="block text-sm font-medium text-navy mb-3">
                Do you need someone physically with you?
              </label>
              <div className="flex flex-wrap gap-3">
                {["Yes", "No", "Not sure"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update("physicalPresence", opt)}
                    className={cn(
                      "px-5 py-2.5 rounded-full border text-sm font-medium transition-all",
                      formData.physicalPresence === opt
                        ? "border-navy bg-navy/5 text-navy"
                        : "border-warm-200 text-navy/80 hover:border-navy/30",
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <h2 className="text-xl font-semibold text-navy mb-2">
              How can we reach you?
            </h2>
            <p className="text-sm text-foreground/60 mb-6">
              We&apos;ll use your preferred channel to discuss the request.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Name <span className="text-navy/40">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Email <span className="text-navy/40">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  WhatsApp / preferred communication
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+63 or country code"
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Nationality / current country{" "}
                  <span className="text-navy/40 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => update("nationality", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                />
              </div>
            </div>
            <p className="mt-6 text-xs text-foreground/50 leading-relaxed">
              By submitting this request, you agree to Astra&apos;s Privacy
              Policy and Terms of Service.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 pt-6 border-t border-warm-200 flex justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((s) => s - 1)}
              className="btn-ghost"
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
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Request
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
