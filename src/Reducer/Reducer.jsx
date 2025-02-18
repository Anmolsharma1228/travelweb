import { HOTELS, BLOG, ADDFAVORITEHOTEL, REMOVEHOTEL, HOTELINFO, LOGOUT, SIGNUP } from "../Action/ActionType";

const initState = {
  data: {},
  blog: {},
  addFavoriteHotel: {},
  removeHotel: {},
  hotelinfo: {},
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case HOTELS:
      return { ...state, data: action.payload?.httpresponse || {} };

    case BLOG:
      return { ...state, blog: action.payload?.httpresponse || {} };

    case ADDFAVORITEHOTEL:
      return { ...state, addFavoriteHotel: action.payload?.httpresponse || {} };

    case REMOVEHOTEL:
      return { ...state, removeHotel: action.payload?.httpresponse || {} };

    case HOTELINFO:
      return { ...state, hotelinfo: action.payload?.httpresponse || {} };

    case SIGNUP:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
