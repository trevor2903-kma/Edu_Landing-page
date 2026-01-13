import * as React from "react";

interface BackGroundGridProps {
  className?: string;
}

export const BackGroundGrid: React.FC<BackGroundGridProps> = ({ className="" }) => {
  return (
    <div className={`absolute top-0 ${className} opacity-40 pointer-events-none h-full min-h-[1440px] w-[1920px] max-md:min-h-[1080px] max-md:w-[1440px] max-sm:-translate-x-2/4 max-sm:min-h-[720px] max-sm:w-[960px]`}>
      <div className="flex absolute top-0 left-60 justify-center items-center h-[1440px] w-[1440px] max-md:h-[1080px] max-md:left-[180px] max-md:w-[1080px] max-sm:h-[720px] max-sm:left-[120px] max-sm:w-[720px]">
        <div className="absolute top-0 left-0 shrink-0 h-[1440px] w-[1440px] max-md:h-[1080px] max-md:w-[1080px] max-sm:h-[720px] max-sm:w-[720px]" />
      </div>
      <div className="inline-flex absolute top-0 left-0 justify-center items-center h-[1440px] w-[1920px] max-md:h-[1080px] max-md:w-[1440px] max-sm:h-[720px] max-sm:w-[960px]">
        <div className="flex overflow-hidden absolute top-0 left-0 flex-col items-start h-[1440px] w-[1920px] max-md:h-[1080px] max-md:w-[1440px] max-sm:h-[720px] max-sm:w-[960px]">
          <div className="flex overflow-hidden relative gap-20 items-start h-[1440px] max-md:gap-16 max-md:h-[1080px] max-sm:gap-10 max-sm:h-[720px]">
            {Array.from({ length: 25 }, (_, index) => (
              <div
                key={`vertical-line-${index}`}
                className="relative w-px bg-gray-300 h-[1440px] max-md:h-[1080px] max-sm:h-[720px]"
              />
            ))}
          </div>
          <div className="flex overflow-hidden absolute top-0 left-0 flex-col gap-20 items-start w-[1920px] max-md:gap-16 max-md:w-[1440px] max-sm:gap-10 max-sm:w-[960px]">
            {Array.from({ length: 19 }, (_, index) => (
              <div
                key={`horizontal-line-${index}`}
                className="relative h-px bg-gray-300 w-[1920px] max-md:w-[1440px] max-sm:w-[960px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
