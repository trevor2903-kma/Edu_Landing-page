import * as React from "react";

interface MethodologyHeaderProps {}

export function MethodologyHeader({}: MethodologyHeaderProps) {
  return (
    <header className="box-border flex flex-col gap-8 items-center w-full">
      <div className="box-border flex flex-col gap-5 items-start w-full max-w-screen-md max-sm:gap-4">
        <div className="box-border flex flex-col gap-3 items-start w-full">
          <h1 className="box-border w-full text-4xl font-semibold tracking-tighter leading-10 text-center text-sky-900 max-md:text-3xl max-md:tracking-tighter max-md:leading-10 max-sm:text-2xl max-sm:tracking-tight max-sm:leading-8">
            <div className="text-4xl font-semibold text-gray-900 max-md:text-3xl max-sm:text-2xl">
              PHƯƠNG PHÁP SƯ PHẠM <span className="text-sky-900">F.M.G.E</span>
            </div>
          </h1>
        </div>
        <p className="box-border w-full text-xl leading-8 text-center text-slate-600 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
          <span className="text-xl text-slate-600 max-md:text-lg max-sm:text-base">
            Phương pháp sư phạm F.M.G.E được áp dụng xuyên suốt trong quá
            trình đào tạo, từ những nhiệm vụ nhỏ đến việc hoàn thành những
            dự án. Nhờ vậy, học viên có thể nâng cao chất lượng học tập một
            cách hiệu quả và phát triển tư duy học tập chủ động.
          </span>
        </p>
      </div>
    </header>
  );
}
