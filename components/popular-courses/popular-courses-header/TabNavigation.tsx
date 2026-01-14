"use client";
import React, { useState } from 'react';
import { TabButton } from './TabButton';

const tabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'courses', label: 'Khoá học' },
  { id: 'skill-paths', label: 'Lộ trình kỹ năng' },
  { id: 'career-paths', label: 'Lộ trình sự nghiệp' },
  { id: 'sci-paths', label: 'Lộ trình SCI' }
];

export const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="flex flex-col gap-2 items-center w-full">
      <nav className="flex gap-3 border-b border-solid border-b-gray-200 items-start max-md:gap-2 max-sm:flex-wrap max-sm:gap-1">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </nav>
    </section>
  );
};
