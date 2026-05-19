// src/components/WhatsAppFloat.tsx

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappNumber = "5547999874509";
  const message = encodeURIComponent(
    "Olá, vim pelo site da SSD Tecnologia e gostaria de solicitar um orçamento."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0B5FFF] text-white shadow-2xl shadow-blue-950/30 transition hover:scale-105 hover:bg-[#002198]"
      aria-label="Falar com a SSD Tecnologia pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}