import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground">
                Готовы ответить на ваши вопросы и помочь с выбором
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone */}
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">Телефон</h3>
                  <a href="tel:+74951234567" className="text-lg font-semibold text-primary hover:underline">
                    +7 (495) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Звонок бесплатный</p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@skif-avto.ru" className="text-lg font-semibold text-primary hover:underline">
                    info@skif-avto.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Ответим за 2 часа</p>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">Адрес</h3>
                  <p className="text-foreground">г. Москва, ул. Примерная, д. 123</p>
                  <p className="text-sm text-muted-foreground mt-1">Рядом с метро</p>
                </CardContent>
              </Card>

              {/* Working hours */}
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">Режим работы</h3>
                  <div className="text-foreground">
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб: 10:00 - 16:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[16/9] rounded-2xl bg-muted border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Карта с расположением</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      Напишите нам
                    </h3>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </div>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Имя *</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Телефон *</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваш вопрос или задачу..." 
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Я согласен на обработку персональных данных в соответствии с{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>

                  <Button size="lg" className="w-full gradient-accent font-bold text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Отправить сообщение
                  </Button>
                </form>

                {/* Alternative contact */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Или свяжитесь с нами напрямую:
                  </p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href="https://wa.me/74951234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://t.me/skifavto" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
