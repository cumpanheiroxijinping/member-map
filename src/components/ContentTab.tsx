import React, { useState } from 'react';
import ModuleCard from './ModuleCard';
import ModuleModal from './ModuleModal';

const modules = [
  {
    id: 1,
    title: 'The Truth About Urotrema Pancreaticum',
    coverImage: 'https://i.ibb.co/x48bYCw/MODULO1.png',
    content: [
      'What is the microscopic parasite',
      'How it infects pancreatic beta cells',
      'Why doctors don\'t talk about this',
      'Difference between treating symptoms vs. eliminating the cause'
    ],
    chapter: 'Chapter 1 of the manual'
  },
  {
    id: 2,
    title: 'The Japanese Discovery: Guruko Furudamu',
    coverImage: 'https://i.ibb.co/nvY9xSW/MODULO2.png',
    content: [
      'Dr. Yumi Nakamura\'s story',
      'University of Tokyo research',
      'The 8 sacred Japanese herbs',
      'Mechanism of action against the parasite'
    ],
    chapter: 'Chapter 2 of the manual'
  },
  {
    id: 3,
    title: 'Complete Formula Recipe',
    coverImage: 'https://i.ibb.co/zHmjY9nG/MODULO3.png',
    content: [
      'List of 8 ingredients with dosages',
      'Where to find each herb',
      'Step-by-step preparation method',
      'Variations: capsules, tea and extract'
    ],
    chapter: 'Chapter 3 of the manual'
  },
  {
    id: 4,
    title: '30-Day Protocol',
    coverImage: 'https://i.ibb.co/G3HF4Jms/MODULO4.png',
    content: [
      'Daily schedule',
      'Ideal timing',
      'What to expect each week',
      'Progress monitoring'
    ],
    chapter: 'Chapter 4 of the manual'
  },
  {
    id: 5,
    title: 'Eliminating Resistance and Side Effects',
    coverImage: 'https://i.ibb.co/FbfmvkYN/MODULO5.png',
    content: [
      'Normal initial reactions',
      'How to accelerate parasite elimination',
      'Signs that it\'s working',
      'When to seek medical guidance'
    ],
    chapter: 'Chapter 5 of the manual'
  }
];

const ContentTab: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Content</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the secrets of the Japanese formula that is revolutionizing natural diabetes treatment
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
            <p className="text-gray-600 mb-6">Complete all modules to get maximum results</p>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-700 font-medium">Course Progress</span>
                <span className="text-blue-700 font-bold">0/5 modules</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" style={{ width: '0%' }} />
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