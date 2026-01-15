import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in">
              <Award className="h-4 w-4" />
              <span>Более 15 лет на рынке</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Автомобильные прицепы{" "}
              <span className="text-accent">СКИФ</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              Производим и продаём надёжные прицепы для легковых автомобилей. 
              Широкий ассортимент, гарантия качества и доступные цены.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <Link to="/catalog">
                <Button size="lg" className="gradient-accent text-accent-foreground font-bold text-lg px-8 hover:opacity-90 transition-opacity shadow-lg">
                  Перейти в каталог
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-background/10 border-2 border-background/30 text-primary-foreground font-bold text-lg px-8 hover:bg-background/20 backdrop-blur-sm">
                  Наши услуги
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
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

          {/* Image/Visual */}
          <div className="relative hidden lg:block animate-slide-in-right" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative">
              {/* Placeholder for trailer image */}
              <div className="aspect-[4/3] rounded-2xl bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Truck className="h-32 w-32 mx-auto mb-4 text-background/30" />
                  <p className="text-background/50 text-lg">Изображение прицепа</p>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-4 rounded-xl shadow-lg animate-pulse-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-bold">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">Помощь в регистрации прицепа</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;