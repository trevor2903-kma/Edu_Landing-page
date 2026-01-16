"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/components/header/Logo";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [greeting, setGreeting] = useState("Chào buổi sáng");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) setGreeting("Chào buổi sáng");
    else if (hours >= 12 && hours < 18) setGreeting("Chào buổi chiều");
    else setGreeting("Chào buổi tối");
  }, []);

  return (
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
  );
}
