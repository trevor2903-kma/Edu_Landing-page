"use client";

import LoginForm from "@/components/LoginPage/LoginForm/LoginForm";
import FeatureSlider from "@/components/LoginPage/FeatureSlider";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-white text-[#101828]">
      <LoginForm />
      <FeatureSlider />
    </div>
  );
}
