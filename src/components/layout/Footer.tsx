import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-new.png";

const Footer = () => {
  const catalogLinks = [
    { name: "Одноосные прицепы", href: "/catalog/odnoosnye" },
    { name: "Двухосные прицепы", href: "/catalog/dvuhosnye" },
    { name: "Прицепы для лодок и катеров", href: "/catalog/lodki" },
    { name: "Прицепы для мототехники", href: "/catalog/moto" },
    { name: "Прицепы эвакуаторы", href: "/catalog/evakuatory" },
    { name: "Запчасти и аксессуары", href: "/catalog/zapchasti" },
  ];

  const companyLinks = [
    { name: "О компании", href: "/about" },
    { name: "Новости", href: "/news" },
    { name: "Услуги", href: "/services" },
    { name: "Оплата", href: "/payment" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="СКИФ" className="h-20 w-auto" />
            </Link>
            <p className="text-background/70 leading-relaxed">
              Производство и продажа автомобильных прицепов, фаркопов и комплектующих. Работаем с 2005 года.
            </p>
            <div className="flex gap-4 items-center">
              {/* VK */}
              <a
                href="https://vk.com/skifavtoru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.561c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.572 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.305-.491.745-.491h1.744c.525 0 .643.27.525.643-.22 1.016-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.475-.085.72-.576.72z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCI8Pg8mffiiHNH1rY_K1GOA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Yandex Rating Widget */}
              <iframe 
                src="https://yandex.ru/sprav/widget/rating-badge/1095041803?type=rating" 
                style={{ border: 'none' }}
                width="150" 
                height="50"
                title="Рейтинг Яндекс"
              />
            </div>
          </div>

          {/* Catalog links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Каталог</h3>
            <ul className="space-y-3">
              {catalogLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Компания</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+78002001636" className="hover:text-primary transition-colors font-semibold">
                    +7 (800) 200-16-36
                  </a>
                  <p className="text-sm text-background/60">Звонок бесплатный</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:zakaz@skif-avto.ru" className="text-background/70 hover:text-primary transition-colors">
                  zakaz@skif-avto.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70">Санкт-Петербург, ул. Ольги Берггольц, д. 38-А</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-background/70">
                  <p>Пн-Пт: 9:00-18:00</p>
                  <p>Сб: 10:00-16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2026 СКИФ. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
