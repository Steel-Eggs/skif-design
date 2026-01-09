import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Отличный сервис и качественные прицепы",
    author: "Алексей М.",
  },
  {
    text: "Покупаю здесь уже второй прицеп",
    author: "Сергей К.",
  },
  {
    text: "Грамотные специалисты",
    author: "Дмитрий В.",
  },
  {
    text: "Рекомендую СКИФ",
    author: "Игорь П.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-[40px] font-black text-center mb-14">
          Отзывы клиентов
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-secondary/30 mb-4" />
              <p className="italic text-foreground mb-4">«{review.text}»</p>
              <p className="text-sm text-muted-foreground font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
