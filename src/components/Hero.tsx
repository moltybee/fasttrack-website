import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-bg-light-pink/70 blur-3xl" />
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-bg-light-green/70 blur-3xl" />
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
              FAST TRACK CLUBHOUSE
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
                Join the Clubhouse
              </a>
              <div className="flex items-center justify-center gap-2 rounded-full border border-primary-pink/20 bg-white px-4 py-2.5 text-sm shadow-sm sm:justify-start sm:px-5 sm:py-3">
                <span className="text-lg text-primary-pink">♥</span>
                <span className="font-medium text-text-dark">Only $47/month</span>
                <span className="text-text-light">• Cancel anytime</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-text-light">
              <div className="flex items-center -space-x-3">
                {[
                  "/images/8FI9RWuxm9P2aWDZxOtm4wPrcgs.webp",
                  "/images/GRMJgwFhOvGvM9iz1KuqoVaCf2U.webp",
                  "/images/QseKgsg1tPATVDovqWFWRhUORIk.webp",
                  "/images/WecZWbWgySXN0TDWgQiGkYEgHc.webp",
                  "/images/qDh3Kbavr3LcfTIXU1pRdgeI.webp",
                ].map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Member"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                    style={{ zIndex: 10 - i }}
                  />
                ))}
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-primary-pink text-xs font-bold text-white">
                  +500
                </span>
              </div>
              <span>Join hundreds of Fast Trackers learning together.</span>
            </div>
          </div>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-bg-light-yellow/80 blur-2xl" />
            <div className="absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-bg-light-purple/80 blur-2xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white/90 p-2.5 shadow-lg ring-1 ring-black/5 sm:rounded-[28px] sm:p-4">
              <Image
                src="/images/2UJUEzBjCrdTaP2IAu9ZjK1b0.png"
                alt="Fast Track Clubhouse preview"
                width={900}
                height={700}
                className="h-auto w-full rounded-[18px] object-cover sm:rounded-[22px]"
                priority
              />
            </div>
            <Image
              src="/images/2QIR6ok2HfrIWO7WzEKgCbySfyc.svg"
              alt="Decorative dots"
              width={140}
              height={140}
              className="absolute -left-10 bottom-10 hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
