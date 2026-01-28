const experiences = [
  {
    company: "ITDOSE INFOSYSTEMS",
    role: "Software Developer",
    location: "Noida, Uttar Pradesh, India",
    period: "December 2025 – Present",
    highlights: [
      "Developing enterprise-level healthcare management systems using React.js and Node.js, serving 10,000+ daily users",
      "Architected and implemented RESTful APIs with Node.js and Express, reducing API response time by 40%",
      "Collaborated with cross-functional teams to design and deploy scalable microservices architecture",
      "Implemented comprehensive unit and integration tests using Jest, achieving 85%+ code coverage",
      "Optimized application performance through code splitting and lazy loading, improving load time by 35%",
    ],
  },
  {
    company: "Jim Digital",
    role: "Software Developer",
    location: "Noida, Uttar Pradesh, India",
    period: "August 2024 – December 2025",
    highlights: [
      "Built 15+ responsive web applications using React.js, Next.js, and Tailwind CSS for diverse clients",
      "Developed reusable component libraries that reduced development time by 30% across projects",
      "Integrated third-party APIs and payment gateways (Stripe, PayPal) for e-commerce platforms",
      "Implemented SEO best practices and Server-Side Rendering with Next.js, improving organic traffic by 50%",
      "Mentored 2 junior developers on React best practices and modern JavaScript patterns",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-accent font-mono text-lg">03.</span>
          Experience
          <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-border">
              <div className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full -translate-x-[7px]" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-accent">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {exp.period}
                </p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm leading-relaxed flex gap-3"
                  >
                    <span className="text-accent mt-1.5 shrink-0">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
