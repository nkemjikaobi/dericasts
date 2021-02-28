import React, { useContext, useState } from 'react'
import weatherContext from '../context/weather/weatherContext'

const Search = () => {

    const WeatherContext = useContext(weatherContext);

    const { searchCity } = WeatherContext;
    
    const [city, setCity] = useState('');

    const onChange = e => setCity(e.target.value );

    const onSubmit = e => {
        e.preventDefault();
        searchCity(city)
        setCity('');
    }
    return (
        <div className="container">
            <div className="search" onSubmit={onSubmit}>
                <input type="text" className="searchTerm" name='city' value={city} onChange={onChange} placeholder="Enter a city..." />
                <button type="submit" className="searchButton" onClick={onSubmit}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Search;
