"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Lightbulb, Code, Presentation } from "lucide-react";

const WhatIsHackathon = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Users,
      title: "Team Up",
      description: "Form a team of 2-4 people or find teammates at the event.",
    },
    {
      icon: Lightbulb,
      title: "Ideate",
      description: "Brainstorm innovative solutions to real-world challenges.",
    },
    {
      icon: Code,
      title: "Build",
      description: "Code, design, and bring your ideas to life in 12 hours.",
    },
    {
      icon: Presentation,
      title: "Present",
      description: "Demo your project to judges and win amazing prizes.",
    },
  ];

  return (
    <section className="py-24 bg-background noise-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
            New to Hackathons?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is a <span className="gradient-text">Hackathon</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A hackathon is an invention marathon where students come together to
            build innovative projects, learn new skills, and connect with fellow
            creators. No prior experience needed!
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15 }}
              >
                <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                <div className="p-8 bg-card rounded-xl border border-border card-hover text-center relative overflow-hidden group">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at center, hsl(186 20% 39% / 0.1), transparent)",
                    }}
                  />

                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/20 border border-secondary/30">
            <span className="text-2xl">🎉</span>
            <span className="text-secondary font-medium">
              Beginner-friendly event — All skill levels welcome!
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhatIsHackathon;
