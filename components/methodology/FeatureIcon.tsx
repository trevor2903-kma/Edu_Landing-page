"use client";
import * as React from "react";

export interface FeatureIconProps {
  type: "demonstration" | "coaching" | "practice" | "evaluation";
}

const iconSvgs = {
  demonstration: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon" style="position: relative; width: 40px; height: 40px; flex-shrink: 0"> <path d="M16.237 18.2653V10.4458L10 5V34.9285H16.237V23.4784H25.7788L27.8733 18.2653H16.237Z" fill="#29ABE2"></path> <path d="M29.6886 5L27.6406 10.4458H16.237L10 5H29.6886Z" fill="#036092"></path> </svg>`,
  coaching: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon" style="position: relative; width: 40px; height: 40px; flex-shrink: 0"> <path d="M4 4.05042V36.4756H10.6565V14.2873L17.3634 28.861L20.4899 20.6916L13.1275 4H4.05043L4 4.05042ZM28.1046 4.05042L20.4899 20.7421L23.6165 28.9114L30.2729 14.3881V36.4756H36.9294V4.05042H28.155H28.1046Z" fill="#036092"></path> <path d="M23.567 28.9112H17.314L20.4909 20.7418L23.567 28.9112Z" fill="#29ABE2"></path> </svg>`,
  practice: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon" style="position: relative; width: 40px; height: 40px; flex-shrink: 0"> <path d="M28.3628 23.712C28.1195 25.6589 27.3407 27.2163 26.0266 28.3358C24.7125 29.4552 22.9603 30.0393 20.7701 30.0393C18.5799 30.0393 17.071 29.5526 15.7082 28.5791C14.3454 27.6057 13.3233 26.2916 12.6419 24.7341C11.9605 23.1766 11.6198 21.5218 11.6198 19.7696C11.6198 18.0174 11.9605 16.5086 12.6419 14.9511C13.3233 13.3936 14.3454 12.1282 15.6596 11.1547C17.0224 10.1813 18.6772 9.69458 20.7214 9.69458C22.7656 9.69458 23.5444 9.93793 24.4691 10.4733C25.4426 11.0087 26.1726 11.5928 26.6593 12.2742C27.1461 12.9556 27.5841 13.783 27.9248 14.8051H34.3008C34.1061 13.783 33.8627 12.8582 33.522 12.0308C33.1813 11.2034 32.7433 10.3273 32.1592 9.40256C31.5752 8.4778 30.7478 7.6017 29.7743 6.77429C28.7522 5.94687 27.5354 5.26548 26.0266 4.77876C24.5178 4.24338 22.7656 4 20.7214 4C18.6772 4 15.7569 4.43804 13.81 5.3628C11.8632 6.28756 10.2083 7.45568 8.89421 9.01317C7.58008 10.522 6.65532 12.2255 5.97392 14.1237C5.34119 16.0219 5.00049 17.9687 5.00049 19.9156C5.00049 21.8625 5.34119 23.8094 5.97392 25.7075C6.60665 27.6057 7.58008 29.2606 8.84554 30.8181C10.1597 32.3269 11.7658 33.5436 13.7127 34.4197C15.6596 35.2958 17.8985 35.7339 20.4781 35.7339C23.0576 35.7339 25.6372 35.1985 27.7301 34.079C29.8717 32.9596 31.5265 31.3534 32.792 29.1632C34.0087 26.973 34.6415 24.296 34.6415 21.0351V18.6502L28.3142 23.712H28.3628Z" fill="#036092"></path> <path d="M34.6901 18.6505L28.3628 23.7124H20.332V18.6505H34.6901Z" fill="#29ABE2"></path> </svg>`,
  evaluation: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon" style="position: relative; width: 40px; height: 40px; flex-shrink: 0"> <path d="M30.5339 4L28.6424 9.626H9V4H30.5339Z" fill="#036092"></path> <path d="M26.5569 16.6587L24.6654 22.0907H9V16.6587H26.5569Z" fill="#29ABE2"></path> <path d="M30.7279 29.5596L28.8849 35.1855H9V29.5596H30.7279Z" fill="#036092"></path> </svg>`,
};

export const FeatureIcon: React.FC<FeatureIconProps> = ({ type }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: iconSvgs[type],
      }}
    />
  );
};
