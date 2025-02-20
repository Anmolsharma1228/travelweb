import React from "react";
import { fetchHotelsData, addFavoriteHotel } from "../Action/Action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LocationOn } from "@mui/icons-material";
import Loader from "../components/Loader/Loader";

const HotelDetails = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [Hoteldata, setHoteldata] = useState([]);
  const [loading, setloading] = useState(true);
  const [book, setbook] = useState(""); 


  const handlebook = () =>{
    alert("Booking Successfully!")
  }

  const handleAddfavorite = (hotel) => {
    const userlogin = JSON.parse(localStorage.getItem("user"));

    if (!userlogin) {
      alert("Please login first!");
      return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.some((fav) => fav.id === hotel.id)) {
      favorites.push(hotel);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Hotel added to favorites!");
    } else {
      alert("Hotel already exists in favorites!");
    }
  };

  useEffect(() => {
    dispatch(fetchHotelsData());
    const timer = setTimeout(() => {
      setloading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    if (data && data.data) {
      setHoteldata(data.data);
    }
  }, [data]);

  const params = useParams();
  const hoteldetails = Hoteldata.filter((hotel) => hotel.id == params.id);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {hoteldetails.map((data) => {
            return (
              <div key={data.id} className="py-[100px]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                      <div className="md:h-[460px] h-[250px] rounded-lg mb-4">
                        <img
                          className="w-full md:h-full h-[250px] object-cover"
                          src={data.main_photo}
                          alt="Product Image"
                        />
                      </div>
                      <div className="flex -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                          <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                          onClick={()=> handlebook(book)}
                          >
                            Book This Now
                          </button>
                        </div>
                        <div className="w-1/2 px-2">
                          <button
                            data-testid="Add-hotel"
                            onClick={() => handleAddfavorite(data)}
                            className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                          >
                            Add to Favorite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex-1 px-4">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {data.name}
                      </h2>
                      <p className="text-gray-600  text-sm mb-4">
                        <LocationOn />
                        {data.address}
                      </p>
                      <div className="flex mb-4">
                        <div className="mr-4">
                          <span className="font-bold text-gray-700">
                            Price:
                          </span>
                          <span className="text-gray-600">
                            $29.99
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-gray-700">
                            Availability:
                          </span>
                          <span className="text-gray-600">
                            Availabile
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="font-bold text-gray-700">
                          Rating: {data.rating}
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="font-bold text-gray-700">
                          Stars: {data.stars}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-gray-700">
                          hotelDescription:
                        </span>
                        <p className="text-gray-600 text-sm mt-2">
                          {data.hotelDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default HotelDetails;
