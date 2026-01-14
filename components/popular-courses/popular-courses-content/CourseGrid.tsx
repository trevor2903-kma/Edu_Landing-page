"use client";
import React from "react";
import { CourseCard } from "./CourseCard";

const courseData = [
  {
    badgeType: "career" as const,
    badgeText: "Lộ trình sự nghiệp",
    title: "Chuyên viên phân tích dữ liệu",
    description:
      "Chuyên viên phân tích dữ liệu và nhà khoa học dữ liệu sử dụng Python và MySQL để truy vấn, phân tích và trực quan hóa dữ liệu - và truyền đạt kết quả. Bao gồm Python 3, MySQL, Pandas, Numpy, Matplotlib, PowerBI và nhiều hơn nữa.",
    courseCount: "07 khoá học",
    hasCertificate: true,
    level: "Mới bắt đầu",
    duration: "73 giờ",
  },
  {
    badgeType: "skill" as const,
    badgeText: "Lộ trình kỹ năng",
    title: "Tạo ứng dụng backend với JavaScript",
    description:
      "Học cách xây dựng API backend web sử dụng Express.js, Node.js, MongoDB và Firebase. Bao gồm HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, APIs, MongoDB, Firebase và nhiều hơn nữa.",
    courseCount: "05 khoá học",
    hasCertificate: true,
    level: "Mới bắt đầu",
    duration: "81 giờ",
  },
  {
    badgeType: "course" as const,
    badgeText: "Khoá học",
    title: "Giới thiệu về Python",
    description:
      "Học các kiến thức cơ bản về Python 3, một trong những ngôn ngữ lập trình mạnh mẽ, linh hoạt và được săn đón nhất hiện nay.",
    level: "Mới bắt đầu",
    duration: "20 giờ",
  },
  {
    badgeType: "sci" as const,
    badgeText: "Lộ trình SCI",
    title: "Trực quan hóa dữ liệu với PowerBI",
    description:
      "Xây dựng các báo cáo tương tác, ấn tượng với bảng điều khiển thông minh (BI) của Microsoft Power BI.",
    level: "Mới bắt đầu",
    duration: "19 giờ",
  },
  {
    badgeType: "project" as const,
    badgeText: "Project",
    title: "Phân tích tính khả thi tăng giá cho Toman Bike Share",
    description:
      "Đánh giá tính khả thi của việc tăng giá dịch vụ xe đạp chia sẻ Toman Bike Share vào năm tới.",
    level: "Mới bắt đầu",
    duration: "02 giờ",
  },
  {
    badgeType: "project" as const,
    badgeText: "Project",
    title: "Phân tích dữ liệu bán hàng của Walmart",
    description:
      "Phân tích dữ liệu bán hàng để xác định các ảnh hưởng đến doanh số bán hàng của các chi nhánh khác nhau",
    level: "Mới bắt đầu",
    duration: "02 giờ",
  },
];

export default function CourseGrid() {
  return (
    <div className="box-border flex flex-col justify-center items-center p-10 max-md:p-5 max-sm:p-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl mx-auto">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            badgeType={course.badgeType}
            badgeText={course.badgeText}
            title={course.title}
            description={course.description}
            courseCount={course.courseCount}
            hasCertificate={course.hasCertificate}
            level={course.level}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
}
