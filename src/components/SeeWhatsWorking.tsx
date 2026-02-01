import Image from "next/image";

export default function SeeWhatsWorking() {
  return (
    <section className="section-pad bg-gradient-to-b from-white via-bg-light-orange/30 to-white">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="label text-primary-pink">Comfort In Community</p>
          <h2 className="mt-3">See What&apos;s Working</h2>
          <p className="mt-2 text-lg text-text-muted">
            Learn from others and build your success!
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          {/* Phone mockup */}
          <div className="relative">
            <div className="absolute -left-4 top-8 h-20 w-20 rounded-full bg-bg-light-pink/60 blur-2xl" />
            <Image
              src="/images/nQ1WeDsDuhGcL7krWmHQSz0Ob4.png"
              alt="Community chat preview"
              width={280}
              height={560}
              className="relative z-10 h-auto w-[240px] drop-shadow-xl md:w-[280px]"
            />
          </div>
          {/* Tablet/calendar mockup */}
          <div className="relative hidden md:block">
            <div className="absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-bg-light-green/60 blur-2xl" />
            <Image
              src="/images/o23sovzwbGquNQR4sN1PTZjnI.png"
              alt="Weekly calendar preview"
              width={320}
              height={420}
              className="relative z-10 h-auto w-[280px] drop-shadow-xl lg:w-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
