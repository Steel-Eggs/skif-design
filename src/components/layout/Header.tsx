import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, X, Phone, Search, ShoppingCart, ChevronDown, MessageCircle, Send, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CallbackModal from "@/components/CallbackModal";
import CatalogMegaMenu from "./CatalogMegaMenu";
import { useFavorites, FAVORITES_UPDATED_EVENT } from "@/hooks/useFavorites";
import { useCart, CART_UPDATED_EVENT } from "@/hooks/useCart";
import logo from "@/assets/logo-new.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileCatalogOpen, setIsMobileCatalogOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const { favoritesCount } = useFavorites();
  const { cartCount } = useCart();
  const [displayFavCount, setDisplayFavCount] = useState(0);
  const [displayCartCount, setDisplayCartCount] = useState(0);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  // Sync favorites count from hook
  useEffect(() => {
    setDisplayFavCount(favoritesCount);
  }, [favoritesCount]);

  // Sync cart count from hook
  useEffect(() => {
    setDisplayCartCount(cartCount);
  }, [cartCount]);

  // Listen for favorites updates from other components
  useEffect(() => {
    const handleUpdate = () => {
      const stored = localStorage.getItem("skif_favorites");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setDisplayFavCount(parsed.length);
        } catch (e) {
          setDisplayFavCount(0);
        }
      } else {
        setDisplayFavCount(0);
      }
    };
    window.addEventListener(FAVORITES_UPDATED_EVENT, handleUpdate);
    return () => window.removeEventListener(FAVORITES_UPDATED_EVENT, handleUpdate);
  }, []);

  // Listen for cart updates from other components
  useEffect(() => {
    const handleCartUpdate = () => {
      const stored = localStorage.getItem("skif_cart");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const count = parsed.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
          setDisplayCartCount(count);
        } catch (e) {
          setDisplayCartCount(0);
        }
      } else {
        setDisplayCartCount(0);
      }
    };
    window.addEventListener(CART_UPDATED_EVENT, handleCartUpdate);
    return () => window.removeEventListener(CART_UPDATED_EVENT, handleCartUpdate);
  }, []);

  // Focus mobile search input when opened
  useEffect(() => {
    if (isSearchOpen && mobileSearchInputRef.current) {
      setTimeout(() => {
        mobileSearchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);
  
  const catalogRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const catalogCategories = [
    { name: "Распродажа", href: "/catalog/sale", icon: "🏷️" },
    { name: "Одноосные прицепы", href: "/catalog/odnoosnye", icon: "🚗" },
    { name: "Двухосные прицепы", href: "/catalog/dvuhosnye", icon: "🚙" },
    { name: "Прицепы с крышкой", href: "/catalog/s-kryshkoy", icon: "📦" },
    { name: "Прицепы платформа", href: "/catalog/platforma", icon: "🔲" },
    
    { name: "Прицепы фургоны", href: "/catalog/furgony", icon: "🚐" },
    { name: "Коммерческие прицепы", href: "/catalog/kommercheskie", icon: "🏪" },
    { name: "Прицепы для мототехники", href: "/catalog/moto", icon: "🏍️" },
    { name: "Прицепы для лодок и катеров", href: "/catalog/lodki", icon: "🚤" },
    { name: "Прицепы для электростанций", href: "/catalog/elektrostancii", icon: "⚡" },
    { name: "Прицепы эвакуаторы", href: "/catalog/evakuatory", icon: "🚨" },
    { name: "Прицепы для перевозки спецтехники", href: "/catalog/spectehnika", icon: "🔧" },
    { name: "Бытовки на колёсах", href: "/catalog/bytovki", icon: "🏠" },
    { name: "Наши проекты", href: "/catalog/proekty", icon: "📋" },
    { name: "Прицепы Б/У", href: "/catalog/bu", icon: "♻️" },
    { name: "Прицепы в прокат", href: "/catalog/prokat", icon: "🔄" },
    { name: "Прицепы по производителям", href: "/catalog/proizvoditeli", icon: "🏭" },
    { name: "Запчасти и аксессуары", href: "/catalog/zapchasti", icon: "🔩" },
    { name: "Боксы и багажники", href: "/catalog/boksy", icon: "🧳" },
    { name: "Снегоходы и Вездеходы", href: "/catalog/snegohody", icon: "❄️" },
    { name: "Мотобуксировщики", href: "/catalog/motobuksirovschiki", icon: "🛷" },
    { name: "Запчасти для мотобуксировщиков", href: "/catalog/zapchasti-moto", icon: "🔧" },
    { name: "Товары для рыбалки", href: "/catalog/rybalka", icon: "🎣" },
  ];

  const navLinks = [
    { name: "Услуги", href: "/services" },
    { name: "Оплата", href: "/payment" },
  ];

  const aboutSubmenu = [
    { name: "Новости", href: "/news" },
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
      window.location.href = `/search?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar - hidden on mobile */}
      <div className="bg-primary text-primary-foreground hidden md:block">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
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
              <a href="tel:+79219103850" className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>+7 (921) 910-38-50</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-2 md:py-3 gap-2 md:gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="СКИФ" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Catalog dropdown - hover */}
            <div 
              ref={catalogRef} 
              className="relative"
              onMouseEnter={() => setIsCatalogOpen(true)}
              onMouseLeave={() => setIsCatalogOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-2 gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <Menu className="h-4 w-4" />
                Каталог
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isCatalogOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu */}
              <CatalogMegaMenu 
                isOpen={isCatalogOpen} 
                onClose={() => setIsCatalogOpen(false)} 
              />
            </div>

            <div className="flex items-center gap-1 ml-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* О компании dropdown */}
            <div 
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted">
                О компании
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
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
              className="flex items-center gap-1 px-3 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted"
            >
              Контакты
            </Link>
          </nav>

          {/* Search button with dropdown */}
          <div ref={searchRef} className="hidden md:block relative">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-lg"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {isSearchOpen && (
              <div className="absolute top-full right-0 mt-2 z-[100] animate-fade-in">
                <form onSubmit={handleSearch} className="flex bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                  <Input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 border-0 focus-visible:ring-0 h-11"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    className="rounded-none gradient-primary h-11 px-4"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-9 w-9"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/favorites">
              <Button variant="outline" size="icon" className="relative h-9 w-9 md:h-12 md:w-12 rounded-lg md:rounded-xl">
                <Heart className="h-4 w-4 md:h-5 md:w-5" />
                {displayFavCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                    {displayFavCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative h-9 w-9 md:h-12 md:w-12 rounded-lg md:rounded-xl">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                {displayCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                    {displayCartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button 
              onClick={() => setIsCallbackModalOpen(true)}
              className="hidden lg:flex gradient-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity h-10 px-4 rounded-lg"
            >
              Заказать звонок
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div 
            className="md:hidden border-t border-border p-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="relative">
              <Input
                ref={mobileSearchInputRef}
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
                <Button 
                  onClick={() => {
                    setIsCallbackModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full gradient-accent text-accent-foreground font-semibold"
                >
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Callback Modal */}
      <CallbackModal 
        isOpen={isCallbackModalOpen} 
        onClose={() => setIsCallbackModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
