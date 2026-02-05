import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "./motion/MotionWrapper";

const projects = [
  {
    title: "Campus Resource Management System",
    description: "Full-stack platform with Multi-User Role-Based Access Control (RBAC) to manage Students, Hostels, Canteens, and Stationery vendors. Features JWT authentication, protected routes, and real-time admin dashboard.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Secure RESTful API with JWT & Bcrypt",
      "Mobile-first responsive design",
      "Admin Dashboard for real-time monitoring",
      "Asynchronous CRUD operations",
    ],
  },
  {
    title: "Memory Card Game",
    description: "Interactive Memory Card Game built with React using functional components and Hooks. Features card-flip logic, pair matching, timer, and score tracking with optimized rendering.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/harshhadiyal7/My-Memory-Card-Game",
    live: "https://cardmachinwithharsh.netlify.app/",
    highlights: [
      "Fisher-Yates shuffling algorithm",
      "Smooth animations & transitions",
      "Responsive UI design",
      "Performance optimized",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <SectionReveal variant="default" className="text-center mb-16">
          <motion.h2 
            className="text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            FEATURED WORK
          </motion.h2>
          <motion.p 
            className="text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Things I've Built
          </motion.p>
        </SectionReveal>

        <StaggerContainer className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, projectIndex) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="glass-card rounded-2xl p-8 h-full hover:border-primary/50 transition-colors group flex flex-col"
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: projectIndex * 0.15,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="p-3 rounded-xl bg-primary/10 text-primary"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + projectIndex * 0.15, type: "spring" }}
                    whileHover={{ rotate: -10, scale: 1.1 }}
                  >
                    <Folder className="w-8 h-8" />
                  </motion.div>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + projectIndex * 0.15 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground text-sm mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + projectIndex * 0.15 }}
                >
                  {project.description}
                </motion.p>

                {/* Highlights */}
                <ul className="mb-6 space-y-1 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <motion.li 
                      key={i} 
                      className="text-sm text-muted-foreground flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <motion.span 
                        className="text-primary"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      >
                        ▹
                      </motion.span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(210 100% 50% / 0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
