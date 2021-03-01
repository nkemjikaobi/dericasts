import React, { useReducer } from 'react'
import axios from 'axios'
import weatherContext from './weatherContext'
import weatherReducer from './weatherReducer'
import{
    SET_LOADING,
    SEARCH_CITY,
    SET_ERROR
} from '../types'

const WeatherState = props => {
    const initialState = {
        city: {},
        loading: false,
        error: {}
    }

    const [ state, dispatch ] = useReducer(weatherReducer, initialState);

  //Search city
  const searchCity = async city => {
      setLoading();
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23b30cea812a9c7b5736311817501978`);
        dispatch({
            type: SEARCH_CITY,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error

        })
    }
  }


    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <weatherContext.Provider
        value={{
            city: state.city,
            loading: state.loading,
            error: state.error,
            searchCity
        }}>
            {props.children}
    </weatherContext.Provider>
}

export default WeatherState;