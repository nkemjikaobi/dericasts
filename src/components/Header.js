import React from 'react'

const Header = ({ title }) => {
    return (
        <div id='header'>
            <div className="container flex">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title : 'Weather App'
}

export default Header
