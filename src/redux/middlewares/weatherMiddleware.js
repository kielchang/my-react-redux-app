import { queryWeather } from "../saga/api/weatherApi";
import { doWeatherUpdate, actionType as weatherActionType } from "../actions/weatherAction";

const weatherMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type.match(weatherActionType.WEATHER_ON_FETCH)) {
      const result = await queryWeather();
      dispatch(doWeatherUpdate(result));
    }
  };

export default weatherMiddleware;
