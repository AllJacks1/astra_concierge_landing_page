export function Positioning() {
  return (
    <section className="relative section-padding bg-navy text-white overflow-hidden">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] h-[35%] sm:h-[40%] bg-white/[0.03] blur-[80px] sm:blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[70%] sm:w-[50%] h-[30%] sm:h-[40%] bg-amber-400/5 blur-[100px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="relative container-wide pb-12 sm:pb-16 lg:pb-20">
        {/* Opening statement */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 lg:mb-24">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-amber-400/80 mb-4 sm:mb-6">
            The difference
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] sm:leading-[1.15] mb-5 sm:mb-8">
            You don&apos;t need another booking platform.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium mb-6 sm:mb-10">
            You need someone who can make things happen.
          </p>

          <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
            <p>
              Astra exists for situations where Google, booking platforms and
              remote communication aren&apos;t enough.
            </p>
            <p>
              You may know what you need. You just don&apos;t know who to call,
              where to go, what to arrange, or how to get it done locally.
            </p>
            <p className="text-white font-medium pt-1 sm:pt-2">
              That&apos;s where Astra comes in.
            </p>
          </div>
        </div>

        {/* Process flow */}
        <div className="relative">
          {/* Horizontal connector — desktop only */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {[
              {
                step: "01",
                label: "You",
                text: "I need this accomplished in the Philippines.",
              },
              {
                step: "02",
                label: "Astra",
                text: "We'll understand the requirement and scope it clearly.",
              },
              {
                step: "03",
                label: "Local Team",
                text: "We coordinate the people, information and logistics.",
              },
              {
                step: "04",
                label: "You",
                text: "Done. Without the friction.",
              },
            ].map((item, i) => (
              <div key={item.step} className="group relative">
                {/* Vertical connector — mobile only (between steps) */}
                {i < 3 && (
                  <div
                    className="sm:hidden absolute left-[1.375rem] top-[2.75rem] bottom-[-2rem] w-px bg-gradient-to-b from-white/25 to-transparent"
                    aria-hidden
                  />
                )}

                {/* Step header */}
                <div className="flex items-center gap-3 mb-4 sm:mb-5 relative z-10">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-navy text-sm font-semibold tracking-wider text-amber-400
                               group-hover:bg-amber-400 group-hover:text-navy group-hover:border-amber-400
                               transition-all duration-300"
                  >
                    {item.step}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase text-white/40 group-hover:text-amber-400 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6
                             backdrop-blur-sm
                             group-hover:bg-white/[0.07] group-hover:border-white/20
                             transition-all duration-300
                             sm:h-full"
                >
                  <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/75 group-hover:text-white/90 transition-colors duration-300">
                    “{item.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}