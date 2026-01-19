"use client";
import * as React from "react";
import { BackgroundShapes } from "./BackgroundShapes";
import { SparkleIcon } from "./SparkleIcon";
import { TriangleDecorations } from "../project-based/DecorationIcons";

export function InputDesign() {
  return (
    <main className=" relative mx-auto my-0 w-full h-[622px] max-w-[1200px] max-md:p-5 max-md:h-auto max-md:max-w-[991px] max-md:min-h-[500px] max-sm:p-4 max-sm:max-w-screen-sm max-sm:h-auto max-sm:min-h-[400px]">
      <BackgroundShapes />
      <TriangleDecorations
        top="top-60"
        right=""
        left="left-2"
        bottom=""
        width="w-2.5"
        height="h-2.5"
        gap="gap-1"
        className="sm:top-[calc(40%+10px)] sm:-left-[10px] max-sm:h-1 max-sm:w-1 max-sm:gap-[4px] max-sm:left-[15px] max-sm:top-[45px] max-sm:z-10 max-sm:color-[#C9A9CB]"
        color="#0072BC"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b1715b19acc5c8ecf188603a0cb3a5862f659ccf?width=1084"
        alt="Correct checkmark illustration"
        className="object-contain absolute left-12 rounded-lg h-[455px] top-[138px] w-[542px] max-md:h-[364px] max-md:left-[30px] max-md:top-[110px] max-md:w-[434px] max-sm:top-20 max-sm:h-auto max-sm:left-[15px] max-sm:max-w-[350px] max-sm:rounded z-10"
      />
      <SparkleIcon />
    </main>
  );
}

export default InputDesign;
