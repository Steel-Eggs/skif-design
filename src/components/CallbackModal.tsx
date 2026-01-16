import { useState } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import InputMask from "react-input-mask";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Заявка отправлена! Мы перезвоним вам в ближайшее время.");
    setName("");
    setPhone("");
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
            <Phone className="h-8 w-8 text-primary-foreground" />
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-2">
            Заказать звонок
          </h2>
          <p className="text-center text-muted-foreground mb-6">
            Оставьте заявку и мы перезвоним вам в течение 15 минут
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 rounded-xl bg-muted border-border"
              />
            </div>
            
            <div>
              <InputMask
                mask="+7 (999) 999-99-99"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              >
                {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
                  <Input
                    {...inputProps}
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="h-12 rounded-xl bg-muted border-border"
                  />
                )}
              </InputMask>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 gradient-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Отправка..." : "Перезвоните мне"}
            </Button>
          </form>
          
          {/* Privacy */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="/privacy" className="text-primary hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallbackModal;
