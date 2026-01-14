"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Phạm Gia Huy",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f4871a0b48b7c9515394078156df909348cf6ca0?width=100", // Placeholder
    content:
      "Ngoài việc được làm một dự án thực tế trau dồi kỹ năng thì đặc biệt nhất là ở đây Huy còn được luyện để chứng chỉ quốc tế về đánh giá năng lực lập trình viên; với việc này đã giúp Huy có vị trí lập trình viên thực tập tại AllXone trong khi Huy đang học ngành CNTT.",
  },
  {
    id: 2,
    name: "Huỳnh Ngọc Khánh Mỹ",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b1715b19acc5c8ecf188603a0cb3a5862f659ccf?width=100", // Placeholder
    content:
      "Mỹ đánh giá cao nhất là được làm những dự án thực tế, đó là lợi thế lớn khi tìm kiếm việc làm. Lúc trình bày dự án Mỹ thể hiện được đủ các kỹ năng chuyên môn, tư duy cơ bản đã được các thầy hướng dẫn khi học. Điều đó đã được Nhà tuyển dụng đánh giá cao, nhờ đó Mỹ nhận việc ngay khi chưa kết thúc khóa học.",
  },
  {
    id: 3,
    name: "Trần Trịnh Phương Anh",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ee2a763fd9c94431ab72b3d33157f442?width=100", // Placeholder
    content:
      "Phương Anh thích máy tính, biết tiếng Anh, muốn học một số kỹ năng làm lập trình vì mình thấy ngành này tiềm năng. Mình chọn Onschool vì lộ trình đào tạo bài bản và đầy đủ. Mình đã có một trải nghiệm chuyển ngành lập trình tích cực và đã tìm thấy một công việc phù hợp với sở thích và năng lực của mình.",
  },
  {
    id: 4,
    name: "Võ Nguyễn Minh Trung",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/42a6702a51d1b1f30c258aa8389de21e2e28d32a?width=100", // Placeholder
    content:
      "Trung thấy OnSchool có lộ trình ngắn gọn, phương pháp học Learning by doing liên tục rất phù hợp với người chuyển ngành như Trung. Học ở đây thấy rất nhanh, áp lực về thách thức hoàn thành dự án, cày deadline nhưng sung sướng. Rất vui vì thành quả đạt được là Trung hoàn thành mục tiêu chuyển ngành của mình.",
  },
];

export default function Testimonials() {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default/internal arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0072BC] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-20">
          Cảm hứng từ hành trình học tập của học viên
        </h2>

        <div className="relative pb-10">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 pt-10 pb-4 h-full">
                <div className="bg-white rounded-2xl p-8 relative min-h-[400px] flex flex-col items-center text-center h-full">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-12 mb-auto">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="mt-8 font-semibold text-gray-900 border-t border-gray-100 pt-4 w-full">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Navigation Arrows Below Slider */}
        <div className="flex justify-end gap-4 px-4 mt-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
