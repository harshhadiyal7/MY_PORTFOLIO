import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionReveal } from "./motion/MotionWrapper";
import { useRef } from "react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "WeTheDeveloper Pvt. Ltd.",
    period: "Dec 2025 – Current",
    highlights: [
      "Built and optimized React.js components, improving frontend performance and reducing load times by 20%",
      "Collaborated with backend engineers to integrate RESTful APIs for seamless data flow",
      "Applied Redux state management for complex UI features, cutting debugging time by 15%",
      "Enforced JavaScript best practices, testing, and code reviews for production-ready code",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "SaiKet Systems",
    period: "Nov 2025 – Dec 2025",
    highlights: [
      "Created and deployed end-to-end web modules using the MERN stack",
      "Enhanced MongoDB schemas, boosting query efficiency by 25%",
      "Engineered secure REST APIs in Node.js/Express.js, reducing server response times",
      "Assisted in cloud migration (AWS & Azure), improving application scalability",
      "Contributed in Agile sprints delivering clean, testable, production-ready code",
    ],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <SectionReveal variant="rotate" className="text-center mb-16">
          <motion.h2 
            className="text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WORK EXPERIENCE
          </motion.h2>
          <motion.p 
            className="text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where I've Worked
          </motion.p>
        </SectionReveal>
        
        <div className="max-w-3xl mx-auto" ref={containerRef}>
          <div className="relative">
            {/* Timeline line with gradient */}
            <motion.div 
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ originY: 0 }}
              />
            </motion.div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
                }`}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -80 : 80,
                  filter: "blur(10px)"
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  filter: "blur(0px)"
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.25, 
                  ease: [0.25, 0.4, 0.25, 1] 
                }}
              >
                {/* Timeline dot with pulse effect */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.25, type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-primary border-4 border-background"
                    style={{
                      boxShadow: "0 0 20px hsl(210 100% 50% / 0.5)",
                    }}
                    whileHover={{ scale: 1.5 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 20px hsl(210 100% 50% / 0.5)",
                        "0 0 30px hsl(210 100% 50% / 0.8)",
                        "0 0 20px hsl(210 100% 50% / 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <motion.div 
                  className={`glass-card rounded-2xl p-6 ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} hover:border-primary/50 transition-colors`}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-mono">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="text-sm text-muted-foreground flex gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <motion.span 
                          className="text-primary shrink-0"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        >
                          ▹
                        </motion.span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
