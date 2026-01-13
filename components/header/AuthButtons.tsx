import Link from "next/link";

interface AuthButtonsProps {
  className?: string;
}

export default function AuthButtons({ className }: AuthButtonsProps) {
  return (
    <>
      <Link
        href="#"
        className="text-base font-semibold leading-6 text-gray-700 hover:text-gray-900 whitespace-nowrap transition-colors duration-150 ease-in-out"
      >
        Đăng nhập
      </Link>
      <Link
        href="#"
        className="rounded-md bg-primary-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-primary-500 whitespace-nowrap transition-colors duration-150 ease-in-out"
      >
        Đăng ký
      </Link>
    </>
  );
}
