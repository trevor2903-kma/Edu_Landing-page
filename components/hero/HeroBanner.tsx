"use client";
import * as React from "react";
import { CirclesSvg } from "./CirclesSvg";
import { BlueDot } from "./BlueDot";
import { ProfileImage } from "./ProfileImage";

export const HeroBanner: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <section className="relative mx-auto my-0 w-full max-w-[1440px]">
        <div className="relative w-full bg-white h-[490px] max-md:h-[420px] max-sm:h-[320px]">
          <CirclesSvg />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/49c026e457e8ff92750cf735d853c1bb3235042a?width=1281"
            alt=""
            className="object-contain absolute -top-16 h-[607px] left-[400px] w-[641px] max-md:-top-12 max-md:left-2/4 max-md:-translate-x-2/4 max-md:h-[455px] max-md:w-[480px] max-sm:-top-9 max-sm:h-[341px] max-sm:w-[360px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/23f4b560d60311aa6a6511b5a8edf91195bf5ca4?width=294"
            className="h-[147px] left-[1062px] top-[73px] w-[147px] max-md:right-20 max-md:left-auto max-md:h-[110px] max-md:top-[55px] max-md:w-[110px] max-sm:top-10 max-sm:right-10 max-sm:w-20 max-sm:h-20"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/808603a244b22702038443b8658aa8c2261cd740?width=158"
            className="top-3.5 h-[79px] left-[926px] w-[79px] max-md:top-2.5 max-md:left-auto max-md:h-[60px] max-md:right-[200px] max-md:w-[60px] max-sm:top-2 max-sm:h-[50px] max-sm:right-[140px] max-sm:w-[50px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/c2b102f2fc5147a240b8aa4adbb0adbb2659df93?width=158"
            className="top-3.5 h-[79px] left-[387px] w-[79px] max-md:top-2.5 max-md:left-20 max-md:h-[60px] max-md:w-[60px] max-sm:top-2 max-sm:h-[50px] max-sm:left-[50px] max-sm:w-[50px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/91a1cdd5a360eebff298705c06d8846921daf76a?width=110"
            className="h-[55px] left-[177px] top-[337px] w-[55px] max-md:left-10 max-md:h-[45px] max-md:top-[260px] max-md:w-[45px] max-sm:left-5 max-sm:h-[35px] max-sm:top-[210px] max-sm:w-[35px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/331fc95e6869ca9a727dff7c21e1e41e1d44e8bb?width=454"
            className="h-[227px] left-[151px] top-[83px] w-[227px] max-md:left-10 max-md:h-[170px] max-md:top-[60px] max-md:w-[170px] max-sm:left-5 max-sm:h-[120px] max-sm:top-[45px] max-sm:w-[120px]"
          />

          <BlueDot />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
