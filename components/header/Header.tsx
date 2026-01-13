"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import SearchInput from "./SearchInput";
import AuthButtons from "./AuthButtons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-sky-50 sticky top-0 z-50 shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Left Section: Logo & Nav */}
        <div className="flex items-center gap-x-10">
          <Logo className="gap-x-8" />

          <NavigationMenu />
        </div>

        {/* Right Section: Search & Auth */}
        <div className="flex items-center gap-x-6">
          <div className="items-center hidden lg:flex relative">
            <SearchInput />
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl">
            <div className="flex items-center justify-between">

              <Logo />
  
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Skill Path
                  </Link>
                </div>
                <div className="py-6">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
                      placeholder="Tìm kiếm khoá học"
                    />
                  </div>
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    href="#"
                    className="mt-2 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-600 hover:bg-gray-50"
                  >
                    Đăng ký
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
