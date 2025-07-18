import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Preciso de muito dinheiro para começar?',
    answer: 'Não! Você pode começar com qualquer valor, até mesmo R$ 50. O importante é começar e aprender. O curso ensina como fazer seus primeiros investimentos de forma segura, independente do valor que você tem disponível.'
  },
  {
    question: 'É seguro investir em Bitcoin?',
    answer: 'Como qualquer investimento, Bitcoin tem riscos. Por isso o curso ensina as melhores práticas de segurança, como escolher corretoras confiáveis, como guardar seus bitcoins com segurança e como não cair em golpes. O conhecimento é sua melhor proteção.'
  },
  {
    question: 'Quanto tempo leva para aprender?',
    answer: 'O curso foi desenhado para ser concluído em poucos dias. Cada módulo tem entre 15-20 minutos. Você pode assistir no seu ritmo e revisar quantas vezes quiser. O importante é aplicar o que aprender.'
  },
  {
    question: 'Qual corretora devo usar?',
    answer: 'No módulo 2, ensinamos como escolher corretoras confiáveis e regulamentadas no Brasil. Mostramos os critérios de segurança que você deve observar e como criar sua conta passo a passo.'
  },
  {
    question: 'E se o Bitcoin cair depois que eu comprar?',
    answer: 'No módulo 3, ensinamos estratégias para lidar com a volatilidade do mercado. Você aprenderá quando é melhor segurar, quando vender, e como não tomar decisões emocionais que podem prejudicar seus investimentos.'
  },
  {
    question: 'Preciso entender de tecnologia?',
    answer: 'Não! O curso foi criado especialmente para iniciantes. Explicamos tudo de forma simples, sem termos técnicos complicados. Se você sabe usar WhatsApp, consegue seguir nosso passo a passo.'
  },
  {
    question: 'Tem garantia?',
    answer: 'Sim! Oferecemos 30 dias de garantia incondicional. Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu dinheiro, sem perguntas ou burocracias.'
  }
];

const FAQTab: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o Mapa do Bitcoin
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-blue-600 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6 border-t border-blue-100 bg-blue-50/50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-blue-100 mb-6">
            Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida adicional
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá, tenho uma dúvida sobre o curso Mapa do Bitcoin', '_blank')}
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQTab;