"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sailorjayy",
    quote:
      "I have learned so much in such a short amount of time! The clubhouse is a whole vibe and the feedback is always so helpful.",
    avatar: "/images/8FI9RWuxm9P2aWDZxOtm4wPrcgs.webp",
  },
  {
    name: "Vani",
    quote:
      "I can't recommend Kierra's The Fast Track Girl course enough! The support and strategy inside the clubhouse are unmatched.",
    avatar: "/images/GRMJgwFhOvGvM9iz1KuqoVaCf2U.webp",
  },
  {
    name: "Brooke",
    quote:
      "I absolutely love being a part of this community! The live audits and Q&A sessions are next level.",
    avatar: "/images/QseKgsg1tPATVDovqWFWRhUORIk.webp",
  },
  {
    name: "Staci",
    quote:
      "It's phenomenal! I've taken other courses but this one far surpasses any of the others!",
    avatar: "/images/WecZWbWgySXN0TDWgQiGkYEgHc.webp",
  },
  {
    name: "BSRanch",
    quote: "I purchased the course & have learned so so much. The clubhouse makes it feel easy.",
    avatar: "/images/qDh3Kbavr3LcfTIXU1pRdgeI.webp",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mb-8 text-center sm:mb-10">
          <p className="label text-primary-pink">From Our Members</p>
          <h2 className="mt-3">What Fast Trackers Are Saying</h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item) => (
                <div key={item.name} className="min-w-0 flex-[0_0_90%] px-3 md:flex-[0_0_45%] lg:flex-[0_0_33%]">
                  <div className="flex h-full flex-col gap-4 rounded-xl border border-bg-light-yellow/50 bg-bg-light-yellow/40 p-6 shadow-soft">
                    <p className="text-text-muted">“{item.quote}”</p>
                    <div className="mt-auto flex items-center gap-3">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-text-dark">{item.name}</p>
                        <p className="text-xs text-text-light">Clubhouse Member</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-text-muted shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === selected ? "bg-primary-pink" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-text-muted shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
