"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Title",
      size: "w-48 h-48", // Maintained square aspect ratio
      sponsors: [
        {
          name: "District 211",
          logo: "/sponsors/d211.png",
        },
      ],
    },
    {
      name: "Gold",
      size: "w-40 h-40",
      sponsors: [
        {
          name: "JetsPizza",
          logo: "/sponsors/jets.png",
        },
  
      ],
    },
    {
      name: "Silver",
      size: "w-32 h-32",
      sponsors: [],
    },
    {
      name: "Bronze",
      size: "w-24 h-24",
      sponsors: [],
    },
  ];

  const tierColors: Record<string, string> = {
    Title: "from-yellow-400 to-amber-600",
    Gold: "from-yellow-300 to-yellow-500",
    Silver: "from-gray-300 to-gray-400",
    Bronze: "from-amber-600 to-amber-800",
  };

  return (
    <section id="sponsors" className="py-24 bg-card noise-bg" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
            Made Possible By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Code211 is made possible thanks to the generous support of our
            amazing sponsors.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="space-y-12">
          {tiers.map(
            (tier, tierIndex) =>
              tier.sponsors.length > 0 && (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + tierIndex * 0.1 }}
                >
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${
                        tierColors[tier.name]
                      } text-background`}
                    >
                      {tier.name} Sponsor{tier.sponsors.length > 1 ? "s" : ""}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
                  </div>

                  <div className="flex flex-wrap justify-center gap-8">
                    {tier.sponsors.map((sponsor, sponsorIndex) => {
                      const isImage =
                        sponsor.logo.includes("/") ||
                        sponsor.logo.includes("http");

                      return (
                        <motion.div
                          key={sponsor.name}
                          className={`${tier.size} bg-card border border-border rounded-xl flex flex-col items-center justify-center card-hover group cursor-pointer relative overflow-hidden`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: 0.3 + tierIndex * 0.1 + sponsorIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* Logo Container - Slides up on hover */}
                          <div className="w-full h-full p-6 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-4">
                            {isImage ? (
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                            ) : (
                              <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors text-center">
                                {sponsor.logo}
                              </span>
                            )}
                          </div>

                          {/* Name Label - Fades in at bottom */}
                          <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                            <span className="text-xs font-medium text-foreground bg-background/80 px-2 py-1 rounded-full">
                              {sponsor.name}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ),
          )}
        </div>

        {/* Coming Soon Text */}
        <motion.div
          className="text-center mt-12 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground italic text-lg">
            ...and more partners joining soon!
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block p-8 bg-card border border-border rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">
              Interested in Sponsoring?
            </h3>
            <p className="text-muted-foreground mb-6">
              Partner with us to inspire the next generation of innovators.
            </p>

            <Link href="mailto:hackathon.d211@gmail.com?subject=Sponsorship Inquiry for Code211">
              <Button className="bg-primary hover:bg-primary/90 glow-effect">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
