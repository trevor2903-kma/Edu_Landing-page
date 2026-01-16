"use client";
import * as React from "react";

interface ProfileImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt = "",
  className = ""
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover absolute ${className}`}
    />
  );
};