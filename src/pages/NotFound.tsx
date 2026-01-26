import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Large 404 number with gradient */}
          <div className="relative mb-8">
            <h1 className="text-[120px] md:text-[180px] font-black leading-none text-gradient select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[120px] md:text-[180px] font-black leading-none text-primary/5 blur-xl -z-10">
              404
            </div>
          </div>

          {/* Error message */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Страница не найдена
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена. 
            Возможно, вы перешли по устаревшей ссылке.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="gradient-primary text-white">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                На главную
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/catalog">
                <Search className="w-5 h-5 mr-2" />
                Каталог прицепов
              </Link>
            </Button>
          </div>

          {/* Helpful links */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Популярные разделы
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                to="/catalog/legkovye" 
                className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors text-sm font-medium text-foreground hover:text-primary"
              >
                Легковые прицепы
              </Link>
              <Link 
                to="/services" 
                className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors text-sm font-medium text-foreground hover:text-primary"
              >
                Услуги
              </Link>
              <Link 
                to="/contacts" 
                className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors text-sm font-medium text-foreground hover:text-primary"
              >
                Контакты
              </Link>
              <Link 
                to="/about" 
                className="p-3 rounded-xl bg-muted hover:bg-primary/10 transition-colors text-sm font-medium text-foreground hover:text-primary"
              >
                О компании
              </Link>
            </div>

            {/* Contact info */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground mb-2">Нужна помощь? Позвоните нам:</p>
              <a 
                href="tel:+78126420905" 
                className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +7 (812) 642-09-05
              </a>
            </div>
          </div>

          {/* Back button */}
          <button 
            onClick={() => window.history.back()} 
            className="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться назад
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
