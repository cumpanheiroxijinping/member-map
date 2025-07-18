import React from 'react';
import { MessageCircle, Clock, Mail, Phone } from 'lucide-react';

const SupportTab: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá, preciso de ajuda com o curso Mapa do Bitcoin', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Central de Suporte</h2>
          <p className="text-xl text-gray-600">
            Estamos aqui para ajudar você em sua jornada de aprendizado
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">WhatsApp</h3>
            <p className="text-gray-600 text-center mb-6">
              Fale diretamente com nossa equipe de suporte especializada
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle size={20} className="mr-2" />
              Entrar em Contato
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Business Hours</h3>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Horário de Atendimento</h3>
            <div className="space-y-3 text-center">
              <p className="text-gray-600">
                <strong>Segunda a Sexta:</strong> 8h às 18h
              </p>
              <p className="text-gray-600">
                <strong>Sábado:</strong> 8h às 14h
              </p>
              <p className="text-gray-600">
                <strong>Domingo:</strong> Fechado
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Outras Formas de Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <Mail className="text-blue-600 mr-4" size={24} />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">suporte@mapadobitcoin.com</p>
                <p className="text-sm text-gray-500">Resposta em até 24h</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <Phone className="text-blue-600 mr-4" size={24} />
              <div>
                <p className="font-semibold text-gray-800">Telefone</p>
                <p className="text-gray-600">(11) 9999-9999</p>
                <p className="text-sm text-gray-500">Horário comercial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Garantia de Satisfação</h3>
          <p className="text-blue-100 mb-6">
            Estamos comprometidos com seu sucesso. Se você não ficar satisfeito com os resultados, 
            oferecemos garantia de 30 dias.
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <span className="text-2xl">🛡️</span>
            </div>
            <span className="font-semibold">100% Garantido</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTab;