import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Cog, CircleDot, LampFloor, Shield, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const partsCategories = [
  {
    id: 1,
    name: "Запчасти и аксессуары",
    description: "Все запчасти для прицепов",
    icon: Wrench,
    href: "/catalog/zapchasti",
    count: 512,
  },
  {
    id: 2,
    name: "Боксы и багажники",
    description: "Дополнительное хранение",
    icon: Package,
    href: "/catalog/boksy",
    count: 78,
  },
  {
    id: 3,
    name: "Снегоходы и Вездеходы",
    description: "Техника для бездорожья",
    icon: Cog,
    href: "/catalog/snegohody",
    count: 45,
  },
  {
    id: 4,
    name: "Мотобуксировщики",
    description: "Для зимней рыбалки",
    icon: CircleDot,
    href: "/catalog/motobuksirovschiki",
    count: 32,
  },
  {
    id: 5,
    name: "Запчасти для мотобуксировщиков",
    description: "Оригинальные комплектующие",
    icon: Cog,
    href: "/catalog/zapchasti-moto",
    count: 156,
  },
  {
    id: 6,
    name: "Товары для рыбалки",
    description: "Всё для рыболовов",
    icon: LampFloor,
    href: "/catalog/rybalka",
    count: 89,
  },
];

const PartsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Каталог запчастей и аксессуаров
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплектующие, запчасти и дополнительное оборудование
          </p>
        </div>

        {/* Parts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partsCategories.map((category, index) => (
            <Link 
              key={category.id} 
              to={category.href}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent hover:border-secondary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-secondary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    <span>Смотреть</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsSection;
