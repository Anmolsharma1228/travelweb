import React, { useState, useEffect } from "react";
import { fetchblogdata } from "../../Action/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Blogcard from "../cards/Blogcard";
import Carousels from "../carousel/Carousel";
import Loader from "../Loader/Loader";
import { ArrowBack, ArrowForward } from "@mui/icons-material";


const Blogpagination = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.blog);

  const [Blogdata, setBlogdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 9;

  useEffect(() => {
    dispatch(fetchblogdata());
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    if (data && data.articles?.length > 0) {
      setBlogdata(data.articles);
    }
  }, [data]);

  
  const offset = currentPage * rowsPerPage;
  const currentItems = Blogdata.slice(offset, offset + rowsPerPage);
  const pageCount = Math.ceil(Blogdata.length / rowsPerPage);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Carousels />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {currentItems.map((blog) => (
              <Link
                to={`/blogdetails/${blog.source.name}`}
                key={blog.id}
                className="bg-white rounded-lg hover:scale-105 duration-500"
              >
                <Blogcard
                  image={blog.urlToImage}
                  title={blog.title.slice(0, 25)}
                  publishedAt={blog.publishedAt}
                  description={blog.description}
                />
              </Link>
            ))}
          </div>

          <div className="text-center my-10">
            <ReactPaginate
              previousLabel={<ArrowBack />}
              nextLabel={<ArrowForward />}
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

export default Blogpagination;
