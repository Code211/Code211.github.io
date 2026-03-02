"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/#about" },
    { name: "Schedule", href: "/#schedule" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Workshops", href: "/workshops" },
    { name: "Activities", href: "/activities" },
    // { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/official_code211/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-2 mb-2">
              <div className="rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold">Code211</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Build. Learn. Collaborate.
              <br />
              12 hours to create something amazing.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <a
              href="mailto:hackathon.d211@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <Mail className="w-5 h-5" />
              hackathon.d211@gmail.com
            </a>
            <p className="text-muted-foreground text-sm">
              Have questions? Reach out to our organizing team and we'll get
              back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Code211. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Code of Conduct
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
