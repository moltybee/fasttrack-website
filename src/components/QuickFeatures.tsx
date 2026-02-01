import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const tessFeatures = [
  { icon: "💬", label: "Script Generator" },
  { icon: "🔥", label: "Hooks Maker" },
  { icon: "⭐️", label: "SEO Caption Optimizer" },
];

export default function QuickFeatures() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="relative overflow-hidden border border-bg-light-pink/70 bg-bg-light-pink/40">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Image src="/images/9t3ZzcxxAMPQISo79FSZxBz21s.svg" alt="Ask" width={28} height={28} />
              </div>
              <div>
                <h3 className="text-xl">Ask Your Questions</h3>
              </div>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-4">
              <p className="max-w-[280px] text-text-muted">
                Post in the chat or jump onto a Live Q&amp;A Session to ask your questions. We&apos;re here to
                help!
              </p>
              <Image
                src="/images/sNUPfYAOdtnKQOdXr0XBXSZvU.png"
                alt="Ask your questions"
                width={180}
                height={200}
                className="h-auto w-[160px] object-contain"
              />
            </CardContent>
          </Card>
          <Card className="border border-bg-light-green/70 bg-bg-light-green/40">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Image src="/images/8ZOAB533efG1UaA3mjBoDMZJQ.svg" alt="TESS" width={28} height={28} />
              </div>
              <div>
                <h3 className="text-xl">TESS Included</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {tessFeatures.map((feature) => (
                  <span
                    key={feature.label}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-text-dark shadow-sm"
                  >
                    {feature.icon} {feature.label}
                  </span>
                ))}
              </div>
              <p className="text-text-muted">AI Powered and specially trained for TikTok Shop Affiliates!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
