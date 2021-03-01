import React, { useContext, useState } from 'react'
import weatherContext from '../context/weather/weatherContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {

    const WeatherContext = useContext(weatherContext);
    const alertContext = useContext(AlertContext);

    const { searchCity} = WeatherContext;
    const { setAlert } = alertContext;
    
    const [city, setCity] = useState('');

    const onChange = e => setCity(e.target.value );

    const onSubmit = e => {
        e.preventDefault();
        if(city === ''){
            setAlert('Please enter a city', 'light')
        }
        else{
            searchCity(city)
            setCity('')
        }
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
