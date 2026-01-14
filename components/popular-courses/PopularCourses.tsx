import Link from "next/link";
import CoursesHeader from "./popular-courses-header/CouresHeader";

export default function PopularCourses() {
  const courses = [
    {
      id: 1,
      title: "Khóa học Front-end Basic",
      description: "Học HTML, CSS, JavaScript cơ bản để xây dựng website hoàn chỉnh.",
      price: "1.200.000đ",
      image: "bg-blue-200", // placeholder
    },
    {
      id: 2,
      title: "ReactJS Advanced",
      description: `Nắm vững React, Hooks, Redux và Next.js.`,
      price: "2.500.000đ",
      image: "bg-indigo-200",
    },
    {
      id: 3,
      title: "Fullstack Node.js",
      description: "Trở thành Fullstack Developer với Node.js, Express và MongoDB.",
      price: "3.000.000đ",
      image: "bg-green-200",
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CoursesHeader />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.id} className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className={`w-full h-48 ${course.image} flex items-center justify-center text-gray-500`}>
                Course Image
              </div>
              <div className="relative w-full p-6">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href="#">
                      <span className="absolute inset-0" />
                      {course.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{course.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-between">
                   <div className="text-lg font-bold text-primary-600">{course.price}</div>
                   <button className="rounded-md bg-primary-50 px-3 py-1.5 text-sm font-semibold text-primary-600 hover:bg-primary-100">
                     Xem chi tiết
                   </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
