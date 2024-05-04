import React from "react";

const Loading = () => {
  return (
    <div className="bg-gray-200 rounded-md p-4 animate-pulse">
      <div className="h-40 bg-gray-300 mb-4 rounded-md"></div>
      <div className="h-6 w-2/3 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-1/2 bg-gray-300 rounded-md mt-2"></div>
    </div>
  );
};

export default Loading;
