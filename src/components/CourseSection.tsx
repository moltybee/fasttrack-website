import Image from "next/image";

export default function CourseSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Decorative pink blob */}
      <div className="absolute -right-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary-pink/10 blur-3xl sm:h-[400px] sm:w-[400px]" />
      <div className="container relative z-10">
        <div className="mb-8 sm:mb-10">
          <p className="label text-primary-pink">The TikTok Shop Accelerator</p>
          <h2 className="mt-3">Fast Track Course</h2>
        </div>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl">How to succeed on TikTok Shop…</h3>
              <p className="text-lg text-text-light">(for more sales.. and bigger payouts)</p>
            </div>
            <p className="text-text-muted">
              I&apos;ll take you step by step on how to pick the right products, create amazing content, avoid
              getting shut down, collabing, getting more views, and so much more!
            </p>
            <ul className="space-y-3 text-text-muted">
              <li>✓ Over 42 Videos, in 14+ Modules</li>
              <li>✓ Step by step: How to create content that sells</li>
              <li>✓ My entire SEO strategy for algo optimization</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-bg-light-yellow/80 blur-2xl" />
            <div className="rounded-[24px] border border-gray-100 bg-white p-3 shadow-soft">
              <Image
                src="/images/F5VVPRshpv8ZcRVazHbHw6r2C0o.png"
                alt="Course dashboard"
                width={920}
                height={520}
                className="h-auto w-full rounded-[18px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
