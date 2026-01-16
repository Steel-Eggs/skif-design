import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, X, Phone, Search, ShoppingCart, ChevronDown, MessageCircle, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-new.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileCatalogOpen, setIsMobileCatalogOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const catalogRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const catalogCategories = [
    { name: "Распродажа", href: "/catalog/sale", icon: "🏷️" },
    { name: "Одноосные прицепы", href: "/catalog/odnoosnye", icon: "🚗" },
    { name: "Двухосные прицепы", href: "/catalog/dvuhosnye", icon: "🚙" },
    { name: "Прицепы для лодок и катеров", href: "/catalog/lodki", icon: "🚤" },
    { name: "Прицепы для мототехники", href: "/catalog/moto", icon: "🏍️" },
    { name: "Прицепы эвакуаторы", href: "/catalog/evakuatory", icon: "🚨" },
    { name: "Прицепы для спецтехники", href: "/catalog/spectehnika", icon: "🔧" },
    { name: "Прицепы Б/У", href: "/catalog/bu", icon: "♻️" },
    { name: "Прицепы в прокат", href: "/catalog/prokat", icon: "🔄" },
    { name: "Запчасти и аксессуары", href: "/catalog/zapchasti", icon: "🔩" },
  ];

  const navLinks = [
    { name: "Услуги", href: "/services" },
    { name: "Оплата", href: "/payment" },
  ];

  const aboutSubmenu = [
    { name: "Новости", href: "/news" },
    { name: "Партнёры", href: "/partners" },
    { name: "Вакансии", href: "/vacancies" },
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
            {/* Catalog dropdown - hover */}
            <div 
              ref={catalogRef} 
              className="relative"
              onMouseEnter={() => setIsCatalogOpen(true)}
              onMouseLeave={() => setIsCatalogOpen(false)}
            >
              <button
                className="flex items-center gap-2 px-5 py-2.5 gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <Menu className="h-5 w-5" />
                Каталог
                <ChevronDown className={`h-4 w-4 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isCatalogOpen && (
                <div className="absolute top-full left-0 pt-2 z-[100]">
                  <div className="w-72 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in">
                    <div className="py-2 max-h-[70vh] overflow-y-auto">
                      {catalogCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => setIsCatalogOpen(false)}
                        >
                          <span className="text-lg w-6 text-center">{category.icon}</span>
                          <span className="font-medium text-sm">{category.name}</span>
                        </Link>
                      ))}
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

            {/* О компании dropdown */}
            <div 
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted">
                О компании
                <ChevronDown className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutOpen && (
                <div className="absolute top-full left-0 pt-2 z-[100]">
                  <div className="w-48 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in">
                    <div className="py-2">
                      <Link
                        to="/about"
                        className="block px-4 py-2.5 text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        О компании
                      </Link>
                      {aboutSubmenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2.5 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => setIsAboutOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contacts"
              className="flex items-center gap-1 px-4 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted"
            >
              Контакты
            </Link>
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
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMobileCatalogOpen(!isMobileCatalogOpen);
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Menu className="h-5 w-5" />
                    Каталог
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileCatalogOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileCatalogOpen && (
                  <div className="pl-4 mt-2 space-y-1 animate-fade-in">
                    {catalogCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        onClick={() => {
                          setIsMobileCatalogOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="text-base">{category.icon}</span>
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
