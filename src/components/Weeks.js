import React from 'react'
import WeekItem from './Weekitem'

const Weeks = () => {
    return (
        <div class='weeks'>
            <h3>This Week</h3>
            <div class='container grid grid-3'>
                <div class='card flex'>
                    <h5>Monday</h5>
                    <p>25&#176;</p>
                    <p>18&#176;</p>
                    <img src='' alt='icon'></img>
                </div>
            </div>
        </div>
    )
}

export default Weeks
