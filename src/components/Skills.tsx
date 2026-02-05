import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, TestTube, Layers } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "./motion/MotionWrapper";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "Java"],
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: ["React.js", "Redux", "Context API", "TailwindCSS", "Vite", "Responsive Design", "RESTful APIs"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "API Development", "JWT & OAuth", "MVC Architecture"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "MongoDB Atlas", "Database Design"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "GitHub Actions", "Nginx", "Vercel", "Railway", "Render", "AWS (EC2, S3, IAM)"],
  },
  {
    title: "Testing & Tools",
    icon: TestTube,
    skills: ["Postman", "Git", "GitHub", "Agile/Scrum", "Debugging", "Code Review"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <SectionReveal variant="blur" className="text-center mb-16">
          <motion.h2 
            className="text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SKILLS & EXPERTISE
          </motion.h2>
          <motion.p 
            className="text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies I Work With
          </motion.p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <StaggerItem key={category.title}>
              <motion.div
                className="glass-card rounded-2xl p-6 h-full hover:border-primary/50 transition-colors group cursor-default"
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <motion.div 
                    className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
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

export default Skills;
