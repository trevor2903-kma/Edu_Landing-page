import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {/* <Search className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
            stroke="#667085"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full text-base rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 bg-white min-w-[250px]"
        placeholder="Tìm kiếm khoá học"
      />
    </>
  );
}
