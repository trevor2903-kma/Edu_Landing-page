import React from "react";
import { CourseBadge } from "./CoursesBadge";
import { CourseMetadata } from "./CourseMetaData";
import { ArrowIcon } from "@/components/course/ArrowIcon";

interface CourseCardProps {
  badgeType: "career" | "skill" | "course" | "sci" | "project";
  badgeText: string;
  title: string;
  description: string;
  courseCount?: string;
  hasCertificate?: boolean;
  level: string;
  duration: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  badgeType,
  badgeText,
  title,
  description,
  courseCount,
  hasCertificate,
  level,
  duration,
}) => {
  return (
    <article className="box-border min-h-[437.2px] flex flex-col items-start p-4 h-full w-full bg-white rounded-2xl border border-gray-200 border-solid shadow-md cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-4 items-start self-stretch w-full flex-grow">
        <div className="flex flex-wrap gap-2 content-start items-start self-stretch">
          <div className="flex flex-col gap-2 items-start flex-[1_0_0]">
            <div className="flex gap-2 items-center">
              <CourseBadge type={badgeType}>{badgeText}</CourseBadge>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start self-stretch flex-grow">
          <div className="flex gap-4 items-start self-stretch">
            <h2 className="self-stretch text-2xl font-semibold leading-8 text-gray-900 whitespace-normal flex-[1_0_0] max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7">
              {title}
            </h2>
            <div className="flex flex-col shrink-0 items-start pt-1">
              <ArrowIcon className="-rotate-45" />
            </div>
          </div>

          <p className="self-stretch text-base leading-6 whitespace-normal text-slate-600 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">
            {description}
          </p>
        </div>

        <div className="mt-auto self-stretch">
          <CourseMetadata
            courseCount={courseCount}
            hasCertificate={hasCertificate}
            level={level}
            duration={duration}
          />
        </div>
      </div>
    </article>
  );
};
