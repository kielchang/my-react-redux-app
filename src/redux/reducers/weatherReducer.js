import { actionType } from "../actions/weatherAction";

const initialState = {
  weather: [],
  isFetch: false,
  error: null,
};

const applyOnFetch = (state, actions) => ({
  ...state,
  isFetch: true,
});

const applyUpdate = (state, { payload }) => ({
  ...state,
  isFetch: false,
  weather: payload,
});

const applyError = (state, { payload }) => ({
  ...state,
  isFetch: false,
  error: payload,
});

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.WEATHER_ON_FETCH:
      return applyOnFetch(state, action);
    case actionType.WEATHER_ON_UPDATE:
      return applyUpdate(state, action);
    case actionType.WEATHER_ON_ERROR:
      return applyError(state, action);
    default:
      return state;
  }
};

export default weatherReducer;
