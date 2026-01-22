import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Truck, Settings, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: 1,
    name: "Выкуп / Trade-In прицепов",
    description: "Выкупаем легковые прицепы любых марок. Возможность обмена старого прицепа на новый с доплатой.",
    icon: Truck,
    features: ["Быстрая оценка", "Честная цена", "Оформление на месте"],
    href: "/services/tradein",
    color: "primary",
  },
  {
    id: 2,
    name: "Ремонт и обслуживание",
    description: "Профессиональный ремонт и техническое обслуживание прицепов любой сложности.",
    icon: Wrench,
    features: ["Диагностика", "Сварочные работы", "Замена запчастей"],
    href: "/services/remont",
    color: "secondary",
  },
  {
    id: 3,
    name: "Оформление в ГИБДД",
    description: "Полное сопровождение регистрации прицепа в ГИБДД. Помощь в подготовке документов.",
    icon: Settings,
    features: ["Постановка на учёт", "Снятие с учёта", "Консультации"],
    href: "/services/gibdd",
    color: "accent",
  },
];

const advantages = [
  { icon: Shield, text: "Гарантия на все работы" },
  { icon: Clock, text: "Быстрое выполнение" },
  { icon: CheckCircle, text: "Сертифицированные мастера" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по обслуживанию прицепов и фаркопов
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${
                  service.color === "primary" ? "gradient-primary" :
                  service.color === "secondary" ? "gradient-secondary" :
                  "gradient-accent"
                }`}>
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-base md:text-lg mb-5 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <Link 
                  to={service.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
              
              {/* Hover decoration */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity ${
                service.color === "primary" ? "bg-primary" :
                service.color === "secondary" ? "bg-secondary" :
                "bg-accent"
              }`} />
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-muted rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground">{advantage.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="outline" className="font-bold text-lg px-10 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
              Все услуги
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
