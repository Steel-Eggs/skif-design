import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title: "Новая модель прицепа",
    excerpt: "Расширение ассортимента",
  },
  {
    id: 2,
    title: "Скидки весной",
    excerpt: "Акционные предложения",
  },
  {
    id: 3,
    title: "Открытие сервиса",
    excerpt: "Новый пункт обслуживания",
  },
  {
    id: 4,
    title: "Партнёрство",
    excerpt: "Расширяем сеть",
  },
];

const NewsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-[40px] font-black text-center mb-14">
          Новости
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-card rounded-3xl p-6 shadow-card hover:shadow-card-lg transition-shadow duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-muted-foreground">{item.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/news">
            <Button variant="outline" size="lg" className="rounded-xl font-bold">
              Все новости
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
