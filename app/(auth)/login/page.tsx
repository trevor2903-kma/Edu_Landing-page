"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Check,
  ChevronLeft,
  ChevronRight,
  Triangle,
} from "lucide-react";
import Logo from "@/components/header/Logo";

const ProjectBasedVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Blue Background SVG */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[95%] w-[95%] max-h-[320px] max-w-[320px] z-[2]">
      <svg
        viewBox="0 0 310 374"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full opacity-90"
      >
        <path
          d="M268.975 83.0971C262.167 43.3967 258.762 23.5465 244.798 11.7732C230.834 0 210.694 0 170.414 0H100C52.8596 0 29.2893 0 14.6447 14.6447C0 29.2893 0 52.8595 0 100V255.947C0 310.747 0 338.147 17.6824 353.125C35.3647 368.104 62.3917 363.598 116.446 354.585L210.903 338.837C257.599 331.051 280.947 327.159 292.984 310.222C305.021 293.285 301.021 269.955 293.019 223.296L268.975 83.0971Z"
          fill="#0072BC"
        />
      </svg>
    </div>

    {/* Decoration */}
    <div className="absolute right-0 top-10 z-[3] hidden md:block">
      <div className="flex gap-4">
        <Triangle size={20} fill="#E4E7EC" className="rotate-12 opacity-50" />
        <Triangle size={16} fill="#E4E7EC" className="-rotate-12 opacity-50" />
      </div>
    </div>

    {/* Dashboard Image */}
    <div className="relative z-[5] h-[85%] w-[90%] flex items-center justify-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f4871a0b48b7c9515394078156df909348cf6ca0?width=881"
        alt="Dashboard Analytics"
        className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
      />
    </div>
  </div>
);

const SelfPracticeVisual = () => (
  <div className="relative h-full w-full flex items-center justify-center">
    {/* Background Shapes Container */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%] max-h-[380px] max-w-[380px] z-[1] pointer-events-none opacity-80">
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
        <svg
          viewBox="0 0 437 534"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full scale-110"
        >
          {" "}
          <path
            d="M373.184 450.694C366.446 490.488 363.077 510.385 349.103 522.193C335.128 534 314.948 534 274.588 534H100C52.8595 534 29.2893 534 14.6447 519.355C0 504.711 0 481.14 0 434V118.303C0 63.3984 0 35.9462 17.7222 20.9658C35.4443 5.98547 62.5133 10.5566 116.651 19.699L338.353 57.138C384.854 64.9906 408.104 68.9169 420.106 85.8035C432.108 102.69 428.171 125.939 420.298 172.436L373.184 450.694Z"
            fill="#0072BC"
          ></path>{" "}
        </svg>
      </div>
      <div className="absolute top-[20%] -left-[10%] h-[80%] w-[80%] flex items-center justify-center">
        <svg
          viewBox="0 0 330 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {" "}
          <path
            d="M43.8645 82.0408C51.0256 42.8148 54.6062 23.2018 68.5167 11.6009C82.4272 0 102.364 0 142.239 0H230C277.14 0 300.711 0 315.355 14.6447C330 29.2893 330 52.8595 330 100V257.119C330 311.429 330 338.584 312.505 353.552C295.01 368.52 268.182 364.318 214.526 355.914L101.318 338.183C53.6609 330.719 29.8322 326.987 17.6276 309.798C5.42295 292.61 9.75457 268.883 18.4178 221.429L43.8645 82.0408Z"
            fill="#0C9AEB"
          ></path>{" "}
        </svg>
      </div>
    </div>

    {/* Sparkle Icon */}
    <div className="absolute right-0 top-8 z-[20] hidden h-14 w-14 md:block">
      <svg viewBox="0 0 84 84" fill="none" className="h-full w-full">
        <circle cx="42" cy="42" r="42" fill="#0C9AEB" />
      </svg>
    </div>

    {/* Checkmark Image */}
    <div className="relative z-10 h-[85%] w-[90%] flex items-center justify-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b1715b19acc5c8ecf188603a0cb3a5862f659ccf?width=1084"
        alt="Correct checkmark illustration"
        className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
      />
    </div>
  </div>
);

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [greeting, setGreeting] = useState("Chào buổi sáng");
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

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) setGreeting("Chào buổi sáng");
    else if (hours >= 12 && hours < 18) setGreeting("Chào buổi chiều");
    else setGreeting("Chào buổi tối");
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex min-h-screen w-full bg-white text-[#101828]">
      {/* --- Left Column: Login Form --- */}
      <div className="flex w-full flex-col items-center justify-center px-8 lg:w-1/2">
        {/* Main Content Container */}
        <div className="flex w-full max-w-[440px] flex-col">
          {/* Top Header Row (Logo + Back Link) */}
          <div className="mb-10 flex items-center justify-between">
            <Logo />
            {/* Back to Home Link */}
            <Link
              href="/"
              className="text-sm font-semibold text-[#0072BC] hover:underline"
            >
              Về trang chủ
            </Link>
          </div>

          {/* Greeting Header */}
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-[32px] font-semibold leading-tight text-[#101828] md:text-[36px]">
              Đăng nhập
            </h1>
            <p className="text-base text-[#475467]">{greeting}!</p>
          </div>

          {/* Form */}
          <form className="flex w-full flex-col gap-5">
            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#344054]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="ten@email.com"
                className="h-11 w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-[#101828] shadow-sm outline-none placeholder:text-[#667085] focus:border-[#0072BC] focus:ring-1 focus:ring-[#0072BC]"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#344054]"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Điền mật khẩu"
                  className="h-11 w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-[#101828] shadow-sm outline-none placeholder:text-[#667085] focus:border-[#0072BC] focus:ring-1 focus:ring-[#0072BC]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#475467]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-5 items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#D0D5DD] text-[#0072BC] focus:ring-[#0072BC]"
                  />
                </div>
                <label
                  htmlFor="remember-me"
                  className="text-sm font-medium text-[#344054]"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-[#0072BC] hover:underline"
              >
                Quên mật khẩu?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex h-11 w-full items-center justify-center rounded-lg bg-[#0072BC] px-4 text-base font-semibold text-white shadow-sm hover:bg-[#005a96] focus:outline-none focus:ring-2 focus:ring-[#0072BC] focus:ring-offset-2"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>

      {/* --- Right Column: Feature Slider Panel --- */}
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
                  <span className="text-base font-normal opacity-90">
                    {item}
                  </span>
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
    </div>
  );
}
