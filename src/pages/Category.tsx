import { useParams, Link } from "react-router-dom";
import { 
  Car, Truck, Anchor, Bike, AlertTriangle, Wrench, Caravan, Zap, 
  Building2, Home, RefreshCw, Tag, Package, Warehouse, Snowflake,
  Fish, Cog, Compass, Box, ArrowLeft, Filter, Grid, List, ChevronDown
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Category data mapping
const categoryData: Record<string, { name: string; description: string; icon: any; color: string }> = {
  "sale": { name: "Распродажа", description: "Лучшие цены на популярные модели", icon: Tag, color: "from-red-500 to-orange-500" },
  "odnoosnye": { name: "Одноосные прицепы", description: "Компактные решения для перевозки грузов", icon: Car, color: "from-primary to-primary/80" },
  "dvuhosnye": { name: "Двухосные прицепы", description: "Для больших и тяжёлых грузов", icon: Truck, color: "from-primary to-primary/80" },
  "s-kryshkoy": { name: "Прицепы с крышкой", description: "Защита груза от погодных условий", icon: Caravan, color: "from-primary to-primary/80" },
  "platforma": { name: "Прицепы платформа", description: "Универсальные платформы для любых задач", icon: Building2, color: "from-primary to-primary/80" },
  "gruzovye": { name: "Прицепы для грузов", description: "Надёжные грузовые решения", icon: Package, color: "from-primary to-primary/80" },
  "furgony": { name: "Прицепы фургоны", description: "Закрытые кузова для защиты груза", icon: Warehouse, color: "from-primary to-primary/80" },
  "kommercheskie": { name: "Коммерческие прицепы", description: "Для бизнеса и торговли", icon: Building2, color: "from-primary to-primary/80" },
  "moto": { name: "Прицепы для мототехники", description: "Для мотоциклов и квадроциклов", icon: Bike, color: "from-primary to-primary/80" },
  "lodki": { name: "Прицепы для лодок и катеров", description: "Для водного транспорта", icon: Anchor, color: "from-blue-500 to-cyan-500" },
  "elektrostancii": { name: "Прицепы для электростанций", description: "Для генераторов и оборудования", icon: Zap, color: "from-yellow-500 to-amber-500" },
  "evakuatory": { name: "Прицепы эвакуаторы", description: "Для транспортировки автомобилей", icon: AlertTriangle, color: "from-orange-500 to-red-500" },
  "spectehnika": { name: "Прицепы для спецтехники", description: "Для перевозки тяжёлой техники", icon: Cog, color: "from-primary to-primary/80" },
  "bytovki": { name: "Бытовки на колёсах", description: "Мобильные помещения для работы", icon: Home, color: "from-green-500 to-emerald-500" },
  "proekty": { name: "Наши проекты", description: "Индивидуальные решения на заказ", icon: Compass, color: "from-purple-500 to-pink-500" },
  "bu": { name: "Прицепы Б/У", description: "Проверенные б/у прицепы по выгодным ценам", icon: RefreshCw, color: "from-primary to-primary/80" },
  "prokat": { name: "Прицепы в прокат", description: "Аренда прицепов на любой срок", icon: RefreshCw, color: "from-primary to-primary/80" },
  "proizvoditeli": { name: "По производителям", description: "Прицепы от ведущих производителей", icon: Building2, color: "from-primary to-primary/80" },
  "zapchasti": { name: "Запчасти и аксессуары", description: "Комплектующие для прицепов", icon: Wrench, color: "from-gray-500 to-slate-600" },
  "boksy": { name: "Боксы и багажники", description: "Автобоксы и багажные системы", icon: Box, color: "from-primary to-primary/80" },
  "snegohody": { name: "Снегоходы и вездеходы", description: "Техника для бездорожья", icon: Snowflake, color: "from-cyan-500 to-blue-600" },
  "motobuksirovschiki": { name: "Мотобуксировщики", description: "Компактная техника для зимы", icon: Compass, color: "from-primary to-primary/80" },
  "zapchasti-moto": { name: "Запчасти для мотобуксировщиков", description: "Комплектующие и расходники", icon: Cog, color: "from-primary to-primary/80" },
  "rybalka": { name: "Товары для рыбалки", description: "Всё для успешной рыбалки", icon: Fish, color: "from-teal-500 to-cyan-500" },
};

// Mock products data - all available products
const allProducts = [
  { id: 1, name: "Прицеп СКИФ-2500", price: 89000, oldPrice: 99000, image: "/placeholder.svg", brand: "СКИФ" },
  { id: 2, name: "Прицеп МЗСА 817711", price: 125000, oldPrice: null, image: "/placeholder.svg", brand: "МЗСА" },
  { id: 3, name: "Прицеп Курганский 8213", price: 78500, oldPrice: 85000, image: "/placeholder.svg", brand: "Курганские прицепы" },
  { id: 4, name: "Прицеп Вектор ЛАВ 81012", price: 156000, oldPrice: null, image: "/placeholder.svg", brand: "Вектор" },
  { id: 5, name: "Прицеп ССТ 7132-24", price: 234000, oldPrice: 250000, image: "/placeholder.svg", brand: "ССТ" },
  { id: 6, name: "Прицеп Спутник 821311", price: 98000, oldPrice: null, image: "/placeholder.svg", brand: "Спутник" },
  { id: 7, name: "Прицеп СКИФ-3500 Люкс", price: 145000, oldPrice: 159000, image: "/placeholder.svg", brand: "СКИФ" },
  { id: 8, name: "Прицеп МЗСА 817719", price: 189000, oldPrice: null, image: "/placeholder.svg", brand: "МЗСА" },
  { id: 9, name: "Прицеп Курганский 8219 Люкс", price: 112000, oldPrice: 125000, image: "/placeholder.svg", brand: "Курганские прицепы" },
  { id: 10, name: "Прицеп Вектор ЛАВ 81015", price: 178000, oldPrice: null, image: "/placeholder.svg", brand: "Вектор" },
  { id: 11, name: "Прицеп СКИФ-4000", price: 198000, oldPrice: 215000, image: "/placeholder.svg", brand: "СКИФ" },
  { id: 12, name: "Прицеп Спутник 821315", price: 134000, oldPrice: null, image: "/placeholder.svg", brand: "Спутник" },
];

const ITEMS_PER_PAGE = 8;

const Category = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  
  const visibleProducts = allProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < allProducts.length;
  
  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, allProducts.length));
  };
  
  const category = categorySlug ? categoryData[categorySlug] : null;
  const IconComponent = category?.icon || Package;

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Категория не найдена</h1>
            <Link to="/catalog">
              <Button>Вернуться в каталог</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero section with animated icon */}
        <section className={`py-12 md:py-16 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container relative">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/80 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <span>/</span>
              <Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link>
              <span>/</span>
              <span className="text-white">{category.name}</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Large animated icon */}
              <div className="relative">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center transform transition-all duration-700 hover:rotate-12 hover:scale-110 animate-fade-in">
                  <IconComponent className="w-14 h-14 md:w-20 md:h-20 text-white" />
                </div>
                {/* Orbit animation */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute -top-2 left-1/2 w-3 h-3 bg-white/40 rounded-full" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-1/2 -right-2 w-2 h-2 bg-white/30 rounded-full" />
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 animate-fade-in">
                  {category.name}
                </h1>
                <p className="text-lg md:text-xl text-white/80 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and products */}
        <section className="py-8 md:py-12">
          <div className="container">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 p-4 bg-card rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 flex-wrap">
                <Button variant="outline" className="gap-2 shrink-0">
                  <Filter className="w-4 h-4" />
                  Фильтры
                </Button>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Найдено: <strong className="text-foreground">{allProducts.length}</strong> товаров
                </span>
              </div>
              
              <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">Сначала дешевле</SelectItem>
                    <SelectItem value="price-desc">Сначала дороже</SelectItem>
                    <SelectItem value="new">Сначала новые</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex items-center rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-muted'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-muted'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {visibleProducts.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${Math.min(index, 7) * 0.05}s` }}
                >
                  <Card className={`h-full overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${viewMode === 'list' ? 'flex flex-row' : ''}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden bg-muted ${viewMode === 'list' ? 'w-32 sm:w-48 shrink-0' : 'aspect-[4/3]'}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {product.oldPrice && (
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </div>
                      )}
                    </div>
                    
                    <CardContent className={`p-3 sm:p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center min-w-0' : ''}`}>
                      <span className="text-xs text-muted-foreground mb-1 block truncate">{product.brand}</span>
                      <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm sm:text-base">
                        {product.name}
                      </h3>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-lg sm:text-xl font-bold text-primary">
                          {product.price.toLocaleString('ru-RU')} ₽
                        </span>
                        {product.oldPrice && (
                          <span className="text-xs sm:text-sm text-muted-foreground line-through">
                            {product.oldPrice.toLocaleString('ru-RU')} ₽
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load more */}
            {hasMoreProducts && (
              <div className="text-center mt-8 sm:mt-12">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={handleShowMore}
                >
                  Показать ещё ({allProducts.length - visibleCount})
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Category;