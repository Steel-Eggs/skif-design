import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Truck } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show with a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in">
      <div className="bg-card border-2 border-primary/20 rounded-2xl shadow-2xl p-5 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex gap-4 items-start">
          {/* Trailer icon */}
          <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
            <Truck className="h-7 w-7 text-primary-foreground" />
          </div>

          <div className="flex-1 pr-4">
            <h4 className="font-heading font-bold text-foreground mb-1.5">
              🍪 Мы используем cookies
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Для улучшения работы сайта и подбора лучших прицепов для вас мы собираем данные о посещениях.
            </p>

            <div className="flex gap-3">
              <Button 
                onClick={handleAccept}
                className="gradient-primary text-primary-foreground font-semibold px-6"
              >
                Принять
              </Button>
              <Button 
                variant="outline" 
                onClick={handleClose}
                className="text-muted-foreground"
              >
                Отклонить
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative trailer wheels */}
        <div className="absolute -bottom-2 left-8 flex gap-1">
          <div className="w-3 h-3 rounded-full bg-primary/30" />
          <div className="w-3 h-3 rounded-full bg-primary/30" />
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;