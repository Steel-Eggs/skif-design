import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, X, Phone, Search, ShoppingCart, ChevronDown, ChevronRight, MessageCircle, Send,
  Truck, Ship, Snowflake, Bike, Link2, Package, Anchor, Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(0);
  const catalogRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const catalogCategories = [
    {
      name: "Легковые прицепы",
      href: "/catalog/legkovye",
      icon: Truck,
      description: "Для перевозки грузов",
      subcategories: [
        { name: "Одноосные", href: "/catalog/legkovye/odnoosnye" },
        { name: "Двухосные", href: "/catalog/legkovye/dvuhosnye" },
        { name: "С тентом", href: "/catalog/legkovye/s-tentom" },
        { name: "Самосвальные", href: "/catalog/legkovye/samosval" },
        { name: "Бортовые", href: "/catalog/legkovye/bortovye" },
      ]
    },
    {
      name: "Грузовые прицепы",
      href: "/catalog/gruzovye",
      icon: Package,
      description: "Для тяжёлых грузов",
      subcategories: [
        { name: "Бортовые", href: "/catalog/gruzovye/bortovye" },
        { name: "Платформы", href: "/catalog/gruzovye/platformy" },
        { name: "Самосвалы", href: "/catalog/gruzovye/samosvaly" },
        { name: "Контейнеровозы", href: "/catalog/gruzovye/konteynerovozy" },
      ]
    },
    {
      name: "Лодочные прицепы",
      href: "/catalog/lodochnye",
      icon: Anchor,
      description: "Для водного транспорта",
      subcategories: [
        { name: "Для ПВХ лодок", href: "/catalog/lodochnye/pvh" },
        { name: "Для катеров", href: "/catalog/lodochnye/katera" },
        { name: "Для гидроциклов", href: "/catalog/lodochnye/gidrotsikly" },
        { name: "Для яхт", href: "/catalog/lodochnye/yahty" },
      ]
    },
    {
      name: "Для снегоходов",
      href: "/catalog/snegokhody",
      icon: Snowflake,
      description: "Зимний транспорт",
      subcategories: [
        { name: "Универсальные", href: "/catalog/snegokhody/universalnye" },
        { name: "С площадкой", href: "/catalog/snegokhody/s-ploschadkoy" },
        { name: "Закрытые", href: "/catalog/snegokhody/zakrytye" },
      ]
    },
    {
      name: "Для квадроциклов",
      href: "/catalog/kvadrotsikly",
      icon: Bike,
      description: "Для ATV и UTV",
      subcategories: [
        { name: "Одноместные", href: "/catalog/kvadrotsikly/odnomestnye" },
        { name: "Двухместные", href: "/catalog/kvadrotsikly/dvuhmestnye" },
      ]
    },
    {
      name: "Фаркопы",
      href: "/catalog/farkopy",
      icon: Link2,
      description: "Тягово-сцепные устройства",
      subcategories: [
        { name: "Toyota", href: "/catalog/farkopy/toyota" },
        { name: "Volkswagen", href: "/catalog/farkopy/volkswagen" },
        { name: "Hyundai", href: "/catalog/farkopy/hyundai" },
        { name: "Kia", href: "/catalog/farkopy/kia" },
        { name: "Другие марки", href: "/catalog/farkopy/other" },
      ]
    },
    {
      name: "Аксессуары",
      href: "/catalog/aksessuary",
      icon: Wrench,
      description: "Комплектующие и запчасти",
      subcategories: [
        { name: "Тенты", href: "/catalog/aksessuary/tenty" },
        { name: "Запчасти", href: "/catalog/aksessuary/zapchasti" },
        { name: "Крепления", href: "/catalog/aksessuary/krepleniya" },
        { name: "Освещение", href: "/catalog/aksessuary/osveschenie" },
      ]
    },
  ];

  const navLinks = [
    { name: "Услуги", href: "/services" },
    { name: "О компании", href: "/about" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/contacts" },
  ];

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setIsCatalogOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/catalog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="hidden md:flex items-center gap-6">
            {/* General phone */}
            <a href="tel:+78002001636" className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+7 (800) 200-16-36</span>
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            {/* Messengers and mobile phone */}
            <div className="flex items-center gap-3">
              <a 
                href="https://max.ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="MAX"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/skif_trailers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a href="tel:+79129103850" className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>+7 (912) 910-38-50</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="СКИФ" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Catalog dropdown */}
            <div ref={catalogRef} className="relative">
              <button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                className="flex items-center gap-2 px-5 py-2.5 gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <Menu className="h-5 w-5" />
                Каталог
                <ChevronDown className={`h-4 w-4 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown */}
              {isCatalogOpen && (
                <div className="absolute top-full left-0 mt-2 w-[750px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in z-[100]">
                  <div className="flex">
                    {/* Left sidebar - categories */}
                    <div className="w-72 bg-muted/50 border-r border-border p-2">
                      {catalogCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                          <button
                            key={category.name}
                            onMouseEnter={() => setActiveCategory(index)}
                            onClick={() => {
                              window.location.href = category.href;
                              setIsCatalogOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                              activeCategory === index 
                                ? 'bg-primary text-primary-foreground' 
                                : 'hover:bg-muted text-foreground'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              activeCategory === index 
                                ? 'bg-primary-foreground/20' 
                                : 'bg-primary/10'
                            }`}>
                              <IconComponent className={`h-5 w-5 ${
                                activeCategory === index ? 'text-primary-foreground' : 'text-primary'
                              }`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm truncate">{category.name}</div>
                              <div className={`text-xs truncate ${
                                activeCategory === index ? 'text-primary-foreground/70' : 'text-muted-foreground'
                              }`}>
                                {category.description}
                              </div>
                            </div>
                            <ChevronRight className={`h-4 w-4 shrink-0 ${
                              activeCategory === index ? 'text-primary-foreground' : 'text-muted-foreground'
                            }`} />
                          </button>
                        );
                      })}
                    </div>
                    
                    {/* Right content - subcategories */}
                    <div className="flex-1 p-6">
                      {activeCategory !== null && (
                        <div className="animate-fade-in">
                          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                            {(() => {
                              const IconComponent = catalogCategories[activeCategory].icon;
                              return (
                                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                                  <IconComponent className="h-6 w-6 text-primary-foreground" />
                                </div>
                              );
                            })()}
                            <div>
                              <h3 className="font-heading font-bold text-lg text-foreground">
                                {catalogCategories[activeCategory].name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {catalogCategories[activeCategory].description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            {catalogCategories[activeCategory].subcategories.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                className="flex items-center gap-2 px-4 py-3 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors group"
                                onClick={() => setIsCatalogOpen(false)}
                              >
                                <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground transition-colors" />
                                <span className="font-medium">{sub.name}</span>
                              </Link>
                            ))}
                          </div>
                          
                          <Link
                            to={catalogCategories[activeCategory].href}
                            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
                            onClick={() => setIsCatalogOpen(false)}
                          >
                            Смотреть все
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center gap-1 px-4 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search bar - enlarged */}
          <div ref={searchRef} className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 h-12 text-base bg-muted border-border focus:border-primary rounded-xl"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 gradient-primary rounded-lg"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative h-12 w-12 rounded-xl">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button className="hidden md:flex gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity h-12 px-6 rounded-xl">
              Заказать звонок
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="md:hidden border-t border-border p-4 animate-fade-in">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-muted border-border"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in max-h-[70vh] overflow-y-auto">
            <nav className="container py-4 flex flex-col gap-2">
              {/* Catalog with accordion */}
              <div className="border-b border-border pb-4">
                <button
                  onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Menu className="h-5 w-5" />
                    Каталог
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCatalogOpen && (
                  <div className="pl-4 mt-2 space-y-1 animate-fade-in">
                    {catalogCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                          onClick={() => {
                            setIsCatalogOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <IconComponent className="h-4 w-4" />
                          {category.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <Button className="w-full gradient-accent text-accent-foreground font-semibold">
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
