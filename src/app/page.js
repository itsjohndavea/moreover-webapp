"use client";

import { useState, useEffect, Suspense } from "react";
import Sale from "./components/sale/page";
import Navbar from "./components/navbar/page";
import ProductsPage from "./components/productspage/page";
import Footer from "./components/footer/page";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Home() {
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => setFetchedProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Sale />
      <Navbar />
      <ProductsPage products={fetchedProducts} />
      <Footer />
    </>
  );
}
