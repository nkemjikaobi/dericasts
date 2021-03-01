import React from 'react'

const NotFound = () => {
    return (
        <div className='container notfound grid grid-1'>
            <h1>Not Found</h1>
            <p className='lead'>The page you are looking for does not exist...</p>
            <a href='/' className='btn btn-primary text-center'>Home</a>
            <img src='/images/sad.png' alt='sad emoji'></img>
        </div>
    )
}

export default NotFound