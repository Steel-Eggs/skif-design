import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Shield, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxDecorations from "@/components/ui/ParallaxDecorations";

const slides = [
  {
    id: 1,
    tag: "Хит продаж 2024",
    title: "Прицепы нового поколения",
    subtitle: "СКИФ",
    description: "Инновационные решения для перевозки грузов. Надёжность, проверенная временем.",
    cta: "Смотреть каталог",
    ctaLink: "/catalog",
    accent: "secondary",
  },
  {
    id: 2,
    tag: "Специальное предложение",
    title: "Лодочные прицепы",
    subtitle: "для настоящих",
    description: "Специализированные прицепы для лодок и катеров любых размеров.",
    cta: "Подобрать прицеп",
    ctaLink: "/catalog/lodochnye",
    accent: "accent",
  },
  {
    id: 3,
    tag: "Гарантия 2 года",
    title: "Фаркопы на все",
    subtitle: "марки авто",
    description: "Профессиональная установка фаркопов с сертификацией и гарантией.",
    cta: "Заказать установку",
    ctaLink: "/services/farkopy",
    accent: "secondary",
  },
];

const stats = [
  { value: "500+", label: "Моделей", icon: Truck },
  { value: "15K+", label: "Клиентов", icon: Award },
  { value: "15", label: "Лет опыта", icon: Shield },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative min-h-[100vh] gradient-hero text-primary-foreground overflow-hidden">
      <ParallaxDecorations variant="hero" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise" />

      <div className="container relative z-10 min-h-[100vh] flex flex-col justify-center py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${
                    slide.accent === "secondary" 
                      ? "bg-secondary text-secondary-foreground" 
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  {slide.tag}
                </motion.div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.9] tracking-tight">
                  <span className="block">{slide.title}</span>
                  <span className={`block ${
                    slide.accent === "secondary" ? "text-gradient" : "text-gradient-accent"
                  }`}>
                    {slide.subtitle}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to={slide.ctaLink}>
                <Button 
                  size="lg" 
                  className={`text-lg px-8 py-6 font-bold rounded-full group ${
                    slide.accent === "secondary"
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-accent text-accent-foreground hover:bg-accent/90"
                  }`}
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 font-semibold rounded-full border-2 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Смотреть видео
              </Button>
            </motion.div>

            {/* Slider controls */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentSlide ? 1 : -1);
                      setCurrentSlide(index);
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? "w-12 bg-secondary" 
                        : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <span className="text-primary-foreground/50 font-mono text-sm">
                {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right side visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main visual container */}
              <div className="relative w-[500px] h-[500px]">
                {/* Animated rings */}
                <div className="absolute inset-0 border-2 border-secondary/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-8 border-2 border-accent/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
                <div className="absolute inset-16 border border-primary-foreground/10 rounded-full" />

                {/* Central element */}
                <div className="absolute inset-24 rounded-full gradient-glass flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Truck className="w-20 h-20 mx-auto mb-4 text-secondary" />
                    <p className="text-lg font-heading font-bold">СКИФ</p>
                    <p className="text-sm text-primary-foreground/60">Прицепы</p>
                  </div>
                </div>

                {/* Floating stats */}
                {stats.map((stat, index) => {
                  const angles = [0, 120, 240];
                  const radius = 220;
                  const angle = (angles[index] * Math.PI) / 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="gradient-glass rounded-2xl p-4 text-center min-w-[100px]">
                        <stat.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                        <div className="text-2xl font-heading font-bold">{stat.value}</div>
                        <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
