import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  solutions: [
    { name: 'Khóa học', href: '#' },
    { name: 'Mentors', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Sự kiện', href: '#' },
  ],
  support: [
    { name: 'Hỗ trợ', href: '#' },
    { name: 'Chính sách', href: '#' },
    { name: 'Điều khoản', href: '#' },
  ],
  company: [
    { name: 'Về chúng tôi', href: '#' },
    { name: 'Tuyển dụng', href: '#' },
    { name: 'Liên hệ', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: Youtube,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
             <Link href="/" className="text-2xl font-bold text-white">
                ON SCHOOL
              </Link>
            <p className="text-sm leading-6 text-gray-300">
              Nền tảng học tập trực tuyến hàng đầu Việt Nam. Nâng tầm tri thức, kiến tạo tương lai.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Khám phá</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Hỗ trợ</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Liên hệ</h3>
                   <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      123 Đường ABC, Quận XYZ, TP.HCM
                    </li>
                    <li className="flex items-center gap-2">
                       <Phone className="h-4 w-4" />
                       +84 123 456 789
                    </li>
                    <li className="flex items-center gap-2">
                       <Mail className="h-4 w-4" />
                       contact@onschool.vn
                    </li>
                   </ul>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 OnSchool, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
