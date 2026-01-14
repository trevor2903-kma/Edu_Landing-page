import CoursesHeader from "./popular-courses-header/CouresHeader";
import CourseGrid from "./popular-courses-content/CourseGrid";
import { Button } from "../experts-profile/Button";

export default function PopularCourses() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CoursesHeader />
        <CourseGrid />
        <div className="flex justify-center items-center">
          <Button>Khám phá tất cả các khóa học</Button>
        </div>
      </div>
    </div>
  );
}
