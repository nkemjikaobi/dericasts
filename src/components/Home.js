import React, { useContext } from 'react'
import Header from './Header';
import Alert from './Alert';
import Search from './Search'
import City from './City'
import weatherContext from '../context/weather/weatherContext';

const Home = () => {

    const WeatherContext = useContext(weatherContext);
    const { city } = WeatherContext;

    //Check if city object is empty
    if (!city.main){
        document.body.style.backgroundImage = (`url(/images/Drizzle.jpg)`)
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
        }
        else{
            document.body.style.backgroundImage = (`url(/images/${city.weather[0].main}.jpg)`)
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
