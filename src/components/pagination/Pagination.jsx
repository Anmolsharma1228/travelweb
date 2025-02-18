import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { fetchHotelsData, hotelinfo } from "../../Action/Action";
import { useSelector, useDispatch } from "react-redux";
import Carousels from "../carousel/Carousel";
import { Link } from "react-router-dom";
import Card from "../cards/Card";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import countrycode from "../Data/countrycode.json";
import Loader from "../Loader/Loader";

const Pagination = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [Hoteldata, setHoteldata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0); // React-Paginate uses 0-based index
  const rowsPerPage = 9;

  useEffect(() => {
    dispatch(fetchHotelsData());
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    if (data && data.data) {
      setHoteldata(data.data);
    }
  }, [data]);

  
  const offset = currentPage * rowsPerPage;
  const currentItems = Hoteldata.slice(offset, offset + rowsPerPage);
  const pageCount = Math.ceil(Hoteldata.length / rowsPerPage);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCode = (code) => {
    dispatch(hotelinfo(code));
  };

  return (
    <React.Fragment>
      <Carousels />
      {loading ? (
        <Loader />
      ) : (
        <div>
          
          <div className="mx-auto text-center my-10 border-2 border-red-600 rounded-sm px-2 w-[200px]">
            Select code: 
            <select
              name="select code"
              className=""
              onChange={(e) => handleCode(e.target.value)}
            >
              {countrycode.map((data) => (
                <option key={data.code} value={data.code}>
                  {data.code}
                </option>
              ))}
            </select>
          </div>

          {/* Hotel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((hotel) => (
              <Link
                className="hover:scale-105 duration-500"
                to={`/hotelsdetails/${hotel.id}`}
                key={hotel.id}
              >
                <Card
                  image={hotel.main_photo}
                  name={hotel.name}
                  address={hotel.address}
                  country={hotel.country}
                />
              </Link>
            ))}
          </div>

          <div className="text-center my-10">
            <ReactPaginate
              previousLabel={<ArrowBack />}
              nextLabel={<ArrowForward />}
              breakLabel="..."
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName="pagination flex justify-center space-x-2"
              pageClassName="rounded-lg border border-teal-500 px-4 py-2 text-gray-700 cursor-pointer"
              activeClassName="bg-teal-500 text-white"
              previousClassName="rounded-lg border border-teal-500 px-2 py-2 text-gray-700 cursor-pointer"
              nextClassName="rounded-lg border border-teal-500 px-2 py-2 text-gray-700 cursor-pointer"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Pagination;
