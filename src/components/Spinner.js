import React ,{ Fragment } from 'react'
import darkspinner from './darkspinner-unscreen.gif';

const Spinner = () => <Fragment>
            <img src={darkspinner} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block'}}/>
        </Fragment>


export default Spinner