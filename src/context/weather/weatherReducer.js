import{
    SET_LOADING,
    SEARCH_CITY,
    SET_ERROR
} from '../types'

const weatherReducer = (state, action) => {
    switch(action.type){
        case SEARCH_CITY:
            return {
                ...state,
                city: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default weatherReducer
