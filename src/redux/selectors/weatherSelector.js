export const getWeatherIsFetch = ({ weatherState }) => weatherState.isFetch;

export const getWeatherProfile = ({ weatherState }) => {
  return weatherState.weather.cwbdata
    ? `${weatherState.weather.cwbdata.resources.resource.data.agrWeatherForecasts.weatherProfile}`
    : "";
};
