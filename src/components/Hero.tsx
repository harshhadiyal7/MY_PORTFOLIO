import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const socialLinks = [
    { href: "https://github.com/harshhadiyal7", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/harsh-hadiyal-931992322/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:harshhadiyal7733@gmail.com", icon: Mail, label: "Email" },
    { href: "tel:+919106576707", icon: Phone, label: "Phone" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <div className="container relative z-10 px-4 py-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Photo */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-8"
          >
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-xl opacity-50" />
              
              {/* Border ring */}
              <motion.div 
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background">
                <img 
                  src={profilePhoto} 
                  alt="Harsh Hadiyal" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status indicator */}
              <motion.div 
                className="absolute bottom-2 right-2 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-background"></span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Status badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <motion.span 
              className="text-gradient inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Harsh
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light"
          >
            Full-Stack Developer
          </motion.p>

          {/* Tech stack */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-primary font-mono mb-8"
          >
            React.js • Node.js • MongoDB • Express
          </motion.p>

          {/* Location */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
          >
            <MapPin className="w-4 h-4" />
            <span>Rajkot, Gujarat, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" onClick={() => scrollToSection("contact")}>
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero-outline" size="xl" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors group"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + i * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={() => scrollToSection("skills")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
      </motion.button>
    </section>
  );
};

export default Hero;
