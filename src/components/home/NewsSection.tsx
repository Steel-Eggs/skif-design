import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import news1Image from "@/assets/news/news-1.jpg";
import news2Image from "@/assets/news/news-2.jpg";
import news3Image from "@/assets/news/news-3.jpg";

const news = [
  {
    id: 1,
    title: "Новая линейка прицепов СКИФ-2025",
    excerpt: "Представляем обновлённую линейку легковых прицепов с улучшенной конструкцией рамы, новой светотехникой и расширенной комплектацией. Модели доступны к заказу уже сейчас.",
    date: "15 января 2025",
    category: "Новинки",
    image: news1Image,
    views: 1250,
  },
  {
    id: 2,
    title: "Весенняя распродажа — скидки до 20%",
    excerpt: "С 1 марта стартует ежегодная весенняя акция. Скидки на популярные модели прицепов, аксессуары и услуги по ремонту. Успейте воспользоваться выгодным предложением!",
    date: "10 января 2025",
    category: "Акции",
    image: news2Image,
    views: 2340,
  },
  {
    id: 3,
    title: "Открытие нового сервисного центра в Казани",
    excerpt: "Рады сообщить об открытии нового пункта обслуживания в Казани. Теперь качественный ремонт и обслуживание прицепов доступны ещё большему числу клиентов.",
    date: "5 января 2025",
    category: "Компания",
    image: news3Image,
    views: 890,
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              <Calendar className="h-4 w-4" />
              Будьте в курсе
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Новости компании
            </h2>
          </div>
          <Link to="/news" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
            Все новости
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured news + sidebar */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured article */}
          <Card className="lg:col-span-2 group overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src={news[0].image} 
                    alt={news[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 gradient-accent text-accent-foreground">
                    {news[0].category}
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    <Link to={`/news/${news[0].id}`}>
                      {news[0].title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {news[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {news[0].date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {news[0].views}
                      </span>
                    </div>
                    <Link 
                      to={`/news/${news[0].id}`}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Читать
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar news */}
          <div className="space-y-4">
            {news.slice(1).map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {item.category}
                      </Badge>
                      <h4 className="font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        <Link to={`/news/${item.id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{item.date}</span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {item.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA */}
            <Link to="/news" className="block">
              <Button variant="outline" className="w-full font-semibold rounded-xl">
                Смотреть все новости
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
