"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Clock,
  MapPin,
  Users,
  Code,
  Database,
  Palette,
  Smartphone,
  Brain,
  Rocket,
  Construction, // Added this icon
  Sparkles, // Added this icon
} from "lucide-react";

export default function WorkshopsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  // ---------------------------------------------------------
  // TODO: ADD YOUR WORKSHOPS HERE
  // When you add items to this array, the "Coming Soon" text
  // will automatically disappear and the grid will appear.
  // ---------------------------------------------------------
  const workshops = [
    /* {
      name: "Intro to Web Development",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript.",
      location: "Room A101",
      time: "Sat 11:00 AM",
      skill: "beginner",
      icon: Code,
    },
    */
  ];

  const filteredWorkshops =
    filter === "all" ? workshops : workshops.filter((w) => w.skill === filter);

  const isComingSoon = workshops.length === 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
              Level Up Your Skills
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Workshops</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Learn from industry experts and gain hands-on experience with the
              latest technologies.
            </p>
          </motion.div>

          {/* CONDITIONAL RENDERING */}
          {isComingSoon ? (
            /* --- COMING SOON VIEW --- */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center py-20 border border-dashed border-border rounded-xl bg-card/50"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Construction className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Cooking up the Schedule{" "}
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </h2>
              <p className="text-muted-foreground text-center max-w-md">
                We are currently finalizing the workshop details, speakers, and
                locations. Check back in a few days!
              </p>
            </motion.div>
          ) : (
            /* --- ACTIVE GRID VIEW --- */
            <>
              <motion.div
                className="flex justify-center gap-4 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {["all", "beginner", "advanced"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setFilter(level)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      filter === level
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorkshops.map((workshop, index) => (
                  <motion.div
                    key={workshop.name}
                    className="bg-card border border-border rounded-xl p-6 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <workshop.icon className="w-6 h-6 text-primary" />
                    </div>

                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        workshop.skill === "beginner"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {workshop.skill.charAt(0).toUpperCase() +
                        workshop.skill.slice(1)}
                    </span>

                    <h3 className="text-xl font-bold mb-2">{workshop.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {workshop.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
