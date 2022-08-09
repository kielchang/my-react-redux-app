export const queryWeather = () =>
  fetch(
    `https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-A0010-001?Authorization=${process.env.REACT_APP_WEATHER_API_KEY}&downloadType=WEB&format=JSON`
  ).then((res) => res.json());
