import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent font-mono text-sm mb-4">05. What&apos;s Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I&apos;m currently open to new opportunities and would love to hear
          from you. Whether you have a question, a project idea, or just want to
          say hi, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <a
            href="mailto:sharmapiyush8092@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm">sharmapiyush8092@gmail.com</span>
          </a>
          <a
            href="tel:+918445561749"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm">+91-8445561749</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10">
          <MapPin size={16} />
          <span>Noida, Uttar Pradesh, India</span>
        </div>

        <a
          href="mailto:sharmapiyush8092@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent font-medium text-sm rounded hover:bg-accent/10 transition-colors"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href="https://linkedin.com/in/piyushsharma-44a4ba366"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
