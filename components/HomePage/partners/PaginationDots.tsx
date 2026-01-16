"use client";
import * as React from "react";

interface PaginationDotsProps {
  activeIndex?: number;
  totalDots?: number;
}

export function PaginationDots({ activeIndex = 0, totalDots = 2 }: PaginationDotsProps) {
  return (
    <div className="flex gap-2 items-center self-center mt-6">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 self-stretch my-auto w-3 h-3 rounded-full ${
            index === activeIndex
              ? "bg-sky-600 fill-sky-600"
              : "bg-gray-300 fill-gray-300"
          }`}
        />
      ))}
    </div>
  );
}