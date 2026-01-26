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
    { id: 104, name: "СПУТНИК 821301", price: 54900, oldPrice: 69900, image: "/placeholder.svg" },
    { id: 105, name: "ССТ 7132 Стандарт", price: 72900, oldPrice: 89900, image: "/placeholder.svg" },
    { id: 106, name: "Прицеп-платформа МЗСА", price: 94900, oldPrice: 119900, image: "/placeholder.svg" },
    { id: 107, name: "Двухосный Курганский", price: 129900, oldPrice: 159900, image: "/placeholder.svg" },
    { id: 108, name: "Прицеп для мотоцикла", price: 59900, oldPrice: 74900, image: "/placeholder.svg" },
  ],
  odnoosnye: [
    { id: 1, name: "МЗСА 817711.001-05", price: 119900, image: "/placeholder.svg", isHit: true },
    { id: 2, name: "Курганские прицепы 8213B5", price: 89900, image: "/placeholder.svg" },
    { id: 3, name: "СПУТНИК 821305", price: 76900, image: "/placeholder.svg", isNew: true },
    { id: 16, name: "ССТ 7132 Стандарт", price: 82900, image: "/placeholder.svg" },
    { id: 21, name: "МЗСА 817701 Эконом", price: 69900, image: "/placeholder.svg" },
    { id: 22, name: "Курганский 8213 Базовый", price: 74900, image: "/placeholder.svg", isNew: true },
    { id: 23, name: "ВЕКТОР 82111", price: 79900, image: "/placeholder.svg" },
    { id: 24, name: "СПУТНИК 821301 Комфорт", price: 94900, image: "/placeholder.svg", isHit: true },
  ],
  dvuhosnye: [
    { id: 4, name: "МЗСА 832132.201", price: 189900, image: "/placeholder.svg", isHit: true },
    { id: 5, name: "Курганские прицепы 8512", price: 159900, image: "/placeholder.svg" },
    { id: 6, name: "ССТ 7132 Двухосный", price: 145900, image: "/placeholder.svg" },
    { id: 17, name: "МЗСА 832134 Платформа", price: 169900, image: "/placeholder.svg", isNew: true },
    { id: 25, name: "Курганский 8523 Макси", price: 179900, image: "/placeholder.svg" },
    { id: 26, name: "ВЕКТОР 83241 Усиленный", price: 199900, image: "/placeholder.svg", isHit: true },
    { id: 27, name: "СПУТНИК 832201", price: 154900, image: "/placeholder.svg" },
    { id: 28, name: "ССТ 8325 Грузовой", price: 184900, image: "/placeholder.svg", isNew: true },
  ],
  "s-kryshkoy": [
    { id: 7, name: "МЗСА 817717 с крышкой", price: 134900, image: "/placeholder.svg", isNew: true },
    { id: 8, name: "Курганский с ABS крышкой", price: 115900, image: "/placeholder.svg" },
    { id: 9, name: "СПУТНИК с откидной крышкой", price: 99900, image: "/placeholder.svg" },
    { id: 18, name: "ССТ с пластиковой крышкой", price: 109900, image: "/placeholder.svg", isHit: true },
    { id: 29, name: "МЗСА 817718 Премиум", price: 149900, image: "/placeholder.svg" },
    { id: 30, name: "Курганский с жёсткой крышкой", price: 129900, image: "/placeholder.svg", isNew: true },
    { id: 31, name: "ВЕКТОР с крышкой-трансформер", price: 139900, image: "/placeholder.svg" },
    { id: 32, name: "ССТ с алюминиевой крышкой", price: 124900, image: "/placeholder.svg", isHit: true },
  ],
  lodki: [
    { id: 10, name: "МЗСА 81771G для ПВХ лодок", price: 79900, image: "/placeholder.svg", isHit: true },
    { id: 11, name: "Прицеп для катера до 6м", price: 189900, image: "/placeholder.svg" },
    { id: 12, name: "Лодочный прицеп Р6", price: 145900, image: "/placeholder.svg", isNew: true },
    { id: 19, name: "Для гидроцикла", price: 89900, image: "/placeholder.svg" },
    { id: 33, name: "Для катера до 8м", price: 249900, image: "/placeholder.svg", isHit: true },
    { id: 34, name: "Универсальный лодочный", price: 119900, image: "/placeholder.svg" },
    { id: 35, name: "Для надувной лодки", price: 69900, image: "/placeholder.svg", isNew: true },
    { id: 36, name: "Для яхты до 7м", price: 299900, image: "/placeholder.svg" },
  ],
  moto: [
    { id: 13, name: "Прицеп для 2-х мотоциклов", price: 89900, image: "/placeholder.svg" },
    { id: 14, name: "Прицеп для квадроцикла", price: 79900, image: "/placeholder.svg", isHit: true },
    { id: 15, name: "Универсальный мото-прицеп", price: 69900, image: "/placeholder.svg" },
    { id: 20, name: "Для снегохода", price: 74900, image: "/placeholder.svg", isNew: true },
    { id: 37, name: "Для 3-х мотоциклов", price: 109900, image: "/placeholder.svg" },
    { id: 38, name: "Для ATV квадроцикла", price: 94900, image: "/placeholder.svg", isHit: true },
    { id: 39, name: "Мото-платформа складная", price: 84900, image: "/placeholder.svg", isNew: true },
    { id: 40, name: "Для багги", price: 99900, image: "/placeholder.svg" },
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
  { id: "sale", name: "Распродажа", href: "/catalog/sale", icon: Tag, badge: "-30%", badgeColor: "destructive" },
  { id: "odnoosnye", name: "Одноосные", href: "/catalog/odnoosnye", icon: Car },
  { id: "dvuhosnye", name: "Двухосные", href: "/catalog/dvuhosnye", icon: Truck },
  { id: "s-kryshkoy", name: "С крышкой", href: "/catalog/s-kryshkoy", icon: Package },
  { id: "platforma", name: "Платформы", href: "/catalog/platforma", icon: Building2 },
  { id: "gruzovye", name: "Грузовые", href: "/catalog/gruzovye", icon: Truck },
  { id: "furgony", name: "Фургоны", href: "/catalog/furgony", icon: Caravan },
  { id: "kommercheskie", name: "Коммерческие", href: "/catalog/kommercheskie", icon: Building2 },
  { id: "moto", name: "Для мототехники", href: "/catalog/moto", icon: Bike, badge: "Хит", badgeColor: "secondary" },
  { id: "lodki", name: "Для лодок", href: "/catalog/lodki", icon: Anchor, badge: "Хит", badgeColor: "secondary" },
  { id: "elektrostancii", name: "Электростанции", href: "/catalog/elektrostancii", icon: Zap },
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
    <div className="absolute top-full left-0 pt-2 z-[100]">
      <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in" style={{ width: '1000px' }}>
        <div className="flex">
          {/* Left column - Categories */}
          <div className="w-64 border-r border-border bg-muted/30 flex flex-col">
            {/* Main categories - scrollable */}
            <div className="py-3 px-2 flex-1 overflow-y-auto max-h-[420px]">
              <div className="space-y-1">
                {mainCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group ${
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
                          className="text-[10px] px-1.5 py-0.5"
                        >
                          {category.badge}
                        </Badge>
                      )}
                    </button>
                  );
                })}

                {/* Divider */}
                <div className="h-px bg-border my-3 mx-2" />

                {/* Additional categories inline */}
                {additionalCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <Link
                      key={category.id}
                      to={category.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
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
          <div className="flex-1 p-6">
            {/* Category header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                {activeCategoryData && <activeCategoryData.icon className="h-5 w-5 text-primary" />}
                {activeCategoryData?.name || "Товары"}
              </h3>
              <Link 
                to={activeCategoryData?.href || "/catalog"} 
                onClick={onClose}
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1.5"
              >
                Смотреть все товары
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Products grid - horizontal layout */}
            <div className="grid grid-cols-4 gap-4 mb-5">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="group block bg-muted/50 rounded-xl p-3 hover:bg-muted transition-colors hover:shadow-lg"
                >
                  {/* Product image */}
                  <div className="relative aspect-[4/3] rounded-lg bg-background mb-2.5 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badges */}
                    <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                      {product.isNew && (
                        <Badge className="bg-accent text-accent-foreground text-[10px] px-1.5 py-0.5">
                          New
                        </Badge>
                      )}
                      {product.isHit && (
                        <Badge className="bg-secondary text-secondary-foreground text-[10px] px-1.5 py-0.5">
                          Хит
                        </Badge>
                      )}
                      {product.oldPrice && (
                        <Badge variant="destructive" className="text-[10px] px-1.5 py-0.5">
                          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Product info */}
                  <h4 className="text-sm font-medium text-foreground line-clamp-2 mb-2 min-h-[2.5rem] leading-snug group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-base font-bold ${product.oldPrice ? 'text-destructive' : 'text-foreground'}`}>
                      {formatPrice(product.price)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick info blocks - horizontal */}
            <div className="flex gap-3 pt-4 border-t border-border">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/5">
                <div className="text-xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground leading-snug">моделей<br/>в наличии</div>
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/10">
                <div className="text-xl font-bold text-accent-foreground">0%</div>
                <div className="text-xs text-muted-foreground leading-snug">рассрочка<br/>до 24 мес</div>
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/10">
                <div className="text-xl">🚚</div>
                <div className="text-xs text-muted-foreground leading-snug">доставка<br/>по России</div>
              </div>
              <Link 
                to="/contacts" 
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-3 gradient-primary text-primary-foreground font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
              >
                <Sparkles className="h-5 w-5" />
                Консультация
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CatalogMegaMenu;
