"use client";
import * as React from "react";

interface CirclesSvgProps {
  className?: string;
}

export const CirclesSvg: React.FC<CirclesSvgProps> = ({ className = "" }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<svg width="1052" height="1052" viewBox="0 0 1052 1052" fill="none" xmlns="http://www.w3.org/2000/svg" class="circles-svg" style="position: absolute; left: 170px; top: -250px; width: 1052px; height: 1052px">
          <circle cx="526" cy="526" r="525" stroke="#E0F0FE" stroke-width="2"></circle>
          <circle cx="526" cy="526" r="437.72" stroke="#E0F0FE" stroke-width="2"></circle>
          <circle cx="526" cy="526" r="307.957" stroke="#E0F0FE" stroke-width="2"></circle>
          <circle cx="526" cy="526" r="195" stroke="#E0F0FE" stroke-width="2"></circle>
        </svg>`,
      }}
    />
  );
};
