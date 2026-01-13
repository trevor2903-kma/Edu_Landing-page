import * as React from "react";

interface LogoItem {
  src: string;
  alt?: string;
  className?: string;
  hasOverlay?: boolean;
}

interface LogoCarouselProps {
  logos: LogoItem[];
  className?: string;
}

export function LogoCarousel({ logos, className = "" }: LogoCarouselProps) {
  return (
    <div className={`flex flex-wrap flex-1 shrink gap-2 justify-center content-center items-center w-full basis-0 min-w-60 max-md:max-w-full ${className}`}>
      {logos.map((logo, index) => (
        <div key={index} className="flex relative flex-col gap-5 items-center self-stretch my-auto aspect-[2.558] w-[220px]">
          {logo.hasOverlay ? (
            <>
              <img
                src={logo.src}
                alt={logo.alt || `Partner logo ${index + 1}`}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative self-stretch my-auto min-h-[86px] min-w-60 w-[275px]" />
            </>
          ) : (
            <img
              src={logo.src}
              alt={logo.alt || `Partner logo ${index + 1}`}
              className={`object-contain shrink-0 gap-5 self-stretch my-auto aspect-[2.56] w-[220px] ${logo.className || ""}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}