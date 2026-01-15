import * as React from "react";
import { BackGroundGrid } from "./BackGroundGrid";

import { CourseBannerContent } from "./CourseBannerContent";
import { EllipsesDecoration } from "./EllipsesDecoration";

export const CourseBanner: React.FC = () => {
  return (
    <section className="box-border flex overflow-hidden relative gap-20 justify-center items-center p-20 w-full bg-sky-600 min-h-[600px] max-md:gap-16 max-md:px-10 max-md:py-16 max-sm:gap-10 max-sm:px-5 max-sm:py-10 max-sm:min-h-[500px]">
      <div className="absolute inset-0 z-0">
        <BackGroundGrid className="hidden md:block max-sm:hidden" />
      </div>
      <div className="relative z-10 w-full flex justify-center">
        <CourseBannerContent />
      </div>
      <EllipsesDecoration />
    </section>
  );
};

export default CourseBanner;
