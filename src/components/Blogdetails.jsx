import { useState, useEffect } from "react";
import { fetchblogdata } from "../Action/Action";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Blogdetails = () => {
  const data = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [Blogdata, setBlogdata] = useState([]);

  useEffect(() => {
    console.log(data.articles);
    dispatch(fetchblogdata());
  }, []);

  useEffect(() => {
    if (data && data.articles) {
      setBlogdata(data.articles);
    }
  }, [data]);

  const params = useParams();
  const blogdetails = Blogdata.filter((blog) => blog.source.name === params.id);

  return (
    <div>
      {blogdetails.map((blog) => {
        return (
          <>
            <div key={blog.id} className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 pt-[100px]">
              <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
                <a
                  href="#"
                  className="text-xl sm:text-4xl font-semibold inline-block mb-2"
                >
                  {blog.title}
                </a>

                <div className="relative">
                  <div>
                    <img
                      className="w-full"
                      src={blog.urlToImage}
                      alt="Sunset in the mountains"
                    />
                  </div>
                </div>
                <p className="text-gray-700 py-5 text-base leading-8">
                  {blog.content}
                </p>
                <Link to={blog.url} className="text-blue-600 hover:text-blue-900 font-semibold">Read more...</Link>
                <hr />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Blogdetails;
