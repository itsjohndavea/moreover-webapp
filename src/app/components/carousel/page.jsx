"use client";
import React, { useState } from "react";
import Image from "next/image";
const Carousel = () => {
  const banner = [];
  const [page, setPage] = useState(1);
  const goToNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % banner.length);
  };
  return (
    <>
      <div className=" w-screen flex-col items-center text-center">
        <Image
          className="w-full h-full object-cover object-center"
          src={banner[page]}
          sizes="100vw"
          width={1000}
          height={1000}
          alt={`banner${page}`}
        ></Image>
        <button
          className="absolute h-17 rounded-md left-0 w-20 bg-black opacity-50 text-white"
          onClick={() =>
            setPage(
              (prevPage) => (prevPage - 1 + banner.length) % banner.length,
            )
          }
        >
          Previous
        </button>
        <button
          className="absolute rounded-sm h-17 right-0 bottom-0 w-12 bg-black opacity-50 text-white"
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;
