import React , { useContext } from 'react';
import Spinner from './Spinner';
import weatherContext from '../context/weather/weatherContext';


const City = () => {

    const WeatherContext = useContext(weatherContext);
    const { city , loading } = WeatherContext;
    if(loading){
        return <Spinner />
    }
    else{
    return (
    
        (typeof city.main != 'undefined') ? (
            <div className='city'>
                <div className='container'>
                    <h3>{city.name}, {city.sys.country}</h3>
                    <div className='temp flex'>
                        <p>{Math.round(city.main.temp)} &#176; c</p>
                    </div>
                    <div className='text-center'style={clouds}>{city.weather[0].main}</div>
                </div>
            </div>
         ) : ('')
       
    )
        }
}


const clouds = {
    marginTop: '30px',
    fontSize: '3rem'
}

export default City
