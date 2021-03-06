import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <div id='header'>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title : 'Dericasts'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
