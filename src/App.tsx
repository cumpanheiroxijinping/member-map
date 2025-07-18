import React, { useState } from 'react';
import Header from './components/Header';
import ContentTab from './components/ContentTab';
import SupportTab from './components/SupportTab';
import FAQTab from './components/FAQTab';
import ProfileTab from './components/ProfileTab';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [activeTab, setActiveTab] = useState('content');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'content':
        return <ContentTab />;
      case 'support':
        return <SupportTab />;
      case 'faq':
        return <FAQTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <ContentTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>{renderActiveTab()}</main>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;