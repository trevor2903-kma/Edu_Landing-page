import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex overflow-hidden gap-1.5 justify-center items-center px-5 py-3 bg-primary-500 hover:bg-primary-400 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10 transition-colors duration-150 ease-in-out ${className}`}
    >
      <div className="flex justify-center items-center self-stretch px-0.5 py-0 my-auto">
        <span className="self-stretch my-auto text-base leading-6 text-white">
          {children}
        </span>
      </div>
    </button>
  );
}
