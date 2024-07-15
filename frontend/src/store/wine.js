import { csrfFetch } from "./csrf";

//actions
const READ_WINES = "wines/readWines";

const readWines = (wines) => ({
  type: READ_WINES,
  payload: wines,
});

// Wine fetch
export const fetchAllWines = () => async (dispatch) => {
  const response = await csrfFetch("/api/wines");
  const data = await response.json();
  //   console.log(data.Wines);
  dispatch(readWines(data.Wines));
};

const initialState = {
  list: [],
};

const wineReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_WINES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default wineReducer;
