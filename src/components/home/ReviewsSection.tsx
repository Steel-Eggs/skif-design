import { Star, MapPin, ExternalLink } from "lucide-react";

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-[40px] font-black text-center mb-14">
          Отзывы клиентов
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Yandex Maps Widget Placeholder */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FC3F1D] to-[#FF6B4A] p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-[#FC3F1D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">СКИФ — Прицепы</h3>
                    <p className="text-white/80 text-sm">Санкт-Петербург</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-yellow-300 text-yellow-300"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium">4.9 на основе 127 отзывов</p>
                </div>
              </div>
            </div>

            {/* Yandex Reviews Widget */}
            <div className="relative w-full" style={{ height: '800px' }}>
              <iframe 
                className="w-full h-full border border-border rounded-lg"
                src="https://yandex.ru/maps-reviews-widget/183604077331?comments"
                title="Отзывы о компании СКИФ на Яндекс.Картах"
              />
              <a 
                href="https://yandex.ru/maps/org/skif/183604077331/" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-0 w-full text-center text-[10px] text-muted-foreground/60 font-sans px-4 truncate"
              >
                Скиф на карте Санкт‑Петербурга — Яндекс Карты
              </a>
            </div>

            {/* Footer Stats */}
            <div className="border-t border-border px-8 py-4 bg-muted/10">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Рейтинг обновляется автоматически</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    127 отзывов
                  </span>
                  <span>Яндекс.Карты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
