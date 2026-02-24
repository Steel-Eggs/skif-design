import { useState, useEffect } from "react";
import { X } from "lucide-react";
import qrTelegram from "@/assets/qr-telegram.jpg";

const TelegramPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("tg-popup-dismissed")) return;
    const timer = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("tg-popup-dismissed", "1");
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500 max-w-[320px] w-full rounded-2xl bg-background border border-border shadow-2xl overflow-hidden">
      <div className="relative p-5">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5 text-[#2AABEE]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          <span className="font-semibold text-sm text-foreground">Telegram</span>
        </div>

        <p className="text-sm text-foreground mb-4 pr-4 leading-snug">
          Добавляйтесь в наш телеграм-канал, чтобы быть в курсе всех событий.
        </p>

        <a href="https://t.me/skif_avto_38" target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={qrTelegram}
            alt="QR-код телеграм-канала @skif_avto_38"
            className="w-full max-w-[200px] mx-auto rounded-xl"
          />
        </a>

        <a
          href="https://t.me/skif_avto_38"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center py-2.5 rounded-xl bg-[#2AABEE] hover:bg-[#229ED9] text-white font-medium text-sm transition-colors"
        >
          Подписаться
        </a>
      </div>
    </div>
  );
};

export default TelegramPopup;
