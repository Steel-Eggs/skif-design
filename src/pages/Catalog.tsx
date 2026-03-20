import { Link } from "react-router-dom";
import { 
  Car, Truck, Anchor, Bike, AlertTriangle, Wrench, Caravan, Zap, 
  Building2, Home, RefreshCw, Tag, Package, Snowflake,
  Fish, Cog, Compass, Box, Layers, Weight, Gauge, Factory
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categories = [
  {
    id: "sale",
    name: "Распродажа",
    description: "Лучшие цены на популярные модели",
    icon: Tag,
    href: "/catalog/sale",
    count: 23,
    color: "from-red-500 to-orange-500",
    featured: true,
  },
  {
    id: "odnoosnye",
    name: "Одноосные прицепы",
    description: "Компактные решения для перевозки грузов",
    icon: Car,
    href: "/catalog/odnoosnye",
    count: 156,
    color: "from-primary to-primary/80",
  },
  {
    id: "dvuhosnye",
    name: "Двухосные прицепы",
    description: "Для больших и тяжёлых грузов",
    icon: Truck,
    href: "/catalog/dvuhosnye",
    count: 89,
    color: "from-primary to-primary/80",
  },
  {
    id: "s-kryshkoy",
    name: "Прицепы с крышкой",
    description: "Защита груза от погодных условий",
    icon: Caravan,
    href: "/catalog/s-kryshkoy",
    count: 45,
    color: "from-primary to-primary/80",
  },
  {
    id: "platforma",
    name: "Прицепы платформа",
    description: "Универсальные платформы для любых задач",
    icon: Building2,
    href: "/catalog/platforma",
    count: 32,
    color: "from-primary to-primary/80",
  },
  {
    id: "furgony",
    name: "Прицепы фургоны",
    description: "Закрытые кузова для защиты груза",
    icon: Warehouse,
    href: "/catalog/furgony",
    count: 34,
    color: "from-primary to-primary/80",
  },
  {
    id: "kommercheskie",
    name: "Коммерческие прицепы",
    description: "Для бизнеса и торговли",
    icon: Building2,
    href: "/catalog/kommercheskie",
    count: 28,
    color: "from-primary to-primary/80",
  },
  {
    id: "moto",
    name: "Прицепы для мототехники",
    description: "Для мотоциклов и квадроциклов",
    icon: Bike,
    href: "/catalog/moto",
    count: 42,
    color: "from-primary to-primary/80",
  },
  {
    id: "lodki",
    name: "Прицепы для лодок и катеров",
    description: "Для водного транспорта",
    icon: Anchor,
    href: "/catalog/lodki",
    count: 56,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "elektrostancii",
    name: "Прицепы для электростанций",
    description: "Для генераторов и оборудования",
    icon: Zap,
    href: "/catalog/elektrostancii",
    count: 18,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "evakuatory",
    name: "Прицепы эвакуаторы",
    description: "Для транспортировки автомобилей",
    icon: AlertTriangle,
    href: "/catalog/evakuatory",
    count: 24,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "spectehnika",
    name: "Прицепы для спецтехники",
    description: "Для перевозки тяжёлой техники",
    icon: Cog,
    href: "/catalog/spectehnika",
    count: 19,
    color: "from-primary to-primary/80",
  },
  {
    id: "bytovki",
    name: "Бытовки на колёсах",
    description: "Мобильные помещения для работы",
    icon: Home,
    href: "/catalog/bytovki",
    count: 15,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "proekty",
    name: "Наши проекты",
    description: "Индивидуальные решения на заказ",
    icon: Compass,
    href: "/catalog/proekty",
    count: 12,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "bu",
    name: "Прицепы Б/У",
    description: "Проверенные б/у прицепы по выгодным ценам",
    icon: RefreshCw,
    href: "/catalog/bu",
    count: 8,
    color: "from-primary to-primary/80",
  },
  {
    id: "prokat",
    name: "Прицепы в прокат",
    description: "Аренда прицепов на любой срок",
    icon: RefreshCw,
    href: "/catalog/prokat",
    count: 25,
    color: "from-primary to-primary/80",
  },
  {
    id: "proizvoditeli",
    name: "По производителям",
    description: "Прицепы от ведущих производителей",
    icon: Building2,
    href: "/catalog/proizvoditeli",
    count: 450,
    color: "from-primary to-primary/80",
  },
  {
    id: "zapchasti",
    name: "Запчасти и аксессуары",
    description: "Комплектующие для прицепов",
    icon: Wrench,
    href: "/catalog/zapchasti",
    count: 320,
    color: "from-gray-500 to-slate-600",
  },
  {
    id: "boksy",
    name: "Боксы и багажники",
    description: "Автобоксы и багажные системы",
    icon: Box,
    href: "/catalog/boksy",
    count: 67,
    color: "from-primary to-primary/80",
  },
  {
    id: "snegohody",
    name: "Снегоходы и вездеходы",
    description: "Техника для бездорожья",
    icon: Snowflake,
    href: "/catalog/snegohody",
    count: 35,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "motobuksirovschiki",
    name: "Мотобуксировщики",
    description: "Компактная техника для зимы",
    icon: Compass,
    href: "/catalog/motobuksirovschiki",
    count: 28,
    color: "from-primary to-primary/80",
  },
  {
    id: "zapchasti-moto",
    name: "Запчасти для мотобуксировщиков",
    description: "Комплектующие и расходники",
    icon: Cog,
    href: "/catalog/zapchasti-moto",
    count: 156,
    color: "from-primary to-primary/80",
  },
  {
    id: "rybalka",
    name: "Товары для рыбалки",
    description: "Всё для успешной рыбалки",
    icon: Fish,
    href: "/catalog/rybalka",
    count: 89,
    color: "from-teal-500 to-cyan-500",
  },
];

const Catalog = () => {
  const featuredCategories = categories.filter(c => c.featured);
  const regularCategories = categories.filter(c => !c.featured);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Каталог продукции
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Более 1500 моделей прицепов, запчастей и аксессуаров от ведущих производителей России
              </p>
            </div>
          </div>
        </section>

        {/* Featured categories (Распродажа) */}
        {featuredCategories.length > 0 && (
          <section className="py-8 bg-background overflow-hidden">
            <div className="container px-4">
              <div className="grid gap-6">
                {featuredCategories.map((category, index) => (
                  <Link
                    key={category.id}
                    to={category.href}
                    className="group block animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r ${category.color} p-6 md:p-12 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl`}>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-white rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
                      </div>
                      
                      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                        <div className="w-16 h-16 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shrink-0">
                          <category.icon className="w-8 h-8 md:w-16 md:h-16 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl md:text-4xl font-heading font-bold text-white mb-2">
                            {category.name}
                          </h2>
                          <p className="text-white/80 text-sm md:text-lg mb-2 md:mb-4">{category.description}</p>
                          <span className="inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                            {category.count} товаров
                            <span className="w-8 h-0.5 bg-white/50 group-hover:w-16 transition-all duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All categories grid */}
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              Все категории
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularCategories.map((category, index) => (
                <Link
                  key={category.id}
                  to={category.href}
                  className="group block animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-full bg-card border-2 border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                    
                    {/* Icon container with animation */}
                    <div className="relative mb-5">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                        <category.icon className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      {/* Floating particles on hover */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300" style={{ animationDelay: '0.1s' }} />
                      <div className="absolute -bottom-1 right-4 w-3 h-3 rounded-full bg-accent/30 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300" style={{ animationDelay: '0.2s' }} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      
                      {/* Count badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                          {category.count} товаров
                        </span>
                        
                        {/* Arrow indicator */}
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;