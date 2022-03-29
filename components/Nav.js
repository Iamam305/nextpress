import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <header className="text-gray-600 body-font shadow">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">NEXTPRESS</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5  font-semibold text-xl hover:text-indigo-500 active:text-indigo-500">HOME</a>
            </Link>
            <Link href="/blog">
              <a className="mr-5  font-semibold text-xl hover:text-indigo-500 active:te">BLOG</a>
            </Link>  <Link href="/about">
              <a className="mr-5  font-semibold text-xl hover:text-indigo-500 active:te">ABOUT</a>
            </Link>
            <Link href="/contact">
              <a className="mr-5  font-semibold text-xl hover:text-indigo-500 active:te">CONTACT US</a>
            </Link>
            
         
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
