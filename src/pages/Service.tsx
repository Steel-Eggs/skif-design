import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowLeft, Phone, Check, ChevronRight
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CallbackModal from "@/components/CallbackModal";
import { servicesData } from "./Services";

const Service = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const handleCloseCallback = () => setIsCallbackOpen(false);

  const service = servicesData.find(s => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  // Get related services (excluding current)
  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{service.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          
          <div className="container relative z-10">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
            
            <div className="max-w-2xl">
              <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <IconComponent className="w-8 h-8" />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {service.shortDescription}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    <Check className="w-4 h-4" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-accent font-bold"
                  onClick={() => setIsCallbackOpen(true)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Заказать услугу
                </Button>
                <a href="tel:+78002001636">
                  <Button size="lg" variant="outline" className="font-bold w-full sm:w-auto">
                    +7 (800) 200-16-36
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery (if available) */}
        {service.gallery && service.gallery.length > 0 && (
          <section className="py-8 md:py-12 bg-muted/30">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Наши прицепы в аренду
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.gallery.map((image, idx) => (
                  <div 
                    key={idx}
                    className="aspect-[4/3] rounded-xl overflow-hidden bg-muted"
                  >
                    <img 
                      src={image} 
                      alt={`${service.name} - фото ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div 
                      className="service-description"
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Order card */}
                <Card className="border-2 border-primary/20 sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Заказать услугу
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Оставьте заявку и наш специалист свяжется с вами в ближайшее время.
                    </p>
                    <Button 
                      size="lg" 
                      className="w-full gradient-accent font-bold mb-3"
                      onClick={() => setIsCallbackOpen(true)}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Заказать звонок
                    </Button>
                    <a href="tel:+78002001636" className="block">
                      <Button size="lg" variant="outline" className="w-full font-bold">
                        +7 (800) 200-16-36
                      </Button>
                    </a>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Звонок бесплатный по России
                    </p>
                  </CardContent>
                </Card>
                
                {/* Related services */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Другие услуги
                    </h3>
                    <div className="space-y-3">
                      {relatedServices.map((relService) => {
                        const RelIcon = relService.icon;
                        return (
                          <Link
                            key={relService.id}
                            to={`/services/${relService.slug}`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <RelIcon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors flex-1 text-sm">
                              {relService.name}
                            </span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                    <Link to="/services" className="block mt-4">
                      <Button variant="ghost" className="w-full">
                        Все услуги
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Остались вопросы?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Свяжитесь с нами любым удобным способом — мы всегда рады помочь!
            </p>
            <Button 
              size="lg" 
              className="gradient-primary font-bold"
              onClick={() => setIsCallbackOpen(true)}
            >
              Получить консультацию
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <CallbackModal isOpen={isCallbackOpen} onClose={handleCloseCallback} />
    </div>
  );
};

export default Service;
