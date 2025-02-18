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
    <React.Fragment>
   <div className="p-4 mt-[80px] w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden animation-fadeIn flex flex-col h-[450px]">
  <img
    className="w-full h-48 object-cover object-center rounded-t-xl"
    src={image}
    alt="blog"
  />
  <div className="p-4 flex flex-col justify-between flex-grow">
    <div>
      <h1 className="text-xl font-semibold leading-tight text-gray-900 mb-2">
        {title}...
      </h1>
      <p className="text-sm text-gray-600 mb-4">Published At: {publishedAt}</p>
      <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
    <div>
      <Link
        to=""
        className="text-blue-600 font-semibold hover:text-blue-400"
        title="read more"
      >
        Read More »
      </Link>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};

export default Blogcard;
