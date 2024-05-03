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
        {/* <Image
          className="w-full h-full object-cover object-center"
          src={banner[page]}
          width={1000}
          height={1000}
          alt={`banner${page}`}
        ></Image> */}
      </div>
    </>
  );
};

export default Carousel;
