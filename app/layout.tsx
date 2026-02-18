import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Code211",
  description:
    "Join the Code211 Hackathon at Schaumburg High School! A full day to challenge, create, and innovate through code. Free registration for District 211 students.",

  keywords: [
    "Code211",
    "Fremd High School",
    "Schaumburg High School",
    "Palatine High School",
    "Conant High School",
    "Hoffman Estates High School",
    "Fremd coding competition",
    "Fremd High School coding event",
    "Fremd High School programming contest",
    "Fremd High School hackathon",
    "Fremd High School coding challenge",
    "Schaumburg coding competition",
    "Schaumburg High School coding event",
    "Schaumburg High School programming contest",
    "Schaumburg High School hackathon",
    "Schaumburg High School coding challenge",
    "Palatine coding competition",
    "Palatine High School coding event",
    "Palatine High School programming contest",
    "Palatine High School hackathon",
    "Palatine High School coding challenge",
    "Conant coding competition",
    "Conant High School coding event",
    "Conant High School programming contest",
    "Conant High School hackathon",
    "Conant High School coding challenge",
    "Hoffman Estates coding competition",
    "Hoffman Estates High School coding event",
    "Hoffman Estates High School programming contest",
    "Hoffman Estates High School hackathon",
    "Hoffman Estates High School coding challenge",
    "District 211 coding competition",
    "District 211 coding event",
    "District 211 programming contest",
    "District 211 hackathon",
    "District 211 coding challenge",
    "High school programming competition Illinois",
    "STEM coding contest for students",
    "Chicago suburban coding events",
    "Illinois high school hackathons",
    "Technology competitions for teens",
    "Student coding workshops",
    "High school software development contest",
    "Team-based coding challenges",
    "Youth hackathons Illinois",
    "Computer science events for high schoolers",
    "Innovation and technology challenges for students",
    "District 211 STEM education",
    "High school CS clubs in Illinois",
    "Illinois high school technology fairs",
    "Coding contests for high schoolers",
    "Suburban Chicago STEM initiatives",
    "Illinois tech competitions for students",
    "Digital literacy events for teens",
    "Programming bootcamps for high schoolers",
    "High school coding mentorship programs",
    "Hackathon prizes and awards",
    "Student-led tech projects",
    "Illinois STEM education outreach",
    "High school AI and cybersecurity competitions",
    "Coding career pathways for students",
    "Tech internship opportunities for high schoolers",
    "Robotics and coding clubs in Illinois",
    "STEM scholarships for high school students",
    "High school tech entrepreneurship programs",
    "Web and app development for students",
    "Machine learning and AI in high schools",
    "Blockchain education for students",
    "Suburban Chicago digital innovation",
    "Cybersecurity training for teens",
    "High school technology startup competitions",
    "Science and technology fairs in Illinois",
    "Coding camps for high school girls",
    "Tech volunteering opportunities for students",
    "STEM career preparation for high schoolers",
    "Digital innovation labs for students",
    "STEM curriculum development for high schools",
    "E-learning and programming resources",
    "Illinois high school CS outreach",
    "High school game development projects",
    "District 211 computer science initiatives",
    "Digital storytelling and coding for students",
    "Ethical hacking competitions for students",
    "Educational VR and AR in STEM",
    "High school data science projects",
    "Technology integration in education",
    "STEM project-based learning for teens",
    "UI/UX and web design for students",
    "Mobile app development workshops",
    "Coding for social impact projects",
    "Digital equity in high school education",
    "Online coding challenges for students",
    "Student-led hackathons in Illinois",
    "AI in high school education",
    "Illinois STEM research programs",
    "STEM leadership development for students",
    "High school technology networking events",
    "STEM field trips in Chicago suburbs",
    "High school innovation labs",
    "Tech scholarship opportunities in Illinois",
    "District 211 student tech initiatives",
  ],

  authors: [{ name: "Code211 Team" }],
  creator: "Code211 Team",
  robots: "index, follow",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
  },

  manifest: "/assets/favicon/site.webmanifest",

  appleWebApp: {
    title: "Code211",
  },

  openGraph: {
    title: "Code211",
    description:
      "Join the Code211 Hackathon at Schaumburg High School! A day to build innovative projects, collaborate with peers, and compete for exciting prizes.",
    url: "https://code211.org/",
    siteName: "Code211",
    images: [
      {
        url: "https://code211.org/assets/ogBanner.png",
        width: 1200,
        height: 630,
        alt: "Code211 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Code211 Hackathon",
    description:
      "A 12-hour District 211 hackathon bringing together students to create, compete, and innovate. Free registration for D211 students.",
    images: ["https://code211.org/assets/ogBanner.png"],
  },

  alternates: {
    canonical: "https://code211.org/",
  },
};


export const viewport: Viewport = {
  themeColor: "#4f7177",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
