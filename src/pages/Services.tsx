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

// Import service images
import tradeinImg from "@/assets/services/tradein.jpg";
import creditImg from "@/assets/services/credit.jpg";
import serviceImg from "@/assets/services/service.jpg";
import deliveryImg from "@/assets/services/delivery.jpg";
import registrationImg from "@/assets/services/registration.jpg";
import towbarImg from "@/assets/services/towbar.jpg";

// Services data
export const servicesData = [
  {
    id: "tradein",
    slug: "tradein",
    name: "Выкуп/Trade-In легковых прицепов",
    shortDescription: "Обменяйте свой старый прицеп на новый легко и выгодно! Выкуп, комиссия или Trade-In — выбирайте удобный вариант.",
    description: `
      <p class="lead">В нашей компании теперь доступна услуга <strong>"Trade-In"</strong>, которая позволяет вам легко и выгодно обменять свой старый (Б/У) прицеп на новый.</p>
      
      <p>Мы понимаем, что продажа старого прицепа может быть сложной задачей, особенно когда меняются рыночные условия или личные обстоятельства. Ваш прицеп может оказаться слишком маленьким или требующим ремонта, а времени на размещение объявлений и встречи с потенциальными покупателями часто не хватает.</p>

      <h2>Как мы можем помочь</h2>

      <div class="service-block">
        <h3>💰 Выкуп прицепа</h3>
        <p>Мы готовы <strong>выкупить ваш прицеп по рыночной стоимости</strong>, которая составляет около <strong>40% от цены аналогичного нового прицепа</strong>, с учетом необходимых затрат на ремонт.</p>
        <p>Чтобы получить предварительную оценку, просто отправьте фотографии вашего прицепа:</p>
        <ul>
          <li>На электронную почту: <a href="mailto:zakaz@skif-avto.ru">zakaz@skif-avto.ru</a></li>
          <li>На WhatsApp: <a href="https://wa.me/79219103850">+7 (921) 910-38-50</a></li>
        </ul>
        <p>После этого мы проведем оценку и сообщим вам стоимость.</p>
      </div>

      <div class="service-block">
        <h3>📋 Комиссионная продажа</h3>
        <p>Если вы хотите продать прицеп через нашу компанию, мы предлагаем услугу <strong>комиссионной продажи</strong>.</p>
        <p>Комиссия за продажу вашего прицепа составляет <strong>10 000 рублей</strong>. Мы позаботимся обо всех деталях продажи, чтобы вы могли спокойно заниматься своими делами.</p>
      </div>

      <div class="service-block">
        <h3>🔄 Обмен старого прицепа на новый — "Trade-In"</h3>
        <p>Вы также можете <strong>сдать свой старый прицеп в обмен на новый</strong>, представленный в нашем ассортименте.</p>
        <p>Мы оценим ваш прицеп по следующей схеме — <strong>30% от стоимости аналогичного нового прицепа</strong>, с вычетом затрат на ремонт, если он необходим.</p>
      </div>

      <div class="info-block">
        <h3>⚠️ Важная информация</h3>
        <p>Имейте в виду, что различный тюнинг вашего прицепа <strong>не увеличивает его стоимость</strong> при продаже. Это связано с тем, что не каждому покупателю нужны дополнительные доработки. Для большинства покупателей важна цена, а не наличие модификаций.</p>
      </div>

      <p class="conclusion"><strong>С нашей услугой "Trade-In" вы сможете сэкономить время и силы, решив вопрос с продажей старого прицепа быстро и выгодно!</strong></p>
    `,
    image: tradeinImg,
    icon: RefreshCw,
    features: [
      "Выкуп за 40%",
      "Комиссия 10 000 ₽",
      "Trade-In 30%",
      "Быстрая оценка",
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
    image: creditImg,
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
    image: serviceImg,
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
    image: deliveryImg,
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
    image: registrationImg,
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
    image: towbarImg,
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
                  <Link 
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="block"
                  >
                    <Card 
                      className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer h-full"
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
                        
                        <div className="w-full flex items-center justify-center gap-2 py-2 border border-input rounded-md group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                          Подробнее
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
                <Button size="lg" variant="outline" className="font-bold border-white text-white bg-white/10 hover:bg-white hover:text-primary">
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
