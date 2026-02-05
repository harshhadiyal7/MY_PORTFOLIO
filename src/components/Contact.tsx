import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "./motion/MotionWrapper";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harshhadiyal7733@gmail.com",
    href: "mailto:harshhadiyal7733@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 91065-76707",
    href: "tel:+919106576707",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rajkot, Gujarat",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <SectionReveal variant="rotate">
            <motion.h2 
              className="text-sm font-mono text-primary mb-4"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              GET IN TOUCH
            </motion.h2>
            <motion.p 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Work Together
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
          </SectionReveal>

          {/* Contact info cards */}
          <StaggerContainer className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((info, index) => (
              <StaggerItem key={info.label}>
                {info.href ? (
                  <motion.a 
                    href={info.href}
                    className="glass-card rounded-xl p-6 block hover:border-primary/50 transition-colors group"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.1,
                      ease: [0.25, 0.4, 0.25, 1]
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      initial={{ rotate: -180, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <info.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground text-sm font-medium truncate">{info.value}</p>
                  </motion.a>
                ) : (
                  <motion.div 
                    className="glass-card rounded-xl p-6"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.1,
                      ease: [0.25, 0.4, 0.25, 1]
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <motion.div
                      initial={{ rotate: -180, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <info.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground text-sm font-medium">{info.value}</p>
                  </motion.div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="glow" size="xl" asChild>
                <a href="mailto:harshhadiyal7733@gmail.com" className="group">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.span>
                  Send Me a Message
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            {[
              { href: "https://github.com/harshhadiyal7", icon: Github },
              { href: "https://www.linkedin.com/in/harsh-hadiyal-931992322/", icon: Linkedin },
            ].map((social, i) => (
              <motion.a 
                key={social.href}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.3, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 300 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
