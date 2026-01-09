import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Truck, Settings, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Ремонт прицепов",
    description: "Качественный ремонт любой сложности. Восстановление рам, замена осей, сварочные работы.",
    icon: Wrench,
    features: ["Диагностика", "Сварочные работы", "Покраска"],
    href: "/services/remont",
    accent: "secondary",
  },
  {
    id: 2,
    name: "Установка фаркопов",
    description: "Профессиональная установка фаркопов на любые марки автомобилей с гарантией.",
    icon: Settings,
    features: ["Все марки авто", "Сертификаты", "Гарантия 2 года"],
    href: "/services/farkopy",
    accent: "accent",
  },
  {
    id: 3,
    name: "Прокат прицепов",
    description: "Аренда прицепов на любой срок. Широкий выбор для различных задач.",
    icon: Truck,
    features: ["От 1 дня", "Страховка", "Доставка"],
    href: "/services/prokat",
    accent: "primary",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 border-2 border-secondary/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-32 w-16 h-16 bg-accent/20 hidden lg:block"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 font-bold text-sm uppercase tracking-wider mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Услуги</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Полный спектр
            <span className="text-gradient"> услуг</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70">
            От ремонта до аренды — всё для вашего прицепа в одном месте
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={service.href}
                className="group block h-full p-8 rounded-3xl gradient-glass border border-primary-foreground/10 hover:border-primary-foreground/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                  service.accent === "secondary" ? "bg-secondary text-secondary-foreground" :
                  service.accent === "accent" ? "bg-accent text-accent-foreground" :
                  "bg-primary-foreground text-primary"
                }`}>
                  <service.icon className="h-10 w-10" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-secondary transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        service.accent === "secondary" ? "bg-secondary/20" :
                        service.accent === "accent" ? "bg-accent/20" :
                        "bg-primary-foreground/20"
                      }`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-primary-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all">
                  <span>Подробнее</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <Button 
              size="lg" 
              className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-lg px-10 py-6 group"
            >
              Все услуги
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
