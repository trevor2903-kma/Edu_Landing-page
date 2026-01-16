"use client";
import * as React from "react";
import ProjectBasedLearning from "./project-based/ProjectBasedLearning";
import GuideSelfPractice from "./self-practice/GuideSelfPractice";

function MethodDescription() {
  return (
    <section className="flex overflow-hidden flex-col gap-24 items-center px-0 py-24 max-sm:py-16 max-sm:gap-20 bg-white">
      <div className="gap-8 px-8 py-0 w-full max-w-screen-xl text-4xl font-semibold tracking-tighter leading-none text-center text-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col gap-8 items-center w-full max-md:max-w-full">
          <div className="gap-5 max-w-screen-md w-[768px] max-md:max-w-full">
            <div className="flex flex-col gap-3 items-center w-full max-md:max-w-full">
              <h1 className="text-4xl leading-snug text-gray-900 max-md:max-w-80">
                Learning by doing - Trải nghiệm học tập
              </h1>
            </div>
          </div>
        </div>
      </div>

      <ProjectBasedLearning />
      <GuideSelfPractice />
    </section>
  );
}

export default MethodDescription;
