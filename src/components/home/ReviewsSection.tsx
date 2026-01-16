const ReviewsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-[40px] font-black text-center mb-14">
          Отзывы клиентов
        </h2>

        <div className="flex justify-center">
          {/* Yandex Reviews Widget */}
          <div className="relative w-full max-w-2xl" style={{ height: '800px' }}>
            <iframe 
              className="w-full h-full border border-border rounded-2xl shadow-card"
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
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
