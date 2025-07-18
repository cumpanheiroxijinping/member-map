import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá, preciso de ajuda com o curso Mapa do Bitcoin', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-40 group"
    >
      <MessageCircle size={24} />
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Entrar em Contato
      </div>
    </button>
  );
};

export default FloatingWhatsApp;