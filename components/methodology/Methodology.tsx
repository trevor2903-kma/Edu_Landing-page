import * as React from "react";
import { MethodologyHeader } from "./MethodologyHeader";
import { FeatureBlock } from "./FeatureBlock";
import MethodDescription from "./MethodDescription";

export function Methodology() {
  const features = [
    {
      title: "Full Demonstration",
      description:
        "Tất cả kỹ năng đều được giới thiệu chi tiết và sinh động trước khi chuyển sang thực hành. Việc giới thiệu này được thực hiện theo nhiều cách: giảng viên thực hành trực tiếp, hướng dẫn bằng video, và học viên thảo luận nhóm để cùng nhau hoàn thành bài tập.",
      alignment: "right" as const,
      position: "top" as const,
      className:
        "absolute left-0 top-[23px] max-lg:static max-lg:w-full max-lg:mb-6 max-sm:order-1",
      iconType: "demonstration" as const,
    },
    {
      title: "Micro Coaching",
      description:
        "Để giúp người học hiểu sâu, đa chiều và tự chọn cách làm phù hợp, các bài học đều được chia nhỏ và có hướng dẫn chi tiết cho từng phần nhỏ của nhiệm vụ. Các hình thức hướng dẫn bao gồm: Mentor 1-1, AI TechLead, Pie Step-By-Step Coach.",
      alignment: "left" as const,
      position: "top" as const,
      className:
        "absolute right-0 top-[23px] max-lg:static max-lg:w-full max-lg:mb-6 max-sm:order-3",
      iconType: "coaching" as const,
    },
    {
      title: "Evaluation 360",
      description:
        "Đánh giá 360 là hình thức đánh giá toàn diện và liên tục, được thực hiện thông qua các hoạt động sau: Test 360, Mini Task, Weekly Project, Milestone Exam, Milestone Project, Review Hackathon.",
      alignment: "right" as const,
      position: "bottom" as const,
      className:
        "absolute bottom-[23px] left-[11px] max-lg:static max-lg:w-full max-lg:mb-6 max-sm:order-2",
      iconType: "evaluation" as const,
    },
    {
      title: "Guided Self-Practice",
      description:
        "Học tập chủ động, linh hoạt kết hợp hướng dẫn và hỗ trợ bởi mentor, AI TechLead để đảm bảo tiến độ và chất lượng cho học viên.",
      alignment: "left" as const,
      position: "bottom" as const,
      className:
        "absolute right-0 bottom-[60px] max-lg:static max-lg:w-full max-lg:mb-0 max-sm:order-4",
      iconType: "practice" as const,
    },
  ];

  return (
    <>
      <section className="box-border flex flex-col gap-16 items-center px-0 py-24 w-full bg-blue-50 max-md:gap-12 max-md:px-0 max-md:py-16 max-sm:gap-8 max-sm:px-0 max-sm:py-16">
        <div className="box-border flex flex-col gap-8 items-center px-8 py-0 mx-auto w-full max-w-screen-xl max-md:gap-6 max-md:px-6 max-md:py-0 max-md:max-w-[991px] max-sm:gap-5 max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm">
          <MethodologyHeader />
        </div>

        <div className="box-border flex justify-center items-center px-8 py-0 w-full max-w-[1440px] max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0">
          <div
            className="box-border relative w-full h-[670px] max-w-[1259px] 
            max-lg:flex max-lg:flex-col max-lg:h-auto max-lg:min-h-0 
            max-sm:flex max-sm:relative max-sm:flex-col max-sm:h-auto"
          >
            {features.map((feature, index) => (
              <FeatureBlock
                key={index}
                title={feature.title}
                description={feature.description}
                alignment={feature.alignment}
                position={feature.position}
                className={feature.className}
                iconType={feature.iconType}
              />
            ))}

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e1bd2858565f48d078f8f30ee567ba855a582ddb?width=1380"
              alt="Group 1041"
              className="object-contain absolute top-0 left-2/4 -translate-x-2/4 h-[670px] w-[690px] 
              max-lg:hidden"
            />
          </div>
        </div>
      </section>

      <MethodDescription />
    </>
  );
}

export default Methodology;
