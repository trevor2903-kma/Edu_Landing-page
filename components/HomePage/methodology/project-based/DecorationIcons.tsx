import React from "react";
import { TriangleIcon } from "./TriangleIcon";

const TriangleIconRow: React.FC<{
  count: number;
  className?: string;
  height: string;
  width: string;
  gap: string;
  color?: string;
}> = ({ count, className = "", height, width, gap, color }) => (
  <div
    className={`flex ${gap} justify-center items-start max-sm:gap-2.5 max-sm:h-2.5 ${className}`}
  >
    {Array.from({ length: count }, (_, i) => (
      <TriangleIcon key={i} className={`${width} ${height}`} color={color} />
    ))}
  </div>
);

interface TriangleDecorationsProps {
  top: string;
  right: string;
  left: string;
  bottom: string;
  width: string;
  height: string;
  gap: string;
  className: string;
  color?: string;
}

export const TriangleDecorations: React.FC<TriangleDecorationsProps> = ({
  top,
  right,
  left,
  bottom,
  width,
  height,
  gap,
  className,
  color,
}) => {
  return (
    <div
      className={`inline-flex rotate-12 absolute ${top} ${right} ${left} ${bottom} flex-col ${gap} items-start h-[182px] w-[182px] z-[4] max-md:top-2.5 max-md:right-2.5 max-sm:gap-2.5 max-sm:h-[120px] max-sm:right-[5px] max-sm:top-[20px] max-sm:z-10 max-sm:w-[120px] ${className}`}
    >
      <TriangleIconRow count={6} height={height} width={width} gap={gap} color={color} />
      <TriangleIconRow count={6} height={height} width={width} gap={gap} color={color} />
      <TriangleIconRow count={6} height={height} width={width} gap={gap} color={color} />
      <TriangleIconRow count={6} height={height} width={width} gap={gap} color={color} />
      <TriangleIconRow count={6} height={height} width={width} gap={gap} color={color} />
      <TriangleIconRow count={6} height={height} width={width} gap={gap} color={color} />
    </div>
  );
};
