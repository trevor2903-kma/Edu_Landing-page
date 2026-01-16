import * as React from "react";
import { LogoCarousel } from "./LogoCarousel";

const techLogos = [
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/f4100003eeec4d82bc756d98cd0b551483ef4285?placeholderIfAbsent=true",
    alt: "Tech company partner 1",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/76a3b9c4f824ee449b58e92acc53c528d22e8699?placeholderIfAbsent=true",
    alt: "Tech company partner 2",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/ee37e1244b3d938ab1d99736b6c8eeff818d8e89?placeholderIfAbsent=true",
    alt: "Tech company partner 3",
    hasOverlay: true,
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/2471a861fc3b4a69d61e957ac5df3742432cab3f?placeholderIfAbsent=true",
    alt: "Tech company partner 4",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/4a61efbc4d4e90c6722b7a32834e1ce21420001e?placeholderIfAbsent=true",
    alt: "Tech company partner 5",
  },
];

export function TechPartners() {
  return (
    <section className="gap-6 mt-16 w-full max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-col sm:items-start max-sm:items-center items-center w-full text-3xl font-semibold tracking-tight leading-none text-center text-gray-900 max-md:max-w-full">
        <h2 className="text-3xl leading-10 text-gray-900 max-md:max-w-full">
          Đối tác công ty công nghệ
        </h2>
      </header>
      <div className="mt-6 w-full max-md:max-w-full">
        <LogoCarousel logos={techLogos} dots={false}  />
      </div>
    </section>
  );
}
