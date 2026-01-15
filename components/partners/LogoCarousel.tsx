"use client";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface LogoItem {
  src: string;
  alt?: string;
  className?: string;
  hasOverlay?: boolean;
}

interface LogoCarouselProps {
  logos: LogoItem[];
  className?: string;
  dots: boolean;
}

export function LogoCarousel({ logos, className = "", dots }: LogoCarouselProps) {
  const settings = {
    dots: dots,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`w-full ${className}`}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            {" "}
            {/* Added padding for spacing between slides */}
            <div className="flex relative flex-col gap-5 items-center justify-center my-auto aspect-[2.558] w-full h-[100px]">
              {logo.hasOverlay ? (
                <>
                  {/* Simplified overlay logic if needed, or just standard img */}
                  <img
                    src={logo.src}
                    alt={logo.alt || `Partner logo ${index + 1}`}
                    className="object-contain max-h-full max-w-full"
                  />
                </>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt || `Partner logo ${index + 1}`}
                  className={`object-contain max-h-full max-w-full ${
                    logo.className || ""
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
