import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="section-pad bg-bg-light-pink/40">
      <div className="container">
        <div className="rounded-[28px] bg-white px-6 py-10 text-center shadow-soft md:px-12">
          <p className="label text-primary-pink">Fast Track Clubhouse</p>
          <h2 className="mt-4">Get Access Today</h2>
          <p className="mt-3 text-2xl font-semibold text-text-dark">Only $47/month</p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href="https://live.thefasttrackgirl.com/checkout/tiktok-clubhouse"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "xl" }), "w-full max-w-xl justify-center")}
            >
              Yes! I&apos;d Love To Join The Private Community!
            </a>
            <p className="text-sm text-text-light">I Want Access Today For Only $47/month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
