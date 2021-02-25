import React from 'react'
import PropTypes from 'prop-types'


const Weekitem = ({ week: { day, high, low, icon} }) => {
    return (
        <div className='week'>
            <div className='container'>
                <a href='#!'>
                    <div className='card grid grid-3'>
                        <span className='week-item'>{day}</span>
                        <span className='week-item'>{high}&#176; <span style={color}>{low}&#176;</span></span>
                        <img src={icon} alt='icon' width='1px' height='80px'></img>
                    </div>
                </a>
            </div>
        </div>
    )
}

Weekitem.propTypes = {
    week: PropTypes.object.isRequired,
}

const color = {
    color: 'rgb(201, 200, 200)'
}

export default Weekitem
