import React from "react";
import { DeleteForeverSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Cartpage = ({ name, image, address, stars, rating }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleDelete = (name) => {
    const updatedFavorites = favorites.filter((hotel) => hotel.name !== name);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    alert(`${name} has been removed from favorites.`);
  };

  return (
    <div className="pt-[100px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <img src={image} alt="" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{address}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Rating: {rating} | Stars: {stars}
              </p>
              <button className="float-end" onClick={() => handleDelete(name)}>
                <DeleteForeverSharp className="text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
