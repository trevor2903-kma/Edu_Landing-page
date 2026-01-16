"use client";
import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

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

export function LogoCarousel({
  logos,
  className = "",
  dots,
}: LogoCarouselProps) {
  const [slidesToShow, setSlidesToShow] = React.useState(4);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: dots,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className={`w-full ${className}`}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            {" "}
            {/* Added padding for spacing between slides */}
            <div className="flex relative flex-col gap-5 items-center justify-center my-auto aspect-[2.558] w-full h-full">
              {logo.hasOverlay ? (
                <div>
                  {/* Simplified overlay logic if needed, or just standard img */}
                  <img
                    src={logo.src}
                    alt={logo.alt || `Partner logo ${index + 1}`}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
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
