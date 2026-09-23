export function Positioning() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] mb-6">
            You don&apos;t need another booking platform.
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 font-medium mb-8">
            You need someone who can make things happen.
          </p>
          <div className="space-y-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            <p>
              Astra exists for situations where Google, booking platforms and remote
              communication aren&apos;t enough.
            </p>
            <p>
              You may know what you need. You just don&apos;t know who to call, where
              to go, what to arrange, or how to get it done locally.
            </p>
            <p className="text-white/90 font-medium">
              That&apos;s where Astra comes in.
            </p>
          </div>
        </div>

        {/* Process flow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {[
            {
              label: "Client",
              text: '"I need this accomplished in the Philippines."',
            },
            {
              label: "Astra",
              text: '"We\'ll understand the requirement."',
            },
            {
              label: "Local Team",
              text: '"We\'ll coordinate what\'s needed."',
            },
            {
              label: "Client",
              text: '"Done."',
            },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3">
                  {step.label}
                </p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
