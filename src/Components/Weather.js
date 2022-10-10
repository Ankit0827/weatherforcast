import React from "react";
import image1 from "../image1.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather=()=> {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState();

  const fetchData = (cityname) => {
    axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=54beb2af1e0ed7567a25e98ea76998ed"
      )
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Searchinput = (e) => {
    setInputCity(e.target.value);
  }

  const Search = () => {
    fetchData(inputCity);
  }

  return (
    <>
      <div className="parent-div shadow-lg rounded">
        <h1 className="heading">Wether App</h1>
        
        <input
          type="text"
          className="input_field  shadow-lg rounded m-4"
          value={inputCity}
          onChange={Searchinput}
        />

        <br></br>
        <button className="btn" onClick={Search}>
          Search
        </button>

        <div className="show_weather_div card shadow-lg rounded">
          <img className="weather_image" src={image1} alt=""></img>
          <h2>{data?.name}</h2>
          <h3 className="temp">{(data?.main.temp - 273.15).toFixed(2)}°C</h3>
          <p>
            {(data?.main.temp_min - 273.15).toFixed(2)}°C ||
            {(data?.main.temp_max - 273.15).toFixed(2)}°C
          </p>
          <p>max || min</p>
        </div>
      </div>
    </>
  );
}
export default Weather;
