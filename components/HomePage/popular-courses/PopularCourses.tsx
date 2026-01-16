import CoursesHeader from "./popular-courses-header/CourseHeader";
import CourseGrid from "./popular-courses-content/CourseGrid";
import { Button } from "../../shared-components/Button";

export default function PopularCourses() {
  return (
    <div className="bg-gray-50 py-24 max-sm:py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CoursesHeader />
        <CourseGrid />
        <div className="flex max-sm:pt-4 justify-center items-center">
          <Button>Khám phá tất cả các khóa học</Button>
        </div>
      </div>
    </div>
  );
}
