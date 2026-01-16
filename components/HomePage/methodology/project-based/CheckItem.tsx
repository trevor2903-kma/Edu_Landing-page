import React from 'react';
import { CheckCircleIcon } from './CheckCircleIcon';

interface CheckItemProps {
  text: string;
}

export const CheckItem: React.FC<CheckItemProps> = ({ text }) => {
  return (
    <li className="flex gap-3 items-start w-full max-sm:gap-2">
      <div className="flex shrink-0 justify-center items-center w-7 h-7 rounded-full max-sm:w-6 max-sm:h-6">
        <CheckCircleIcon className="w-7 h-7 flex-shrink-0 max-sm:w-6 max-sm:h-6" />
      </div>
      <p className="flex-1 text-lg leading-7 text-slate-600 max-md:text-base max-md:leading-7 max-sm:text-base max-sm:leading-6">
        {text}
      </p>
    </li>
  );
};
