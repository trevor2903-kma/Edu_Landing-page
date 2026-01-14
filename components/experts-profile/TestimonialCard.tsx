import * as React from "react";

interface TestimonialCardProps {
  backgroundImage: string;
  name: string;
  experience: string;
  position: string;
  starImages: string[];
}

export function TestimonialCard({
  backgroundImage,
  name,
  experience,
  position,
  starImages,
}: TestimonialCardProps) {
  return (
    <article className="flex overflow-hidden relative flex-col flex-1 shrink pt-44 aspect-[0.8] basis-0 min-w-80 max-md:pt-24">
      <img
        src={backgroundImage}
        alt={`${name} testimonial background`}
        className="object-cover absolute inset-0 size-full"
      />
    </article>
  );
}
