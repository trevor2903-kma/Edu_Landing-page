"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectBasedVisual from "./ProjectBasedVisual";
import SelfPracticeVisual from "./SelfPracticeVisual";

export default function FeatureSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title:
        "Project based learning - Thực hành kỹ năng thông qua dự án thực tiễn",
      items: [
        "Học thông qua làm dự án,",
        "Được coach theo từng task nhỏ.",
        "Dùng ngay kỹ năng, công cụ vào công việc hàng ngày.",
      ],
      visual: <ProjectBasedVisual />,
    },
    {
      title: "Guided Self-Practice - Học tập chủ động với AI và Mentor 1:1",
      items: [
        "Nâng cao hiệu quả học tập thông qua phương pháp học tập chủ động và cá nhân hóa.",
        "Tiết kiệm thời gian và chi phí với sự hỗ trợ của AI và Mentor.",
        "Tăng sự tương tác và gắn kết với Mentor 1:1.",
      ],
      visual: <SelfPracticeVisual />,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hidden w-1/2 flex-col items-center justify-center bg-[#065286] text-white lg:flex relative overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex h-[620px] w-full max-w-[600px] flex-col items-center px-6 text-center transition-all duration-300">
        {/* Visual Area - Swapped to flex-1 to auto-fill available height */}
        <div className="flex-1 w-full flex items-center justify-center min-h-0">
          {slides[currentSlide].visual}
        </div>

        {/* Feature Info - Fixed at bottom of the visual */}
        <div className="flex shrink-0 flex-col items-start gap-4 text-left w-full mt-6">
          <h2 className="text-xl font-semibold leading-8">
            {slides[currentSlide].title}
          </h2>
          <div className="flex flex-col gap-3">
            {slides[currentSlide].items.map((item, idx) => (
              <div key={idx} className="flex items-top gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/80 p-0.5 text-white">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-base font-normal opacity-90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination / Carousel Controls - Fixed at bottom */}
        <div className="flex shrink-0 items-center gap-8 mt-8 pb-4">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white/10"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-4">
            {slides.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-colors ${
                  idx === currentSlide ? "bg-[#0C9AEB]" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white/10"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
