"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Plus, Minus } from "lucide-react";

const FAQs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Code211?",
          a: "Code211 is a 12-hour hackathon where students team up to build innovative projects, learn new skills, and compete for prizes. It's a celebration of creativity, collaboration, and coding!",
        },
        {
          q: "Who can participate?",
          a: "Any student currently enrolled in District 211 high school can participate! We welcome all skill levels, from complete beginners to experienced developers.",
        },
        {
          q: "Is there a registration fee?",
          a: "No! Code211 is completely free to attend. We provide food, swag, and everything you need for the day.",
        },
      ],
    },
    {
      category: "Teams",
      questions: [
        {
          q: "How big can teams be?",
          a: "Teams can have 2-4 members. If you don't have a team, don't worry! We'll have team formation activities at the start of the event.",
        },
        {
          q: "Can I participate solo?",
          a: "We encourage team participation for the best experience, but solo hackers are welcome. You can find teammates at our team formation event!",
        },
      ],
    },
    {
      category: "Logistics",
      questions: [
        {
          q: "What should I bring?",
          a: "Bring your laptop, charger, student ID, and anything else you need to be comfortable (blanket, pillow, etc.). We'll provide food, drinks, and internet.",
        },
        {
          q: "Will food be provided?",
          a: "Yes! We'll have lunch, dinner, and snacks. Let us know about any dietary restrictions during registration.",
        },
      ],
    },
    {
      category: "Prizes",
      questions: [
        {
          q: "What can I win?",
          a: "We have over $10,000 in prizes including tech gadgets and sponsored prizes.",
        },
        {
          q: "How are projects judged?",
          a: "Projects are judged on creativity, technical complexity, design, and impact. You'll present your project to judges in a 3-minute demo.",
        },
      ],
    },
  ];

  const allQuestions = faqs.flatMap((category, catIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      category: category.category,
      index: catIndex * 10 + qIndex,
    })),
  );

  return (
    <section id="faqs" className="py-24 bg-background noise-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto [column-count:1] md:[column-count:2] gap-4 space-y-4">
          {allQuestions.map((faq, index) => (
            <div key={index} className="break-inside-avoid mb-4">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="border border-border rounded-lg overflow-hidden bg-background"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                    {faq.category}
                  </span>
                  <span className="font-medium">{faq.q}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-muted-foreground border-t border-border pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
              </div>
          ))}
        </div>

        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us →
            </Link>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FAQs;
