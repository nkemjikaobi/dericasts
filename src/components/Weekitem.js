import React from 'react'
import PropTypes from 'prop-types'


const Weekitem = ({ week: { day, high, low, icon} }) => {
    return (
        <div class='week'>
            <div class='container'>
                <div class='card flex'>
                    <h5 class='week-item'>{day}</h5>
                    <p class='week-item'>{high}&#176;</p>
                    <p class='week-item'>{low}&#176;</p>
                    <img src={icon} alt='icon' width='200px' height='200px'></img>
                </div>
            </div>
        </div>
    )
}

Weekitem.propTypes = {
    week: PropTypes.object.isRequired,
}

export default Weekitem
