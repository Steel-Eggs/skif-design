import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Search, User, ShoppingCart, ChevronDown, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const catalogRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const catalogCategories = [
    {
      name: "Легковые прицепы",
      href: "/catalog/legkovye",
      subcategories: [
        { name: "Одноосные", href: "/catalog/legkovye/odnoosnye" },
        { name: "Двухосные", href: "/catalog/legkovye/dvuhosnye" },
        { name: "С тентом", href: "/catalog/legkovye/s-tentom" },
        { name: "Самосвальные", href: "/catalog/legkovye/samosval" },
      ]
    },
    {
      name: "Грузовые прицепы",
      href: "/catalog/gruzovye",
      subcategories: [
        { name: "Бортовые", href: "/catalog/gruzovye/bortovye" },
        { name: "Платформы", href: "/catalog/gruzovye/platformy" },
        { name: "Самосвалы", href: "/catalog/gruzovye/samosvaly" },
      ]
    },
    {
      name: "Лодочные прицепы",
      href: "/catalog/lodochnye",
      subcategories: [
        { name: "Для ПВХ лодок", href: "/catalog/lodochnye/pvh" },
        { name: "Для катеров", href: "/catalog/lodochnye/katera" },
        { name: "Для гидроциклов", href: "/catalog/lodochnye/gidrotsikly" },
      ]
    },
    {
      name: "Для снегоходов",
      href: "/catalog/snegokhody",
      subcategories: [
        { name: "Универсальные", href: "/catalog/snegokhody/universalnye" },
        { name: "С площадкой", href: "/catalog/snegokhody/s-ploschadkoy" },
      ]
    },
    {
      name: "Для квадроциклов",
      href: "/catalog/kvadrotsikly",
      subcategories: []
    },
    {
      name: "Фаркопы",
      href: "/catalog/farkopy",
      subcategories: [
        { name: "Toyota", href: "/catalog/farkopy/toyota" },
        { name: "Volkswagen", href: "/catalog/farkopy/volkswagen" },
        { name: "Hyundai", href: "/catalog/farkopy/hyundai" },
        { name: "Kia", href: "/catalog/farkopy/kia" },
      ]
    },
    {
      name: "Аксессуары",
      href: "/catalog/aksessuary",
      subcategories: [
        { name: "Тенты", href: "/catalog/aksessuary/tenty" },
        { name: "Запчасти", href: "/catalog/aksessuary/zapchasti" },
        { name: "Крепления", href: "/catalog/aksessuary/krepleniya" },
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
                className="flex items-center gap-1 px-4 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted"
              >
                Каталог
                <ChevronDown className={`h-4 w-4 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown menu */}
              {isCatalogOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-card border border-border rounded-xl shadow-2xl p-4 animate-fade-in z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {catalogCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <Link
                          to={category.href}
                          className="block font-semibold text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsCatalogOpen(false)}
                        >
                          {category.name}
                        </Link>
                        {category.subcategories.length > 0 && (
                          <ul className="space-y-1 pl-3 border-l-2 border-primary/20">
                            {category.subcategories.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  to={sub.href}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                  onClick={() => setIsCatalogOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
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

          {/* Search bar */}
          <div ref={searchRef} className="hidden md:flex flex-1 max-w-sm mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-muted border-border focus:border-primary"
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full hover:bg-transparent"
              >
                <Search className="h-5 w-5 text-muted-foreground" />
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
            <Link to="/account">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button className="hidden md:flex gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
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
                  Каталог
                  <ChevronDown className={`h-4 w-4 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCatalogOpen && (
                  <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                    {catalogCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => {
                          setIsCatalogOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
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
