import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, product management, and payment processing. Implemented real-time inventory management and order tracking system using WebSockets. Achieved 99.9% uptime and handled 5,000+ concurrent users.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    year: "2024",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "Collaborative workspace application with real-time document editing and chat functionality. Implemented operational transformation algorithms for conflict-free simultaneous editing. Designed responsive UI supporting mobile and desktop platforms.",
    tech: ["React.js", "Socket.io", "Express.js", "PostgreSQL", "Material-UI"],
    year: "2024",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Comprehensive project management tool with drag-and-drop interface and analytics dashboard. Integrated data visualization using Chart.js for project metrics and team productivity insights. Implemented role-based access control and JWT authentication.",
    tech: ["React.js", "Redux", "Node.js", "MongoDB", "Chart.js"],
    year: "2023",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-accent font-mono text-lg">04.</span>
          Projects
          <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent font-mono text-sm">
                  {project.year}
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github size={20} />
                  </button>
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="View Live"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
