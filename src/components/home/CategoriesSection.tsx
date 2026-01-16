import { Link } from "react-router-dom";
import { ArrowRight, Car, Truck, Anchor, Bike, AlertTriangle, Wrench, Caravan, Zap, Ship, Building2, Home, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Одноосные прицепы",
    description: "Компактные решения для перевозки грузов",
    icon: Car,
    href: "/catalog/odnoosnye",
    count: 156,
  },
  {
    id: 2,
    name: "Двухосные прицепы",
    description: "Для больших и тяжёлых грузов",
    icon: Truck,
    href: "/catalog/dvuhosnye",
    count: 89,
  },
  {
    id: 3,
    name: "Прицепы с крышкой",
    description: "Защита груза от погодных условий",
    icon: Caravan,
    href: "/catalog/s-kryshkoy",
    count: 45,
  },
  {
    id: 4,
    name: "Прицепы платформа",
    description: "Универсальные платформы",
    icon: Building2,
    href: "/catalog/platforma",
    count: 32,
  },
  {
    id: 5,
    name: "Прицепы для грузов",
    description: "Надёжные грузовые решения",
    icon: Truck,
    href: "/catalog/gruzovye",
    count: 78,
  },
  {
    id: 6,
    name: "Прицепы фургоны",
    description: "Закрытые кузова для грузов",
    icon: Caravan,
    href: "/catalog/furgony",
    count: 34,
  },
  {
    id: 7,
    name: "Коммерческие прицепы",
    description: "Для бизнеса и торговли",
    icon: Building2,
    href: "/catalog/kommercheskie",
    count: 28,
  },
  {
    id: 8,
    name: "Прицепы для мототехники",
    description: "Для мотоциклов и квадроциклов",
    icon: Bike,
    href: "/catalog/moto",
    count: 42,
  },
  {
    id: 9,
    name: "Прицепы для лодок и катеров",
    description: "Для водного транспорта",
    icon: Anchor,
    href: "/catalog/lodki",
    count: 56,
  },
  {
    id: 10,
    name: "Прицепы для электростанций",
    description: "Для генераторов и оборудования",
    icon: Zap,
    href: "/catalog/elektrostancii",
    count: 18,
  },
  {
    id: 11,
    name: "Прицепы эвакуаторы",
    description: "Для транспортировки авто",
    icon: AlertTriangle,
    href: "/catalog/evakuatory",
    count: 24,
  },
  {
    id: 12,
    name: "Бытовки на колёсах",
    description: "Мобильные помещения",
    icon: Home,
    href: "/catalog/bytovki",
    count: 15,
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
            Широкий выбор прицепов для любых задач
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to={category.href}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
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
