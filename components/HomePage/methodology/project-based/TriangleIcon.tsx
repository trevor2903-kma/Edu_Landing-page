import React from 'react';

interface TriangleIconProps {
  className?: string;
  color?: string;
}

export const TriangleIcon: React.FC<TriangleIconProps> = ({ className = "", color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_triangle)">
        <path
          d="M15.7377 11.1271C16.0463 11.0228 16.1198 10.6199 15.8679 10.4134L5.53123 1.94242C5.28682 1.74209 4.9171 1.87783 4.8604 2.18869L2.53528 14.9358C2.47857 15.2467 2.77655 15.5042 3.07595 15.4031L15.7377 11.1271Z"
          stroke={color}
          strokeWidth="1.55509"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_triangle">
          <rect width="16.5877" height="16.5877" fill="white" transform="matrix(0.179443 -0.983768 -0.983768 -0.179443 16.3184 19.295)" />
        </clipPath>
      </defs>
    </svg>
  );
};
