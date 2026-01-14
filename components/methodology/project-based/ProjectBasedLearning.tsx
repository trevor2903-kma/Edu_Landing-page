"use client";
import React from "react";
import { CheckItem } from "./CheckItem";
import { TriangleDecorations } from "./DecorationIcons";

export const ProjectBasedLearning: React.FC = () => {
  const checkItems = [
    "Học thông qua làm dự án.",
    "Được coach theo từng task nhỏ.",
    "Dùng ngay kỹ năng, công cụ vào công việc hàng ngày.",
  ];

  return (
    <section className="box-border flex gap-24 items-center px-8 py-0 mx-auto my-0 max-w-screen-xl min-h-[476px] max-md:gap-16 max-md:px-6 max-md:py-0 max-md:max-w-[991px] max-md:min-h-[auto] max-sm:gap-12 max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm">
      <div className="flex gap-24 items-center w-full max-md:flex-col max-md:gap-12 max-sm:gap-8">
        <div className="flex flex-col flex-1 gap-8 items-start max-w-[591px] max-md:w-full max-md:max-w-full max-sm:gap-6">
          <header className="flex flex-col gap-5 items-start w-full">
            <h1 className="text-3xl font-semibold leading-10 text-gray-900 max-md:text-2xl max-md:leading-9 max-sm:text-2xl max-sm:leading-8">
              Project based learning - Thực hành kỹ năng thông qua dự án thực
              tiễn
            </h1>
          </header>

          <ul className="flex flex-col gap-5 items-start pl-4 w-full max-sm:gap-4 max-sm:pl-2">
            {checkItems.map((text, index) => (
              <CheckItem key={index} text={text} />
            ))}
          </ul>
        </div>

        <aside className="flex relative shrink-0 justify-center items-center w-[529px] max-md:w-full max-md:max-w-[529px] max-sm:w-full max-sm:max-w-full">

          <div className="absolute left-1 top-[-74px] w-[310px] h-[374px] z-[2]">
            <svg
              width="310"
              height="374"
              viewBox="0 0 310 374"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M268.975 83.0971C262.167 43.3967 258.762 23.5465 244.798 11.7732C230.834 0 210.694 0 170.414 0H100C52.8596 0 29.2893 0 14.6447 14.6447C0 29.2893 0 52.8595 0 100V255.947C0 310.747 0 338.147 17.6824 353.125C35.3647 368.104 62.3917 363.598 116.446 354.585L210.903 338.837C257.599 331.051 280.947 327.159 292.984 310.222C305.021 293.285 301.021 269.955 293.019 223.296L268.975 83.0971Z"
                fill="#0072BC"
              />
            </svg>
          </div>

          <div className="relative shrink-0 h-[331px] w-[494px] z-[3] max-md:mx-auto max-md:my-0 max-md:w-full max-md:h-auto max-md:aspect-[494.463/331.021] max-md:max-w-[494px] max-sm:box-border max-sm:px-2.5 max-sm:py-0 max-sm:w-full max-sm:max-w-full">
            <TriangleDecorations top="top-0" right="right-7" left="" bottom="" width="w-5" height="h-5" gap="gap-4" />

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f4871a0b48b7c9515394078156df909348cf6ca0?width=881"
              alt="Dashboard Analytics"
              className="absolute object-cover left-0 rounded-lg h-[292px] top-[39px] w-[440px] z-[5] max-md:left-2/4 max-md:w-full max-md:h-auto max-md:-translate-x-2/4 max-md:aspect-[440/292] max-md:max-w-[440px] max-sm:max-w-full max-sm:top-[30px] max-sm:w-[calc(100%_-_20px)]"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ProjectBasedLearning;
