'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-background-secondary relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-green-500/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-3xl" />
      
      <Container>
        <Section className="py-16 md:py-20 relative z-10">
          {/* Main Footer Content */}
          <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Image 
                    src="/Logo.png" 
                    alt="EduPilot Logo" 
                    width={40} 
                    height={40}
                    className="w-10 h-10"
                  />
                  <h3 className="text-2xl font-bold text-foreground">EduPilot</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Transforming education through AI-powered personalized learning experiences.
                </p>
              </div>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Stay Updated</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all text-sm"
                  />
                  <button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Column */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-foreground relative inline-block">
                Product
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Demo', 'API'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-colors" />
                      {item}
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Column */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-foreground relative inline-block">
                Company
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/0 group-hover:bg-green-500 transition-colors" />
                      {item}
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Connect Column */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold text-foreground relative inline-block">
                Connect
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              </h4>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative w-12 h-12 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-green-500/50 hover:bg-card/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={link.name}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300 -z-10" />
                  </a>
                ))}
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2 pt-4">
                <p className="text-sm font-semibold text-foreground">Get in Touch</p>
                <a href="mailto:hello@edupilot.com" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@edupilot.com
                </a>
                <a href="tel:+1234567890" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                <p>&copy; 2024 EduPilot. All rights reserved.</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <span className="hidden md:block text-border">•</span>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                  <span className="text-border">•</span>
                  <Link href="/terms-conditions" className="hover:text-foreground transition-colors">Terms of Service</Link>
                  <span className="text-border">•</span>
                  <Link href="/cancellation-refunds" className="hover:text-foreground transition-colors">Cancellation & Refunds</Link>
                  <span className="text-border">•</span>
                  <Link href="/shipping" className="hover:text-foreground transition-colors">Shipping</Link>
                  <span className="text-border">•</span>
                  <Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
                </div>
              </div>
              
              {/* Made with Love */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse text-lg">❤️</span>
                <span>for educators</span>
              </div>
            </div>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute -top-6 right-0 md:right-8 group w-12 h-12 rounded-full border border-border/50 bg-card/60 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-green-500/50 hover:bg-card/80 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/20 group-hover:to-emerald-500/20 blur-xl transition-all duration-300 -z-10" />
            </button>
          </div>
        </Section>
      </Container>
    </footer>
  );
}