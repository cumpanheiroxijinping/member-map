import React, { useState } from 'react';
import { X, Play, Download, Clock, BookOpen, Video } from 'lucide-react';

interface ModuleModalProps {
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
  onClose: () => void;
}

const ModuleModal: React.FC<ModuleModalProps> = ({ module, onClose }) => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const handleAccessContent = (lesson: any) => {
    if (lesson.type === 'video') {
      window.open(lesson.url, '_blank');
    } else {
      // Convert Google Drive view link to direct download link
      const fileId = lesson.url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.open(downloadUrl, '_blank');
      } else {
        window.open(lesson.url, '_blank');
      }
    }
  };

  const totalDuration = module.lessons?.reduce((total, lesson) => {
    const minutes = parseInt(lesson.duration.replace(' min', ''));
    return total + minutes;
  }, 0) || 45;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={module.coverImage}
            alt={module.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Módulo {module.id}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{module.title}</h2>
          
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center text-gray-600">
              <Clock size={20} className="mr-2" />
              <span>{totalDuration} minutos</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen size={20} className="mr-2" />
              <span>{module.lessons?.length || 3} aulas</span>
            </div>
          </div>

          {module.lessons ? (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Aulas do Módulo:</h3>
              <div className="space-y-4">
                {module.lessons.map((lesson, index) => (
                  <div key={lesson.id} className="bg-white border-2 border-blue-100 rounded-lg p-4 hover:border-blue-300 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          {lesson.type === 'video' ? (
                            <Video className="text-white" size={20} />
                          ) : (
                            <BookOpen className="text-white" size={20} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{lesson.title}</h4>
                          <div className="flex items-center space-x-3">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              lesson.type === 'video' 
                                ? 'bg-red-100 text-red-600' 
                                : 'bg-green-100 text-green-600'
                            }`}>
                              {lesson.type === 'video' ? '📹 Vídeo' : '📖 eBook'}
                            </span>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAccessContent(lesson)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                      >
                        {lesson.type === 'video' ? (
                          <>
                            <Play size={16} className="mr-2" />
                            Assistir
                          </>
                        ) : (
                          <>
                            <Download size={16} className="mr-2" />
                            Baixar
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">O que você vai aprender:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.content.map((item, index) => (
                  <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {module.chapter && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-gray-600 font-medium">{module.chapter}</p>
            </div>
          )}

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <h4 className="font-bold text-lg mb-2">Pronto para começar?</h4>
            <p className="text-blue-100 mb-4">
              {module.lessons ? 
                `Este módulo contém ${module.lessons.length} aulas com duração total de ${totalDuration} minutos.` :
                'Acesse todo o conteúdo deste módulo agora mesmo.'
              }
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">🚀</span>
              </div>
              <span className="font-semibold">Comece agora e transforme seu conhecimento!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;

                </div>
              ))}
            </div>
          </div>

          {module.chapter && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-gray-600 font-medium">{module.chapter}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
              <Play size={20} className="mr-2" />
              Assistir Módulo
            </button>
            <button 
              onClick={handleDownloadMaterial}
              className="flex-1 border-2 border-blue-500 text-blue-600 font-semibold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
            >
              <Download size={20} className="mr-2" />
              Baixar Material
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;