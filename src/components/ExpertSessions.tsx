import Image from "next/image";

const sessions = [
  {
    title: "Going LIVE for Sales",
    handle: "@bri.rivard",
    bg: "bg-bg-light-orange",
    video: "/videos/5XUz8fpxlZLzkeFq1GfUO7dYY.mp4",
    bullets: [
      "📝 How to write a LIVE script that actually converts",
      "🧃 What products to focus on (and which to skip)",
      "⏱ How long to go live for max results",
      "💡 Tips, tricks, and strategy from someone who does this daily",
    ],
  },
  {
    title: "Strategy with Top 1% TikTok Shop Affiliate",
    handle: "@influencedqueens",
    bg: "bg-bg-light-pink",
    video: "/videos/7E2FayUr37f9EuF2nz7BXJ47J1o.mp4",
    bullets: [
      "🛍 Her exact process for choosing winning products",
      "🎯 What's changed in the algorithm (and how she's adapting)",
      "🎥 Her filming + editing workflow for high-performing videos",
      "📢 Her thoughts on CTAs",
    ],
  },
  {
    title: "Affiliate Manager Insider",
    handle: "@codyjayartistry",
    bg: "bg-bg-light-green",
    video: "/videos/BmFrfzYIV96I9TYw4F6pasMpEqg.mp4",
    bullets: [
      "🤝 How collab invites really work (and how to get more)",
      "🚫 Why some sellers deny you even after you send a request",
      "⭐️ Seller ratings—what they mean and why they're not the full story",
      "💼 How to make brands want to work with you",
    ],
  },
  {
    title: "Fashion Content Mastery",
    handle: "@susanstiktokthings",
    bg: "bg-bg-light-yellow",
    video: "/videos/HRWLjoYRZ7LFGLmW3elT8Ysw.mp4",
    bullets: [
      "🎥 The best camera angles for fashion (and what not to do)",
      "👗 Her tips for posting consistently in fashion & staying on trend",
      "🔥 Her behind-the-scenes knowledge as a Halara expert",
      "🧠 Smart strategies for creating scroll-stopping outfit videos",
    ],
  },
  {
    title: "Behind the Scenes of GMV Max",
    handle: "@kc.bright5",
    bg: "bg-bg-light-purple",
    video: "/videos/aWlGBUBSvjRCiqgQ5p5rlUoxXM0.mp4",
    bullets: [
      "🧠 A walkthrough of the seller side of Ads Manager",
      "🔥 The truth about GMV Max",
      "📈 What sellers really look for when approving requests",
      "💬 Live Q&A with juicy insights from someone running real campaigns",
    ],
  },
  {
    title: "Finding Your Niche + Fashion Category",
    handle: "@sweetteaandsprinkles",
    bg: "bg-bg-light-green",
    video: "/videos/bGuLcu54cjrfqkiS9zwSBoxVfUg.mp4",
    bullets: [
      "✨ How to get accepted into the fashion category",
      "👀 The difference between pop fashion vs. global fashion (and why it matters)",
      "🧠 Tips to figure out your niche—even if you're multi-passionate",
      "📈 What helped her go viral and how to tap into those same trends",
    ],
  },
  {
    title: "Skit Content That Sells",
    handle: "@sheri_pie455",
    bg: "bg-bg-light-pink",
    video: "/videos/mJuiuDVIkKdvSSlMa4qfvZQ1Juc.mp4",
    bullets: [
      "🎬 How to pick products that work for skits",
      "📝 Are skits scripted or spontaneous? She spills it all",
      "🧠 Hook ideas specifically for skit-style content",
      "💡 Behind-the-scenes tips that make your skits pop off",
    ],
  },
  {
    title: "How to Land UGC Deals on Fiverr",
    handle: "@freelancebigsis",
    bg: "bg-bg-light-yellow",
    video: "/videos/1yRw1eaTEsfIdnUCu1WRwLCOICA.mp4",
    bullets: [
      "💌 How to set up your Fiverr gig so clients find you",
      "⚡ Optimization tips that make your gig stand out in search",
      "📂 How to create a media kit that sells you before you even speak",
      "🛠 Tools & resources to streamline your UGC workflow",
    ],
  },
];

export default function ExpertSessions() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mb-6 flex flex-col gap-2 sm:mb-8">
          <p className="label text-primary-pink">Win With Strategy, Not Guesswork</p>
          <h2>Expert Insights, Unfiltered</h2>
          <p className="text-text-muted">Exclusive sessions from TikTok Shop experts and top affiliates.</p>
        </div>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="flex w-max animate-ticker gap-[50px] px-6 pb-4 md:px-12">
          {[...sessions, ...sessions].map((session, i) => (
            <div
              key={`${session.title}-${i}`}
              className={`flex h-[630px] w-[350px] flex-shrink-0 flex-col rounded-2xl ${session.bg} p-5 shadow-soft`}
            >
              <div className="overflow-hidden rounded-[20px]">
                <video
                  className="h-48 w-full scale-90 rounded-[20px] object-cover"
                  src={session.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col text-center">
                <h3 className="text-xl font-medium leading-tight tracking-tight text-primary-pink">{session.title}</h3>
                <p className="mt-2 text-base text-text-dark/80">{session.handle}</p>
                <ul className="mt-4 space-y-2 text-left text-sm text-text-muted">
                  {session.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
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
