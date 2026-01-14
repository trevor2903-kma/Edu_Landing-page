"use client";
import React from 'react';
import { CheckItem } from '../project-based/CheckItem';
import InputDesign from './InputDesign';

export const GuideSelfPractice: React.FC = () => {
  const checkItems = [
    "Nâng cao hiệu quả học tập thông qua phương pháp học tập chủ động và cá nhân hóa.",
    "Tiết kiệm thời gian và chi phí với sự hỗ trợ của AI và Mentor.",
    "Tăng sự tương tác và gắn kết với Mentor 1:1."
  ];

  return (
    <section className="box-border flex gap-24 items-center px-8 py-0 mx-auto my-0 max-w-screen-xl min-h-[476px] max-md:gap-16 max-md:px-6 max-md:py-0 max-md:max-w-[991px] max-md:min-h-[auto] max-sm:gap-12 max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm">
      <aside className="flex relative shrink-0 justify-center items-center w-[529px] max-md:w-full max-md:max-w-[529px] max-sm:w-full max-sm:max-w-full">
        <InputDesign />
      </aside>
      
      
      <div className="flex gap-24 items-center w-full max-md:flex-col max-md:gap-12 max-sm:gap-8">
        <div className="flex flex-col flex-1 gap-8 items-start max-w-[590px] max-md:w-full max-md:max-w-full max-sm:gap-6">
          <header className="flex flex-col gap-5 items-start w-full">
            <h1 className="text-3xl font-semibold leading-10 text-gray-900 max-md:text-2xl max-md:leading-9 max-sm:text-2xl max-sm:leading-8">
              Guided Self-Practice - Học tập chủ động với AI và Mentor 1:1
            </h1>
          </header>

          <ul className="flex flex-col gap-5 items-start pl-4 w-11/12 max-sm:gap-4 max-sm:pl-2">
            {checkItems.map((text, index) => (
              <CheckItem key={index} text={text} />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default GuideSelfPractice;
