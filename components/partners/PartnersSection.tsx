import * as React from "react";
import { UniversityPartners } from "./UniversityPartners";
import { TechPartners } from "./TechPartners";
import { BackGroundGrid } from "../course/BackGroundGrid";

export function PartnersSection() {
  return (
    <div className="flex flex-col items-center px-5 md:px-16 w-full max-md:pl-5">
      <section className="flex relative gap-10 justify-center items-start px-0 py-24 w-full bg-white max-w-[1440px] max-md:max-w-full">
        <div className="absolute inset-0 z-0">
          <BackGroundGrid />
        </div>
        <div className="z-10 flex-1 shrink gap-10 px-8 py-0 max-w-screen-xl basis-0 min-w-60 max-md:px-5 max-md:max-w-full relative">
          <div className="gap-12 w-full max-md:max-w-full">
            <div className="gap-16 w-full max-md:max-w-full">
              <UniversityPartners />
              <TechPartners />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnersSection;
