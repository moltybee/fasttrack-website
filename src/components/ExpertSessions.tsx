import Image from "next/image";

const sessions = [
  {
    title: "Going LIVE for Sales",
    handle: "@bri.rivard",
    bg: "bg-bg-light-orange",
    video: "/videos/5XUz8fpxlZLzkeFq1GfUO7dYY.mp4",
  },
  {
    title: "Strategy with Top 1% TikTok Shop Affiliate",
    handle: "@influencedqueens",
    bg: "bg-bg-light-pink",
    video: "/videos/7E2FayUr37f9EuF2nz7BXJ47J1o.mp4",
  },
  {
    title: "Affiliate Manager Insider",
    handle: "@codyjayartistry",
    bg: "bg-bg-light-green",
    video: "/videos/BmFrfzYIV96I9TYw4F6pasMpEqg.mp4",
  },
  {
    title: "Fashion Content Mastery",
    handle: "@susanstiktokthings",
    bg: "bg-bg-light-yellow",
    video: "/videos/HRWLjoYRZ7LFGLmW3elT8Ysw.mp4",
  },
  {
    title: "Behind the Scenes of GMV Max",
    handle: "@kc.bright5",
    bg: "bg-bg-light-purple",
    video: "/videos/aWlGBUBSvjRCiqgQ5p5rlUoxXM0.mp4",
  },
  {
    title: "Finding Your Niche + Fashion Category",
    handle: "@sweetteaandsprinkles",
    bg: "bg-bg-light-green",
    video: "/videos/bGuLcu54cjrfqkiS9zwSBoxVfUg.mp4",
  },
  {
    title: "Skit Content That Sells",
    handle: "@sheri_pie455",
    bg: "bg-bg-light-pink",
    video: "/videos/mJuiuDVIkKdvSSlMa4qfvZQ1Juc.mp4",
  },
  {
    title: "How to Land UGC Deals on Fiverr",
    handle: "@freelancebigsis",
    bg: "bg-bg-light-yellow",
    video: "/videos/1yRw1eaTEsfIdnUCu1WRwLCOICA.mp4",
  },
];

export default function ExpertSessions() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="mb-8 flex flex-col gap-2">
          <p className="label text-primary-pink">Win With Strategy, Not Guesswork</p>
          <h2>Expert Insights, Unfiltered</h2>
          <p className="text-text-muted">Exclusive sessions from TikTok Shop experts and top affiliates.</p>
        </div>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="flex gap-5 overflow-x-auto px-6 pb-4 scrollbar-hide md:px-12">
          {sessions.map((session) => (
            <div
              key={session.title}
              className={`min-w-[260px] snap-start rounded-xl ${session.bg} p-4 shadow-soft md:min-w-[300px]`}
            >
              <div className="overflow-hidden rounded-lg">
                <video
                  className="h-44 w-full object-cover"
                  src={session.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-text-light">{session.handle}</p>
                <h3 className="mt-1 text-lg">{session.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="mt-8 flex items-center gap-3 rounded-full bg-bg-light-orange/60 px-5 py-3 text-sm text-text-muted">
          <Image src="/images/9OZRbcL5mulT0bX1YSrCFJMI8KY.png" alt="Play" width={22} height={22} />
          New videos drop weekly with tactical breakdowns you can apply immediately.
        </div>
      </div>
    </section>
  );
}
