import * as React from "react";
import { UniversityPartners } from "./UniversityPartners";
import { TechPartners } from "./TechPartners";

export function PartnersSection() {
  return (
    <div className="flex flex-col items-end px-16 max-md:pl-5">
      <section className="flex overflow-hidden relative gap-10 justify-center items-start px-0 py-24 w-full bg-white max-w-[1440px] max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/81ea07ad36a36c1d73c2d202d8e479d1eb8fcf08?placeholderIfAbsent=true"
          alt="Background decoration"
          className="object-contain absolute bottom-0 left-2/4 z-0 -translate-x-2/4 aspect-[3.19] h-[1440px] min-w-60 translate-y-[0%] w-[1920px] max-md:max-w-full"
        />
        <div className="z-0 flex-1 shrink gap-10 px-8 py-0 max-w-screen-xl basis-0 min-w-60 max-md:px-5 max-md:max-w-full">
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
