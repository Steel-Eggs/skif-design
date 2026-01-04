import { Truck, Shield, Wrench, Headphones, CreditCard, Award } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "15+ лет опыта",
    description: "Работаем с 2005 года. Тысячи довольных клиентов по всей России.",
  },
  {
    icon: Shield,
    title: "Гарантия 2 года",
    description: "На всю продукцию действует официальная гарантия производителя.",
  },
  {
    icon: Truck,
    title: "Доставка по РФ",
    description: "Отправляем транспортными компаниями в любой город России.",
  },
  {
    icon: Wrench,
    title: "Свой сервис",
    description: "Собственная мастерская для ремонта и обслуживания прицепов.",
  },
  {
    icon: CreditCard,
    title: "Удобная оплата",
    description: "Наличные, карты, безнал. Рассрочка и кредит без переплаты.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Консультируем и помогаем на всех этапах покупки и эксплуатации.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 md:py-20 gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20H0zm20 0L40 0v20H20zM0 40l20-20v20H0zm20 0l20-20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Надёжность, качество и забота о каждом клиенте
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group bg-background/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-background/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <advantage.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
