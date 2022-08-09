import { takeLatest, call, put } from "redux-saga/effects";
import { actionType, doWeatherUpdate, doWeatherError } from "../actions/weatherAction";
import { queryWeather } from "./api/weatherApi";

function* handleWeatherQuery() {
  try {
    const result = yield call(queryWeather);
    yield put(doWeatherUpdate(result));
  } catch (error) {
    yield put(doWeatherError({ type: "Query Error", message: error.message }));
  }
}

const weatherSaga = [takeLatest(actionType.WEATHER_ON_FETCH, handleWeatherQuery)];

export default weatherSaga;
