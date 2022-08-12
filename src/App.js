import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { doWeatherFetch } from "./redux/actions/weatherAction";
import { getWeatherIsFetch, getWeatherProfile } from "./redux/selectors/weatherSelector";

function App() {
  const dispatch = useDispatch();
  const weatherIsFetch = useSelector((state) => getWeatherIsFetch(state));
  const weatherProfile = useSelector((state) => getWeatherProfile(state));

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
          <button className="button-11" onClick={() => dispatch(doWeatherFetch())}>
            Fetch Weather
          </button>
          <p>{weatherProfile}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
