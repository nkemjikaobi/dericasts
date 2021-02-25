import React, { useState } from 'react'
import WeekItem from './Weekitem'
import rain from '../images/rain-icon.png';
import cloudy from '../images/cloudy-icon.png';
import sunny from '../images/sunny-icon.png';
import snowy from '../images/snowy-icon.jpg';

const Weeks = () => {
    const [ weeks ] = useState([
        {
            id: 1,
            day: 'Monday',
            high: 25,
            low: 18,
            icon: rain
        },
        {
            id: 2,
            day: 'Tuesday',
            high: 28,
            low: 20,
            icon: snowy
        },
        {
            id: 3,
            day: 'Wednesday',
            high: 30,
            low: 12,
            icon: cloudy
        },
        {
            id: 4,
            day: 'Thursday',
            high: 21,
            low: 13,
            icon: sunny
        },
        {
            id: 5,
            day: 'Friday',
            high: 34,
            low: 9,
            icon: rain
        },
        {
            id: 6,
            day: 'Saturday',
            high: 44,
            low: 29,
            icon: snowy
        }// eslint-disable-next-line 
    ])
    return (
        <div className='weeks container'>
            <h3>This Week</h3>
            <div className='grid'>
                { weeks.map((week) => <WeekItem key={week.id} week={week} /> )}
            </div>
        </div>
    )
}

export default Weeks
