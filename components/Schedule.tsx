"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scheduleData = [
    {
      blocks: [
        {
          isOverlap: false,
          event: {
            time: "8:00 AM - 8:30 AM",
            title: "Check-in",
            type: "logistics",
            location: "Library Entrance",
            description: "Attendance Check",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "8:30 AM - 9:00 AM",
            title: "Opening Ceremony",
            type: "ceremony",
            location: "Library",
            description: "Intro & Rules",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "9:00 AM - 9:15 AM",
            title: "Hacking Begins",
            type: "hacking",
            location: "Library",
            description: "Official Start",
          },
        },
        {
          isOverlap: true,
          events: [
            {
              time: "9:30 AM - 10:15 AM",
              title: "Workshop 1: AI Ethics",
              type: "workshop",
              location: "213S",
              description:
                "Explore the ethical challenges and real-world implications of artificial intelligence.",
            },
            {
              time: "10:00 AM - 10:45 AM",
              title: "Activity 1: AI Clash",
              type: "activity",
              location: "218A",
              description:
                "Compete in the ultimate prompt-off by building and refining projects using only AI tools.",
            },
          ],
        },
        {
          isOverlap: false,
          event: {
            time: "11:15 AM - 12:00 PM",
            title: "Workshop 2: CRUD Applications",
            type: "workshop",
            location: "213S",
            description:
              "Build a real-time global chat app using Supabase. Focus on database operations and live updates, then publish your project with GitHub Pages.",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "12:00 PM - 12:45 PM",
            title: "Lunch Break",
            type: "food",
            location: "Siege Corner",
            description: "Jimmy Johns - First Come First Serve",
          },
        },
        {
          isOverlap: true,
          events: [
            {
              time: "12:45 PM - 1:30 PM",
              title: "Workshop 3: Game Development (FHS)",
              type: "workshop",
              location: "213S",
              description:
                "Learn Unity 3D fundamentals like player movement, prefabs, and pathfinding while building a twin-stick shooter prototype.",
            },
            {
              time: "1:15 PM - 2:00 PM",
              title: "Activity 2: Speed Stack: The Glow Up",
              type: "activity",
              location: "218A",
              description:
                "Transform the world’s worst website into a polished, high-quality design under time pressure.",
            },
          ],
        },
        {
          isOverlap: false,
          event: {
            time: "2:00 PM - 4:30 PM",
            title: "Uninterrupted Coding",
            type: "hacking",
            location: "Library",
            description: "Final Sprint",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "4:30 PM - 4:40 PM",
            title: "Hacking Ends / Buffer / Dinner",
            type: "transition",
            location: "Siege Corner",
            description: "Laptops Down / Jets Pizza - First Come First Serve",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "4:40 PM - 4:50 PM",
            title: "Instruction Block",
            type: "judging",
            location: "Library",
            description: "Judging Instructions",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "4:50 PM - 5:50 PM",
            title: "Group A Judging",
            type: "judging",
            location: "Library",
            description: "Project presentations",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "5:50 PM - 6:00 PM",
            title: "Buffer / Group Swap",
            type: "transition",
            location: "Library",
            description: "Switch Groups",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "6:00 PM - 7:00 PM",
            title: "Group B Judging",
            type: "judging",
            location: "Library",
            description: "Project presentations",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "7:20 PM - 7:45 PM",
            title: "Awards Ceremony",
            type: "ceremony",
            location: "Library",
            description: "Results & Closing",
          },
        },
        {
          isOverlap: false,
          event: {
            time: "7:45 PM - 8:00 PM",
            title: "Final Exit",
            type: "logistics",
            location: "Exit",
            description: "Building Clear",
          },
        },
      ],
    },
  ];

  const typeColors: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    hacking: {
      bg: "bg-primary/10 dark:bg-primary/25",
      text: "text-primary",
      border: "border-primary/30 dark:border-primary/40",
    },
    workshop: {
      bg: "bg-secondary/10 dark:bg-secondary/25",
      text: "text-secondary",
      border: "border-secondary/30 dark:border-secondary/40",
    },
    logistics: {
      bg: "bg-slate-500/10 dark:bg-slate-400/15",
      text: "text-slate-700 dark:text-slate-300",
      border: "border-slate-500/30 dark:border-slate-400/30",
    },
    transition: {
      bg: "bg-slate-500/10 dark:bg-slate-400/15",
      text: "text-slate-700 dark:text-slate-300",
      border: "border-slate-500/30 dark:border-slate-400/30",
    },
    activity: {
      bg: "bg-amber-500/10 dark:bg-amber-500/20",
      text: "text-amber-600 dark:text-amber-500",
      border: "border-amber-500/30",
    },
    ceremony: {
      bg: "bg-purple-500/10 dark:bg-purple-500/20",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-500/30",
    },
    food: {
      bg: "bg-rose-500/10 dark:bg-rose-500/20",
      text: "text-rose-600 dark:text-rose-400",
      border: "border-rose-500/30",
    },
    judging: {
      bg: "bg-indigo-500/10 dark:bg-indigo-500/20",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-500/30",
    },
  };

  const EventCard = ({
    event,
    delayIndex,
    extraClasses = "",
  }: {
    event: any;
    delayIndex: number;
    extraClasses?: string;
  }) => (
    <motion.div
      className={`w-full min-h-[180px] p-4 md:p-5 rounded-xl border flex flex-col gap-2 ${typeColors[event.type].bg} ${typeColors[event.type].border} ${extraClasses}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + delayIndex * 0.05 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-2 mb-1">
        <span className="font-mono text-sm font-semibold opacity-80">
          {event.time}
        </span>
        <span
          className={`text-[10px] px-2.5 py-1 rounded-full uppercase tracking-widest font-bold border ${typeColors[event.type].bg} ${typeColors[event.type].text} ${typeColors[event.type].border}`}
        >
          {event.type}
        </span>
      </div>
      <div>
        <h4 className={`font-bold text-xl mb-1 ${typeColors[event.type].text}`}>
          {event.title}
        </h4>
        <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">
          {event.location}
        </p>
        <p className="text-sm opacity-80 whitespace-pre-line leading-relaxed">
          {event.description}
        </p>
      </div>

      {["workshop", "activity"].includes(event.type) && (
        <div className="mt-auto pt-4">
          <Link
            href={`/${event.type === "activity" ? "activities" : event.type + "s"}`}
            className={`text-xs px-4 py-2 rounded-md uppercase tracking-widest font-bold border ${typeColors[event.type].border} ${typeColors[event.type].text} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}
          >
            More Details
          </Link>
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="schedule" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-3 block">
            Event Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Schedule</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center">
          {scheduleData[0].blocks.map((block, blockIndex) => (
            <div key={blockIndex} className="w-full">
              {block.isOverlap ? (
                /* REMOVED md:pb-12 here. The grid automatically fits the shifted card now. */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start">
                  {block.events.map((event: any, eventIndex: number) => (
                    <EventCard
                      key={event.title}
                      event={event}
                      delayIndex={blockIndex + eventIndex}
                      extraClasses={eventIndex === 1 ? "md:mt-12" : ""}
                    />
                  ))}
                </div>
              ) : (
                <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
                  <EventCard event={block.event} delayIndex={blockIndex} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
