import * as React from "react";
import { LogoCarousel } from "./LogoCarousel";
import { PaginationDots } from "./PaginationDots";

const universityLogos = [
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/284783487b41f698d525f0291062a206896a161c?placeholderIfAbsent=true",
    alt: "University partner 1"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/1f4eb25e9222ab9c105f3c14054a224ae4bd18d6?placeholderIfAbsent=true",
    alt: "University partner 2",
    hasOverlay: true
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/ccc2b87e9cac9143dc40ddc1f70325862d7e3fde?placeholderIfAbsent=true",
    alt: "University partner 3"
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/fbd6c27fffe97edb92bc28b001d6e3f4f589255b?placeholderIfAbsent=true",
    alt: "University partner 4",
    hasOverlay: true
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/04430bc033ad82e1605a26ed87b45877d6c48dee?placeholderIfAbsent=true",
    alt: "University partner 5",
    hasOverlay: true
  }
];

export function UniversityPartners() {
  return (
    <section className="gap-6 w-full max-md:max-w-full">
      <header className="flex flex-col items-start w-full text-3xl font-semibold tracking-tight leading-none text-center text-gray-900 max-md:max-w-full">
        <h2 className="text-3xl leading-10 text-gray-900 max-md:max-w-full">
          Đối tác trường đại học
        </h2>
      </header>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 content-start items-start w-full max-md:max-w-full">
          <LogoCarousel logos={universityLogos} />
        </div>
        <PaginationDots activeIndex={0} totalDots={2} />
      </div>
    </section>
  );
}