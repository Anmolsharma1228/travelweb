import { Parallax, Background } from "react-parallax";
import { img } from "../../assets/Images/Image";

const Banner = () => {
  return (
    <Parallax bgImage={img} bgImageAlt="" strength={-200} className="w-full p-4 mt-10">
      <div className="h-full">
        <div className="flex flex-wrap justify-around">
          <div className="w-[400px]">
            <h2 className="text-lg font-bold text-white pb-2">Co-Founder</h2>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*jSGi1fOt5FU_HMrU4igLEg.png" />
            <p className="font-bold text-gray-200 text-[17px]">Seunggun Lee</p>
          </div>
          <div className="w-[500px] md:text-lg text-base font-semibold text-white pt-5">
            <p className="mx-2">
              Welcome to [King_Hotel], your one-stop destination for
              discovering, comparing, and booking the finest hotels around the
              globe. Whether you're planning a luxury getaway, a family
              vacation, or a business trip, we provide the tools to make your
              travel experience seamless and unforgettable.
            </p>
            <ul className="mx-2">
              <li>
                Comprehensive Listings:We partner with trusted hotel chains and
                independent accommodations to bring you the best options.
              </li>
              <li>
                Best Price Guarantee: Get the best rates with our price-matching
                feature.
              </li>
              <li>
                Secure Payments: Enjoy peace of mind with our secure payment
                gateway.
              </li>
              <li>
                24/7 Customer Support: Our dedicated team is available around
                the clock to assist you with bookings or inquiries.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
