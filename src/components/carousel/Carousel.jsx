import React from "react";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { fetchHotelsData } from "../../Action/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Carousels = () => {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [Hoteldata, setHoteldata] = useState([]);

  useEffect(() => {
    dispatch(fetchHotelsData());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.data) {
      setHoteldata(data.data);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <div className="hotel relative">
        <Carousel
          className="pt-[90px] md:pt-[100px] mx-auto xl:w-[1200px] lg:w-[900px] md:w-[700px] w-[410px]"
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {Hoteldata.slice(10, 19).map((data) => {
            return (
              <Link to="" className="relative" key={data.id}>
                <img
                  src={data.main_photo}
                  className="w-full h-[200px] lg:h-[450px] object-cover rounded-md"
                />
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Carousels;
