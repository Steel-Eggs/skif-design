const partners = [
  "МЗСА",
  "AL-KO",
  "Knott",
  "Avtos",
  "Respo",
  "Brenderup",
];

const PartnersSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-[40px] font-black text-center mb-14">
          Наши партнёры
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card flex items-center justify-center h-24 opacity-70 hover:opacity-100 transition-opacity animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-bold text-lg text-muted-foreground">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
