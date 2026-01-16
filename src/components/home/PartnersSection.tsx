import mzsaLogo from "@/assets/partners/mzsa.png";
import sstLogo from "@/assets/partners/sst.png";
import kurganskieLogo from "@/assets/partners/kurganskie.png";
import sputnikLogo from "@/assets/partners/sputnik.png";
import vektorLogo from "@/assets/partners/vektor.png";
import maryushkinLogo from "@/assets/partners/maryushkin.jpg";

const partners = [
  { name: "МЗСА", logo: mzsaLogo },
  { name: "ССТ", logo: sstLogo },
  { name: "Курганские прицепы", logo: kurganskieLogo },
  { name: "Спутник", logo: sputnikLogo },
  { name: "Вектор", logo: vektorLogo },
  { name: "Сад Марьюшкин", logo: maryushkinLogo },
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
              className="bg-card rounded-2xl p-4 shadow-card flex items-center justify-center h-28 opacity-80 hover:opacity-100 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-20 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
