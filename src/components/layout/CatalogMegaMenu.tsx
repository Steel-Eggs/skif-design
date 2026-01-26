import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Car, Truck, Anchor, Bike, AlertTriangle, Wrench, Caravan, Zap, Ship, 
  Building2, Home, RefreshCw, Package, Snowflake, Fish, Box, Tag, Factory,
  ArrowRight, Sparkles, Percent, Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Фиктивные товары для каждой категории (в реальности будут из API)
const categoryProducts: Record<string, Array<{
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isHit?: boolean;
}>> = {
  sale: [
    { id: 101, name: "МЗСА 817711 со скидкой", price: 89900, oldPrice: 109900, image: "/placeholder.svg" },
    { id: 102, name: "Курганский 8213B5", price: 64900, oldPrice: 79900, image: "/placeholder.svg" },
    { id: 103, name: "Прицеп для лодки ПВХ", price: 45900, oldPrice: 59900, image: "/placeholder.svg" },
  ],
  odnoosnye: [
    { id: 1, name: "МЗСА 817711.001-05", price: 119900, image: "/placeholder.svg", isHit: true },
    { id: 2, name: "Курганские прицепы 8213B5", price: 89900, image: "/placeholder.svg" },
    { id: 3, name: "СПУТНИК 821305", price: 76900, image: "/placeholder.svg", isNew: true },
  ],
  dvuhosnye: [
    { id: 4, name: "МЗСА 832132.201", price: 189900, image: "/placeholder.svg", isHit: true },
    { id: 5, name: "Курганские прицепы 8512", price: 159900, image: "/placeholder.svg" },
    { id: 6, name: "ССТ 7132 Двухосный", price: 145900, image: "/placeholder.svg" },
  ],
  "s-kryshkoy": [
    { id: 7, name: "МЗСА 817717 с крышкой", price: 134900, image: "/placeholder.svg", isNew: true },
    { id: 8, name: "Курганский с ABS крышкой", price: 115900, image: "/placeholder.svg" },
    { id: 9, name: "СПУТНИК с откидной крышкой", price: 99900, image: "/placeholder.svg" },
  ],
  lodki: [
    { id: 10, name: "МЗСА 81771G для ПВХ лодок", price: 79900, image: "/placeholder.svg", isHit: true },
    { id: 11, name: "Прицеп для катера до 6м", price: 189900, image: "/placeholder.svg" },
    { id: 12, name: "Лодочный прицеп Р6", price: 145900, image: "/placeholder.svg", isNew: true },
  ],
  moto: [
    { id: 13, name: "Прицеп для 2-х мотоциклов", price: 89900, image: "/placeholder.svg" },
    { id: 14, name: "Прицеп для квадроцикла", price: 79900, image: "/placeholder.svg", isHit: true },
    { id: 15, name: "Универсальный мото-прицеп", price: 69900, image: "/placeholder.svg" },
  ],
};

interface Category {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: "default" | "destructive" | "secondary";
}

const mainCategories: Category[] = [
  { id: "sale", name: "Распродажа", href: "/catalog/sale", icon: Tag, badge: "до -30%", badgeColor: "destructive" },
  { id: "odnoosnye", name: "Одноосные прицепы", href: "/catalog/odnoosnye", icon: Car },
  { id: "dvuhosnye", name: "Двухосные прицепы", href: "/catalog/dvuhosnye", icon: Truck },
  { id: "s-kryshkoy", name: "Прицепы с крышкой", href: "/catalog/s-kryshkoy", icon: Package },
  { id: "platforma", name: "Прицепы платформа", href: "/catalog/platforma", icon: Building2 },
  { id: "gruzovye", name: "Грузовые прицепы", href: "/catalog/gruzovye", icon: Truck },
  { id: "furgony", name: "Прицепы фургоны", href: "/catalog/furgony", icon: Caravan },
  { id: "kommercheskie", name: "Коммерческие", href: "/catalog/kommercheskie", icon: Building2 },
  { id: "moto", name: "Для мототехники", href: "/catalog/moto", icon: Bike, badge: "Хит", badgeColor: "secondary" },
  { id: "lodki", name: "Для лодок и катеров", href: "/catalog/lodki", icon: Anchor, badge: "Хит", badgeColor: "secondary" },
  { id: "elektrostancii", name: "Для электростанций", href: "/catalog/elektrostancii", icon: Zap },
  { id: "evakuatory", name: "Эвакуаторы", href: "/catalog/evakuatory", icon: AlertTriangle },
];

const additionalCategories: Category[] = [
  { id: "spectehnika", name: "Для спецтехники", href: "/catalog/spectehnika", icon: Wrench },
  { id: "bytovki", name: "Бытовки на колёсах", href: "/catalog/bytovki", icon: Home },
  { id: "bu", name: "Прицепы Б/У", href: "/catalog/bu", icon: RefreshCw },
  { id: "prokat", name: "Прицепы в прокат", href: "/catalog/prokat", icon: RefreshCw },
  { id: "proizvoditeli", name: "По производителям", href: "/catalog/proizvoditeli", icon: Factory },
  { id: "zapchasti", name: "Запчасти и аксессуары", href: "/catalog/zapchasti", icon: Wrench },
  { id: "boksy", name: "Боксы и багажники", href: "/catalog/boksy", icon: Box },
  { id: "snegohody", name: "Снегоходы и Вездеходы", href: "/catalog/snegohody", icon: Snowflake },
  { id: "motobuksirovschiki", name: "Мотобуксировщики", href: "/catalog/motobuksirovschiki", icon: Ship },
  { id: "rybalka", name: "Товары для рыбалки", href: "/catalog/rybalka", icon: Fish },
];

interface CatalogMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogMegaMenu = ({ isOpen, onClose }: CatalogMegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("odnoosnye");

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + '\u00A0₽';
  };

  const products = categoryProducts[activeCategory] || categoryProducts.odnoosnye;
  const activeCategoryData = [...mainCategories, ...additionalCategories].find(c => c.id === activeCategory);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 pt-2 z-[100] w-max">
      <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="flex">
          {/* Left column - Categories */}
          <div className="w-72 border-r border-border bg-muted/30">
            {/* Main categories */}
            <div className="py-3 px-2">
              <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Основные категории
              </div>
              <div className="space-y-0.5">
                {mainCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all group ${
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted text-foreground'
                      }`}
                      onMouseEnter={() => setActiveCategory(category.id)}
                      onClick={() => {
                        onClose();
                        window.location.href = category.href;
                      }}
                    >
                      <Icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className="font-medium text-sm flex-1">{category.name}</span>
                      {category.badge && (
                        <Badge 
                          variant={category.badgeColor || "default"} 
                          className="text-[10px] px-1.5 py-0"
                        >
                          {category.badge}
                        </Badge>
                      )}
                      <ArrowRight className={`h-4 w-4 shrink-0 opacity-0 -translate-x-2 transition-all ${
                        isActive ? 'opacity-100 translate-x-0' : 'group-hover:opacity-50 group-hover:translate-x-0'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mx-4" />

            {/* Additional categories */}
            <div className="py-3 px-2">
              <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Дополнительно
              </div>
              <div className="space-y-0.5 max-h-48 overflow-y-auto">
                {additionalCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <Link
                      key={category.id}
                      to={category.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all group ${
                        isActive 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={onClose}
                      onMouseEnter={() => setActiveCategory(category.id)}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="text-sm">{category.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column - Products preview */}
          <div className="w-[480px] p-5">
            {/* Category header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                {activeCategoryData && <activeCategoryData.icon className="h-5 w-5 text-primary" />}
                {activeCategoryData?.name || "Товары"}
              </h3>
              <Link 
                to={activeCategoryData?.href || "/catalog"} 
                onClick={onClose}
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              >
                Все товары
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="group block bg-muted/50 rounded-xl p-3 hover:bg-muted transition-colors hover:shadow-md"
                >
                  {/* Product image */}
                  <div className="relative aspect-[4/3] rounded-lg bg-background mb-2 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badges */}
                    <div className="absolute top-1 left-1 flex flex-col gap-1">
                      {product.isNew && (
                        <Badge className="bg-accent text-accent-foreground text-[10px] px-1.5 py-0 gap-0.5">
                          <Sparkles className="h-3 w-3" />
                          New
                        </Badge>
                      )}
                      {product.isHit && (
                        <Badge className="bg-secondary text-secondary-foreground text-[10px] px-1.5 py-0 gap-0.5">
                          <Star className="h-3 w-3" />
                          Хит
                        </Badge>
                      )}
                      {product.oldPrice && (
                        <Badge variant="destructive" className="text-[10px] px-1.5 py-0 gap-0.5">
                          <Percent className="h-3 w-3" />
                          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Product info */}
                  <h4 className="text-xs font-medium text-foreground line-clamp-2 mb-1.5 min-h-[2rem] group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex flex-col">
                    {product.oldPrice && (
                      <span className="text-[10px] text-muted-foreground line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                    <span className={`text-sm font-bold ${product.oldPrice ? 'text-destructive' : 'text-foreground'}`}>
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick info blocks */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
              <div className="text-center px-2 py-2 rounded-lg bg-primary/5">
                <div className="text-lg font-bold text-primary">500+</div>
                <div className="text-[10px] text-muted-foreground">Моделей в наличии</div>
              </div>
              <div className="text-center px-2 py-2 rounded-lg bg-accent/10">
                <div className="text-lg font-bold text-accent-foreground">0%</div>
                <div className="text-[10px] text-muted-foreground">Рассрочка до 24 мес</div>
              </div>
              <div className="text-center px-2 py-2 rounded-lg bg-secondary/10">
                <div className="text-lg font-bold text-secondary-foreground">🚚</div>
                <div className="text-[10px] text-muted-foreground">Доставка по РФ</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Не нашли нужный прицеп?</div>
              <div className="text-white/80 text-xs">Поможем подобрать под ваши задачи</div>
            </div>
          </div>
          <Link 
            to="/contacts" 
            onClick={onClose}
            className="px-4 py-2 bg-white text-primary font-semibold text-sm rounded-lg hover:bg-white/90 transition-colors"
          >
            Получить консультацию
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogMegaMenu;
