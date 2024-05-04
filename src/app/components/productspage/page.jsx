import React, { useState, useEffect } from "react";
import ProductCard from "../productcard/page";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsPage = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API fetch delay (replace with actual data fetching)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Handle error state if needed
      }
    };

    fetchProducts();
  }, []); // Run once on component mount

  return (
    <section className="container mx-auto px-4 p-5">
      <div className="p-10 mt-10">
        <h1 className="text-center font-bold text-4xl">All Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index}>
                <Skeleton height={300} />
              </div>
            ))}
          </SkeletonTheme>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
