"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you have an Affiliate Program?",
    answer: "Yes! Members can apply to our affiliate program and earn commissions when they share the Clubhouse.",
  },
  {
    question: "Is there a limit to how many scripts?",
    answer: "Nope. TESS is unlimited so you can generate as many scripts, hooks, and captions as you need.",
  },
  {
    question: "How often are the Q&A Calls?",
    answer: "Live Q&A calls are hosted weekly, with replays saved inside the community portal.",
  },
  {
    question: "How was TESS Trained?",
    answer: "TESS was trained on proven TikTok Shop frameworks, policy guidelines, and winning shop content patterns.",
  },
  {
    question: "Is TESS just a ChatGPT plugin?",
    answer: "No. TESS is a purpose-built AI assistant customized specifically for TikTok Shop creators.",
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes. Your membership is month-to-month and you can cancel anytime from your account settings.",
  },
  {
    question: "Can I ask questions to Kierra directly?",
    answer: "Absolutely. Kierra hosts Live Audit Calls and answers questions in the community regularly.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-faq-text">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="rounded-xl border border-gray-100 bg-white p-4 shadow-soft">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
