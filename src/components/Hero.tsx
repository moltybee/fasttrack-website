import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-bg-light-pink/50 blur-3xl" />
      {/* Decorative hearts */}
      <div className="absolute right-[15%] top-20 text-2xl text-primary-pink/30 sm:text-3xl">♥</div>
      <div className="absolute left-[10%] top-[60%] hidden text-xl text-primary-pink/20 sm:block">♥</div>
      <Image
        src="/images/084LmX7KUwbPvlnhTodNlUqFs.svg"
        alt="Decorative swirl"
        width={220}
        height={220}
        className="absolute left-6 top-6 hidden opacity-70 md:block"
      />
      <div className="container relative z-10 py-12 sm:py-16 md:py-20">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 md:space-y-6">
            <span className="inline-block rounded-full bg-primary-pink/10 px-4 py-2 text-sm font-semibold text-primary-pink">
              Fast Track Clubhouse
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl">Fast Track TikTok Shop Support Community</h1>
            <p className="text-lg text-text-muted">
              The Exclusive Community for Added Support, Live Q&amp;A, Video Feedback, Connect with other
              Members, Giveaways, and more!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="https://live.thefasttrackgirl.com/checkout/tiktok-clubhouse"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "xl" }), "w-full justify-center sm:w-auto")}
              >
                Yes! I want this!
              </a>
              <div className="flex items-center justify-center gap-2 rounded-full border border-primary-pink/20 bg-white px-4 py-2.5 text-sm shadow-sm sm:justify-start sm:px-5 sm:py-3">
                <span className="text-lg text-primary-pink">♥</span>
                <span className="font-medium text-text-dark">Only $47/month</span>
                <span className="text-text-light">• Cancel anytime</span>
              </div>
            </div>
            <p className="text-sm text-text-light">
              Join hundreds of Fast Trackers learning together.
            </p>
          </div>
          <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
            {/* Phone mockup with Kierra */}
            <div className="relative mx-auto w-[245px] sm:w-[300px]">
              <div className="overflow-hidden rounded-[32px] bg-gradient-to-b from-primary-pink/20 to-primary-pink/5 p-2 shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/o23sovzwbGquNQR4sN1PTZjnI.png"
                  alt="Kierra - The Fast Track Girl"
                  width={245}
                  height={500}
                  className="h-auto w-full rounded-[24px] object-cover"
                  priority
                />
              </div>
              {/* 700+ Members badge */}
              <div className="absolute -right-4 top-8 flex items-center gap-2 rounded-full bg-primary-pink px-4 py-2 text-sm font-bold text-white shadow-lg sm:-right-8">
                <div className="flex -space-x-2">
                  {[
                    "/images/8FI9RWuxm9P2aWDZxOtm4wPrcgs.webp",
                    "/images/GRMJgwFhOvGvM9iz1KuqoVaCf2U.webp",
                    "/images/QseKgsg1tPATVDovqWFWRhUORIk.webp",
                  ].map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt="Member"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full border-2 border-white object-cover"
                      style={{ zIndex: 10 - i }}
                    />
                  ))}
                </div>
                <span>700+ Members</span>
              </div>
            </div>
            <Image
              src="/images/2QIR6ok2HfrIWO7WzEKgCbySfyc.svg"
              alt="Decorative dots"
              width={140}
              height={140}
              className="absolute -left-16 bottom-20 hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
