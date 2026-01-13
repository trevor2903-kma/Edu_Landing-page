import * as React from "react";

export const ArrowIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
      style={{ position: "relative", width: "20px", height: "20px", flexShrink: 0 }}
    >
      <path
        d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16669M15.8332 10L9.99984 15.8334"
        stroke="#344054"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
