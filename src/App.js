import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { doWeatherFetch } from "./redux/actions/weatherAction";
import { getWeatherIsFetch, getWeatherProfile } from "./redux/selectors/weatherSelector";

function App({ onFetchWeather, weatherIsFetch, weatherProfile }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${weatherIsFetch ? "spin" : ""}`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div style={{ margin: "20px", alignContent: "center" }}>
          <button className="button-11" onClick={onFetchWeather}>
            Fetch Weather
          </button>
          <p>{weatherProfile}</p>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  weatherIsFetch: getWeatherIsFetch(state),
  weatherProfile: getWeatherProfile(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchWeather: () => dispatch(doWeatherFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
