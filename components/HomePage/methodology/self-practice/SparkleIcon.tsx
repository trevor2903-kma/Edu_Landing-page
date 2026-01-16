import * as React from "react";
import { SparkleSvg } from "../../../shared-components/SparkleSvg";

export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute h-[84px] left-[476px] top-[39px] w-[84px] max-md:h-[67px] max-md:left-[380px] max-md:top-[30px] max-md:w-[67px] max-sm:top-5 max-sm:left-auto max-sm:w-12 max-sm:h-12 max-sm:right-[30px] md:top-[30px] md:left-[490px] ${className}`}
    >
      <div>
        <svg
          width="84"
          height="84"
          viewBox="0 0 84 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 w-full h-full"
        >
          <circle cx="42" cy="42" r="42" fill="#0C9AEB" />
        </svg>
      </div>
      <div className="absolute lg:left-[15px] lg:top-[18px] lg:w-[51px] lg:h-[51px] max-sm:left-[6px] max-sm:top-[8px] md:w-14 md:h-14 md:left-[15px] md:top-[15px]">
        <SparkleSvg className="w-full h-full max-sm:w-9 max-sm:h-9" />
      </div>
    </div>
  );
}
