"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Clock,
  MapPin,
  Database,
  Brain,
  Gamepad2,
  Construction,
  Sparkles,
  Github,
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
    {
      name: "AI Ethics",
      lead: "Chloe Kim",
      description:
        "This workshop explores how artificial intelligence is impacting today’s world. Through  variety of interactive activities, students will learn about key issues in AI, including bias in AI systems, data privacy, misinformation, and the role AI plays in school. This session is perfect for anyone who enjoys debating ethical issues or is looking for a fun yet thought-provoking workshop!",
      location: "213S",
      time: "Sat 9:30 AM",
      skill: "beginner",
      icon: Brain,
      color: "text-purple-400", // New field
      bgColor: "bg-purple-400/10", // Optional: for the icon box
    },
    {
      name: "CRUD Applications",
      lead: "Ethan Gandhi & Vedant Patil",
      description:
        "This workshop builds a real-time global chat app using Supabase. You’ll focus on inserting and querying data, and handling live updates with subscriptions. With HTML and CSS provided, you’ll concentrate on logic and database interaction, then publish your project using GitHub Pages.",
      location: "213S",
      time: "Sat 11:15 AM",
      skill: "intermediate",
      icon: Database,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      sourceCodeUrl: "https://github.com/V-Paritosh/CRUD-Applications",
    },
    {
      name: "Game Development",
      lead: "Tanmay Shetty &  Tanav Somireddy",
      description:
        "Learn the fundamentals of game development in Unity 3D, including player movement, prefabs, and pathfinding. By the end, you’ll build a prototype twin-stick shooter with custom power-ups. Recommended for students with AP Computer Science A experience or familiarity with object-oriented programming.",
      location: "213S",
      time: "Sat 12:45 PM",
      skill: "intermediate",
      icon: Gamepad2,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      sourceCodeUrl:
        "https://github.com/SentientPeeledLemon/Hackathon_TwinStick_FullCopy",
    },
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
              {/* <motion.div
                className="flex justify-center gap-4 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {["all", "beginner", "intermediate"].map((level) => (
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
              </motion.div> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorkshops.map((workshop, index) => (
                  <motion.div
                    key={workshop.name}
                    className="bg-card border border-border rounded-xl p-6 card-hover flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    {/* Icon and Badge Row */}
                    <div className="flex justify-between items-start mb-4">
                      {/* Dynamic Background Color */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${workshop.bgColor}`}
                      >
                        {/* Dynamic Icon Color */}
                        <workshop.icon
                          className={`w-6 h-6 ${workshop.color}`}
                        />
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
                        {workshop.skill.charAt(0).toUpperCase() +
                          workshop.skill.slice(1)}
                      </span>
                    </div>

                    {/* Title and Lead */}
                    <h3 className="text-xl font-bold">{workshop.name}</h3>
                    <p className="text-muted-foreground/70 text-sm font-medium mb-3">
                      Led by{" "}
                      <span className="text-foreground">{workshop.lead}</span>
                    </p>

                    {/* Description pushes the footer down */}
                    <p className="text-foreground text-sm mb-6 flex-grow">
                      {workshop.description}
                    </p>

                    {/* Clean Footer with Icons at the bottom */}
                    <div className="space-y-3 text-sm text-muted-foreground pt-4 border-t border-border/40 mt-auto">
                      <div className="flex items-center gap-2">
                        {/* Matching the small icons to the main theme color looks sharp */}
                        <Clock className={`w-4 h-4 ${workshop.color}`} />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 ${workshop.color}`} />
                        <span>{workshop.location}</span>
                      </div>
                      {workshop.sourceCodeUrl && (
                        <a
                          href={workshop.sourceCodeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="font-medium">View Source Code</span>
                        </a>
                      )}
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
