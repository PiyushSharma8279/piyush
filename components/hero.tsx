import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-accent text-sm md:text-base mb-4 tracking-wide">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          Piyush Sharma<span className="text-accent">.</span>
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
          Frontend Developer
        </h2>
        <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-8">
          Full-stack React Developer with 1.5+ years of experience building
          scalable web applications. Specialized in Next.js, React, Node.js, and
          Tailwind CSS.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium text-sm rounded hover:bg-foreground/90 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm rounded hover:bg-secondary transition-colors"
          >
            Contact Me
          </Link>
        </div>
        <div className="mt-20 md:mt-32">
          <Link
            href="#about"
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs mb-2">Scroll down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
