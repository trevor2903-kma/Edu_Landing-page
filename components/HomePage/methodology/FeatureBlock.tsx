import * as React from "react";
import { FeatureIcon, FeatureIconProps } from "./FeatureIcon";

interface FeatureBlockProps {
  title: string;
  description: string;
  alignment: "left" | "right";
  position: "top" | "bottom";
  className?: string;
}

export function FeatureBlock({
  title,
  description,
  alignment,
  position,
  className = "",
  iconType,
}: FeatureBlockProps & { iconType?: FeatureIconProps["type"] }) {
  const textAlignment = alignment === "right" ? "text-right" : "text-left";
  // On mobile/tablet (<1024px), we want left alignment for the text next to the icon
  const responsiveTextAlignment = "max-lg:text-left";

  return (
    <article
      className={`box-border flex flex-col gap-5 items-start min-w-60 w-[272px] 
      max-lg:flex-row max-lg:w-full max-lg:gap-4 max-lg:items-start
      max-md:gap-4 max-md:w-full max-md:min-w-[200px] 
      max-sm:relative max-sm:inset-auto max-sm:mb-6 max-sm:w-full max-sm:max-w-full 
      ${className}`}
    >
      {iconType && (
        <div className="hidden max-lg:block flex-shrink-0 mt-1">
          <FeatureIcon type={iconType} />
        </div>
      )}

      <div className="box-border flex flex-col gap-2 items-start w-full">
        <h3
          className={`box-border w-full text-xl font-semibold leading-8 text-gray-900 
          ${textAlignment} ${responsiveTextAlignment}
          max-md:text-lg max-md:leading-7 max-sm:text-lg max-sm:leading-7`}
        >
          <span className="text-xl font-semibold text-gray-900 max-md:text-lg max-sm:text-lg">
            {title}
          </span>
        </h3>
        <p
          className={`box-border w-full text-base leading-6 text-slate-600 
          ${textAlignment} ${responsiveTextAlignment}
          max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5`}
        >
          <span className="text-base text-slate-600 max-md:text-base max-sm:text-sm">
            {description}
          </span>
        </p>
      </div>
    </article>
  );
}
