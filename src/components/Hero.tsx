import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-bg-light-pink/70 blur-3xl" />
      <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-bg-light-green/70 blur-3xl" />
      <Image
        src="/images/084LmX7KUwbPvlnhTodNlUqFs.svg"
        alt="Decorative swirl"
        width={220}
        height={220}
        className="absolute left-6 top-6 hidden opacity-70 md:block"
      />
      <div className="container section-pad relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-primary-pink/10 px-4 py-2 text-sm font-semibold text-primary-pink">
              FAST TRACK CLUBHOUSE
            </span>
            <h1>Fast Track TikTok Shop Support Community</h1>
            <p className="text-lg text-text-muted">
              The Exclusive Community for Added Support, Live Q&amp;A, Video Feedback, Connect with other
              Members, Giveaways, and more!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://live.thefasttrackgirl.com/checkout/tiktok-clubhouse"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "xl" }))}
              >
                Join the Clubhouse
              </a>
              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm text-text-muted shadow-soft">
                <span className="text-primary-pink">★</span> Only $47/month • Cancel anytime
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
          <div className="relative">
            <div className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-bg-light-yellow/80 blur-2xl" />
            <div className="absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-bg-light-purple/80 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-4 shadow-soft">
              <Image
                src="/images/2UJUEzBjCrdTaP2IAu9ZjK1b0.png"
                alt="Fast Track Clubhouse preview"
                width={900}
                height={700}
                className="h-auto w-full rounded-[22px] object-cover"
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
