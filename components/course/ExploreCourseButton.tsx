import * as React from "react";
import { ArrowIcon } from "./ArrowIcon";

export const ExploreCourseButton: React.FC = () => {
  return (
    <button className="flex relative gap-1.5 justify-center items-center px-5 py-3 bg-white rounded-lg border border-gray-300 border-solid shadow-sm cursor-pointer max-sm:box-border max-sm:px-4 max-sm:py-2.5 max-sm:w-full">
      <div className="flex relative justify-center items-center px-0.5 py-0">
        <span className="text-base font-semibold leading-6 whitespace-nowrap text-slate-700 max-sm:text-base max-sm:leading-6">
          Khám phá ngay khoá học
        </span>
      </div>
      <ArrowIcon />
    </button>
  );
};