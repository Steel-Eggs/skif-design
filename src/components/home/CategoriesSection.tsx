import { Link } from "react-router-dom";
import { ArrowRight, Truck, Anchor, Snowflake, Car, Package, Wrench, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxDecorations from "@/components/ui/ParallaxDecorations";

const categories = [
  {
    id: 1,
    name: "Легковые прицепы",
    description: "Для перевозки грузов и техники",
    icon: Car,
    href: "/catalog/legkovye",
    count: 156,
    color: "secondary",
  },
  {
    id: 2,
    name: "Грузовые прицепы",
    description: "Для коммерческих перевозок",
    icon: Truck,
    href: "/catalog/gruzovye",
    count: 89,
    color: "accent",
  },
  {
    id: 3,
    name: "Лодочные прицепы",
    description: "Для лодок и катеров",
    icon: Anchor,
    href: "/catalog/lodochnye",
    count: 45,
    color: "primary",
  },
  {
    id: 4,
    name: "Для снегоходов",
    description: "Надёжные и морозостойкие",
    icon: Snowflake,
    href: "/catalog/snegokhody",
    count: 32,
    color: "secondary",
  },
  {
    id: 5,
    name: "Фаркопы",
    description: "Для всех марок автомобилей",
    icon: Package,
    href: "/catalog/farkopy",
    count: 234,
    color: "accent",
  },
  {
    id: 6,
    name: "Запчасти",
    description: "Оригинальные комплектующие",
    icon: Wrench,
    href: "/catalog/zapchasti",
    count: 512,
    color: "primary",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <ParallaxDecorations variant="light" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-bold text-sm uppercase tracking-wider mb-4">
            Каталог
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Найдите свой
            <span className="text-gradient"> идеальный прицеп</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Широкий выбор прицепов и комплектующих для любых задач
          </p>
        </motion.div>

        {/* Categories grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <Link 
                to={category.href}
                className={`group block h-full p-6 md:p-8 rounded-3xl border border-border bg-card hover:border-${category.color === "secondary" ? "secondary" : category.color === "accent" ? "accent" : "primary"}/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  category.color === "secondary" ? "bg-secondary" : 
                  category.color === "accent" ? "bg-accent" : 
                  "bg-primary"
                }`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    category.color === "secondary" ? "bg-secondary text-secondary-foreground" : 
                    category.color === "accent" ? "bg-accent text-accent-foreground" : 
                    "bg-primary text-primary-foreground"
                  }`}>
                    <category.icon className={`${index === 0 ? "h-10 w-10" : "h-8 w-8"}`} />
                  </div>

                  <div className="flex-grow">
                    {/* Name */}
                    <h3 className={`font-heading font-bold text-foreground mb-2 group-hover:text-${category.color} transition-colors ${
                      index === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                    }`}>
                      {category.name}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-muted-foreground ${index === 0 ? "text-lg" : ""}`}>
                      {category.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                    <span className="text-sm font-medium text-muted-foreground">
                      {category.count} товаров
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      category.color === "secondary" ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground" : 
                      category.color === "accent" ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground" : 
                      "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}>
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/catalog">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors group">
              <span>Смотреть весь каталог</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
