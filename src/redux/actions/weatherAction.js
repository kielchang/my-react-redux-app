export const actionType = {
  WEATHER_ON_FETCH: "WEATHER_ON_FETCH",
  WEATHER_ON_UPDATE: "WEATHER_ON_UPDATE",
  WEATHER_ON_ERROR: "WEATHER_ON_ERROR",
};

export const doWeatherFetch = () => ({
  type: actionType.WEATHER_ON_FETCH,
});

export const doWeatherUpdate = (payload) => ({
  type: actionType.WEATHER_ON_UPDATE,
  payload,
});

export const doWeatherError = (payload) => ({
  type: actionType.WEATHER_ON_ERROR,
  payload,
});
