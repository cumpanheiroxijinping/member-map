import React from 'react';
import { X, Play, Download, Clock } from 'lucide-react';

interface ModuleModalProps {
  module: {
    id: number;
    title: string;
    coverImage: string;
    content: string[];
    chapter?: string;
  };
  onClose: () => void;
}

const ModuleModal: React.FC<ModuleModalProps> = ({ module, onClose }) => {
  const handleDownloadMaterial = () => {
    const pdfLinks = {
      1: 'https://drive.google.com/file/d/1pvArnWlZFrPbWCS6YhrcWEEut9EHYCzM/view?usp=sharing',
      2: 'https://drive.google.com/file/d/1X66XAFFC7OVTcEVi1ItTM5TJM6qzMujW/view?usp=sharing',
      3: 'https://drive.google.com/file/d/1_zmSwrPRimd0p7xzDG1zbgQ63_AFF0dO/view?usp=sharing',
      4: 'https://drive.google.com/file/d/1nU8K1fVeWLWpsdd7RuRwyjdgdROXUM_I/view?usp=sharing',
      5: 'https://drive.google.com/file/d/1Ixq4HKalygLjkmw_qA17xaaBiHZbCdD0/view?usp=sharing'
    };

    const pdfUrl = pdfLinks[module.id as keyof typeof pdfLinks];
    if (pdfUrl) {
      // Convert Google Drive view link to direct download link
      const fileId = pdfUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.open(downloadUrl, '_blank');
      }
    }
  };

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
              Module {module.id}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{module.title}</h2>
          
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center text-gray-600">
              <Clock size={20} className="mr-2" />
              <span>15-20 minutes</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Play size={20} className="mr-2" />
              <span>Video + Material</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What you'll learn:</h3>
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

          {module.chapter && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-gray-600 font-medium">{module.chapter}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
              <Play size={20} className="mr-2" />
              Watch Module
            </button>
            <button 
              onClick={handleDownloadMaterial}
              className="flex-1 border-2 border-blue-500 text-blue-600 font-semibold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
            >
              <Download size={20} className="mr-2" />
              Download Material
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleModal;