import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';

interface ModuleCardProps {
  module: {
    id: number;
    title: string;
    coverImage: string;
    lessons?: Array<{
      id: number;
      title: string;
      type: string;
      url: string;
      duration: string;
    }>;
    content: string[];
    chapter?: string;
  };
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  const totalDuration = module.lessons?.reduce((total, lesson) => {
    const minutes = parseInt(lesson.duration.replace(' min', ''));
    return total + minutes;
  }, 0) || 45;

  return (
    <div 
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={module.coverImage}
          alt={module.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <ChevronRight className="text-blue-600" size={20} />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
            Módulo {module.id}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={16} className="mr-1" />
            <span>{totalDuration} min</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {module.title}
        </h3>
        
        <div className="space-y-2">
          {module.lessons ? (
            module.lessons.slice(0, 2).map((lesson, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">{lesson.title}</p>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      lesson.type === 'video' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {lesson.type === 'video' ? '📹 Vídeo' : '📖 eBook'}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">{lesson.duration}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            module.content.slice(0, 2).map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
            </div>
            ))
          )}
          {(module.lessons ? module.lessons.length > 2 : module.content.length > 2) && (
            <p className="text-blue-600 text-sm font-medium mt-3">
              +{(module.lessons ? module.lessons.length : module.content.length) - 2} aulas adicionais
            </p>
          )}
        </div>
        
        {module.chapter && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 font-medium">{module.chapter}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleCard;