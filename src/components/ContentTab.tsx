import React, { useState } from 'react';
import ModuleCard from './ModuleCard';
import ModuleModal from './ModuleModal';

const modules = [
  {
    id: 1,
    title: 'Entenda o Jogo',
    coverImage: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 1,
        title: 'O que é Bitcoin (sem blablablá técnico)',
        type: 'video',
        url: 'https://vimeo.com/1102517459?share=copy',
        duration: '15 min'
      },
      {
        id: 2,
        title: 'Por que ele valoriza',
        type: 'ebook',
        url: 'https://drive.google.com/file/d/1yZcYu1ScCByKgx-YL9hYi4I8RNpryjiL/view?usp=sharing',
        duration: '10 min'
      },
      {
        id: 3,
        title: 'O que faz ele ser diferente do real ou dólar',
        type: 'ebook',
        url: 'https://drive.google.com/file/d/1D7Vbw8jcVFlrIRoLPJS8AYdfZigJ0ViL/view?usp=sharing',
        duration: '12 min'
      }
    ],
    content: [
      'O que é Bitcoin (sem blablablá técnico)',
      'Por que ele valoriza',
      'O que faz ele ser diferente do real ou dólar'
    ],
    chapter: 'Capítulo 1 do manual'
  },
  {
    id: 2,
    title: 'Compre do Jeito Certo',
    coverImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 1,
        title: 'Abrir conta Binance',
        type: 'video',
        url: 'https://vimeo.com/1102542966?share=copy',
        duration: '18 min'
      },
      {
        id: 2,
        title: 'Como transferir grana com segurança para Binance',
        type: 'video',
        url: 'https://vimeo.com/1102550597?share=copy',
        duration: '16 min'
      },
      {
        id: 3,
        title: 'Passo a passo pra comprar seu primeiro BTC',
        type: 'video',
        url: 'https://vimeo.com/1102554736?share=copy',
        duration: '20 min'
      }
    ],
    content: [
      'Abrir conta Binance',
      'Como transferir grana com segurança',
      'Passo a passo pra comprar seu primeiro BTC'
    ],
    chapter: 'Capítulo 2 do manual'
  },
  {
    id: 3,
    title: 'O Que Fazer Depois de Comprar',
    coverImage: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
    lessons: [
      {
        id: 1,
        title: 'Onde guardar (corretora, cold wallet, hot wallet)',
        type: 'ebook',
        url: 'https://drive.google.com/file/d/11PBAjd3MU67YwC5MjhWGzerqY-790dqK/view?usp=sharing',
        duration: '14 min'
      },
      {
        id: 2,
        title: 'Como saber o melhor momento pra vender ou segurar',
        type: 'ebook',
        url: 'https://drive.google.com/file/d/1M_5sHesFWFyu2UvxulFtwOVROxLEyjyh/view?usp=sharing',
        duration: '16 min'
      },
      {
        id: 3,
        title: 'Dicas pra não perder dinheiro à toa',
        type: 'ebook',
        url: 'https://drive.google.com/file/d/1DDY3GNAjhOWJ5KkxU6GEV-KKSRCV-YNj/view?usp=sharing',
        duration: '12 min'
      }
    ],
    content: [
      'Onde guardar (corretora, cold wallet, hot wallet)',
      'Como saber o melhor momento pra vender ou segurar',
      'Dicas pra não perder dinheiro à toa'
    ],
    chapter: 'Capítulo 3 do manual'
  }
];

const ContentTab: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Conteúdo do Curso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os segredos do Bitcoin de forma simples e prática para iniciantes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={() => setSelectedModule(module)}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Progress</h3>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Seu Progresso</h3>
            <p className="text-gray-600 mb-6">Complete todos os módulos para obter resultados máximos</p>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-700 font-medium">Progresso do Curso</span>
                <span className="text-blue-700 font-bold">0/9 aulas</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" style={{ width: '0%' }} />
              </div>
              <div className="mt-3 text-sm text-blue-600">
                <p>📹 6 vídeos • 📖 3 eBooks • ⏱️ ~2 horas de conteúdo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedModule && (
        <ModuleModal
          module={selectedModule}
          onClose={() => setSelectedModule(null)}
        />
      )}
    </div>
  );
};

export default ContentTab;