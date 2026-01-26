import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail, FileText, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const OrderConfirmation = () => {
  // Generate a demo order number
  const orderNumber = `СК-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Success card */}
          <div className="bg-card rounded-2xl border border-border shadow-lg p-8 md:p-12 text-center">
            {/* Success icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-secondary" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Заказ успешно оформлен!
            </h1>
            
            {/* Order number */}
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Номер заказа: <span className="text-primary">{orderNumber}</span></span>
            </div>

            {/* Message */}
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Спасибо за ваш заказ! Наш менеджер свяжется с вами в ближайшее время для подтверждения деталей заказа.
            </p>

            {/* What's next */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
              <h2 className="font-semibold text-foreground mb-4 text-center">Что дальше?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</div>
                  <span className="text-sm text-muted-foreground">Менеджер свяжется с вами для подтверждения заказа</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</div>
                  <span className="text-sm text-muted-foreground">Мы подготовим ваш прицеп и документы</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</div>
                  <span className="text-sm text-muted-foreground">Вы сможете забрать заказ или получить доставку</span>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div className="border-t border-border pt-6 mb-8">
              <p className="text-sm text-muted-foreground mb-4">Есть вопросы? Свяжитесь с нами:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+78126420905" 
                  className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 (812) 642-09-05
                </a>
                <a 
                  href="mailto:info@skif-avto.ru" 
                  className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@skif-avto.ru
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="gradient-primary text-white">
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  На главную
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/catalog">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Продолжить покупки
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
