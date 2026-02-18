"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const terminalLines = [
    "> initializing Code211...",
    "> loading innovation modules",
    "> compiling creativity",
    "> connecting hackers worldwide",
    "> ready to build.",
  ];

  useEffect(() => {
    const hasVisited =
      typeof window !== "undefined" && localStorage.getItem("code211-visited");
    if (hasVisited) {
      onComplete();
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stageTimings = [0, 600, 1200, 1800, 2400, 3000];
    stageTimings.forEach((timing, index) => {
      setTimeout(() => setStage(index), timing);
    });

    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("code211-visited", "true");
      }
      onComplete();
    }, 3500);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-background noise-bg flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute w-full h-1 bg-primary/20"
            animate={{ y: ["0vh", "100vh"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="w-full max-w-2xl px-8">
          <motion.div
            className="bg-card border border-border rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                code211.sh
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-2">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: stage >= index ? 1 : 0,
                    x: stage >= index ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center ${
                    index === terminalLines.length - 1
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {line}
                  {stage === index && index < terminalLines.length - 1 && (
                    <span className="terminal-cursor" />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(186 20% 39%), hsl(96 18% 43%))",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                <span>Loading...</span>
                <span>{progress}%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold font-mono gradient-text"
              animate={
                stage >= 4
                  ? {
                      textShadow: [
                        "0 0 20px hsl(186 20% 39% / 0.5)",
                        "0 0 40px hsl(186 20% 39% / 0.8)",
                        "0 0 20px hsl(186 20% 39% / 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1, repeat: Infinity }}
            >
              CODE211
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
