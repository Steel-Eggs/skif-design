import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Banknote, 
  CreditCard, 
  QrCode, 
  Building2,
  Clock,
  Shield,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import FeedbackButton from "@/components/FeedbackButton";

const paymentMethods = [
  {
    icon: Banknote,
    title: "Наличный расчёт",
    description: "Оплата наличными в точках продаж или при доставке курьером",
    features: [
      "В любом офисе компании",
      "При доставке на адрес",
      "Чек об оплате сразу на руки"
    ]
  },
  {
    icon: QrCode,
    title: "Оплата по QR-коду",
    description: "Быстрая оплата через мобильное приложение вашего банка",
    features: [
      "Сканируйте QR-код",
      "Мгновенное подтверждение",
      "Без комиссии"
    ]
  },
  {
    icon: CreditCard,
    title: "Банковские карты",
    description: "Оплата картами Visa, MasterCard, МИР через защищённый шлюз Сбербанка",
    features: [
      "Visa, MasterCard, МИР",
      "Защищённое соединение",
      "Электронный чек на email"
    ]
  },
  {
    icon: Building2,
    title: "Кредит и рассрочка",
    description: "Программа «Покупай со Сбер» — рассрочка от 3 до 36 месяцев на сумму до 300 000 ₽",
    features: [
      "Без первоначального взноса",
      "Срок до 36 месяцев",
      "Одобрение за 5 минут"
    ]
  }
];

const Payment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative py-16 md:py-24 gradient-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat" />
          <div className="container relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-8">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Главная</Link>
              <span>/</span>
              <span className="text-primary-foreground">Оплата</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground mb-6">
              Способы оплаты
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Выберите удобный способ оплаты вашего заказа. Мы принимаем наличные, 
              банковские карты, оплату по QR-коду и предлагаем выгодные условия кредитования.
            </p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={method.title} 
                    className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                            {method.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {method.description}
                          </p>
                          <ul className="space-y-2">
                            {method.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                                <CheckCircle2 className="h-4 w-4 text-accent" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Быстрая доставка
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Доставка осуществляется в течение 1-2 дней после поступления оплаты на расчётный счёт
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Гарантия качества
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Гарантийное обслуживание производится при наличии заполненного гарантийного талона
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Работа с юрлицами
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Принимаем оплату от юридических лиц по безналичному расчёту с НДС
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 gradient-accent">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-6">
              Нужна консультация по оплате?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут выбрать оптимальный способ оплаты 
              и ответят на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-accent hover:bg-white/90 font-bold"
              >
                Заказать звонок
              </Button>
              <a href="tel:+78002001636">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-bold border-white text-white bg-white/10 hover:bg-white hover:text-accent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +7 (800) 200-16-36
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FeedbackButton />
    </div>
  );
};

export default Payment;
