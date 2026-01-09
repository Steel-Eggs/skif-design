import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Прицепы разных типов и размеров",
  "Гибкие сроки аренды",
  "Доставка по городу",
  "Минимум документов",
];

const RentSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="bg-card rounded-[48px] p-12 md:p-[72px] shadow-card-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[40px] font-black mb-6">
              Аренда прицепов
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Предоставляем прицепы в аренду на выгодных условиях для частных лиц и организаций.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full"
                >
                  <Check className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/rent">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-[14px] font-extrabold px-8"
              >
                Арендовать прицеп
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentSection;
