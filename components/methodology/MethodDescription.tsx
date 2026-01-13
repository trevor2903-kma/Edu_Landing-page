"use client";
import * as React from "react";
// import MethodFeature from "./MethodFeature";

function MethodDescription() {
  // const firstFeatureItems = [
  //   {
  //     iconSrc: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/343bc0a1f2381ec5334f764d629962cf0eed0075?placeholderIfAbsent=true",
  //     text: "Học thông qua làm dự án,"
  //   },
  //   {
  //     iconSrc: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/80040828ae27e2542fe98cdda2859b2022f56927?placeholderIfAbsent=true",
  //     text: "Được coach theo từng task nhỏ."
  //   },
  //   {
  //     iconSrc: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/986ccf6ed4263e5607491fd72b4b3201bc8f5598?placeholderIfAbsent=true",
  //     text: "Dùng ngay kỹ  năng, công cụ vào công việc hàng ngày."
  //   }
  // ];

  // const secondFeatureItems = [
  //   {
  //     iconSrc: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/cda26b0cbe7028274b51847a20f43f6daa5f0f29?placeholderIfAbsent=true",
  //     text: "Nâng cao hiệu quả học tập thông qua phương pháp học tập chủ động và cá nhân hóa."
  //   },
  //   {
  //     iconSrc: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/04c36e6c6697580936a434b752ccb44d4fc83926?placeholderIfAbsent=true",
  //     text: "Tiết kiệm thời gian và chi phí với sự hỗ trợ của AI và Mentor."
  //   },
  //   {
  //     iconSrc: "https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/d91ca2997be511d2dcf51cb19d755bcb01c8322b?placeholderIfAbsent=true",
  //     text: "Tăng sự tương tác và gắn kết với Mentor 1:1."
  //   }
  // ];

  return (
    <section className="flex overflow-hidden flex-col gap-24 items-center px-0 py-24 bg-white">
      <div className="gap-8 px-8 py-0 w-full max-w-screen-xl text-4xl font-semibold tracking-tighter leading-none text-center text-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col gap-8 items-center w-full max-md:max-w-full">
          <div className="gap-5 max-w-screen-md w-[768px] max-md:max-w-full">
            <div className="flex flex-col gap-3 items-center w-full max-md:max-w-full">
              <h1 className="text-4xl leading-10 text-gray-900 max-md:max-w-80">
                Learning by doing - Trải nghiệm học tập
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-8 mt-8 max-w-full w-[1280px] max-md:mt-10">
        <div className="w-full max-md:max-w-full">
          {/* <div className="flex flex-wrap gap-24 items-center px-8 py-0 w-full max-w-screen-xl min-h-[476px] max-md:px-5 max-md:max-w-full">
            <MethodFeature
              imageSrc="https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/af1d2b368f2e64239d06fa6b93b726d81af68330?placeholderIfAbsent=true"
              imageAlt="Project based learning illustration"
              heading="Project based learning - Thực hành kỹ năng thông qua dự án thực tiễn"
              checklistItems={firstFeatureItems}
              imagePosition="right"
            />
          </div>

          <MethodFeature
            imageSrc="https://api.builder.io/api/v1/image/assets/ee2a763fd9c94431ab72b3d33157f442/1020d3c828c721edebbd6f5ba79de16669c61413?placeholderIfAbsent=true"
            imageAlt="Guided self-practice illustration"
            heading="Guided Self-Practice - Học tập chủ động với AI và Mentor 1:1"
            checklistItems={secondFeatureItems}
            imagePosition="left"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default MethodDescription;
