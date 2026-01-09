import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Search, User, ShoppingCart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Каталог", href: "/catalog" },
    { name: "Услуги", href: "/services" },
    { name: "О нас", href: "/about" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass header */}
      <div className="bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <motion.img 
              src={logo} 
              alt="СКИФ" 
              className="h-14 md:h-16 w-auto transition-transform group-hover:scale-105" 
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative px-5 py-2.5 text-foreground font-medium transition-colors rounded-full hover:bg-muted group"
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full hover:bg-muted">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/account">
              <Button variant="ghost" size="icon" className="hidden md:flex rounded-full hover:bg-muted">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-muted">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            <a href="tel:+74951234567" className="hidden xl:flex items-center gap-2 ml-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="h-4 w-4 text-secondary-foreground" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-foreground">+7 (495) 123-45-67</div>
                <div className="text-muted-foreground text-xs">Пн-Пт: 9:00-18:00</div>
              </div>
            </a>

            <Button 
              className="hidden md:flex ml-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
            >
              Заказать звонок
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center justify-between px-4 py-4 text-lg text-foreground font-medium hover:bg-muted rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-6 border-t border-border mt-4 space-y-4">
                <a href="tel:+74951234567" className="flex items-center gap-3 px-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground text-sm">Пн-Пт: 9:00-18:00</div>
                  </div>
                </a>
                
                <Button className="w-full rounded-full bg-primary text-primary-foreground text-lg py-6 font-semibold">
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
