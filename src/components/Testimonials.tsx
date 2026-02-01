import Image from "next/image";

const testimonials = [
  {
    name: "Sailorjayy",
    quote:
      "I have learned so much in such a short amount of time! ... The discord and weekly emails of trending products are such a game changer! ... Truly this course was the best I've taken of the many I have already tried!",
    avatar: "/images/8FI9RWuxm9P2aWDZxOtm4wPrcgs.webp",
  },
  {
    name: "Vani",
    quote:
      "I can't recommend Kierra's The Fast Track Girl course enough! ... packed with invaluable tips and insights that have made a huge difference ... her clear advice and practical strategies gave me the direction and confidence I needed.",
    avatar: "/images/GRMJgwFhOvGvM9iz1KuqoVaCf2U.webp",
  },
  {
    name: "Brooke",
    quote:
      "I absolutely love being a part of this community! ... I'm so happy I invested a little bit of money into myself and not only bought her course, but joined the community that came with it!",
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
    quote:
      "I purchased the course & have learned so so much. The way you break it all down, this old lady feels she can ACTUALLY do this! The community you have built is just full of amazing information. Thank you.",
    avatar: "/images/qDh3Kbavr3LcfTIXU1pRdgeI.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mb-8 text-center sm:mb-10">
          <p className="label text-primary-pink">From Our Members</p>
          <h2 className="mt-3">What Fast Trackers Are Saying</h2>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-ticker gap-6 px-6">
          {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="w-[320px] flex-shrink-0 rounded-xl bg-bg-light-yellow/60 p-6 shadow-soft sm:w-[380px]"
            >
              <p className="text-sm leading-relaxed text-text-muted">"{item.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <p className="font-semibold text-text-dark">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
