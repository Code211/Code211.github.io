"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import HeroBackground3D from "./HeroBackground3D";
// 1. Import navigation hooks
import { usePathname, useRouter } from "next/navigation";

const Hero = () => {
  // 2. Initialize hooks
  const pathname = usePathname();
  const router = useRouter();

  // 3. Define the scroll handler with your specific logic
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const href = "/#schedule";

    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (pathname === "/") {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Using router.push is smoother for Next.js than window.location
        router.push(href);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground3D />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter">
            <span className="text-foreground">Code211</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Build. Learn. Collaborate.
            <br />
            <span className="text-foreground font-medium">
              12 hours to create something amazing.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-10 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>April 4, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Schaumburg High School</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow-effect group"
              asChild // Optimization: Using asChild allows the Link to be the underlying element
            >
              <Link
                href="https://forms.gle/UD1pEyFbTWy1Yddy7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* 4. Removed the wrapping <Link> and added onClick to the Button */}
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-border hover:bg-muted"
              onClick={handleScroll}
            >
              View Schedule
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
