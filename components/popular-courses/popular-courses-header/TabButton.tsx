import React from "react";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`flex gap-2 justify-center items-center px-1 pt-0 pb-3 h-8 cursor-pointer max-sm:text-sm max-sm:leading-5 ${
        isActive ? "border-b-2 border-solid border-b-sky-600" : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`text-sm font-semibold leading-5 max-sm:text-sm max-sm:leading-5 ${
          isActive ? "text-sky-700" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </button>
  );
};
