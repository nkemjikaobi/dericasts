import React, { useContext, useEffect } from 'react'
import Header from './Header';
import Alert from './Alert';
import Search from './Search'
import City from './City'
import weatherContext from '../context/weather/weatherContext';
import AlertContext from '../context/alert/alertContext'

const Home = () => {

    const WeatherContext = useContext(weatherContext);
    const alertContext = useContext(AlertContext);
    const { city, error } = WeatherContext;
    const { setAlert } = alertContext;

    //Check if error is set
    useEffect(() => {
        if (Object.keys(error).length !== 0){
            setAlert(error.response.data.message, 'light')
            
        }
        //eslint-disable-next-line
    }, [error])

    //Check if city object is empty
    if (!city.main){
        document.body.style.backgroundImage = (`url(/images/Drizzle.jpg)`)
        document.body.style.backgroundPosition = 'center right'
    }
    else{
        //Check if the weather is of description 'ATMOSPHERE'
        if(city.weather[0].main === 'Haze' || city.weather[0].main === 'Mist'
        || city.weather[0].main === 'Fog' || city.weather[0].main === 'Smoke'
        || city.weather[0].main === 'Ash' || city.weather[0].main === 'Dust'
        || city.weather[0].main === 'Sand' || city.weather[0].main === 'Squall'
        || city.weather[0].main === 'Tornado'
            )
        {
            document.body.style.backgroundImage = (`url(/images/Haze.jpg)`)
            document.body.style.backgroundPosition = 'center right'
        }
        else{
            document.body.style.backgroundImage = (`url(/images/${city.weather[0].main}.jpg)`)
            document.body.style.backgroundPosition = 'center right'
        }
    }
    return (
        <div>
            <Header/>
            <Alert />
            <Search/>
            <City />
        </div>
    )
}

export default Home
