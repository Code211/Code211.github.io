"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Clock,
  MapPin,
  Gamepad2,
  Music,
  Pizza,
  Coffee,
  Trophy,
  Puzzle,
  Film,
  Laugh,
  PartyPopper, // Added for empty state
  Sparkles, // Added for empty state
} from "lucide-react";

export default function ActivitiesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ---------------------------------------------------------
  // TODO: ADD YOUR ACTIVITIES HERE
  // If this array is empty, the "Coming Soon" message appears.
  // If you add items, the Grid automatically appears.
  // ---------------------------------------------------------
  const activities = [
    /*
    {
      name: "Tech Trivia Championship",
      description: "Test your knowledge. Win amazing prizes!",
      location: "Main Hall",
      time: "Sat 3:00 PM",
      icon: Trophy,
      color: "from-yellow-400 to-amber-500",
    },
    {
      name: "Game Night",
      description: "Board games, card games, and video game tournaments.",
      location: "Lounge Area",
      time: "Sat 9:00 PM",
      icon: Gamepad2,
      color: "from-purple-400 to-pink-500",
    },
    */
  ];

  const isComingSoon = activities.length === 0;

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
              Take a Break
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Activities</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hackathons are not just about coding! Join us for games, food,
              networking, and fun.
            </p>
          </motion.div>

          {/* CONDITIONAL RENDERING */}
          {isComingSoon ? (
            /* --- COMING SOON STATE --- */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center py-20 border border-dashed border-border rounded-xl bg-card/50"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <PartyPopper className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Planning the Fun{" "}
                <Sparkles className="w-5 h-5 text-purple-500" />
              </h2>
              <p className="text-muted-foreground text-center max-w-md">
                We are curating a list of awesome mini-events, games, and snack
                breaks. Stay tuned for the fun schedule!
              </p>
            </motion.div>
          ) : (
            /* --- ACTIVE GRID STATE --- */
            <>
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                  <span className="text-2xl mr-2">🎉</span>
                  <span className="font-medium">
                    Remember: Balance is key! Have fun while you hack.
                  </span>
                </div>
              </motion.div>

              {/* Dynamic Grid: auto-fit with min-width of 280px */}
              <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.name}
                    className="group relative bg-card border border-border rounded-xl overflow-hidden card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div
                      className={`h-24 bg-gradient-to-br ${activity.color} flex items-center justify-center`}
                    >
                      <activity.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        {activity.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {activity.description}
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{activity.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${activity.color} pointer-events-none`}
                    />
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
