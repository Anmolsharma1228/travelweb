import React, { useEffect, useState } from "react";
import Cartpage from "../../components/cards/Cartpage";
import data from "../../assets/Images/no data.jpg";
import Loader from "../../components/Loader/Loader";

const FavoriteHotel = () => {
  const [FavoriteHotel, setfavoritehotel] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const store = localStorage.getItem("favorites");
    if (store) {
      setfavoritehotel(JSON.parse(store));
    }
    const timer = setTimeout(() => {
      setloading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div
          data-testid="adddata"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FavoriteHotel.length > 0 ? (
            FavoriteHotel.map((cart) => (
              <Cartpage
                key={cart.id}
                image={cart.main_photo}
                name={cart.name}
                address={cart.address}
                rating={cart.rating}
                stars={cart.stars}
              />
            ))
          ) : (
            <div className="h-screen flex flex-col items-center justify-center">
              <p className="font-semibold text-center text-gray-600 dark:text-gray-300">
                No favorite hotels found.
              </p>
              <img src={data} className="w-[200px] mt-4" alt="No data" />
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default FavoriteHotel;
