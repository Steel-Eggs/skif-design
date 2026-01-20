import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, RefreshCw, CreditCard, Wrench, Truck, 
  FileText, Settings, Phone
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CallbackModal from "@/components/CallbackModal";

// Services data
export const servicesData = [
  {
    id: "tradein",
    slug: "tradein",
    name: "Выкуп/Trade-In легковых прицепов",
    shortDescription: "Вы можете продать нам свой прицеп или мы примем его в учёт с покупкой нового прицепа!",
    description: `
      <h2>Выкуп и Trade-In прицепов</h2>
      <p>Компания СКИФ предлагает услугу выкупа и Trade-In легковых прицепов. Это удобный способ обновить ваш прицеп или получить деньги за старый.</p>
      
      <h3>Как это работает?</h3>
      <ul>
        <li>Вы приезжаете к нам с вашим прицепом</li>
        <li>Наши специалисты проводят осмотр и оценку</li>
        <li>Мы предлагаем вам справедливую цену</li>
        <li>Вы получаете деньги или скидку на новый прицеп</li>
      </ul>
      
      <h3>Преимущества Trade-In</h3>
      <ul>
        <li>Быстрое оформление сделки</li>
        <li>Честная оценка стоимости</li>
        <li>Дополнительная скидка при покупке нового прицепа</li>
        <li>Мы берём на себя все заботы по документам</li>
      </ul>
    `,
    image: "https://www.skif-avto.ru/upload/iblock/d59/d593895f014f8218ec8ec1367ca801ca.png",
    icon: RefreshCw,
    features: [
      "Быстрая оценка",
      "Честная цена",
      "Скидка на новый прицеп",
      "Оформление документов",
    ],
  },
  {
    id: "credit",
    slug: "credit",
    name: "Кредит",
    shortDescription: "Вы можете приобрести прицеп в кредит сроком на один год от Сбербанк.",
    description: `
      <h2>Покупка прицепа в кредит</h2>
      <p>Мы сотрудничаем со Сбербанком и предлагаем выгодные условия кредитования на покупку прицепов.</p>
      
      <h3>Условия кредита</h3>
      <ul>
        <li>Срок кредита: до 12 месяцев</li>
        <li>Минимальный первоначальный взнос</li>
        <li>Быстрое одобрение заявки</li>
        <li>Удобный график платежей</li>
      </ul>
      
      <h3>Как оформить кредит?</h3>
      <ol>
        <li>Выберите понравившийся прицеп</li>
        <li>Подайте заявку на кредит</li>
        <li>Дождитесь одобрения (обычно 15-30 минут)</li>
        <li>Подпишите договор и заберите прицеп</li>
      </ol>
      
      <h3>Необходимые документы</h3>
      <ul>
        <li>Паспорт гражданина РФ</li>
        <li>Второй документ (водительское удостоверение, СНИЛС и т.д.)</li>
      </ul>
    `,
    image: "https://www.skif-avto.ru/upload/iblock/67f/67f2e2c46737563bb77f03ce410b790f.png",
    icon: CreditCard,
    features: [
      "Сбербанк",
      "До 12 месяцев",
      "Быстрое одобрение",
      "Минимум документов",
    ],
  },
  {
    id: "service",
    slug: "service",
    name: "Ремонт и техническое обслуживание",
    shortDescription: "Для членов СКИФ-КЛУБа предоставляется бесплатное техническое обслуживание прицепа на весь срок его эксплуатации.",
    description: `
      <h2>Сервисное обслуживание прицепов</h2>
      <p>Наш сервисный центр предлагает полный спектр услуг по ремонту и обслуживанию прицепов любых марок.</p>
      
      <h3>Виды работ</h3>
      <ul>
        <li>Диагностика ходовой части</li>
        <li>Замена подшипников ступиц</li>
        <li>Ремонт тормозной системы</li>
        <li>Замена амортизаторов и рессор</li>
        <li>Ремонт светотехники</li>
        <li>Покраска и антикоррозийная обработка</li>
      </ul>
      
      <h3>СКИФ-КЛУБ</h3>
      <p>Для членов СКИФ-КЛУБа предоставляется бесплатное техническое обслуживание прицепа на весь срок его эксплуатации. Это включает:</p>
      <ul>
        <li>Бесплатную диагностику</li>
        <li>Регулировку подшипников</li>
        <li>Проверку светотехники</li>
        <li>Смазку движущихся частей</li>
      </ul>
    `,
    image: "https://www.skif-avto.ru/upload/iblock/9e5/9e554c1a950e1bc424529aeac39b3a8f.png",
    icon: Wrench,
    features: [
      "Все виды ремонта",
      "Оригинальные запчасти",
      "Гарантия на работы",
      "Бесплатно для СКИФ-КЛУБ",
    ],
  },
  {
    id: "delivery",
    slug: "delivery",
    name: "Доставка",
    shortDescription: "Бесплатная доставка автоприцепов по Санкт-Петербургу!",
    description: `
      <h2>Доставка прицепов</h2>
      <p>Мы доставляем прицепы по Санкт-Петербургу и Ленинградской области, а также по всей России.</p>
      
      <h3>Бесплатная доставка</h3>
      <p>Доставка по Санкт-Петербургу осуществляется бесплатно при покупке прицепа в нашей компании.</p>
      
      <h3>Доставка по России</h3>
      <p>Мы организуем доставку прицепов в любой регион России. Стоимость рассчитывается индивидуально в зависимости от:</p>
      <ul>
        <li>Расстояния до пункта назначения</li>
        <li>Габаритов прицепа</li>
        <li>Способа доставки (автовоз, своим ходом)</li>
      </ul>
      
      <h3>Самовывоз</h3>
      <p>Вы также можете забрать прицеп самостоятельно из нашего салона по адресу: г. Санкт-Петербург, ул. Ольги Берггольц, д. 38-А.</p>
    `,
    image: "https://www.skif-avto.ru/upload/iblock/65a/65ab1616213a2ee81bda3f843da929f5.png",
    icon: Truck,
    features: [
      "Бесплатно по СПб",
      "Доставка по России",
      "Страхование груза",
      "Удобное время",
    ],
  },
  {
    id: "registration",
    slug: "registration",
    name: "Оформление прицепа в ГИБДД",
    shortDescription: "Экономьте своё время! Мы возьмём на себя заботы по постановке вашего прицепа на учёт в ГИБДД.",
    description: `
      <h2>Регистрация прицепа в ГИБДД</h2>
      <p>Мы предлагаем услугу полного сопровождения при постановке прицепа на учёт в ГИБДД.</p>
      
      <h3>Что входит в услугу?</h3>
      <ul>
        <li>Подготовка всех необходимых документов</li>
        <li>Запись в ГИБДД на удобное время</li>
        <li>Сопровождение на осмотре</li>
        <li>Получение номерных знаков</li>
        <li>Получение СТС</li>
      </ul>
      
      <h3>Преимущества</h3>
      <ul>
        <li>Экономия вашего времени</li>
        <li>Гарантия правильного оформления</li>
        <li>Без очередей</li>
        <li>Фиксированная стоимость услуги</li>
      </ul>
      
      <h3>Необходимые документы от вас</h3>
      <ul>
        <li>Паспорт владельца</li>
        <li>ПТС прицепа (предоставляем мы)</li>
        <li>Договор купли-продажи (предоставляем мы)</li>
      </ul>
    `,
    image: "https://www.skif-avto.ru/upload/iblock/4eb/4eb0dad982b6cc0446370284f76b0c77.png",
    icon: FileText,
    features: [
      "Без очередей",
      "Все документы",
      "Фиксированная цена",
      "Экономия времени",
    ],
  },
  {
    id: "towbar",
    slug: "towbar",
    name: "Установка фаркопов",
    shortDescription: "В компании СКИФ вы можете приобрести и установить фаркоп (ТСУ) практически для всех марок и моделей автомобилей.",
    description: `
      <h2>Продажа и установка фаркопов</h2>
      <p>Предлагаем широкий ассортимент фаркопов (ТСУ) для легковых автомобилей, кроссоверов и внедорожников.</p>
      
      <h3>Наши услуги</h3>
      <ul>
        <li>Подбор фаркопа под ваш автомобиль</li>
        <li>Продажа фаркопов ведущих производителей</li>
        <li>Профессиональная установка</li>
        <li>Подключение электрики</li>
      </ul>
      
      <h3>Типы фаркопов</h3>
      <ul>
        <li>Съёмные фаркопы с шаром на двух болтах</li>
        <li>Съёмные фаркопы с автоматическим креплением</li>
        <li>Несъёмные (сварные) фаркопы</li>
        <li>Фланцевые фаркопы</li>
      </ul>
      
      <h3>Гарантия</h3>
      <p>На все фаркопы и работы по установке предоставляется гарантия. Установка занимает от 1 до 3 часов в зависимости от модели автомобиля.</p>
    `,
    image: "https://www.skif-avto.ru/upload/iblock/55f/55fff1c6131812edc723e950ff6f307e.png",
    icon: Settings,
    features: [
      "Все марки авто",
      "Быстрая установка",
      "Гарантия качества",
      "Выгодные цены",
    ],
  },
];

const Services = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const handleCloseCallback = () => setIsCallbackOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Услуги компании СКИФ
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Полный спектр услуг для владельцев прицепов: от покупки в кредит до сервисного обслуживания и регистрации в ГИБДД.
              </p>
              <Button 
                size="lg" 
                className="gradient-accent font-bold"
                onClick={() => setIsCallbackOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Услуги</span>
            </nav>
          </div>
        </div>

        {/* Services grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id}
                    className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-2">
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Link to={`/services/${service.slug}`}>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Подробнее
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
              Нужна помощь с выбором услуги?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Наши специалисты проконсультируют вас по всем вопросам и помогут подобрать оптимальное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="font-bold"
                onClick={() => setIsCallbackOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Заказать звонок
              </Button>
              <a href="tel:+78002001636">
                <Button size="lg" variant="outline" className="font-bold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  +7 (800) 200-16-36
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CallbackModal isOpen={isCallbackOpen} onClose={handleCloseCallback} />
    </div>
  );
};

export default Services;
