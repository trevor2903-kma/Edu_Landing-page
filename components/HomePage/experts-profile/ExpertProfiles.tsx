"use client";
import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Button } from "../../shared-components/Button";

const testimonialData = [
  {
    id: 1,
    backgroundImage:
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/bfc43c2d0881b8ba51cea742a1cb8b0ca83c8b21?placeholderIfAbsent=true",
    name: "Vũ Đăng Minh",
    experience: "Kinh nghiệm 07+ năm",
    position: "CTO-NSGEDU",
    starImages: [
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/23554dfea34b9e68d4a9e13221cd281ddf72b9d9?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/ef392b991b4d9029156a7416e43c857dcc3172b9?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/42a6702a51d1b1f30c258aa8389de21e2e28d32a?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/0a9ba8358ba818b29a95c303ba3b2370f152db5c?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/1791f67d881ac5678e307b05303c5636818215f9?placeholderIfAbsent=true",
    ],
  },
  {
    id: 2,
    backgroundImage:
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/be6acbc8525a064cad0ac0ed0c7491971e875c57?placeholderIfAbsent=true",
    name: "Lê Mạnh Tuấn",
    experience: "Kinh nghiệm 17+ năm",
    position: "CEO-Xanh House",
    starImages: [
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/c59edca1d5efcaad9281237a9695009533b3d26c?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/ff8669b627123f5417617da592c3f8a118dd9b8c?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/50382740bb8e77edd5c059337c25a81a34e0fc20?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/86374dc27fe3cb39704bc344ca4a3a8092e64c8f?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/72d423e6aace0861d3c60ad2f5f66295dc64db14?placeholderIfAbsent=true",
    ],
  },
  {
    id: 3,
    backgroundImage:
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/51b0791391cb1b9370a12ca62af7370f68098575?placeholderIfAbsent=true",
    name: "Lưu Quốc Tuấn",
    experience: "Kinh nghiệm 17+ năm",
    position: "Chairman-Toprate",
    starImages: [
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/f4738aa519698c9014d1084c6193fb868db630b9?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/2ed653566e3ad5487e6d65aeb8f5e76b8c72edbf?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/85618ede84330610871a5c68d0bb7746813e8657?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/f607789435e737f5304b4cff05037bc068051890?placeholderIfAbsent=true",
      "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/53eeaba041e7d0717e822d78ce07130db3ca61cb?placeholderIfAbsent=true",
    ],
  },
];

function ExpertProfiles() {
  const handleConsultationClick = () => {
    console.log("Consultation button clicked");
  };

  return (
    <section className="flex overflow-hidden flex-col gap-16 justify-center items-center px-0 py-24 max-sm:py-16 bg-gray-50">
      <div className="gap-16 px-8 py-0 w-full max-w-screen-xl max-md:px-5 max-md:max-w-full">
        <header className="flex flex-wrap gap-8 gap-y-8 justify-between content-start items-start w-full font-semibold max-md:max-w-full">
          <div className="flex-1 shrink gap-5 max-w-screen-md text-4xl tracking-tighter leading-10 text-gray-900 basis-0 min-w-[480px] max-md:max-w-full">
            <div className="gap-5 w-full max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <h1 className="text-4xl leading-10 text-gray-900 max-md:max-w-full">
                  Lộ trình học do đội ngũ chuyên gia dày dặn kinh nghiệm thiết
                  kế
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-start text-base text-white">
            <Button onClick={handleConsultationClick}>
              Đăng ký tư vấn ngay!
            </Button>
          </div>
        </header>
        <div className="gap-8 mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 content-start items-start w-full max-md:max-w-full">
            {testimonialData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                backgroundImage={testimonial.backgroundImage}
                name={testimonial.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertProfiles;
