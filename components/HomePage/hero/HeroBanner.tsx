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
        <div className="relative w-full bg-white h-[320px] sm:h-[420px] md:h-[490px]">
          <CirclesSvg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[240%] w-auto z-0 pointer-events-none" />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/49c026e457e8ff92750cf735d853c1bb3235042a?width=1281"
            alt=""
            className="object-contain absolute left-[calc(50%+15px)] -translate-x-1/2 
                -top-9 w-[390px] h-[360px] 
                sm:-top-12 sm:w-[480px] sm:h-[455px] 
                md:-top-16 md:w-[641px] md:h-[607px]
                lg:-top-20 lg:w-[700px] lg:h-[600px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/23f4b560d60311aa6a6511b5a8edf91195bf5ca4?width=294"
            className="absolute 
                top-10 right-10 w-20 h-20 hidden md:block
                sm:top-[55px] sm:right-20 sm:w-[110px] sm:h-[110px] 
                md:top-[280px] md:right-auto md:left-[calc(50%-90px)] md:ml-[342px] md:w-[140px] md:h-[140px]
                lg:top-[280px] lg:right-auto lg:left-[calc(50%-10px)] lg:ml-[342px] lg:w-[180px] lg:h-[180px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/808603a244b22702038443b8658aa8c2261cd740?width=158"
            className="absolute 
                top-16 right-2 w-[50px] h-[50px]
                sm:top-13 sm:right-[calc(10%)] sm:w-[60px] sm:h-[60px]
                md:top-12 md:right-auto md:left-[calc(50%+50px)] md:ml-[206px] md:w-[79px] md:h-[79px]
                lg:top-8 lg:right-auto lg:left-[calc(50%+50px)] lg:ml-[206px] lg:w-[90px] lg:h-[90px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/c2b102f2fc5147a240b8aa4adbb0adbb2659df93?width=158"
            className="absolute 
                -top-8 left-[calc(50%-70px)] w-[50px] h-[50px]
                sm:-top-12 sm:left-[calc(50%-80px)] sm:w-[60px] sm:h-[60px]
                md:-top-16 md:left-[calc(50%+90px)] md:-ml-[333px] md:w-[79px] md:h-[79px]
                lg:-top-2 lg:left-[calc(50%+30px)] lg:-ml-[333px] lg:w-[90px] lg:h-[90px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/91a1cdd5a360eebff298705c06d8846921daf76a?width=110"
            className="absolute 
                top-[200px] left-3 w-[35px] h-[35px]
                sm:top-[260px] sm:left-10 sm:w-[45px] sm:h-[45px]
                md:top-[370px] md:left-[calc(60%+100px)] md:-ml-[543px] md:w-[55px] md:h-[55px]
                lg:top-[370px] lg:left-[calc(48%)] lg:-ml-[543px] lg:w-[75px] lg:h-[75px]"
          />

          <ProfileImage
            src="https://api.builder.io/api/v1/image/assets/TEMP/331fc95e6869ca9a727dff7c21e1e41e1d44e8bb?width=454"
            className="absolute 
                -top-[35px] left-0 w-[120px] h-[120px]
                sm:top-[30px] sm:left-4 sm:w-[130px] sm:h-[130px]
                md:top-[50px] md:left-[calc(60%+90px)] md:-ml-[569px] md:w-[160px] md:h-[160px]
                lg:top-[calc(25%-40px)] lg:left-[calc(50%-20px)] lg:-ml-[569px] lg:w-[210px] lg:h-[210px]"
          />

          <BlueDot
            className={`absolute z-0 pointer-events-none
        
              w-5 h-5 

              top-2 right-[calc(50%-20px)]

              sm:top-4 sm:right-[calc(50%-20px)]

              md:top-3 md:left-[350px] md:w-8 md:h-8 md:right-auto
              lg:top-2 lg:left-[calc(50%-30px)]`}
          />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
