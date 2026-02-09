import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { SectionReveal } from "./motion/MotionWrapper";

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Atmiya University",
    period: "2022 - 2026",
    grade: "Last GPA: 8.35/10",
  },
  {
    degree: "HSC (PCM)",
    institution: "GSEB",
    period: "2020 - 2022",
    grade: "Percentage: 49.5%",
  },
  {
    degree: "SSC",
    institution: "GSEB",
    period: "2019 - 2020",
    grade: "Percentage: 61.5%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container relative z-10 px-4">
        <SectionReveal variant="blur" className="text-center mb-16">
          <motion.h2 
            className="text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            EDUCATION
          </motion.h2>
          <motion.p 
            className="text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academic Background
          </motion.p>
        </SectionReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors"
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -80 : 80, 
                rotateY: index % 2 === 0 ? -10 : 10,
                filter: "blur(8px)"
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                filter: "blur(0px)"
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{ 
                x: 10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-xl bg-primary/10 text-primary shrink-0"
                    initial={{ rotate: -180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-lg font-semibold text-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.15 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      {edu.institution}
                    </motion.p>
                  </div>
                </div>
                <div className="md:text-right flex flex-col gap-1 ml-14 md:ml-0">
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </motion.div>
                  <motion.span 
                    className="text-sm text-primary font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
                  >
                    {edu.grade}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
