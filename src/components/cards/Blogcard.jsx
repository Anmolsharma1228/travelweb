import React from "react";
import { Link } from "react-router-dom";

const Blogcard = ({
  author,
  image,
  source,
  url,
  title,
  description,
  publishedAt,
}) => {
  return (
    <div className="p-4 mt-[80px] w-full sm:max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col min-h-[450px]">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src={image}
        alt="blog"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h1>
        <p className="text-sm text-gray-600 mb-2">Published At: {publishedAt}</p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          <Link
            to=""
            className="text-blue-600 font-semibold hover:text-blue-400"
            title="read more"
          >
            Read More... 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
