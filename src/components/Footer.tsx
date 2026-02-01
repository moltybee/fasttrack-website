import Image from "next/image";

const links = [
  { label: "Privacy Policy", href: "https://thefasttrackgirl.com/privacy-policy" },
  { label: "Terms and Conditions", href: "https://thefasttrackgirl.com/terms-and-conditions" },
  { label: "Disclaimer", href: "https://thefasttrackgirl.com/disclaimer" },
  { label: "Refund Policy", href: "https://thefasttrackgirl.com/refund-policy" },
  { label: "Cookie Policy", href: "https://thefasttrackgirl.com/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-footer">
      <Image
        src="/images/h32lVwj2f02piECyYdyD4y3oc.png"
        alt="Decorative"
        width={140}
        height={780}
        className="absolute left-0 top-10 hidden md:block"
      />
      <Image
        src="/images/YAbsSkBDwa2HuAiaYQtpnfPtrgM.png"
        alt="Decorative"
        width={120}
        height={120}
        className="absolute right-10 top-12 hidden md:block"
      />
      <div className="container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/9OZRbcL5mulT0bX1YSrCFJMI8KY.png" alt="Logo" width={48} height={48} />
            <div>
              <p className="font-heading text-2xl font-semibold italic tracking-tight text-primary-pink">
                Fast Track
              </p>
              <p className="text-xs text-text-light">COPYRIGHT © 2024 | THE FAST TRACK GIRL</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-text-muted">
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-primary-pink">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
