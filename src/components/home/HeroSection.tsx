import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import trailerImage1 from "@/assets/products/trailer-1.jpg";
import trailerImage2 from "@/assets/products/trailer-2.jpg";
import trailerImage3 from "@/assets/products/trailer-3.jpg";

const slides = [
  {
    id: 1,
    title: "Автомобильные прицепы",
    highlight: "СКИФ",
    description: "Продаём надёжные прицепы для легковых автомобилей. Широкий ассортимент, гарантия качества и доступные цены.",
    image: trailerImage1,
    buttonText: "Перейти в каталог",
    buttonLink: "/catalog",
  },
  {
    id: 2,
    title: "Прицепы для лодок",
    highlight: "и катеров",
    description: "Специализированные прицепы для безопасной транспортировки водного транспорта. Надёжные конструкции с оцинкованными рамами.",
    image: trailerImage2,
    buttonText: "Смотреть прицепы",
    buttonLink: "/catalog/lodki",
  },
  {
    id: 3,
    title: "Прицепы для",
    highlight: "мототехники",
    description: "Удобные решения для перевозки мотоциклов, квадроциклов и снегоходов. Надёжная фиксация и простая погрузка.",
    image: trailerImage3,
    buttonText: "Подробнее",
    buttonLink: "/catalog/moto",
  },
];

const DotProgress = ({ slideIndex }: { slideIndex: number }) => (
  <span
    key={slideIndex}
    className="absolute inset-0 bg-accent rounded-full"
    style={{ animation: 'progress 5s linear forwards', transformOrigin: 'left' }}
  />
);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const changeSlide = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPreviousSlide(currentSlide);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 800);
  }, [currentSlide, isAnimating]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, changeSlide]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    changeSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content with slide animation */}
          <div className="space-y-8 text-center lg:text-left relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full text-sm font-medium backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span>Более 15 лет на рынке</span>
            </div>
            
            <div className="overflow-hidden">
              <h1 
                key={`title-${currentSlide}`}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight animate-slide-up"
              >
                {currentSlideData.title}{" "}
                <span className="text-accent">{currentSlideData.highlight}</span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p 
                key={`desc-${currentSlide}`}
                className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up-delayed"
              >
                {currentSlideData.description}
              </p>
            </div>
            
            <div 
              key={`buttons-${currentSlide}`}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
            >
              <Link to={currentSlideData.buttonLink}>
                <Button size="lg" className="gradient-accent text-accent-foreground font-bold text-lg px-8 hover:opacity-90 transition-opacity shadow-lg hover:scale-105 transition-transform duration-300">
                  {currentSlideData.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-background/10 border-2 border-background/30 text-primary-foreground font-bold text-lg px-8 hover:bg-background/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  Наши услуги
                </Button>
              </Link>
            </div>

            {/* Slider dots with progress animation */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${
                    currentSlide === index 
                      ? 'w-10 bg-accent/30' 
                      : 'w-3 bg-background/30 hover:bg-background/50'
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                >
                  {currentSlide === index && (
                    isAutoPlaying
                      ? <DotProgress key={currentSlide} slideIndex={currentSlide} />
                      : <span className="absolute inset-0 bg-accent rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-heading font-black text-accent">500+</div>
                <div className="text-sm text-primary-foreground/70">моделей прицепов</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-heading font-black text-accent">15000+</div>
                <div className="text-sm text-primary-foreground/70">довольных клиентов</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-heading font-black text-accent">2 года</div>
                <div className="text-sm text-primary-foreground/70">гарантии</div>
              </div>
            </div>
          </div>

          {/* Image/Visual with advanced animation */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Trailer image container with sliding animation */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-background/20 shadow-2xl relative">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100 translate-x-0 z-10' 
                        : index === previousSlide
                          ? 'opacity-0 scale-110 -translate-x-full z-0'
                          : 'opacity-0 scale-95 translate-x-full z-0'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={`${slide.title} ${slide.highlight}`}
                      className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
                        index === currentSlide && isAutoPlaying ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
              
              {/* Navigation arrows with hover effects */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 hover:scale-110 transition-all duration-300 group"
                aria-label="Предыдущий слайд"
              >
                <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 hover:scale-110 transition-all duration-300 group"
                aria-label="Следующий слайд"
              >
                <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-card text-card-foreground p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">Бесплатный сервис в течении месяца</div>
                  </div>
                </div>
              </div>

              {/* Slide counter */}
              <div className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                <span className="text-accent">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-primary-foreground/50"> / {String(slides.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
