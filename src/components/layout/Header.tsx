import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock, Search, User, ShoppingCart, ChevronDown, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Каталог", href: "/catalog", hasSubmenu: true },
    { name: "Услуги", href: "/services" },
    { name: "О компании", href: "/about" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/contacts" },
  ];

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
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="СКИФ" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center gap-1 px-4 py-2 text-foreground font-medium hover:text-primary transition-colors rounded-lg hover:bg-muted"
              >
                {link.name}
                {link.hasSubmenu && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <nav className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.hasSubmenu && <ChevronDown className="h-4 w-4" />}
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
