"use client";
import * as React from "react";

interface BlueDotProps {
  className?: string;
}

export const BlueDot: React.FC<BlueDotProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      // Class Tailwind
      className={`
        ${className}
      `}
    >
      <circle 
        cx="16" 
        cy="16" 
        r="16" 
        transform="matrix(1 0 0 -1 0 32)" 
        fill="#E0F0FE" 
      />
    </svg>
  );
};