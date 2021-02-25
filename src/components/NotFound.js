import React from 'react'
import sad from '../images/sad.png'

const NotFound = () => {
    return (
        <div className='container notfound grid grid-1'>
            <h1>Not Found</h1>
            <p class='lead'>The page you are looking for does not exist...</p>
            <a href='/' class='btn btn-primary text-center'>Home</a>
            <img src={sad} alt='sad emoji'></img>
        </div>
    )
}

export default NotFound