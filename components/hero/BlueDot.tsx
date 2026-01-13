"use client";
import * as React from "react";

interface BlueDotProps {
  className?: string;
}

export const BlueDot: React.FC<BlueDotProps> = ({ className = "" }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="blue-circle" style="position: absolute; left: 635px; top: -7px; width: 32px; height: 32px">
          <circle cx="16" cy="16" r="16" transform="matrix(1 0 0 -1 0 32)" fill="#E0F0FE"></circle>
        </svg>`,
      }}
    />
  );
};