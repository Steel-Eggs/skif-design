import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Car, Truck, Anchor, Bike, AlertTriangle, Wrench, Caravan, Zap, 
  Building2, Home, RefreshCw, ChevronDown, Package, Tag, Layers, Weight,
  Factory, Box, Snowflake, Gauge, Cog, Fish
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "sale", name: "Распродажа", description: "Лучшие цены на популярные модели", icon: Tag, href: "/catalog/sale", count: 23 },
  { id: "odnoosnye", name: "Одноосные прицепы", description: "Компактные решения для перевозки грузов", icon: Car, href: "/catalog/odnoosnye", count: 156 },
  { id: "dvuhosnye", name: "Двухосные прицепы", description: "Для больших и тяжёлых грузов", icon: Truck, href: "/catalog/dvuhosnye", count: 89 },
  { id: "s-kryshkoy", name: "Прицепы с крышкой", description: "Защита груза от погодных условий", icon: Package, href: "/catalog/s-kryshkoy", count: 45 },
  { id: "platforma", name: "Прицепы платформа", description: "Универсальные платформы", icon: Layers, href: "/catalog/platforma", count: 32 },
  { id: "gruzy", name: "Прицепы для грузов", description: "Надёжные прицепы для перевозки грузов", icon: Weight, href: "/catalog/gruzy", count: 38 },
  { id: "furgony", name: "Прицепы фургоны", description: "Закрытые кузова для грузов", icon: Caravan, href: "/catalog/furgony", count: 34 },
  { id: "kommercheskie", name: "Коммерческие прицепы", description: "Для бизнеса и торговли", icon: Building2, href: "/catalog/kommercheskie", count: 28 },
  { id: "moto", name: "Прицепы для мототехники", description: "Для мотоциклов и квадроциклов", icon: Bike, href: "/catalog/moto", count: 42 },
  { id: "lodki", name: "Прицепы для лодок и катеров", description: "Для водного транспорта", icon: Anchor, href: "/catalog/lodki", count: 56 },
  { id: "elektrostancii", name: "Прицепы для электростанций", description: "Для генераторов и оборудования", icon: Zap, href: "/catalog/elektrostancii", count: 18 },
  { id: "evakuatory", name: "Прицепы эвакуаторы", description: "Для транспортировки авто", icon: AlertTriangle, href: "/catalog/evakuatory", count: 24 },
  { id: "spectehnika", name: "Для спецтехники", description: "Для перевозки тяжёлой техники", icon: Wrench, href: "/catalog/spectehnika", count: 19 },
  { id: "bytovki", name: "Бытовки на колёсах", description: "Мобильные помещения", icon: Home, href: "/catalog/bytovki", count: 15 },
  { id: "bu", name: "Прицепы Б/У", description: "Проверенные б/у прицепы", icon: RefreshCw, href: "/catalog/bu", count: 8 },
  { id: "prokat", name: "Прицепы в прокат", description: "Аренда на любой срок", icon: RefreshCw, href: "/catalog/prokat", count: 25 },
  { id: "proizvoditeli", name: "По производителям", description: "От ведущих производителей", icon: Factory, href: "/catalog/proizvoditeli", count: 450 },
  { id: "zapchasti", name: "Запчасти и аксессуары", description: "Комплектующие для прицепов", icon: Wrench, href: "/catalog/zapchasti", count: 320 },
  { id: "boksy", name: "Боксы и багажники", description: "Автобоксы и багажные системы", icon: Box, href: "/catalog/boksy", count: 67 },
  { id: "snegohody", name: "Снегоходы и вездеходы", description: "Техника для бездорожья", icon: Snowflake, href: "/catalog/snegohody", count: 35 },
  { id: "motobuksirovschiki", name: "Мотобуксировщики", description: "Компактная техника для зимы", icon: Gauge, href: "/catalog/motobuksirovschiki", count: 28 },
  { id: "rybalka", name: "Товары для рыбалки", description: "Всё для успешной рыбалки", icon: Fish, href: "/catalog/rybalka", count: 89 },
];

const INITIAL_VISIBLE = 8;

const CategoriesSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  
  const visibleCategories = categories.slice(0, visibleCount);
  const hasMore = visibleCount < categories.length;
  
  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, categories.length));
  };

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
            Каталог продукции
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Широкий выбор прицепов для любых задач
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {visibleCategories.map((category, index) => (
            <Link 
              key={category.id} 
              to={category.href}
              className="group animate-fade-in"
              style={{ animationDelay: `${Math.min(index, 7) * 0.05}s` }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-4 sm:p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full shrink-0">
                      {category.count}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 flex-grow line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    <span>Смотреть</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8 md:mt-10">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={handleShowMore}
            >
              Показать ещё ({categories.length - visibleCount})
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="text-center mt-8 md:mt-12">
          <Link to="/catalog">
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 gradient-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg text-sm sm:text-base">
              Смотреть весь каталог
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
