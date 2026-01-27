import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, RefreshCw, CreditCard, Wrench, Truck, 
  FileText, Settings, Phone, Calendar, Sparkles
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
import rentalImg from "@/assets/services/rental.jpg";
import tuningImg from "@/assets/services/tuning.jpg";

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
          <li>На Telegram или Max: <a href="https://t.me/+79219103850">+7 (921) 910-38-50</a></li>
        </ul>
        <p>После этого мы проведем оценку и сообщим вам стоимость.</p>
      </div>

      <div class="service-block">
        <h3>📋 Комиссионная продажа</h3>
        <p>Если вы хотите продать прицеп через нашу компанию, мы предлагаем услугу <strong>комиссионной продажи</strong>.</p>
        <p>Комиссия за продажу вашего прицепа составляет <strong>20 000 рублей</strong>. Мы позаботимся обо всех деталях продажи, чтобы вы могли спокойно заниматься своими делами.</p>
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
      "Комиссия 20 000 ₽",
      "Trade-In 30%",
      "Быстрая оценка",
    ],
  },
  {
    id: "credit",
    slug: "credit",
    name: "Кредит",
    shortDescription: "Покупайте прицепы в кредит по программе «Покупай со Сбером» — без первоначального взноса!",
    description: `
      <p class="lead">Владельцы дебетовой банковской карты ПАО Сбербанк, подключившиеся к услуге «Мобильный банк» и системе «Сбербанк Онлайн», могут совершать покупки в кредит, не выходя из дома!</p>
      
      <h2>Кредит по программе "Покупай со Сбером"</h2>
      
      <div class="service-block">
        <h3>📋 Основные требования</h3>
        <ul>
          <li>Гражданство РФ</li>
          <li>Возраст покупателя — от 21 до 65 лет на момент возврата кредита по договору</li>
          <li>Наличие постоянной (временной) регистрации по месту жительства/пребывания на территории Российской Федерации</li>
        </ul>
      </div>
      
      <div class="service-block highlight">
        <h3>✨ Преимущества Сервиса</h3>
        <ul>
          <li><strong>Без первоначального взноса</strong> по кредиту</li>
          <li>Срок действия кредита <strong>от 3 до 36 месяцев</strong></li>
          <li>Сумма кредита <strong>от 3 000 до 300 000 рублей</strong></li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>🛒 Как оформить кредит</h3>
        <ol>
          <li>Выберите на сайте магазина-партнёра товар или услугу, нажмите «Купить в кредит» и выберите срок кредитования</li>
          <li>Когда откроется СберБанк Онлайн, авторизуйтесь и заполните заявку. Рассмотрение заявки займет <strong>не более 2-х минут</strong></li>
          <li>Если кредит одобрен, деньги за покупку автоматически будут перечислены на счёт магазина</li>
          <li>Согласуйте с магазином комфортный способ и время доставки</li>
        </ol>
      </div>
      
      <div class="info-block">
        <p>Подробнее с условиями кредитования можно ознакомиться на странице <a href="https://www.sberbank.com/ru/person/credits/money/pos" target="_blank" rel="noopener noreferrer">sberbank.com</a></p>
      </div>
    `,
    image: creditImg,
    icon: CreditCard,
    features: [
      "Без первого взноса",
      "До 36 месяцев",
      "Одобрение за 2 мин",
      "До 300 000 ₽",
    ],
  },
  {
    id: "service",
    slug: "service",
    name: "Ремонт и техническое обслуживание",
    shortDescription: "Профессиональный ремонт и ТО легковых автоприцепов различных производителей. Подарим вашему прицепу вторую жизнь!",
    description: `
      <p class="lead"><strong>Наша компания осуществляет ремонт и Техническое обслуживание легковых автоприцепов различных производителей.</strong></p>
      
      <div class="service-block highlight">
        <h3>🔧 Наши преимущества</h3>
        <ul>
          <li><strong>Большой выбор запчастей</strong> и комплектующих</li>
          <li><strong>Профессиональные механики</strong> и электрик</li>
          <li>Проводим <strong>комплексный ремонт</strong> и небольшой тюнинг</li>
          <li><strong>Демократичные цены</strong></li>
          <li>Качественный ремонт <strong>в короткие сроки</strong></li>
        </ul>
      </div>
      
      <p class="accent-text">🚗 Мы подарим вашему прицепу Вторую жизнь!</p>
      
      <div class="service-block">
        <h3>🎁 Программа "СКИФ-клуб"</h3>
        <p>С 2015 года в компании запущена программа <strong>"СКИФ-клуб"</strong>, которая позволяет каждому нашему клиенту:</p>
        <ul>
          <li>Получать <strong>бесплатное техническое обслуживание</strong> прицепа на протяжении всего срока его эксплуатации</li>
          <li>Участвовать в акциях</li>
          <li>Приобретать запчасти и аксессуары с <strong>гарантированной скидкой</strong></li>
        </ul>
      </div>
      
      <div class="info-block">
        <p><strong>Подробности в офисах продаж и по телефону:</strong></p>
        <p><a href="tel:+78123366221">+7 (812) 33-66-22-1</a> или <a href="tel:+79219103850">+7 (921) 910-38-50</a></p>
      </div>
    `,
    image: serviceImg,
    icon: Wrench,
    features: [
      "Все производители",
      "Запчасти в наличии",
      "Быстрый ремонт",
      "Карта постоянного покупателя",
    ],
  },
  {
    id: "delivery",
    slug: "delivery",
    name: "Доставка",
    shortDescription: "Доставка автоприцепов по Санкт-Петербургу и Ленинградской области с возможностью оплаты при получении.",
    description: `
      <p class="lead">Компания СКИФ осуществляет доставку автомобильных прицепов по Санкт-Петербургу и в Ленинградскую область.</p>
      
      <div class="service-block highlight">
        <h3>🚚 Доставка прицепов</h3>
        <ul>
          <li>Доставка по <strong>Санкт-Петербургу</strong> и <strong>Ленинградской области</strong></li>
          <li>Есть возможность <strong>оплаты прицепа непосредственно курьеру-водителю</strong></li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>🌍 Доставка в регионы</h3>
        <p><strong>Доставляем прицепы в Регионы.</strong> Стоимость доставки рассчитывается индивидуально.</p>
        <p>Все подробности можно уточнить, позвонив по номеру центрального офиса компании "СКИФ":</p>
        <p class="phone-number"><a href="tel:+78123366223">8 (812) 33-66-223</a></p>
      </div>
      
      <div class="service-block">
        <h3>📦 Доставка запчастей и комплектующих</h3>
        <p>Запчасти и комплектующие наша компания отправляет курьерской службой <strong>СДЭК</strong> с оплатой при получении.</p>
        <p>При заказе просто укажите:</p>
        <ul>
          <li>ФИО</li>
          <li>Номер контактного телефона</li>
          <li>Город доставки</li>
        </ul>
      </div>
    `,
    image: deliveryImg,
    icon: Truck,
    features: [
      "СПб и ЛО",
      "Доставка в регионы",
      "Оплата при получении",
      "СДЭК для запчастей",
    ],
  },
  {
    id: "registration",
    slug: "registration",
    name: "Оформление прицепа в ГИБДД",
    shortDescription: "Полное оформление легкового прицепа без очередей и лишней волокиты. Стоимость услуги — 11 000 рублей.",
    description: `
      <p class="lead">Регистрация прицепа в ГИБДД может превратиться в затяжной процесс, отнимающий время и силы. Компания СКИФ предлагает удобную и доступную услугу — <strong>полное оформление легкового прицепа без очередей и лишней волокиты</strong>.</p>
      
      <p>Вам не нужно разбираться в нюансах оформления, собирать бумаги и тратить часы в ожидании — все хлопоты мы берём на себя.</p>
      
      <div class="service-block highlight">
        <h3>💰 Стоимость услуги</h3>
        <ul>
          <li>Для физических лиц: <strong>11 000 рублей</strong></li>
          <li>Для юридических лиц: <strong>11 000 рублей</strong></li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>📋 Что входит в услугу</h3>
        <p>Процедура регистрации прицепа у нас занимает минимальное время и включает весь необходимый комплекс действий:</p>
        <ul>
          <li>Взаимодействие с органами регистрации</li>
          <li>Проверка ПТС</li>
          <li>Оплата госпошлин</li>
          <li>Получение номеров</li>
        </ul>
        <p>Мы гарантируем <strong>корректность оформления документов</strong> и соответствие требованиям законодательства.</p>
      </div>
      
      <div class="service-block">
        <h3>✨ Наши гарантии</h3>
        <p>Сотрудничество с нами — это гарантия того, что ваш прицеп будет поставлен на учёт <strong>быстро, без нарушений и повторных визитов</strong> в ГИБДД. Вы просто получаете готовые документы и можете сразу начать эксплуатацию.</p>
      </div>
      
      <div class="info-block">
        <p>Особенно удобно воспользоваться данной услугой при покупке прицепа в нашей компании. Мы оформим всё в кратчайшие сроки, и вы сможете <strong>уехать с уже зарегистрированным транспортным средством</strong>.</p>
      </div>
      
      <p class="conclusion"><strong>СКИФ — это не только продажа качественных легковых прицепов, но и помощь в их полном оформлении. Доверьте регистрацию профессионалам и получите результат без лишних хлопот!</strong></p>
    `,
    image: registrationImg,
    icon: FileText,
    features: [
      "Без очередей",
      "11 000 ₽",
      "Все документы",
      "Быстро и чётко",
    ],
  },
  {
    id: "towbar",
    slug: "towbar",
    name: "Установка фаркопов",
    shortDescription: "Профессиональная установка тягово-сцепных устройств для автомобилей любых марок. Более 1000 наименований в наличии!",
    description: `
      <p class="lead">Компания "СКИФ" предлагает не только широкий выбор фаркопов, но и <strong>качественную установку тягово-сцепных устройств</strong> для автомобилей любых марок. С 2016 года мы зарекомендовали себя как надежный партнер в сфере реализации и установки фаркопов.</p>
      
      <div class="service-block highlight">
        <h3>🔧 Профессиональная установка</h3>
        <p>Установка фаркопов проводится <strong>опытными специалистами</strong>, которые используют только современное и профессиональное оборудование.</p>
        <p>Это обеспечивает <strong>надежность и безопасность</strong> сцепных устройств, гарантируя их долгосрочную эксплуатацию.</p>
      </div>
      
      <div class="service-block">
        <h3>📦 Широкий ассортимент</h3>
        <p>На складах наших партнеров всегда доступно <strong>более тысячи наименований</strong> фаркопов и сопутствующих аксессуаров.</p>
        <p>Мы предлагаем широкий выбор продукции, что позволяет подобрать <strong>оптимальное решение для любого автомобиля</strong>.</p>
      </div>
      
      <div class="service-block">
        <h3>📞 Как заказать</h3>
        <p>Чтобы заказать фаркоп или получить консультацию, достаточно позвонить в наш центральный офис:</p>
        <p class="phone-number"><a href="tel:+78123366223">8 (812) 33-66-22-3</a></p>
        <p>Наши сотрудники помогут вам выбрать нужное устройство и организуют установку в удобное для вас время.</p>
      </div>
      
      <p class="conclusion"><strong>Компания "СКИФ" — это гарантия качества и надежности в установке и продаже фаркопов. Мы заботимся о каждом клиенте и стремимся предоставить услуги на высшем уровне.</strong></p>
    `,
    image: towbarImg,
    icon: Settings,
    features: [
      "Все марки авто",
      "1000+ наименований",
      "С 2016 года",
      "Гарантия качества",
    ],
  },
  {
    id: "rental",
    slug: "rental",
    name: "Аренда прицепов",
    shortDescription: "Выгодный прокат легковых прицепов и прицепов для лодок в Санкт-Петербурге — от 400 ₽/сутки.",
    description: `
      <p class="lead">Компания <strong>СКИФ</strong> предлагает услугу <strong>аренды легковых прицепов</strong> для жителей Санкт-Петербурга и Ленинградской области.</p>
      
      <h2>Прокат легковых прицепов</h2>
      
      <p>Если вам нужен прицеп для разовой перевозки груза, дачного переезда или транспортировки техники — аренда станет оптимальным решением. Не нужно покупать прицеп, достаточно взять его напрокат на необходимый срок.</p>
      
      <div class="service-block highlight">
        <h3>💰 Стоимость аренды</h3>
        <p>Чем дольше срок аренды — тем выгоднее цена за сутки:</p>
        <ul>
          <li><strong>1–3 дня:</strong> от 800 до 1 200 ₽/сутки</li>
          <li><strong>3–7 дней:</strong> от 600 до 1 000 ₽/сутки</li>
          <li><strong>8–14 дней:</strong> от 500 до 900 ₽/сутки</li>
          <li><strong>15+ дней:</strong> от 400 до 800 ₽/сутки</li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>🚛 Доступные модели</h3>
        <ul>
          <li><strong>Экспедиция</strong> (2470×1225×400) — грузоподъёмность 500 кг</li>
          <li><strong>МЗСА 817702</strong> (2050×1230×290) — грузоподъёмность 570 кг</li>
          <li><strong>МЗСА 817711</strong> (2450×1230×290) с тентом — грузоподъёмность 530 кг</li>
          <li><strong>ЛАВ-81012А</strong> (3500×1500×240) с тентом — грузоподъёмность 600 кг</li>
          <li><strong>Спутник АКВА 40</strong> — для перевозки лодок до 4,5 м</li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>📋 Условия проката</h3>
        <ul>
          <li>Залог — <strong>5 000 ₽</strong> (возвращается при сдаче прицепа)</li>
          <li>Прицеп сдаётся чистым и в исправном состоянии</li>
          <li>Возможность продления срока аренды</li>
        </ul>
      </div>
      
      <div class="info-block">
        <h3>⚠️ Важная информация</h3>
        <p><strong>Прокат доступен только для граждан с постоянной пропиской в Санкт-Петербурге или Ленинградской области.</strong></p>
        <p>Для оформления проката необходим паспорт и водительское удостоверение категории B.</p>
      </div>
      
      <div class="service-block">
        <h3>📞 Как забронировать</h3>
        <p>Позвоните нам или оставьте заявку на сайте — мы подберём подходящий прицеп и согласуем удобное время выдачи.</p>
        <p class="phone-number"><a href="tel:+79219103850">+7 (921) 910-38-50</a></p>
      </div>
      
      <p class="conclusion"><strong>Аренда прицепа в СКИФ — это удобно, выгодно и надёжно!</strong></p>
    `,
    image: rentalImg,
    icon: Calendar,
    features: [
      "От 400 ₽/сутки",
      "Залог 5 000 ₽",
      "Лодочные прицепы",
      "Тенты в наличии",
    ],
  },
  {
    id: "tuning",
    slug: "tuning",
    name: "Тюнинг прицепов",
    shortDescription: "Индивидуальная доработка прицепов: усиление рамы, установка лебёдок, LED-освещение и многое другое.",
    description: `
      <p class="lead">Компания <strong>СКИФ</strong> предлагает профессиональный <strong>тюнинг и доработку легковых прицепов</strong> любой сложности.</p>
      
      <p>Стандартная комплектация прицепа не всегда отвечает индивидуальным потребностям. Мы поможем адаптировать ваш прицеп под конкретные задачи — будь то перевозка тяжёлой техники, лодок, строительных материалов или использование в сложных условиях.</p>
      
      <h2>Популярные виды доработок</h2>
      
      <div class="service-block">
        <h3>🔧 Усиление конструкции</h3>
        <ul>
          <li>Усиление рамы дополнительными поперечинами</li>
          <li>Установка усиленных осей и подвески</li>
          <li>Замена штатных рессор на усиленные</li>
          <li>Установка дополнительных опор и упоров</li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>⚡ Электрооборудование</h3>
        <ul>
          <li>Установка LED-освещения (габариты, стоп-сигналы, поворотники)</li>
          <li>Подсветка грузового отсека</li>
          <li>Дополнительные розетки и разъёмы</li>
          <li>Камеры заднего вида с выводом на монитор в автомобиле</li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>🪝 Погрузочное оборудование</h3>
        <ul>
          <li>Установка ручных и электрических лебёдок</li>
          <li>Монтаж трапов и аппарелей</li>
          <li>Направляющие для лодок и квадроциклов</li>
          <li>Колёсные упоры и фиксаторы техники</li>
        </ul>
      </div>
      
      <div class="service-block highlight">
        <h3>🛡️ Защита и комфорт</h3>
        <ul>
          <li>Антикоррозийная обработка рамы и кузова</li>
          <li>Установка тентов и каркасов</li>
          <li>Крышки и кофры для хранения инструментов</li>
          <li>Противоугонные замки и блокираторы сцепного устройства</li>
          <li>Брызговики и крылья увеличенного размера</li>
        </ul>
      </div>
      
      <div class="service-block">
        <h3>🎨 Внешний вид</h3>
        <ul>
          <li>Покраска в любой цвет по каталогу RAL</li>
          <li>Нанесение логотипов и рекламы</li>
          <li>Декоративные элементы и молдинги</li>
        </ul>
      </div>
      
      <div class="info-block">
        <h3>💡 Индивидуальный подход</h3>
        <p>Если вам нужна нестандартная доработка — мы разработаем и реализуем проект по вашему техническому заданию. Наши специалисты имеют большой опыт работы с прицепами разных производителей.</p>
      </div>
      
      <div class="service-block">
        <h3>📞 Как заказать тюнинг</h3>
        <p>Опишите вашу задачу по телефону или в мессенджерах — мы проконсультируем по возможностям и стоимости работ:</p>
        <ul>
          <li>Телефон: <a href="tel:+79219103850">+7 (921) 910-38-50</a></li>
          <li>Email: <a href="mailto:zakaz@skif-avto.ru">zakaz@skif-avto.ru</a></li>
        </ul>
        <p>После согласования деталей вы привозите прицеп на нашу площадку — и мы выполняем все работы в оговорённые сроки.</p>
      </div>
      
      <p class="conclusion"><strong>Тюнинг от СКИФ — это качественные материалы, профессиональный монтаж и гарантия на все работы!</strong></p>
    `,
    image: tuningImg,
    icon: Sparkles,
    features: [
      "Усиление рамы",
      "LED-освещение",
      "Лебёдки и трапы",
      "Покраска RAL",
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
