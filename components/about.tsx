export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-accent font-mono text-lg">01.</span>
          About Me
          <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate developer who loves creating efficient,
              user-centric applications. My journey in web development started
              during my BCA at CCS University, where I discovered my love for
              building things on the web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I&apos;m working at{" "}
              <span className="text-accent">ITDOSE INFOSYSTEMS</span> as a
              Software Developer, building enterprise-level healthcare
              management systems that serve 10,000+ daily users. I focus on
              writing clean, maintainable code and always strive to learn new
              technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or mentoring
              junior developers on React best practices and modern JavaScript
              patterns.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="w-56 h-56 md:w-64 md:h-64 bg-secondary rounded overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent/30">PS</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
