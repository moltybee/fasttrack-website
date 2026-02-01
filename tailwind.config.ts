import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        "primary-pink": "#FF4579",
        "primary-pink-hover": "#E63D6D",
        "text-dark": "#212A40",
        "text-muted": "#485E79",
        "text-light": "#828E9D",
        "bg-light-pink": "#FFEFF2",
        "bg-light-green": "#E6FFD6",
        "bg-light-yellow": "#FFFAD4",
        "bg-light-purple": "#FFEDFB",
        "bg-light-orange": "#FFF9F3",
        "faq-text": "#FF8E8E",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        xl: "20px",
        lg: "16px",
      },
      boxShadow: {
        soft: "0 24px 60px -40px rgba(33, 42, 64, 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
