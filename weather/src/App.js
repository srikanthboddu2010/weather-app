// import './App.css';
import React, { useState } from 'react';
import WeatherApp from './components/weatherApp/WeatherApp';

function App() {
  // const api = {
  //   key: "2a883448d266e6c92ca7f907c0fcdc94",
  //   base: "https://api.openweathermap.org/data/2.5/weather",
  // };

  // const [search, setSearch] = useState("");
  // const [weather, setWeather] = useState({});

  // function locsearch() {
  //   fetch(`${api.base}?q=${search}&appid=${api.key}`)
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data));
  // }

  return (
    <div className="App">
      <WeatherApp/>
      {/* <section>
        <input type="text" onChange={(e) => setSearch(e.target.value)} /> <br />
        <button onClick={locsearch}>Search</button>
      </section>
      <div>
        {weather.main !== undefined ? (
          <div>
            <h1>{weather.name}</h1>
            <p>{weather.main.temp}</p>
            <p>{weather.description}</p>
          </div>
        ) : (
          <p>Data not found</p>
        )}
      </div> */}
    </div>
  );
}

export default App;
