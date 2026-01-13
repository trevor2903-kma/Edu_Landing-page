import Link from "next/link";

export default function HeroContent() {
    return (
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 sm:pb-20 lg:px-8 lg:pt-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold tracking-tight text-primary-600 sm:text-5xl uppercase sm:leading-tight">
            Onschool - Mở khóa kỹ năng - <br className="hidden sm:block" />
            Nâng tầm sự nghiệp
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Phát triển các kỹ năng theo xu thế ứng dụng công nghệ vào thực tiễn
            - Mang lại kỹ năng làm việc thiết yếu cho hàng triệu người một cách
            hiệu quả
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Bắt đầu ngay!
            </Link>
          </div>
        </div>
      </div>
    );
}