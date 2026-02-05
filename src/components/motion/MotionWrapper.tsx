import { motion, useInView, type Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

// Fade up animation
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  }),
};

// Scale up animation
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  }),
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Section reveal variants - more dramatic for full sections
export const sectionRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Blur reveal variants
export const blurRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Rotate reveal variants
export const rotateRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: 15,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const FadeUp = ({ children, className, delay = 0, once = true }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-100px" }}
    variants={fadeUpVariants}
    custom={delay}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, className, delay = 0, once = true }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-100px" }}
    variants={fadeInVariants}
    custom={delay}
  >
    {children}
  </motion.div>
);

export const ScaleUp = ({ children, className, delay = 0, once = true }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-100px" }}
    variants={scaleUpVariants}
    custom={delay}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, className, delay = 0, once = true }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-100px" }}
    variants={slideInLeftVariants}
    custom={delay}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, className, delay = 0, once = true }: MotionWrapperProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-100px" }}
    variants={slideInRightVariants}
    custom={delay}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainerVariants}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={staggerItemVariants}>
    {children}
  </motion.div>
);

// Section Reveal - dramatic full-section animation
interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "blur" | "rotate";
  delay?: number;
}

export const SectionReveal = ({ children, className, variant = "default", delay = 0 }: SectionRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  
  const variants = {
    default: sectionRevealVariants,
    blur: blurRevealVariants,
    rotate: rotateRevealVariants,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      style={{ 
        transitionDelay: `${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax section wrapper
interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export const ParallaxSection = ({ children, className, offset = 50 }: ParallaxSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: offset }}
      animate={{ y: isInView ? 0 : offset }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Text reveal with character-by-character animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
  const words = text.split(" ");
  
  return (
    <motion.span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: delay + (wordIndex * 0.1) + (charIndex * 0.03),
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// Counter animation for numbers
interface CounterProps {
  value: number;
  className?: string;
  suffix?: string;
  duration?: number;
}

export const Counter = ({ value, className, suffix = "", duration = 2 }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <CounterAnimation value={value} duration={duration} />
            {suffix}
          </motion.span>
        )}
      </motion.span>
    </motion.span>
  );
};

const CounterAnimation = ({ value, duration }: { value: number; duration: number }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {value}
      </motion.span>
    </motion.span>
  );
};

// Hover animations for cards
export const cardHoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

// Hover animations for icons
export const iconHoverVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } },
};
