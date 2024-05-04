"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navHeader, setnavHeader] = useState(false);

  const scrollHeader = () => {
    if (window.innerWidth >= 768) {
      if (window.scrollY >= 20) {
        setnavHeader(true);
      } else {
        setnavHeader(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav
        className={
          navHeader
            ? "top-0 fixed w-full bg-white shadow-md z-50"
            : "w-full bg-white fixed z-10"
        }
      >
        <div className="flex justify-between mt-4 mb-4 item-center h-full w-full px-4 2xl:px-16">
          <Link href="/" className="lg:ml-10 sm:ml-0 md:ml-0">
            <span className="text-3xl text-slate-950">MORE/OVER</span>
          </Link>
          <div>
            <ul className=" mt-2 hidden lg:flex sm:hidden md:hidden">
              <Link href="/">
                <li className="uppercase hover:border-b hover:text-slate-950 text-md text-slate-800 font-bold">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="ml-5 uppercase hover:border-b hover:text-slate-950 text-md text-slate-800 text-md peer font-bold">
                  Women
                </li>
              </Link>
              <Link href="/">
                <li className="ml-5 uppercase hover:border-b hover:text-slate-950 text-md text-slate-800 text-md font-bold">
                  Men
                </li>
              </Link>
              <Link href="/">
                <li className="ml-5 uppercase hover:border-b text-md hover:text-slate-950 text-md text-slate-800 font-bold">
                  Kids
                </li>
              </Link>
              <Link href="/">
                <li className="ml-5 uppercase hover:border-b text-md hover:text-slate-950 text-md text-slate-800 font-bold">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
          <ul className="flex mt-1 lg:mr-10 ">
            <Link href="/" className="flex mr-2">
              <li className="mr-1 hidden lg:flex sm:hidden md:hidden">
                <svg
                  class="h-7 w-7 hover:text-slate-950 text-md text-slate-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </li>
            </Link>
            <Link href="/" className="flex">
              <li className="hidden lg:flex sm:hidden md:hidden ">
                <svg
                  class="h-7 w-7 hover:text-slate-950 text-md text-slate-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </li>
            </Link>
            <div
              onClick={handleMenu}
              className="lg:hidden md:flex sm:flex cursor-pointer text-3xl hover:text-slate-950 text-slate-800"
            >
              <ion-icon name={`${menu ? "close" : "menu"}`}></ion-icon>
            </div>
          </ul>
        </div>
        <div
          className={
            menu
              ? "fixed right-0 h-screen w-screen bg-white p-5 ease-in duration-200"
              : "fixed right-[-100%] p-5 h-screen ease-out duration-500"
          }
        >
          <div className="flex-col">
            <ul>
              <Link href="/" onClick={() => setMenu(false)}>
                <li className="mb-4 uppercase text-md hover:text-slate-950 text-md text-slate-800 font-bold">
                  Home
                </li>
              </Link>
              <Link href="/" onClick={() => setMenu(false)}>
                <li className="py-4 uppercase text-md hover:text-slate-950 text-md text-slate-800 font-bold">
                  Women
                </li>
              </Link>
              <Link href="/" onClick={() => setMenu(false)}>
                <li className="py-4 uppercase text-md hover:text-slate-950 text-md text-slate-800 font-bold">
                  Men
                </li>
              </Link>
              <Link href="/" onClick={() => setMenu(false)}>
                <li className="py-4 uppercase text-md hover:text-slate-950 text-md text-slate-800 font-bold ">
                  Kids
                </li>
              </Link>
              <Link href="/" onClick={() => setMenu(false)}>
                <li className="py-4 uppercase text-md hover:text-slate-950 text-md text-slate-800 font-bold">
                  Contact Us
                </li>
              </Link>
              <ul className="flex ">
                <Link href="/" onClick={() => setMenu(false)}>
                  <li className="py-4 ">
                    <svg
                      class="h-7 w-7 text-black-500 hover:text-slate-950 text-md text-slate-800"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </li>
                </Link>
                <Link href="/" onClick={() => setMenu(false)}>
                  <li className="py-4 ml-3">
                    <svg
                      class="h-7 w-7 text-black-500 hover:text-slate-950 text-md text-slate-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </li>
                </Link>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
