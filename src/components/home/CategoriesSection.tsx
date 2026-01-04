import { Link } from "react-router-dom";
import { ArrowRight, Truck, Anchor, Snowflake, Car, Package, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Легковые прицепы",
    description: "Для перевозки грузов и техники",
    icon: Car,
    href: "/catalog/legkovye",
    count: 156,
    gradient: "from-primary to-primary/80",
  },
  {
    id: 2,
    name: "Грузовые прицепы",
    description: "Для коммерческих перевозок",
    icon: Truck,
    href: "/catalog/gruzovye",
    count: 89,
    gradient: "from-secondary to-secondary/80",
  },
  {
    id: 3,
    name: "Лодочные прицепы",
    description: "Для лодок и катеров",
    icon: Anchor,
    href: "/catalog/lodochnye",
    count: 45,
    gradient: "from-primary to-secondary",
  },
  {
    id: 4,
    name: "Для снегоходов",
    description: "Надёжные и морозостойкие",
    icon: Snowflake,
    href: "/catalog/snegokhody",
    count: 32,
    gradient: "from-accent to-accent/80",
  },
  {
    id: 5,
    name: "Фаркопы",
    description: "Для всех марок автомобилей",
    icon: Package,
    href: "/catalog/farkopy",
    count: 234,
    gradient: "from-secondary to-primary",
  },
  {
    id: 6,
    name: "Запчасти",
    description: "Оригинальные комплектующие",
    icon: Wrench,
    href: "/catalog/zapchasti",
    count: 512,
    gradient: "from-accent to-secondary",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Каталог продукции
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор прицепов и комплектующих для любых задач
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to={category.href}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {category.count} товаров
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-1 transition-all">
                    <span>Смотреть</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link to="/catalog">
            <button className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg">
              Смотреть весь каталог
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
