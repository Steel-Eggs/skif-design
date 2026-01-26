import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Truck, FileText, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import rentTrailerImage from "@/assets/rent-trailer.jpg";

const features = [
  { icon: Truck, text: "Прицепы разных типов" },
  { icon: Clock, text: "Гибкие сроки аренды" },
  { icon: MapPin, text: "Самовывоз" },
  { icon: FileText, text: "Минимум документов" },
];

const RentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={rentTrailerImage} 
                alt="Прицеп СКИФ в аренду" 
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Стоимость от</div>
                    <div className="text-2xl font-heading font-bold text-primary">800 ₽/сутки</div>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                    <Check className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              <Clock className="h-4 w-4" />
              Выгодные условия
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Аренда прицепов
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Предоставляем прицепы в аренду на выгодных условиях для частных лиц и организаций. 
              Быстрое оформление, широкий выбор моделей.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <Link to="/rent">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-bold px-8 rounded-xl hover:opacity-90 transition-opacity"
              >
                Арендовать прицеп
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentSection;