import React from 'react';
import { TabNavigation } from './TabNavigation';

export const CoursesHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <div className="box-border flex flex-col gap-8 items-start px-8 py-0 w-full max-w-screen-xl max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="flex flex-col gap-8 items-center self-stretch">
          <header className="flex flex-col gap-5 items-center w-full max-w-screen-md">
            <div className="flex flex-col gap-3 items-start self-stretch">
              <h1 className="self-stretch text-4xl font-semibold tracking-tighter leading-10 text-center text-gray-900 max-md:text-3xl max-md:tracking-tight max-md:leading-9 max-sm:text-2xl max-sm:tracking-tight max-sm:leading-8">
                Mở rộng cơ hội nghề nghiệp với các khóa học phổ biến
              </h1>
            </div>
          </header>
        </div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default CoursesHeader;
