import React from 'react';
import './search.css';
import { useState } from 'react';


function Search() {
    const [icon, setIcon] = useState('01d');
    const [cityname, setcityname] = useState('');
    const [humidity, sethumidity] = useState('0');
    const [pressure, setpressure] = useState('0');
    const [windspeed, setwindspeed] = useState('0');
    const [temperature, settemperature] = useState('0');

    const handleSearch = async () => {
        const element = document.getElementsByClassName('cityInput');
        const result = element[0].value;
        //console.log(result);

        let key = 'fee1634f8347637a0b5304da91ba8c38';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=${key}&units=Metric`;
        let response = await fetch(url);
        let data = await response.json();
        setcityname(data.name);
        setIcon(data.weather[0].icon);
        sethumidity(data.main.humidity);
        setpressure(data.main.pressure);
        setwindspeed(data.wind.speed);
        settemperature(Math.round(data.main.temp));
    }

    return (
        <div className="container">
            <div className="search">
                <div className="searchBox">
                    <input type="text"
                        placeholder='city'
                        className='cityInput' />
                </div>
                <div >
                    <button
                        className="searchButton"
                        onClick={handleSearch}>
                        search
                    </button>
                </div>
            </div>
            <div className='weatherimg'>
                <img
                    className="weathericon"
                    src={`icons/${icon}.png`}
                    alt="weathericon" />
            </div>
            <div className="temperature">
                <p id="temp">{temperature}°C</p>
            </div>
            <div className="location">
                <p id='location'>{cityname}</p>
            </div>
            <div className="weather-details">
                <div className="parameter">
                    <label>humidity</label>
                    <p id='humidity'>{humidity} %</p>
                </div>
                <div className="parameter">
                    <label>pressure</label>
                    <p id='pressure'>{pressure} Pa</p>
                </div>
                <div className="parameter">
                    <label>windspeed</label>
                    <p id='windspeed'>{windspeed} km/h</p>
                </div>
            </div>
        </div>
    )
}
export default Search;