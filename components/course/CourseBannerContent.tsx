import * as React from "react";
import { ExploreCourseButton } from "./ExploreCourseButton";

export const CourseBannerContent: React.FC = () => {
  return (
    <div className="flex relative flex-col shrink-0 gap-8 items-center w-full max-w-screen-xl z-[1] max-md:max-w-[960px] max-sm:gap-6 max-sm:max-w-full">
      <div className="flex flex-col gap-8 items-center w-full max-sm:gap-6">
        <div className="flex relative flex-col gap-5 items-center w-full max-w-screen-md max-sm:gap-4 max-sm:max-w-full">
          <header className="flex relative flex-col items-start w-full max-sm:w-full">
            <h1 className="w-full text-4xl font-semibold tracking-tighter leading-10 text-center text-white max-md:text-3xl max-md:tracking-tighter max-md:leading-10 max-sm:text-4xl max-sm:tracking-tight max-sm:leading-10">
              ONSCHOOL - MỞ KHÓA KỸ NĂNG - NÂNG TẦM SỰ NGHIỆP
            </h1>
          </header>
          <div className="flex relative flex-col items-start w-full max-sm:w-full">
            <p className="w-full text-xl leading-8 text-center text-white max-md:text-lg max-md:leading-7 max-sm:text-xl max-sm:leading-9">
              Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người một
              cách hiệu quả, bằng cách phát triển các kỹ năng theo xu thế ứng
              dụng công nghệ vào thực tiễn và giúp hàng nghìn người có thể
              chuyển ngành để có một sự nghiệp mới tốt hơn.
            </p>
          </div>
        </div>
        <ExploreCourseButton />
      </div>
    </div>
  );
};
