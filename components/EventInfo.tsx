"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Clock, Sparkles, Trophy } from "lucide-react";

const EventInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-04T07:30:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const facts = [
    { icon: Users, label: "Team-based", description: "2-4 members per team" },
    {
      icon: Sparkles,
      label: "Free to attend",
      description: "No registration fee",
    },
    { icon: Clock, label: "12 hours", description: "Of non-stop hacking" },
    {
      icon: Trophy,
      label: "$10K+ in prizes",
      description: "For winning teams",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card noise-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
            Event Starts In
          </h2>
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Minutes" },
              { value: countdown.seconds, label: "Seconds" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-muted rounded-lg border border-border mb-2">
                  <span className="text-2xl md:text-4xl font-bold font-mono gradient-text">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              className="p-6 bg-background rounded-lg border border-border card-hover text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <fact.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-foreground mb-1">
                {fact.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
