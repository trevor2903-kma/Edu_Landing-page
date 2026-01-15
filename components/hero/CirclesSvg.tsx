"use client";
import * as React from "react";

interface CirclesSvgProps {
  className?: string;
}

export const CirclesSvg: React.FC<CirclesSvgProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 1052 1052"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="526" cy="526" r="525" stroke="#E0F0FE" strokeWidth="2" />
      <circle cx="526" cy="526" r="437.72" stroke="#E0F0FE" strokeWidth="2" />
      <circle cx="526" cy="526" r="307.957" stroke="#E0F0FE" strokeWidth="2" />
      <circle cx="526" cy="526" r="195" stroke="#E0F0FE" strokeWidth="2" />
    </svg>
  );
};
