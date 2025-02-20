import React, { useEffect, useState } from "react";
import { FavoriteBorder } from "@mui/icons-material";

const Card = ({hotel,image, name, address, location, price, chain, stars, rating, country}) => {
  
  
  return (
    <div className="text-gray-900 w-[350px] mx-auto">
      <div className="flex items-center justify-center">
        <div className="animate-slide duration-200 bg-white rounded-lg overflow-hidden shadow-lg w-[300px]">
          <div className="h-48 w-full">
            <img
              src={image}
              alt="Home in Countryside"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-4">
            <div className="flex items-baseline">
              <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs uppercase font-semibold tracking-wide">
              {country}
              </span>
            </div>
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
              {name}
            </h4>
            <h4 className="mt-2 font-semibold text-sm leading-tight truncate">
              {address}
            </h4> 
            <div className="mt-1 flex justify-between">
              <span>$29.99</span>
              <button>
              </button>
            </div>
            <div className="mt-2 flex items-center">
              <span className="ml-2 text-gray-600 text-[18px] space-x-4">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
