import { HOTELS, BLOG, ADDFAVORITEHOTEL, REMOVEHOTEL, HOTELINFO, SIGNUP, LOGOUT} from "./ActionType";
import axios from "axios";

export const fetchHotelsData = () => {
  return (dispacth) => {
    try {
      axios
        .get(
          "https://api.liteapi.travel/v3.0/data/hotels?countryCode=IT&cityName=Rome",
          {
            headers: {
              "X-API-Key": "sand_cc4fe636-aabf-4439-9c43-33b741fd889e",
            },
          }
        )
        .then((res) => {
          console.log(res);
          dispacth(
            ((data) => {
              return {
                type: HOTELS,
                payload: {
                  httpresponse: data,
                },
              };
            })(res.data)
          );
        });
    } catch (error) {
      console.log("error found", error);
    }
  };
};

// call blog api
export const fetchblogdata = () => {
  return (dispatch) => {
    try {
       axios
        .get(
          "https://newsapi.org/v2/everything?q=apple&from=2025-01-25&to=2025-01-25&sortBy=popularity&apiKey=8b76200418384a7dad1885452e2c44c4").then((res) => {
          console.log(res);
          dispatch(
            ((data) => {
              return {
                type: BLOG,
                payload: {
                  httpresponse: data,
                },
              };
            })(res.data)
          );
        });
    } catch (error) {
      console.log("error fetching", error);
    }
  };
};


//Add to hotel
export const addFavoriteHotel = (hotel) =>({
  type: ADDFAVORITEHOTEL,
  payload: hotel,
})


export const removeHotel = (hotel) =>({
  type: REMOVEHOTEL,
  payload: hotel,
})


export const signup = (userdata) =>({
  type: SIGNUP,
  payload:userdata,
})


export const logout = (credentials) =>({
type: LOGOUT,
payload:credentials,
})


export const hotelinfo = (country) => {
  return (dispatch) => {
    try {
      const response = axios.get(
        `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${country}`,
        {
          headers: {
            'X-API-Key': 'sand_cc4fe636-aabf-4439-9c43-33b741fd889e',
          },
        }
      );

      console.log('API Response:', response.data);
      
      dispatch({
        type: HOTELINFO,
        payload: {
          httpresponse: response.data,
        },
      });
    } catch (error) {
      console.error('Error fetching hotels:', error.message);
    }
  };
};


