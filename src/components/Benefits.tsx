import Image from "next/image";
import { Users, Video, Sparkles } from "lucide-react";

export default function Benefits() {
  return (
    <section className="bg-bg-light-pink/30 py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mb-8 sm:mb-10">
          <p className="label text-primary-pink">Clubhouse Community Benefits</p>
          <h2 className="mt-3">Everything You&apos;re Getting</h2>
        </div>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-light-pink">
                <Users className="text-primary-pink" />
              </div>
              <div>
                <h3 className="text-xl">Community &amp; Support</h3>
                <ul className="mt-4 space-y-3 text-sm text-text-muted">
                  <li>
                    Post your questions and build your support network inside our Exclusive (and active)
                    Discord community
                  </li>
                  <li>
                    Collaborate and exchange ideas with others to stay motivated, inspired, and learn new
                    strategies
                  </li>
                  <li>Get real-time insights from peers who share the same goals and challenges</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-light-green">
                <Video className="text-text-dark" />
              </div>
              <div>
                <h3 className="text-xl">Live Audit Calls</h3>
                <p className="mt-4 text-sm text-text-muted">
                  With $3M+ in GMV, Kierra shares her expertise during Live Audit Calls! Submit your videos
                  for review and get insights to working strategy!
                </p>
                <div className="mt-4 overflow-hidden rounded-lg border border-gray-100">
                  <video
                    className="h-40 w-full object-cover"
                    src="/videos/1yRw1eaTEsfIdnUCu1WRwLCOICA.mp4"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-xl bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-light-yellow">
                <Sparkles className="text-primary-pink" />
              </div>
              <div>
                <h3 className="text-xl">Easy Mode with TESS</h3>
                <p className="text-sm text-text-light">Your TikTok Shop AI Script Generator</p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <div className="overflow-hidden">
                <div className="flex w-max animate-ticker-fast gap-4">
                  {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-text-dark shadow-sm">🛡️ Policy Checker</div>
                      <div className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-text-dark shadow-sm">🎉 Script Generator</div>
                      <div className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-text-dark shadow-sm">🔥 Hook Maker</div>
                      <div className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-text-dark shadow-sm">⭐️ SEO Caption Optimizer</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-text-muted">
                TESS is specifically trained to make your life easier crafting beautiful Shop Scripts,
                Hooks, &amp; Captions, in a matter of seconds.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <Image
                src="/images/HoXsQ5qJa4r3xqRLFvaYPsc0kdY.png"
                alt="Coach Keri"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl">Coach Keri</h3>
                <p className="text-sm text-text-light">Inside the chat daily</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              A huge addition to the Fast Track line-up! Keri&apos;s here inside the chat, providing feedback,
              training, insights, and overall amazing added support! We&apos;re so lucky to have her!
            </p>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li>🔥 An amazing 1M+ in GMV!</li>
              <li>💰 Over Six Figures in take home already in 2025!</li>
              <li>🙋‍♀️ Mom of four, crushing on TikTok Shop!</li>
            </ul>
            <Image
              src="/images/PBvpW9iBXWsz9gVkC6z99WDxCo.png"
              alt="Coach Keri results"
              width={420}
              height={300}
              className="mt-5 w-full rounded-xl border border-gray-100 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
