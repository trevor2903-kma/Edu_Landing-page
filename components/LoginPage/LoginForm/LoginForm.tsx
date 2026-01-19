"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/header/Logo";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const MOCK_USER = {
  email: "admin@gmail.com",
  password: "123456",
};

export default function LoginForm() {
  const [greeting, setGreeting] = useState("Chào buổi sáng");

  // Form State

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) setGreeting("Chào buổi sáng");
    else if (hours >= 12 && hours < 18) setGreeting("Chào buổi chiều");
    else setGreeting("Chào buổi tối");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  // Validation State
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  // Validation Logic
  const emailEmpty = email.trim() === "";
  const emailFormatInvalid = !email.endsWith("@gmail.com");

  let emailErrorMessage = null;
  if (touchedEmail) {
    if (emailEmpty) {
      emailErrorMessage = "Vui lòng điền email";
    } else if (emailFormatInvalid) {
      emailErrorMessage = "Email không đúng định dạng";
    } else if (loginError) {
      emailErrorMessage = loginError;
    }
  }

  const passwordEmpty = password.trim() === "";
  let passwordErrorMessage = null;
  if (touchedPassword) {
    if (passwordEmpty) {
      passwordErrorMessage = "Vui lòng điền mật khẩu";
    } else if (loginError) {
      passwordErrorMessage = loginError;
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouchedEmail(true);
    setTouchedPassword(true);
    setLoginError(null);

    // Check if valid (no empty, correct format)
    const isEmailValid = !emailEmpty && !emailFormatInvalid;
    const isPasswordValid = !passwordEmpty;

    if (isEmailValid && isPasswordValid) {
      // Mock Login Check
      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        console.log("Login Success:", email);
        alert("Đăng nhập thành công!");
      } else {
        setLoginError("Email hoặc mật khẩu không chính xác");
      }
    }
  };

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
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
          {/* Email Input */}
          <EmailInput
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setLoginError(null);
            }}
            onBlur={() => setTouchedEmail(true)}
            errorMessage={emailErrorMessage}
          />

          {/* Password Input */}
          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginError(null);
            }}
            onBlur={() => setTouchedPassword(true)}
            errorMessage={passwordErrorMessage}
          />

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
