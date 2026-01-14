import React from 'react';

interface CourseBadgeProps {
  type: 'career' | 'skill' | 'course' | 'sci' | 'project';
  children: React.ReactNode;
}

const badgeStyles = {
  career: 'bg-sky-50 border-sky-200 text-sky-700',
  skill: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  course: 'bg-violet-50 border-violet-200 text-violet-700',
  sci: 'bg-pink-50 border-pink-200 text-pink-700',
  project: 'bg-emerald-50 border-emerald-200 text-emerald-700'
};

export const CourseBadge: React.FC<CourseBadgeProps> = ({ type, children }) => {
  return (
    <div className="flex items-start">
      <div className={`flex items-center px-2 py-0.5 text-xs font-medium leading-5 text-center rounded-full border border-solid max-sm:px-1.5 max-sm:py-0.5 max-sm:text-xs max-sm:leading-4 ${badgeStyles[type]}`}>
        <div>{children}</div>
      </div>
    </div>
  );
};
