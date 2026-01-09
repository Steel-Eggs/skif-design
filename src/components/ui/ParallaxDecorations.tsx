import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxDecorationsProps {
  variant?: "hero" | "light" | "dark";
}

const ParallaxDecorations = ({ variant = "hero" }: ParallaxDecorationsProps) => {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -30]);

  if (!isMounted) return null;

  const isHero = variant === "hero";
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Large floating blob 1 */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className={`absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl animate-blob ${
          isHero ? "bg-secondary/20" : isDark ? "bg-secondary/10" : "bg-primary/5"
        }`}
      />
      
      {/* Large floating blob 2 */}
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className={`absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full blur-3xl shape-blob-2 ${
          isHero ? "bg-accent/15" : isDark ? "bg-accent/10" : "bg-secondary/5"
        }`}
      />

      {/* Geometric shapes */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-20 right-[20%]"
      >
        <div className={`w-20 h-20 border-2 rotate-45 animate-float ${
          isHero ? "border-secondary/40" : isDark ? "border-secondary/20" : "border-primary/20"
        }`} />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute top-[40%] left-[10%]"
      >
        <div className={`w-12 h-12 rounded-full animate-float-slow ${
          isHero ? "bg-accent/30" : isDark ? "bg-accent/20" : "bg-accent/10"
        }`} />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[30%] right-[15%]"
      >
        <div className={`w-16 h-16 rotate-12 animate-float ${
          isHero ? "bg-secondary/20" : isDark ? "bg-secondary/15" : "bg-secondary/10"
        }`} 
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </motion.div>

      {/* Decorative lines */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[60%] left-[5%] hidden lg:block"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" className={isHero ? "text-secondary/30" : isDark ? "text-secondary/20" : "text-primary/10"}>
          <path
            d="M10 100 Q 60 10, 100 100 T 190 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Dotted pattern */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-20 left-[25%] hidden md:grid grid-cols-5 gap-4"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              isHero ? "bg-primary-foreground/20" : isDark ? "bg-primary-foreground/10" : "bg-primary/10"
            }`}
          />
        ))}
      </motion.div>

      {/* Rings */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[25%] right-[5%] hidden xl:block"
      >
        <div className={`w-32 h-32 rounded-full border-2 ${
          isHero ? "border-secondary/20" : isDark ? "border-secondary/15" : "border-primary/10"
        }`}>
          <div className={`absolute inset-4 rounded-full border-2 ${
            isHero ? "border-accent/30" : isDark ? "border-accent/20" : "border-accent/10"
          }`} />
        </div>
      </motion.div>

      {/* Cross shape */}
      <motion.div
        style={{ y: y3, rotate: rotate1 }}
        className="absolute bottom-[40%] right-[30%] hidden lg:block"
      >
        <div className="relative w-8 h-8">
          <div className={`absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 ${
            isHero ? "bg-secondary/40" : isDark ? "bg-secondary/30" : "bg-primary/20"
          }`} />
          <div className={`absolute left-1/2 top-0 w-0.5 h-full -translate-x-1/2 ${
            isHero ? "bg-secondary/40" : isDark ? "bg-secondary/30" : "bg-primary/20"
          }`} />
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxDecorations;
