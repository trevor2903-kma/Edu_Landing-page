import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface NavigationMenuProps {
  className?: string;
}

export default function NavigationMenu({ className }: NavigationMenuProps) {
  return (
    <nav className={`flex gap-8 items-center max-md:gap-6 max-sm:hidden ${className}`}>
      <Link
        href="#"
        className="text-base font-semibold leading-6 text-gray-700 hover:text-primary-600 transition-colors duration-150 ease-in-out"
      >
        About Us
      </Link>
      <Link
        href="#"
        className="text-base font-semibold leading-6 text-gray-700 hover:text-primary-600 transition-colors duration-150 ease-in-out flex items-center gap-1"
      >
        Skill Path
        <ChevronDown className="h-4 w-4" />
      </Link>
    </nav>
  );
}
