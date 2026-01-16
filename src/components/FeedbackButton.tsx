import { useState } from "react";
import { MessageCircle } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

const FeedbackButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent text-accent-foreground shadow-lg hover:opacity-90 transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
        aria-label="Обратная связь"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Modal */}
      <FeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FeedbackButton;
