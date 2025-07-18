import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Does this formula replace my medication?',
    answer: 'No. The Sugar Delete Formula is a complementary natural protocol that does not replace prescribed medications. Always consult your doctor before making any changes to your current medication. The protocol can be used in conjunction with conventional medical treatment.'
  },
  {
    question: 'Can anyone use this protocol?',
    answer: 'The protocol is based on natural ingredients, but it\'s important to consult a healthcare professional before starting, especially if you have pre-existing medical conditions, are pregnant, breastfeeding, or take regular medications. People with type 1 diabetes should have strict medical supervision.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'The first signs of improvement may appear in the first 2-3 weeks, with more significant results after 30 days of consistent use. Each organism responds differently, and consistency in applying the protocol is fundamental to achieving the best results.'
  },
  {
    question: 'Where can I find the ingredients?',
    answer: 'All ingredients can be found in natural product stores, compounding pharmacies, or through reliable online suppliers. In module 3, we provide a detailed list with specific guidance on where to purchase each item with guaranteed quality.'
  },
  {
    question: 'Are there side effects?',
    answer: 'Being based on natural ingredients, side effects are rare and usually mild, such as initial digestive discomfort. In module 5, we explain in detail the possible normal initial reactions and how to minimize them. Always discontinue use and consult a doctor if adverse reactions occur.'
  },
  {
    question: 'Can I use it with my current medication?',
    answer: 'Generally yes, but it\'s essential to consult your doctor first. Some natural ingredients may interact with diabetes medications, altering their effects. Your doctor will be able to adjust dosages as needed and monitor your progress safely.'
  },
  {
    question: 'Is there any result guarantee?',
    answer: 'We offer a 30-day satisfaction guarantee. If you follow the protocol as directed and are not satisfied with the results, we offer a full refund. We remind you that individual results may vary and consistency is fundamental for success.'
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get your questions answered about the Sugar Delete Formula protocol
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
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6">
            Our support team is ready to help you with any additional questions
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511999999999?text=Hello, I have a question about the Sugar Delete Formula course', '_blank')}
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQTab;