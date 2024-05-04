"use client";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const truncateDescription = (description) => {
    // Split the description into sentences based on '.', '!', or '?' followed by space
    const sentences = description.split(/\.|\!|\?\s/);

    // Return the first two sentences joined back with '.' and space
    return sentences[0] + (sentences.length > 1 ? "." : "");
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Product Image */}
      <div className="relative h-40 sm:h-56 md:h-64 lg:h-72 w-full">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {product.title}
        </h3>
        {/* <p className="text-sm sm:text-base text-gray-600 mb-4">
          {truncateDescription(product.description)}
        </p> */}
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-semibold text-lg">
            ${product.price}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm sm:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
